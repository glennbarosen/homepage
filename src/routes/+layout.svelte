<script>
	import { page } from '$app/stores';
	import './styles.css';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
	/>
</svelte:head>
<div class="container">
	<header>
		{#if $page.route.id !== '/'}
			<a href="/">
				<span class="material-symbols-outlined">arrow_back</span>
			</a>
		{/if}
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<p>© {new Date().getFullYear()} Glenn Arnold Barosen</p>
	</footer>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding: 1rem;
	}
	header {
		height: 5rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	footer {
		padding-top: 4rem;
		margin-top: auto;
	}
</style>
