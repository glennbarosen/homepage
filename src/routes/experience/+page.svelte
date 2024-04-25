<script lang="ts">
	import { experience } from './experience';
	import Experience from './Experience.svelte';
</script>

<svelte:head>
	<title>Erfaring - Glenn.</title>
	<meta name="description" content="Overview of work experience" />
</svelte:head>

<main>
	<section>
		<h1>Arbeid</h1>
		{#each experience['work'] as { title, company, startDate, endDate }}
			<Experience {title} {company} {startDate} {endDate} />
		{/each}
	</section>
	<section>
		<h1>Utdanning</h1>
		{#each experience['education'] as { title, company, additionalInfo, startDate, endDate }}
			<Experience {title} {company} {additionalInfo} {startDate} {endDate} />
		{/each}
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 5rem;
	}
	h1 {
		font-size: 0.8rem;
		font-weight: 100;
		opacity: 0.5;
	}
</style>
