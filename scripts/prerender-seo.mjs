/**
 * Post-build SEO prerender. After `vite build` writes docs/index.html, this
 * copies that shell into a static index.html for every route with the route's
 * title, description, canonical, and OG/Twitter tags baked in, so non-JS
 * crawlers (LinkedIn, X, Facebook) and search engines get correct per-page
 * metadata on a direct hit. The SPA then keeps everything in sync on client
 * navigation via src/lib/seo.ts, which reads the same seo.json.
 *
 * Also emits docs/sitemap.xml. No dependencies; run as `node scripts/prerender-seo.mjs`.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";

const SITE = "https://axiomspecialty.com";
const DOCS = "docs";
const TEMPLATE = join(DOCS, "index.html");

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

function render(template, { title, description, url, type }) {
  let html = template;
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

function writeRoute(template, path, meta) {
  const html = render(template, { ...meta, url: urlFor(path) });
  const outPath = path === "/" ? TEMPLATE : join(DOCS, path, "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  return path;
}

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

const template = readFileSync(TEMPLATE, "utf8");
const seo = JSON.parse(readFileSync("src/content/seo.json", "utf8"));

const written = [];
for (const [path, meta] of Object.entries(seo.routes)) {
  written.push(writeRoute(template, path, meta));
}
for (const post of readPosts()) {
  const path = `/insights/${post.slug}`;
  written.push(
    writeRoute(template, path, {
      title: `${post.title} | Axiom Specialty`,
      description: post.excerpt || seo.default.description,
      type: "article",
    }),
  );
}

// Sitemap: every canonical URL, home first, de-duplicated.
const locs = Array.from(new Set([SITE, ...written.map(urlFor)]));
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  locs.map((loc) => `  <url><loc>${esc(loc)}</loc></url>`).join("\n") +
  `\n</urlset>\n`;
writeFileSync(join(DOCS, "sitemap.xml"), sitemap);

console.log(`[prerender-seo] wrote ${written.length} route pages + sitemap (${locs.length} urls)`);
