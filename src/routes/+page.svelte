<svelte:head>
	<title>Glenn.</title>
	<meta name="description" content="Personlig nettside for Glenn Arnold Barosen" />
	<meta property="og:title" content="Glenn Arnold Barosen" />
	<meta property="og:description" content="Fullstackutvikler med fokus på frontend" />
</svelte:head>

<nav aria-label="Hovednavigasjon">
	<ul>
		<li><a href="/about">Om</a></li>
		<li><a href="/experience">Erfaring</a></li>
		<li><a href="/contact">Kontakt</a></li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		font-weight: 100;
		font-size: var(--font-large);
	}
	ul {
		padding: 0;
		margin: 0;
	}
	li {
		list-style: none;
	}
</style>
