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
example `public/covers/ai-liability.jpg`). Until an image exists, a branded
placeholder shows, so missing art never looks broken. Drop the generated images
in with the matching slug to light them up.

## Deployment

`npm run build` writes the static site to `docs/`, including `CNAME` and a
`404.html` SPA fallback. GitHub Pages serves `docs/` on the branch configured in
the repo's Pages settings. The `build-docs` Action rebuilds and commits `docs/`
automatically on push to `main`.
