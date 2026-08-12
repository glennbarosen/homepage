# AGENTS.md - Glenn's Portfolio

This file provides context for AI coding assistants working on this project.

## Project Overview

A personal portfolio website for Glenn Arnold Barosen, built with SvelteKit. The site showcases work
experience, education, and provides contact information. It emphasizes clean design and ease of
CV/experience updates through skills in `.claude/skills/`.

**Live URL**: https://glennbarosen.com

## Tech Stack

- **Framework**: SvelteKit 2.x with Svelte 5.x (runes: `$props()`, `$derived()`)
- **Language**: TypeScript 5.x (`strict: true`)
- **Styling**: CSS with CSS custom properties (no framework)
- **Build Tool**: Vite 6.x
- **Adapter**: `@sveltejs/adapter-node`
- **Package Manager**: pnpm with `pnpm-lock.yaml`

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte           # Root layout with header/footer, view transitions
│   ├── +layout.ts               # prerender = true for the whole site
│   ├── +error.svelte            # Error/404 page
│   ├── +page.svelte             # Home page (nav)
│   ├── about/+page.svelte
│   ├── contact/+page.svelte
│   ├── experience/
│   │   ├── +page.svelte         # Experience/CV page
│   │   ├── Experience.svelte    # Renders one work entry
│   │   └── Education.svelte     # Renders one education entry
│   ├── sitemap.xml/+server.ts   # Generated sitemap
│   └── styles.css               # Global styles, design tokens
├── lib/
│   ├── data/cv.ts               # CV data (work, education) — single source of truth
│   └── site.ts                  # siteUrl + route list (used by canonical tags + sitemap)
├── app.d.ts
└── app.html

static/
├── favicon.png
├── robots.txt
└── cv/{cv-nb.pdf, cv-en.pdf}    # Hand-maintained, NOT generated from cv.ts
```

Every route is prerendered — the site is fully static content served by the Node adapter.

## Design Guidelines

The visual design is settled. Fix bugs and accessibility within it; do not redesign it.

- **Style**: Clean, minimalist with subtle animations
- **Colors** (tokens in `src/routes/styles.css`):
  - `--color-bg`: `#ece9e5` light / `#313030` dark
  - `--color-text`: `#000` light / `#fff` dark
  - `--color-muted`: `#676767` light / `#9c9c9c` dark — secondary text
- **Type**: `--font-large` (4rem → 2.5rem under 600px), `--font-medium` (1.4rem → 1.2rem).
  Global `font-weight: 400`; the font is Inter, loaded from Google Fonts in `+layout.svelte`.
- **Dark mode**: `prefers-color-scheme` only, no manual toggle.
- **View Transitions**: via the View Transitions API in `+layout.svelte`'s `onNavigate`.
- **Language**: Norwegian (Bokmål). All UI strings are hardcoded Norwegian — there is no i18n layer.

**Two rules worth keeping:**

- Use `var(--color-muted)` for secondary text, not `opacity`. The muted values are the lightest that
  still clear WCAG AA (4.5:1) against the background; opacity-based dimming silently fell below it.
- Use the `.visually-hidden` utility (in `styles.css`) for content that screen readers need but the
  design has no room for — e.g. the page-level `<h1>` on the home, experience and contact pages.

## Key Commands

```bash
pnpm dev          # Start dev server (http://localhost:5173)
pnpm build        # Build for production
pnpm preview      # Preview production build locally
pnpm check        # Run TypeScript and Svelte checks
pnpm check:watch  # Watch mode for type checking
pnpm lint         # Run Prettier check and ESLint
pnpm format       # Format code with Prettier
```

There is no test suite and no CI. `pnpm check` and `pnpm lint` are the only quality gates, and they
run manually.

## Coding Conventions

1. **TypeScript**: Use TypeScript for all `.ts` files and component script blocks
2. **Components**: Svelte 5 runes; props via `$props()` typed from the shared interfaces
3. **Props**: Define prop types explicitly using TypeScript interfaces/types
4. **Styling**: Scoped styles within `<style>` blocks; colors and type sizes come from CSS variables
5. **CSS Variables**: Defined at `:root` in `src/routes/styles.css`
6. **Naming**: kebab-case for files/directories, PascalCase for components
7. **Semantics**: `<main>` is provided once by `+layout.svelte`. Pages must NOT open their own
   `<main>` — that nests landmarks. Wrap page content in a plain `<div class="page">`.
