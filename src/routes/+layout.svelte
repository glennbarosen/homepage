<script>
	import './styles.css';
</script>

<div>
	<header>
		<a href="/">back</a>
	</header>
	<main>
		<slot />
	</main>
</div>

<style>
	header {
		height: 5rem;
	}
</style>
