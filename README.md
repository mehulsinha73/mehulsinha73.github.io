# mehulsinha73.github.io

Personal portfolio site for Mehul Sinha, built with [Next.js](https://nextjs.org) (App Router) and statically exported to GitHub Pages.

**Live site:** [mehulsinha73.github.io](https://mehulsinha73.github.io)

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, static export)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn](https://ui.shadcn.com)-style UI primitives (`new-york` style, Lucide icons)
- [Framer Motion](https://www.framer.com/motion/) for animations
- TypeScript

## Getting Started

Package manager is [pnpm](https://pnpm.io).

Set `SITE_URL` in `.env.local` — it's required for metadata, OG images, the sitemap, robots.txt, and llms.txt:

```bash
SITE_URL=http://localhost:3000
```

Then run the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Scripts

```bash
pnpm dev      # start dev server
pnpm build    # static export build -> ./out (requires SITE_URL)
pnpm serve    # serve the built ./out directory
pnpm lint     # eslint
```

## Project Structure

- `src/app` — routes (`/`, `/experience`, `/projects`), plus SEO routes (`sitemap.ts`, `robots.ts`, `llms.txt`) and dynamic OG image generation (`og/[type]/[slug]`)
- `src/app/experience/data.ts`, `src/app/projects/data.ts` — page content, edited directly (no CMS)
- `src/components/ui` — shadcn-style primitives and content "slot" components
- `src/components/animations` — Framer Motion wrappers
- `src/components/layout` — header, footer, socials, site chrome
- `src/components/theme` — dark/light theme provider and toggle
- `src/components/icons` — hand-authored SVG icons
- `src/styles` — global styles and font declarations

## Deployment

The site is deployed to GitHub Pages via GitHub Actions (`.github/workflows`). Pushing to the default branch triggers a static export build and publish; `SITE_URL` is supplied automatically from `actions/configure-pages`.
