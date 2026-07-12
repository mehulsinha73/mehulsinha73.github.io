# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Mehul Sinha, built with Next.js (App Router) and statically exported to GitHub Pages (`mehulsinha73.github.io`). Pages: home (`/`), `/experience`, `/projects`.

## Commands

Package manager is **pnpm**.

```bash
pnpm dev      # start dev server (localhost:3000)
pnpm build    # static export build -> ./out (requires SITE_URL env var)
pnpm serve    # serve the built ./out directory via `serve`
pnpm lint     # eslint
```

There is no test suite configured in this repo.

`SITE_URL` must be set (see `.env.local`) — `getSiteUrl()` in `src/lib/utils.ts` throws if it's missing. It's used for metadata, OG images, sitemap, robots, and llms.txt. In the GitHub Actions deploy workflow (`.github/workflows/*.yml`), `SITE_URL` is supplied from `actions/configure-pages` output.

## Architecture

- **Static export**: `next.config.ts` sets `output: "export"` and `images.unoptimized: true`. All dynamic routes must support `generateStaticParams`; there is no server runtime in production (deployed as static files to GitHub Pages via the Actions workflow, not SSR).
- **Content is data-driven, not CMS-backed**: page content lives in colocated `data.ts` files (`src/app/experience/data.ts`, `src/app/projects/data.ts`) typed against interfaces exported from the corresponding UI component (`WorkSlotData`/`EducationSlotData` in `src/components/ui/work-slot.tsx`/`education-slot.tsx`, `ProjectCardData` in `src/components/ui/project-card.tsx`). To add/edit experience or projects, edit these arrays — no separate content directory or markdown pipeline is used (the `content/` dir at repo root is currently empty/unused).
- **Dynamic OG images**: `src/app/og/[type]/[slug]/route.tsx` generates images via `next/og` `ImageResponse`, statically pre-rendered for known `{type, slug}` pairs declared in its `generateStaticParams`. Referenced from `layout.tsx` metadata (`${getSiteUrl()}/og/site/<title>`). New static pages that need OG images must add a matching param entry here.
- **`llms.txt`**: `src/app/llms.txt/route.ts` programmatically assembles a plaintext summary of the site (bio, experience, education, projects) by importing the same `data.ts` sources used for rendering — keep it in sync when adding fields to those data files if they should be surfaced to LLM crawlers.
- **Components** are organized by role under `src/components/`:
  - `ui/` — shadcn-style primitives and content "slot" components (configured via `components.json`, style `new-york`, base color `neutral`, icon library `lucide`). Path alias `@/components/ui`.
  - `animations/` — framer-motion wrappers (stagger, up-into-view, animated background, morphing dialog, text effect), re-exported from a barrel `index.ts`.
  - `layout/` — header, footer, socials, snake (site chrome).
  - `theme/` — `next-themes` provider/toggle (class-based dark mode, `defaultTheme="system"`).
  - `icons/` — hand-authored SVG icon components, re-exported from a barrel `index.ts`.
- **Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`). Follow existing barrel-export (`index.ts`) conventions when adding new animation or icon components.
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`), global styles in `src/styles/globals.css`, custom fonts declared in `src/styles/fonts.ts` (Google fonts: IBM Plex Mono for body copy, Syncopate/Kode Mono available). Use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional class composition.
- **SEO/metadata routes**: `sitemap.ts` and `robots.ts` under `src/app/` are `force-static` and derived from `getSiteUrl()`; update `sitemap.ts` when adding new top-level static pages.
