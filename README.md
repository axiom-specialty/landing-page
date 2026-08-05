# Axiom Specialty landing site

Marketing site for Axiom Specialty, a managing general agent underwriting the
risks of frontier technology (AI liability today; more lines in development).

Built with **Vite + React + TypeScript + Tailwind + shadcn/ui**. It builds to
`docs/` and is served by **GitHub Pages** on the custom domain in `CNAME`.

## Local development

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # outputs static site to docs/
```

## Project structure

```
src/
  content/        # all copy/data (products, ai-liability, agentic, faq, legal, insights)
  components/
    common/       # shared building blocks (Section, SectionHeading, cards, HeroGrid, ...)
    layout/       # Header (mega-menu), Footer, MobileNav
    home/         # homepage-only sections
    ui/           # shadcn primitives
  features/       # waitlist (removed), contact PortalForm
  layouts/        # SiteLayout (header + footer + scroll manager)
  pages/          # routed pages (products/, insights/, legal/)
  routes/         # route table
  styles/         # tokens.css, utilities.css, animations.css
```

Content lives in `src/content/` so copy changes never require touching
components.

## Writing blog posts (Insights)

Posts are Markdown files in **`src/content/insights/*.md`**. Each file is one
post; the filename is the URL slug. Frontmatter shape:

```markdown
---
title: A headline
date: 2026-08-01
excerpt: One or two sentences shown on the card.
author: Axiom Specialty
tags: [AI Liability, Governance]
---

Markdown body…
```

There are three ways to publish, from easiest to most technical:

### Option A: Pages CMS (recommended, no code)

A free, hosted, git-based CMS gives non-developers a proper editor. It commits
the Markdown back to this repo, so there is no separate database and nothing to
host. Config lives in **`.pages.yml`**.

One-time setup (needs a repo admin's GitHub):

1. Go to **[app.pagescms.org](https://app.pagescms.org)** and sign in with GitHub.
2. Authorize the **`axiom-specialty/landing-page`** repository.
3. Open the **"Insights (Blog)"** collection.

Then to write a post: click **New entry**, fill in Title / Date / Excerpt /
Tags and write the body in the visual editor, and **Save**. Saving commits a
`.md` file to `src/content/insights/`.

Publishing is automatic: the **`.github/workflows/build-docs.yml`** GitHub
Action rebuilds `docs/` on every push to `main` and commits it back, so the live
site updates within a few minutes of saving. (Requires the branch to be merged
to `main` and GitHub Pages set to serve `main` `/docs`.)

### Option B: edit on GitHub directly

Open any file under `src/content/insights/` on github.com, click the pencil
(Edit) icon, change the Markdown, and commit. Same auto-publish as above.

### Option C: locally

Add or edit a `.md` file under `src/content/insights/`, then `npm run build` and
commit `docs/` (or let the GitHub Action rebuild on push).

## Cover images

Coverage cards read their art from **`public/covers/<product-slug>.jpg`** (for
example `public/covers/ai-liability.jpg`). The slug is the product's `slug` in
`src/content/products.ts`. Until an image exists, a branded placeholder shows, so
missing art never looks broken. Drop the file in with the matching slug and it
appears automatically (no code change).

### Generating a new cover (keep the set consistent)

All covers share **one** house style: a flat, retro-modern editorial poster
illustration in the brand palette. To add art for a new product, generate it in
ChatGPT's image model (gpt-image / 4o) using the **STYLE BLOCK** below verbatim,
followed by a one-paragraph **SCENE** for the new product. Reusing the exact same
style block is what keeps every card looking like one series.

**STYLE BLOCK (paste unchanged, every time):**

> Create a flat, retro-modern editorial illustration in the tradition of 1960s
> corporate and travel posters, reinterpreted by a contemporary vector artist.
> Clean flat color fields, crisp geometric shapes, bold silhouettes, minimal
> interior detail, confident diagonal composition, generous negative space,
> subtle paper-grain texture, soft long directional shadows, matte printed look
> (not glossy, not photoreal, not a 3D render). Palette limited to deep forest
> green (#1c4439), pine and sage greens (#276151, #417c6c), warm ivory cream
> (#f4f3e6), and one muted terracotta accent used sparingly for emphasis. Wide
> 16:10 landscape, composed to work as one card in a cohesive series. No text,
> no lettering, no logos, no watermark. Scene: <one or two sentences describing
> an abstract, conceptual scene for the new coverage; end with a one-line mood>.

**Writing the SCENE:** describe an abstract idea, not a literal stock photo (a
single strong subject, a clear composition, one action). Let green dominate and
use the terracotta accent for a single point of emphasis. See the existing eight
prompts as reference: they live in the git history and the cards render them
today (hand over a light panel = AI Liability, breakaway node on a grid =
Agentic E&O, pylons at sunset = Energy Infrastructure, and so on).

**Then add it to the repo:**

1. Generate the image, download it (PNG is fine).
2. Convert + optimize to JPG named by slug (from the repo root):
   ```sh
   sips -s format jpeg -s formatOptions 82 -Z 1400 ~/Downloads/<file>.png \
     --out public/covers/<product-slug>.jpg
   ```
3. Commit `public/covers/<product-slug>.jpg`. On `main`, the `build-docs` Action
   rebuilds and the card goes live.

## Deployment

`npm run build` writes the static site to `docs/`, including `CNAME` and a
`404.html` SPA fallback. GitHub Pages serves `docs/` from `main`, and the
`build-docs` Action rebuilds/commits `docs/` on push to `main`.

The site is served at the root of the custom domain **`axiomspecialty.com`**
(Vite `base: "/"`, `public/CNAME` = `axiomspecialty.com`, 404
`pathSegmentsToKeep = 0`). DNS for the apex domain points to GitHub Pages
(A records `185.199.108-111.153`) with `www` as a CNAME to
`axiom-specialty.github.io`.
