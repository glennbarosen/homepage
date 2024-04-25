<script lang="ts">
	import { experience } from './experience';
	import Experience from './Experience.svelte';
</script>

<svelte:head>
	<title>Erfaring - Glenn.</title>
	<meta name="description" content="Overview of work experience" />
</svelte:head>
<div>
	<main>
		<section>
			<h2>Arbeid</h2>
			{#each experience['work'] as { title, company, startDate, endDate }}
				<Experience {title} {company} {startDate} {endDate} />
			{/each}
		</section>
		<section>
			<h2>Utdanning</h2>
			{#each experience['education'] as { title, company, additionalInfo, startDate, endDate }}
				<Experience {title} {company} {additionalInfo} {startDate} {endDate} />
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
