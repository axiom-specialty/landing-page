/**
 * Insights loader — reads every Markdown file in this folder at build time
 * (Vite import.meta.glob), parses its frontmatter, and exposes a typed list.
 *
 * To publish a new post: drop a `.md` file in this folder with frontmatter and
 * push. No CMS, no database, no build config to touch.
 *
 * Frontmatter shape:
 *   ---
 *   title: A headline
 *   date: 2026-07-15
 *   excerpt: One or two sentence summary for the index card.
 *   author: Axiom Specialty
 *   tags: [AI Liability, Governance]
 *   ---
 *   Markdown body…
 */

export interface Post {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  author: string;
  tags: string[];
  body: string;
  readingTime: string;
}

// Raw markdown for every post, keyed by file path.
const files = import.meta.glob("./*.md", { query: "?raw", import: "default", eager: true }) as Record<
  string,
  string
>;

/** Minimal frontmatter parser — supports `key: value` and `key: [a, b]` arrays. */
function parseFrontmatter(raw: string): { data: Record<string, string | string[]>; body: string } {
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw };

  const data: Record<string, string | string[]> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (!key) continue;
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      data[key] = value.replace(/^["']|["']$/g, "");
    }
  }
  return { data, body: match[2].trim() };
}

function estimateReadingTime(body: string): string {
  const words = body.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const { data, body } = parseFrontmatter(raw);
    return {
      slug,
      title: (data.title as string) ?? slug,
      date: (data.date as string) ?? "",
      excerpt: (data.excerpt as string) ?? "",
      author: (data.author as string) ?? "Axiom Specialty",
      tags: (data.tags as string[]) ?? [],
      body,
      readingTime: estimateReadingTime(body),
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPost = (slug: string): Post | undefined => posts.find((p) => p.slug === slug);
