# CV Entry Template

Use this template to add new entries to the CV data file at `src/lib/data/cv.ts`.

## Work Experience Entry

```typescript
{
  title: string;           // Job title
  company: string;         // Company name
  period: string;          // e.g., "jan. 2024 - jun. 2024"
  type?: string;           // Optional: "Heltid", "Deltid", "Prosjektbasert"
  description?: string;    // Optional: brief role description
}
```

### Example

```typescript
{
  title: 'Seniorutvikler',
  company: 'Fremtind',
  type: 'Heltid',
  period: 'jun. 2025 - d.d.',
  description: ''
}
```

## Education Entry

```typescript
{
  degree: string;          // Degree title
  institution: string;     // University/school name
  period: string;          // e.g., "aug. 2018 - jun. 2021"
  details?: string;        // Optional: specialization or additional info
}
```

### Example

```typescript
{
  degree: 'Bachelor i Informasjonsteknologi',
  institution: 'Høgskulen på Vestlandet',
  period: 'aug. 2018 - jun. 2021',
  details: 'Spesialisering i webapplikasjoner'
}
```

## Date Format Rules

Use Norwegian month abbreviations:

- jan., feb., mar., apr., mai, jun., jul., aug., sep., okt., nov., des.

Examples:

- `"jan. 2024 - jun. 2024"` - Standard format
- `"des. 2023"` - Single month only
- `"sep. 2025 - d.d."` - Ongoing (use "d.d." for current)
