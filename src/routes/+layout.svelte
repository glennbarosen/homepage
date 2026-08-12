<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';
	import { siteUrl } from '$lib/site';
	import './styles.css';

	let { children }: { children: Snippet } = $props();

	let canonical = $derived(siteUrl + page.url.pathname);

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Inter:wght@100..700&display=swap"
	/>
	<meta property="og:site_name" content="Glenn Arnold Barosen" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonical} />
	<link rel="canonical" href={canonical} />
</svelte:head>
<div class="container">
	<header>
		{#if page.route.id !== '/'}
			<a href="/" aria-label="Gå tilbake til forsiden">
				<!-- Inlined rather than pulling the whole Material Symbols icon font
				     over the network for a single glyph. -->
				<svg
					class="icon"
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden="true"
					focusable="false"
				>
					<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
				</svg>
			</a>
		{/if}
	</header>
	<main>
		{@render children()}
	</main>
	<footer>
		<p>© {new Date().getFullYear()} Glenn Arnold Barosen</p>
	</footer>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
		padding: 1rem;
	}
	header {
		height: 5rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	/* Matches the 24px optical size the Material Symbols glyph rendered at. */
	.icon {
		display: block;
		width: 24px;
		height: 24px;
	}

	footer {
		padding-top: 4rem;
		margin-top: auto;
	}
</style>
