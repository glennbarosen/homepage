---
name: update-cv
description: Add or amend a work experience or education entry in the CV data at src/lib/data/cv.ts. Use when the user mentions a new or changed job, role, title, employer, internship, degree, or school — e.g. "I started as a senior dev at X", "add my role at Y", "I finished my bachelor in Z", "update my CV". Handles Norwegian date formatting, reverse-chronological placement, and the commit convention.
---

# Update CV Skill

Update the [CV data file](../../../src/lib/data/cv.ts) when the user mentions new or changed
experience.

## Trigger Criteria

Invoke when the user's input describes a work or education entry — see the
[template](./TEMPLATE.md) for the exact fields.

- **Work** needs at minimum: a title/role, a company, and a time range.
- **Education** needs at minimum: a degree, an institution, and a time range.

If one of the required fields is missing, ask for it rather than guessing.

## Workflow

1. **Identify the category** — `experience` or `education` — from context.
2. **Extract the required fields** from the user's input.
3. **Ask about the optional fields** rather than silently writing blanks — `type`
   (`Heltid`/`Deltid`/`Prosjektbasert`) and `description` for work, `details` for education. They
   render if present: `type` as a bordered badge, `description`/`details` as a muted paragraph. If
   the user doesn't want them, omit `type`/`details` entirely and keep `description: ''` to match
   the existing entries.
4. **Format the period** in Norwegian style (see below).
5. **Insert the entry in the correct position** (see Ordering below).
6. **Verify** before committing:
   ```bash
   pnpm check && pnpm lint
   ```
7. **Confirm with the user**, then commit with THIS EXACT message:
   ```bash
   git add src/lib/data/cv.ts
   git commit -m 'chore: update CV 💼'
   ```
8. **Push** to the remote: `git push origin main`.

## Ordering

Both arrays are strictly **reverse-chronological by start date** — newest first.

- An ongoing role (`d.d.`) sorts above every ended role.
- Compare **start** dates, not end dates.
- Do **not** group entries by employer. The two Fremtind stints are deliberately
  non-contiguous because a Naeva role sits between them chronologically. Leave that alone.

Nothing sorts these arrays at runtime and nothing validates the order — array order _is_ the
rendered order, so getting the insertion position right is the whole job.

## Period Format

Use Norwegian month abbreviations:

- jan., feb., mar., apr., mai, jun., jul., aug., sep., okt., nov., des.
- Use "d.d." (til dags dato) for current/ongoing
- Format: "start - end" (e.g., "aug. 2021 - jan. 2023")

Note `mai` takes no trailing period; every other month does.

## Data Structure

### Work Experience

- `title`: Job title
- `company`: Company name
- `period`: Start and end dates (formatted in Norwegian style)
- `type`: Optional — "Heltid", "Deltid", or "Prosjektbasert"
- `description`: Optional — brief description of role or responsibilities

### Education

- `degree`: Degree title (e.g., "Bachelor i Informatikk")
- `institution`: University or school name
- `period`: Start and end dates
- `details`: Optional — specialization or additional information

## After updating

Two things do **not** happen automatically — mention both to the user:

- **The PDFs go stale.** `static/cv/cv-nb.pdf` and `static/cv/cv-en.pdf` are hand-maintained
  binaries, not generated from `cv.ts`. They now disagree with the site. This skill cannot
  regenerate them; the user has to replace them.
- **Pushing does not deploy.** `git push origin main` only updates GitHub. Deploying is a separate
  `git push dokku main`.
