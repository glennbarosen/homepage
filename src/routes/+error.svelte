<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} - Glenn.</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="page">
	<h1>{page.status}</h1>
	<p>{page.error?.message ?? 'Noe gikk galt.'}</p>
	<a href="/">Tilbake til forsiden</a>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 720px;
	}
	h1 {
		font-size: var(--font-large);
		font-weight: 400;
	}
	p {
		font-size: var(--font-medium);
		line-height: 1.5;
	}
	a {
		font-size: var(--font-medium);
		text-decoration: underline;
	}
</style>
