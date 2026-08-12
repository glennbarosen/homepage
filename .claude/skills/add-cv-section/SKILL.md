---
name: add-cv-section
description: Add a whole new CV category to the experience page — projects, certifications, talks, volunteering, skills, courses, publications. Use when the user wants a new *kind* of CV entry that has no interface or array yet, e.g. "add a projects section to my CV", "I want to list certifications", "can the site show my talks". For adding an entry to the existing work or education lists, use update-cv instead.
---

# Add a CV Section Skill

Adding a _job_ is a one-file edit (that's `update-cv`). Adding a new **category** touches four files
and has one failure mode that produces no error at all. Follow the order below.

First, confirm with the user what the section is called **in Norwegian** — all headings on the site
are hardcoded Norwegian strings (`Arbeid`, `Utdanning`, `Last ned CV`). A new one must match.

## 1. Data — `src/lib/data/cv.ts`

Add an interface and an exported array next to the existing ones. Mirror the established shape: a
required title-ish field, a required subtitle-ish field, a required `period`, and optional extras.

```typescript
export interface Project {
	name: string;
	role: string;
	period: string;
	description?: string;
}

export const projects: Project[] = [];
```

Follow the existing conventions: `period` is an opaque Norwegian display string
(`"jan. 2024 - jun. 2024"`, `"d.d."` for ongoing), and the array is reverse-chronological by start
date.

## 2. Component — `src/routes/experience/<Name>.svelte`

Copy `Experience.svelte` and adapt the field names. Keep its structure and scoped styles verbatim so
the new section is visually indistinguishable from the existing ones:

- root `<article>`, flex column, `margin-bottom: 1rem`
- the entry title is an **`<h3>`** at `var(--font-large)`, `font-weight: 100`
- the secondary line is `font-weight: 500`
- period and description use `color: var(--color-muted)` — **never `opacity`**, which falls below
  the WCAG AA contrast floor
- type the props from the interface: `let { … }: ProjectItem = $props();`

## 3. Page — `src/routes/experience/+page.svelte`

Import the array and the component, then add a `<section>` before the `.cv-downloads` one:

```svelte
<section>
	<h2>Prosjekter</h2>
	{#each projects as { name, role, period, description } (name + period)}
		<Project {name} {role} {period} {description} />
	{/each}
</section>
```

`section + section` already applies the 5rem spacing — don't add margins.

> **The sharp edge.** The `{#each}` destructures fields explicitly and passes them one by one. A
> field you add to the interface but forget in **either** the destructuring pattern **or** the
> component's prop list is silently dropped — it renders as nothing, `pnpm check` stays green, and
> there is no warning. Whenever you add a field, grep for its name and confirm it appears in all
> four places: the interface, the `{#each}` pattern, the `<Component />` props, and the component's
> `$props()`.

Every `{#each}` needs a key — see `svelte/require-each-key` in `eslint.config.js`.

## 4. Verify

```bash
pnpm check && pnpm lint
pnpm build && pnpm preview
```

Load `/experience` and confirm the new section matches the existing ones in both light and dark
mode, and that its entries render at the same scale as the work entries.

## Heading levels

The page structure is fixed: a visually-hidden `<h1>` for the page, `<h2>` for each section label,
`<h3>` for each entry title. Don't introduce an `<h2>` inside an entry component.

## If the section doesn't belong on the experience page

A category that isn't CV history (a blog, a link list) may deserve its own route instead. See
"Adding New Pages" in `AGENTS.md` — and remember to add the route to `routes` in `src/lib/site.ts`
so it reaches the sitemap.
