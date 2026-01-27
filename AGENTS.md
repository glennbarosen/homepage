# AGENTS.md - Glenn's Portfolio

This file provides context for AI coding assistants working on this project.

## Project Overview

A personal portfolio website for Glenn Arnold Barosen, built with SvelteKit. The site showcases work experience, education, and provides contact information. It emphasizes clean design and ease of CV/experience updates through integrated AI skills.

**Live URL**: https://glennbarosen.dev (expected)

## Tech Stack

- **Framework**: SvelteKit 2.x with Svelte 4.x
- **Language**: TypeScript 5.x
- **Styling**: CSS with CSS custom properties (no framework)
- **Build Tool**: Vite 5.x
- **Adapter**: Auto (Netlify)
- **Package Manager**: npm with package-lock.json

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte           # Root layout with header/footer
│   ├── +page.svelte             # Home page
│   ├── +page.ts                 # Home page load function
│   ├── about/
│   │   ├── +page.svelte
│   │   └── +page.ts
│   ├── contact/
│   │   ├── +page.svelte
│   │   └── +page.ts
│   ├── experience/
│   │   ├── +page.svelte         # Experience/CV page
│   │   ├── +page.ts             # Experience page load
│   │   └── Experience.svelte    # Reusable experience item component
│   └── styles.css               # Global styles
├── lib/
│   └── data/
│       └── cv.ts                # CV data (work, education)
├── app.d.ts                     # App type definitions
└── app.html                     # HTML template

static/
├── favicon.png
├── robots.txt
└── cv/
    ├── cv-en.pdf                # English CV
    └── cv-nb.pdf                # Norwegian CV
```

## Design Guidelines

- **Style**: Clean, minimalist with subtle animations
- **Colors**:
  - Background: `#ece9e5` (light beige)
  - Text: `#000` (black in light mode), `#fff` (white in dark mode)
  - Supports dark mode via `prefers-color-scheme`
- **View Transitions**: Uses View Transitions API for smooth page navigation
- **Animations**: Custom CSS keyframes (fade-in, fade-out, slide-from-right, slide-to-left)
- **Language**: Norwegian (primary)

## Key Commands

```bash
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run check        # Run TypeScript check and Svelte checks
npm run check:watch  # Watch mode for type checking
npm run lint         # Run Prettier and ESLint
npm run format       # Format code with Prettier
```

## Coding Conventions

1. **TypeScript**: Use TypeScript for all `.ts` files and component script blocks
2. **Components**: Use reactive Svelte components with `<script lang="ts">`
3. **Exports**: Use named exports for reusable components
4. **Props**: Define prop types explicitly using TypeScript interfaces/types
5. **Styling**: Scoped styles within `<style>` blocks using CSS custom properties
6. **CSS Variables**: Defined at `:root` in `src/routes/styles.css`
7. **Naming**: Use kebab-case for files/directories, PascalCase for components
8. **Data Loading**: Use `+page.ts` load functions for static data from `$lib/data/`

## CV Data Structure

All CV data is managed in `src/lib/data/cv.ts` using TypeScript interfaces.

### Experience Interface

```typescript
export interface Experience {
	title: string;
	company: string;
	type?: string; // e.g., "Deltid", "Heltid", "Prosjektbasert"
	period: string; // e.g., "jun. 2025 - d.d."
	description?: string; // Optional: job description/highlights
}

export const experience: Experience[] = [
	// Most recent first
	{
		title: 'Seniorutvikler',
		company: 'Fremtind',
		period: 'jun. 2025 - d.d.',
		type: 'Heltid',
		description: ''
	}
	// ... more entries
];
```

### Education Interface

```typescript
export interface Education {
	institution: string; // University/school name
	degree: string; // Degree title
	period: string; // e.g., "aug. 2018 - jun. 2021"
	details?: string; // Optional: specialization, etc.
}

export const education: Education[] = [
	{
		degree: 'Bachelor i Informasjonsteknologi',
		institution: 'Høgskulen på Vestlandet',
		period: 'aug. 2018 - jun. 2021',
		details: 'Spesialisering i webapplikasjoner'
	}
	// ... more entries
];
```

