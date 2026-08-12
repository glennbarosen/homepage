<script lang="ts">
	import { experience, education } from '$lib/data/cv';
	import Experience from './Experience.svelte';
	import Education from './Education.svelte';
</script>

<svelte:head>
	<title>Erfaring - Glenn.</title>
	<meta name="description" content="Arbeidserfaring og utdanning for Glenn Arnold Barosen" />
	<meta property="og:title" content="Erfaring - Glenn Arnold Barosen" />
	<meta property="og:description" content="Arbeidserfaring og utdanning for Glenn Arnold Barosen" />
</svelte:head>
<div class="page">
	<h1 class="visually-hidden">Erfaring</h1>
	<section class="cv-section">
		<h2>Arbeid</h2>
		{#each experience as { title, company, period, type, description } (title + company + period)}
			<Experience {title} {company} {period} {type} {description} />
		{/each}
	</section>
	<section class="cv-section">
		<h2>Utdanning</h2>
		{#each education as { degree, institution, period, details } (degree + institution + period)}
			<Education {degree} {institution} {period} {details} />
		{/each}
	</section>
	<section class="cv-downloads">
		<h2>Last ned CV</h2>
		<div class="cv-links">
			<a href="/cv/cv-nb.pdf" download>Norsk</a>
			<a href="/cv/cv-en.pdf" download>English</a>
		</div>
	</section>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
	}

	/* Preserves the original spacing: 5rem between the content sections, and
	   2rem before the downloads, which used to sit outside <main>. */
	.cv-section + .cv-section {
		margin-top: 5rem;
	}

	.cv-downloads {
		margin-top: 2rem;
	}

	h2 {
		font-size: 0.8rem;
		font-weight: 400;
		color: var(--color-muted);
	}

	.cv-links {
		display: flex;
		gap: 1rem;
	}
</style>
