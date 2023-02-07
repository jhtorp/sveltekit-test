<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>Laget av <a href="https://torpmedia.no/">Torp Media</a></p>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		background: #aaa;
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	main {
		max-width: 960px;
		margin: 0 auto;
	}
</style>
