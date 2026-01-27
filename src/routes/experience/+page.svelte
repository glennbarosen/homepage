<script lang="ts">
	import { experience, education } from '$lib/data/cv';
	import Experience from './Experience.svelte';
	import Education from './Education.svelte';
</script>

<svelte:head>
	<title>Erfaring - Glenn.</title>
	<meta name="description" content="Overview of work experience" />
</svelte:head>
<div>
	<main>
		<section>
			<h2>Arbeid</h2>
			{#each experience as { title, company, period, type, description }}
				<Experience {title} {company} {period} {type} {description} />
			{/each}
		</section>
		<section>
			<h2>Utdanning</h2>
			{#each education as { degree, institution, period, details }}
				<Education {degree} {institution} {period} {details} />
			{/each}
		</section>
	</main>
	<section style="margin-top: 2rem;">
		<h2>Last ned CV</h2>
		<div class="cv-links">
			<a href="/cv/cv-nb.pdf" download>Norsk</a>
			<a href="/cv/cv-en.pdf" download>English</a>
		</div>
	</section>
</div>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 5rem;
	}

	h2 {
		font-size: 0.8rem;
		font-weight: 100;
		opacity: 0.5;
	}

	.cv-links {
		display: flex;
		gap: 1rem;
	}
</style>
