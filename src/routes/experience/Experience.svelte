<script lang="ts">
	import type { Experience as ExperienceItem } from '$lib/data/cv';
	export let title: ExperienceItem['title'] = '';
	export let company: ExperienceItem['company'] = '';
	export let period: ExperienceItem['period'] = '';
	export let type: ExperienceItem['type'] = undefined;
	export let description: ExperienceItem['description'] = undefined;
</script>

<article>
	<h2>{title}</h2>
	{#if type}
		<div class="badge-container">
			<span class="type-badge">{type}</span>
		</div>
	{/if}
	<p class="company">{company}</p>
	<p class="period">{period}</p>
	{#if description}
		<p class="description">{description}</p>
	{/if}
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
		margin-bottom: 0.5rem;
	}
	p {
		line-height: 1.5;
		margin: 0.25rem 0;
	}
	p.company {
		font-weight: 500;
	}
	p.period {
		font-size: 0.9rem;
		opacity: 0.8;
	}
	p.description {
		font-size: 0.95rem;
		opacity: 0.9;
		margin-top: 0.5rem;
	}
	.badge-container {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.type-badge {
		display: inline-block;
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.5px;
		padding: 0.2rem 0.4rem;
		border: 1px solid currentColor;
		border-radius: 1px;
		white-space: nowrap;
	}
</style>
