<script lang="ts">
	import type { Education as EducationItem } from '$lib/data/cv';
	let { degree = '', institution = '', period = '', details = undefined }: EducationItem = $props();
</script>

<article>
	<h3>{degree}</h3>
	<p class="institution">{institution}</p>
	<p class="period">{period}</p>
	{#if details}
		<p class="details">{details}</p>
	{/if}
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}
	h3 {
		font-size: var(--font-large);
		font-weight: 100;
		margin-bottom: 0.5rem;
	}
	p {
		line-height: 1.5;
		margin: 0.25rem 0;
	}
	p.institution {
		font-weight: 500;
	}
	p.period {
		font-size: 0.9rem;
		color: var(--color-muted);
	}
	p.details {
		font-size: 0.95rem;
		color: var(--color-muted);
		margin-top: 0.5rem;
	}
</style>