8. **Headings**: one `<h1>` per page, section labels `<h2>`, CV entry titles `<h3>`.

## CV Data Structure

All CV data is managed in `src/lib/data/cv.ts` using TypeScript interfaces.

### Experience Interface

```typescript
export interface Experience {
	title: string;
	company: string;
	period: string; // e.g., "jun. 2025 - d.d."
	type?: string; // "Deltid" | "Heltid" | "Prosjektbasert" — renders as a badge
	description?: string; // Optional: job description/highlights
}
```

### Education Interface

```typescript
export interface Education {
	institution: string; // University/school name
	degree: string; // Degree title
	period: string; // e.g., "aug. 2018 - jun. 2021"
	details?: string; // Optional: specialization, etc.
}
```

Both optional fields are supported and styled but currently unset on every entry (`type` is never
provided; `description` is `''` throughout). That is intentional headroom, not dead code — leave the
fields in place.

### Period Format (Norwegian)

Use Norwegian month abbreviations and consistent formatting:

```
jan., feb., mar., apr., mai, jun., jul., aug., sep., okt., nov., des.
```

Examples:

- Ongoing: `"jun. 2025 - d.d."` (d.d. = til dags dato)
- Completed: `"aug. 2018 - jun. 2021"`
- Single month: `"des. 2023"`

`period` is an opaque display string — nothing parses or sorts it. Array order is the only ordering,
so entries must be inserted in the right position by hand.

## Common Tasks

### Add a work or education entry

Use the **`update-cv`** skill (`.claude/skills/update-cv/`). It covers field extraction, Norwegian
date formatting, reverse-chronological placement, and the commit convention.

Manually, it is a one-file edit: add an object to the `experience` or `education` array in
`src/lib/data/cv.ts`. Nothing else needs touching — the page imports the arrays directly.

### Add a new CV category (projects, certifications, …)

Use the **`add-cv-section`** skill (`.claude/skills/add-cv-section/`). This one is a four-file change
with a non-obvious failure mode, described in the skill.

### Add a new field to an existing entry type

Four places, and missing any of them fails silently:

1. the interface in `src/lib/data/cv.ts`
2. the `{#each}` destructuring in `src/routes/experience/+page.svelte` **and** the prop passed to the
   component — a field omitted here never reaches the component, with no type error
3. the `$props()` destructuring in `Experience.svelte` / `Education.svelte`
4. the markup and scoped `<style>` in that component

### Update CV PDFs

`static/cv/cv-nb.pdf` and `cv-en.pdf` are hand-maintained binaries. They are **not** generated from
`cv.ts` and will drift from it silently. Replace them manually when the CV data changes.

### Adding New Pages

1. Create `src/routes/<name>/+page.svelte`. No `+page.ts` is needed — `+layout.ts` already sets
   `prerender = true` for all routes.
2. Wrap content in `<div class="page">`, not `<main>`.
3. Add a `<title>`, `meta name="description"`, `og:title` and `og:description` in `<svelte:head>`.
   Canonical and `og:url` are handled globally by `+layout.svelte`.
4. Add the route to `routes` in `src/lib/site.ts` so it appears in the sitemap.
5. Link it from the nav in `src/routes/+page.svelte`.

## Deployment

- **Platform**: Dokku (self-hosted PaaS) on Hetzner Cloud, building from the `Dockerfile`
- **Trigger**: manual — `git push dokku main`. **Pushing to `origin` does not deploy.**
- **Build**: Docker image runs `pnpm build`, container starts with `pnpm start` (`node build`) on
  port 3000
- **HTTPS**: Let's Encrypt, auto-renewing

Deploy both remotes together:

```bash
git push origin main && git push dokku main
```

## Type-Checking & Linting

Before committing:

```bash
pnpm check    # Verify TypeScript types
pnpm lint     # Check code style
pnpm format   # Auto-fix formatting
```

## Related Resources

- **SvelteKit Docs**: https://svelte.dev/docs/kit
- **Svelte Docs**: https://svelte.dev/docs
