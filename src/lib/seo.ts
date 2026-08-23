/**
 * Per-route SEO. `seo.json` is the single source of truth, shared with the
 * build-time prerender script (scripts/prerender-seo.mjs) so crawlers get the
 * right tags on a direct hit and the SPA keeps them in sync on client
 * navigation. Dynamic routes (coming-soon, insight posts) fall back to the
 * content that drives the page.
 */
import seo from "@/content/seo.json";
import { bySlug } from "@/content/products";
import { getPost } from "@/content/insights/loader";

const SITE_URL = "https://axiomspecialty.com";

export interface SeoMeta {
  title: string;
  description: string;
}

const routes = seo.routes as Record<string, SeoMeta>;

/** Resolve the meta for a pathname, deriving dynamic routes from their content. */
export function resolveSeo(pathname: string): SeoMeta {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (routes[path]) return routes[path];

  if (path.startsWith("/coming-soon/")) {
    const p = bySlug(path.slice("/coming-soon/".length));
    if (p) return { title: `${p.name}, in development | Axiom Specialty`, description: p.summary ?? seo.default.description };
  }
  if (path.startsWith("/insights/")) {
    const post = getPost(path.slice("/insights/".length));
    if (post) return { title: `${post.title} | Axiom Specialty`, description: post.excerpt || seo.default.description };
  }
  return seo.default;
}

/**
 * Canonical absolute URL for a pathname, always with a trailing slash.
 *
 * GitHub Pages serves each route from <path>/index.html and 301s the non-slash
 * form to the trailing-slash one. A canonical tag naming the non-slash URL
 * therefore points at a redirect, which Google reports as "Page with redirect"
 * and leaves out of the index. Must stay in step with urlFor() in
 * scripts/prerender-seo.mjs.
 */
export function canonicalUrl(pathname: string): string {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "";
  return `${SITE_URL}${path}/`;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Apply title, description, canonical, and OG/Twitter tags to the document. */
export function applySeo(pathname: string) {
  const meta = resolveSeo(pathname);
  const url = canonicalUrl(pathname);

  document.title = meta.title;
  upsertMeta("name", "description", meta.description);
  upsertMeta("property", "og:title", meta.title);
  upsertMeta("property", "og:description", meta.description);
  upsertMeta("property", "og:url", url);
  upsertMeta("name", "twitter:title", meta.title);
  upsertMeta("name", "twitter:description", meta.description);

  let canon = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canon) {
    canon = document.createElement("link");
    canon.rel = "canonical";
    document.head.appendChild(canon);
  }
  canon.href = url;
}
