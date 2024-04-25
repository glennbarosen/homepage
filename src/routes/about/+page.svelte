<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<main>
	<h1>Hei! 👋</h1>
	<p>
		Jeg er Glenn Arnold Barosen, en fullstackutvikler med fokus på frontend. Jeg trives godt med å
		diskutere implementeringsvalg, design og brukeropplevelse. Med erfaring som utvikler og lead,
		har jeg solid kompetanse innen React og prosjektstyring. Jeg liker også å utforske nye
		teknologier og holde meg oppdatert på ting som skjer i teknologiverden.
	</p>
	<p>Ta gjerne kontakt for å slå av en prat eller ta en kaffe ☕</p>
</main>

<style>
	main {
		max-width: 720px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	h1 {
		font-size: var(--font-large);
		font-weight: 100;
	}
	p {
		font-size: var(--font-medium);
		line-height: 1.5;
	}
</style>
