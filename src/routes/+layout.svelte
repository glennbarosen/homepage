<script>
	import './styles.css';
</script>

<div class="container">
	<header>
		<a href="/">back</a>
	</header>
	<main>
		<slot />
	</main>
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
	}
</style>
