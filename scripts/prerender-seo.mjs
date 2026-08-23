/**
 * Post-build static prerender.
 *
 * `vite build` emits a single-page shell whose <body> is an empty <div id="root">.
 * That is invisible to crawlers that do not execute JavaScript, and to the
 * retrieval layers behind AI answer engines, which read the fetched HTML rather
 * than a rendered page. With an empty body the only thing they can quote is the
 * <meta> description, so a single stale sentence becomes the company's entire
 * public description.
 *
 * This script fixes that by rendering every route in headless Chromium and
 * writing the resulting DOM to disk, so a direct hit on any URL returns the real
 * page text. The SPA still boots normally and takes over on load.
 *
 * It also:
 *   - bakes per-route title/description/canonical/OG tags (seo.json is the
 *     single source of truth, shared with src/lib/seo.ts),
 *   - writes reclaim pages at retired URLs that search indexes still hold, so
 *     the stale copy cached against them is replaced rather than left to age out,
 *   - emits sitemap.xml with lastmod.
 *
 * Chromium is optional. Without it the script degrades to the metadata-only
 * behaviour it had before, and says so.
 *
 * Run as `node scripts/prerender-seo.mjs` (wired into `npm run build`).
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import { createServer } from "node:http";

const SITE = "https://axiomspecialty.com";
const DOCS = "docs";
const TEMPLATE = join(DOCS, "index.html");
const BUILD_DATE = new Date().toISOString().slice(0, 10);

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** Replace an existing tag (matched by a distinguishing attribute) with a fresh one. */
function swap(html, regex, replacement) {
  return regex.test(html) ? html.replace(regex, () => replacement) : html;
}

