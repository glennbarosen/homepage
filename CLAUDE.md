# CLAUDE.md

Project context, conventions, the CV data model and the deployment flow all live in @AGENTS.md —
read that first. It is the single source of truth; don't duplicate it here.

## Skills

- **`update-cv`** — add or amend a work/education entry in `src/lib/data/cv.ts`
- **`add-cv-section`** — add a whole new CV category (projects, certifications, …)

## Things that bite

- The design is settled. Fix bugs and accessibility within it; don't redesign it.
- `<main>` belongs to `+layout.svelte` only. Pages use `<div class="page">`.
- Secondary text uses `var(--color-muted)`, never `opacity` — the muted tokens are tuned to the
  WCAG AA floor.
- Deploying is automatic on merge to `main` (GitHub Actions pushes to Dokku). No manual deploy step needed.

## Before you finish

```bash
pnpm check && pnpm lint
```
