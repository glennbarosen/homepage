<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<nav>
	<a href="/about">Meg.</a>
	<a href="/experience">Erfaring.</a>
	<a href="/contact">Kontakt.</a>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		font-weight: 100;
		font-size: 4rem;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