### Period Format (Norwegian)

Use Norwegian month abbreviations and consistent formatting:

```
jan., feb., mar., apr., mai, jun., jul., aug., sep., okt., nov., des.
```

Examples:

- Full date: `"jun. 2025 - d.d."` (d.d. = current)
- Completed: `"aug. 2018 - jun. 2021"`
- Single month: `"des. 2023"`
- With type: Use `type` field for "Deltid", "Heltid", "Prosjektbasert"

## CV Skills

### update-cv Skill

Automatically updates CV data in `src/lib/data/cv.ts` when provided with new experience or education entries.

**Location**: `.github/skills/update-cv/`

**Files**:

- `SKILL.md` - Skill definition and workflow
- `TEMPLATE.md` - Entry templates and date format rules

**Trigger Criteria**: Invoke when user input contains:

- For work: NAME (title/role), COMPANY, TIME RANGE (period)
- For education: DEGREE, INSTITUTION, TIME RANGE (period)
- Optional fields: description (work), details (education), type (work)

**Workflow**:

1. Identify category (experience or education) from context
2. Extract required fields from user input
3. Format period in Norwegian style (month abbreviations, dates with years)
4. Add new entry to appropriate array in `src/lib/data/cv.ts`
5. Place new entries at the top of arrays (most recent first)
6. Ask for confirmation, then commit with message: `chore: update CV 💼`
7. Push changes to remote

**Data Location**: `src/lib/data/cv.ts`

**Example Skill Usage**:

```
User: "I just finished a role as Senior Developer at Fremtind from June 2025 to now"
Skill: Extracts all fields, formats as:
{
  title: 'Seniorutvikler',
  company: 'Fremtind',
  type: 'Heltid',
  period: 'jun. 2025 - d.d.',
  description: ''
}
Adds to top of experience array and commits with "chore: update CV 💼"
```

### Adding New Pages

1. Create a new file in `src/routes/` (e.g., `projects/+page.svelte`)
2. Create corresponding `+page.ts` if data loading needed
3. Use relative links for navigation: `href="/contact"`

Example:

```svelte
<script lang="ts">
	let items: Item[];
</script>

<svelte:head>
	<title>Projects - Glenn.</title>
</svelte:head>

<h1>My Projects</h1>
{#each items as item}
	<!-- content -->
{/each}
```

### Deployment

- **Platform**: Netlify
- **Adapter**: `@sveltejs/adapter-netlify`
- **Trigger**: Push to `main` branch
- **Build**: `npm run build` → deploys `build/` directory
- **Environment**: Works with Netlify's environment variables via `$env/static/public`

## Common Tasks

### Add a Work Experience Entry

1. Open `src/lib/data/cv.ts`
2. Add new object to top of `experience` array with this template:

```typescript
{
  title: 'Your Job Title',
  company: 'Company Name',
  period: 'start month. year - end month. year',
  type: 'Deltid|Heltid|Prosjektbasert', // optional
  description: 'Brief description of role' // optional
}
```

### Add an Education Entry

1. Open `src/lib/data/cv.ts`
2. Add new object to `education` array with this template:

```typescript
{
  degree: 'Degree Name',
  institution: 'University/School Name',
  period: 'start month. year - end month. year',
  details: 'Specialization or additional info' // optional
}
```

### Update CV PDFs

1. Replace files in `static/cv/`:
   - `cv-nb.pdf` - Norwegian version
   - `cv-en.pdf` - English version
2. Commit changes
3. Netlify will redeploy automatically

## File Structure Best Practices

- Keep components small and focused (max ~100 lines if possible)
- Use `$lib/` for shared utilities and data
- Organize styles at component level (scoped `<style>` blocks)
- Use TypeScript for all new `.ts` files
- Export types from data files for component usage

## Type-Checking & Linting

Before committing:

```bash
npm run check    # Verify TypeScript types
npm run lint     # Check code style
npm run format   # Auto-fix formatting
```

## Related Resources

- **SvelteKit Docs**: https://kit.svelte.dev
- **Svelte Docs**: https://svelte.dev
- **Original Template**: Based on best practices from Magnhild Myskja's portfolio