function applyMeta(html, { title, description, url, type }) {
  html = swap(html, /<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`);
  html = swap(html, /<meta[^>]*\bname=["']description["'][^>]*>/i, `<meta name="description" content="${esc(description)}" />`);
  html = swap(html, /<meta[^>]*\bproperty=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${esc(title)}" />`);
  html = swap(html, /<meta[^>]*\bproperty=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${esc(description)}" />`);
  html = swap(html, /<meta[^>]*\bproperty=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${esc(url)}" />`);
  html = swap(html, /<meta[^>]*\bname=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${esc(title)}" />`);
  html = swap(html, /<meta[^>]*\bname=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${esc(description)}" />`);
  html = swap(html, /<link[^>]*\brel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${esc(url)}" />`);
  if (type) html = swap(html, /<meta[^>]*\bproperty=["']og:type["'][^>]*>/i, `<meta property="og:type" content="${esc(type)}" />`);
  return html;
}

const urlFor = (path) => (path === "/" ? SITE : SITE + path);

/** Minimal frontmatter read for insight posts (title + excerpt only). */
function readPosts() {
  const dir = "src/content/insights";
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = readFileSync(join(dir, f), "utf8");
      const m = /^---\s*\n([\s\S]*?)\n---/.exec(raw);
      const data = {};
      if (m) {
        for (const line of m[1].split("\n")) {
          const i = line.indexOf(":");
          if (i === -1) continue;
          data[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
        }
      }
      const slug = f.replace(/\.md$/, "");
      return { slug, title: data.title || slug, excerpt: data.excerpt || "" };
    });
}

/* ---------------------------------------------------------------- static server */

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".woff2": "font/woff2",
};

/** Serve docs/ with an SPA fallback so client routes resolve during prerender. */
function serveDocs() {
  const server = createServer((req, res) => {
    const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let file = join(DOCS, path);
    try {
      if (statSync(file).isDirectory()) file = join(file, "index.html");
    } catch {
      file = TEMPLATE; // SPA fallback
    }
    let body;
    try {
      body = readFileSync(file);
    } catch {
      body = readFileSync(TEMPLATE);
      file = TEMPLATE;
    }
    res.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
    res.end(body);
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

/* ---------------------------------------------------------------- rendering */

async function loadChromium() {
  try {
    const { chromium } = await import("playwright");
    // PRERENDER_CHROMIUM lets a sandbox or CI image point at a Chromium it
    // already has, instead of the exact build Playwright would download.
    const executablePath = process.env.PRERENDER_CHROMIUM || undefined;
    return await chromium.launch({ executablePath, args: ["--no-sandbox"] });
  } catch (err) {
    console.warn(`[prerender] Chromium unavailable (${err.message.split("\n")[0]}); writing metadata only.`);
    return null;
  }
}

/**
 * Render one route and return its full HTML. Scrolls the page first so anything
 * mounted on intersection is in the DOM, then waits for the network to settle.
 */
async function renderRoute(browser, origin, path) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  try {
    await page.goto(origin + path, { waitUntil: "networkidle", timeout: 45_000 });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 40));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(300);
    const html = await page.evaluate(() => "<!doctype html>\n" + document.documentElement.outerHTML);
    const textLength = await page.evaluate(() => (document.getElementById("root")?.innerText ?? "").trim().length);
    return { html, textLength };
  } finally {
    await page.close();
  }
}

/* ---------------------------------------------------------------- main */

const template = readFileSync(TEMPLATE, "utf8");
const seo = JSON.parse(readFileSync("src/content/seo.json", "utf8"));

/** Every route to prerender: path -> {title, description, type?}. */
const targets = new Map(Object.entries(seo.routes));
for (const post of readPosts()) {
  targets.set(`/insights/${post.slug}`, {
    title: `${post.title} | Axiom Specialty`,
    description: post.excerpt || seo.default.description,
    type: "article",
  });
}

/* In CI this is set, so a Chromium failure fails the build instead of silently
   shipping the empty-body shell this script exists to prevent. */
const STRICT = process.env.PRERENDER_REQUIRE_RENDER === "1";

const browser = await loadChromium();
if (STRICT && !browser) {
  console.error("[prerender] PRERENDER_REQUIRE_RENDER=1 but Chromium could not launch. Refusing to ship an unrendered build.");
  process.exit(1);
}
const server = browser ? await serveDocs() : null;
const origin = server ? `http://127.0.0.1:${server.address().port}` : null;

const written = [];
const thin = [];

for (const [path, meta] of targets) {
  const url = urlFor(path);
  let html = template;

  if (browser) {
    try {
      const rendered = await renderRoute(browser, origin, path);
      html = rendered.html;
      if (rendered.textLength < 400) thin.push(`${path} (${rendered.textLength} chars)`);
    } catch (err) {
      console.warn(`[prerender] ${path} failed to render (${err.message.split("\n")[0]}); metadata only.`);
      thin.push(`${path} (render failed)`);
    }
  }

  html = applyMeta(html, { ...meta, url });
  const outPath = path === "/" ? TEMPLATE : join(DOCS, path, "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  written.push(path);
}

/* Reclaim pages for retired URLs that search and AI indexes still hold. Each one
   serves the current description under the old address and points its canonical
   at the live page, so the cached copy is replaced instead of left to expire. */
const reclaimed = [];
for (const [oldPath, target] of Object.entries(seo.reclaim ?? {})) {
  const targetUrl = urlFor(target.to);
  const meta = seo.routes[target.to] ?? seo.default;
  const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(meta.title)}</title>
    <meta name="description" content="${esc(meta.description)}" />
    <link rel="canonical" href="${esc(targetUrl)}" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="${esc(meta.title)}" />
    <meta property="og:description" content="${esc(meta.description)}" />
    <meta property="og:url" content="${esc(targetUrl)}" />
    <meta http-equiv="refresh" content="3; url=${esc(targetUrl)}" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <style>
      body { margin: 0; background: #0d1a16; color: #e8efe9;
             font: 16px/1.6 Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
      main { max-width: 40rem; margin: 0 auto; padding: 6rem 1.5rem; }
      h1 { font-size: 1.5rem; margin: 0 0 1rem; }
      a { color: #8fd6b4; }
    </style>
  </head>
  <body>
    <main>
      <h1>${esc(meta.title)}</h1>
      <p>${esc(meta.description)}</p>
      <p>${esc(target.note ?? "This page has moved.")}</p>
      <p><a href="${esc(targetUrl)}">Continue to ${esc(targetUrl)}</a></p>
    </main>
  </body>
</html>
`;
  const outPath = join(DOCS, oldPath, "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, page);
  reclaimed.push(oldPath);
}

/* Sitemap: canonical URLs only. Reclaim pages are deliberately excluded — they
   exist to correct a cached record, not to be crawled as destinations. */
const locs = Array.from(new Set([SITE, ...written.map(urlFor)]));
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  locs.map((loc) => `  <url><loc>${esc(loc)}</loc><lastmod>${BUILD_DATE}</lastmod></url>`).join("\n") +
  `\n</urlset>\n`;
writeFileSync(join(DOCS, "sitemap.xml"), sitemap);

if (server) server.close();
if (browser) await browser.close();

console.log(
  `[prerender] ${written.length} routes${browser ? " rendered" : " (metadata only)"}, ` +
    `${reclaimed.length} reclaim pages, sitemap ${locs.length} urls`,
);
if (thin.length) {
  console.warn(`[prerender] thin or failed routes: ${thin.join(", ")}`);
  if (STRICT) {
    console.error("[prerender] PRERENDER_REQUIRE_RENDER=1 and some routes rendered no readable text.");
    process.exit(1);
  }
}
