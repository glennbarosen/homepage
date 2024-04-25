<script lang="ts">
	import type { Experience as ExperienceItem } from './experience';
	export let title: ExperienceItem['title'] = '';
	export let company: ExperienceItem['company'] = '';
	export let startDate: ExperienceItem['startDate'] = '';
	export let endDate: ExperienceItem['endDate'] = '';
	export let additionalInfo: ExperienceItem['additionalInfo'] = undefined;
</script>

<article>
	<h2>{title}</h2>
	{#if additionalInfo}
		<p>{additionalInfo}</p>
	{/if}
	<p>{company}</p>
	<p>{startDate} - {endDate}</p>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}
	h2 {
		font-size: var(--font-large);
		font-weight: 100;
	}
	p {
		line-height: 1.5;
	}
</style>
