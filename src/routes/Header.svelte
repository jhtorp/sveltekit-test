<script>
	import logo from '$lib/images/chanel-2-logo-svgrepo-com.svg';
</script>

<header>
	<div class="logo-contantainer">
		<a href="#">
			<img src={logo} alt="Chanel logo" />
		</a>
	</div>
	<nav>
		<a href="/">Hjem</a>
		<a href="/om">Om oss</a>
		<a href="/kontakt"><button>Kontakt</button></a>
	</nav>
</header>

<style>
	header {
		background: #aaa;
		display: flex;
		justify-content: space-between;
		padding: 0 30px;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	nav > a {
		text-decoration: none;
		color: rgb(27, 26, 26);
	}

	button {
		padding: 8px 24px;
		background: rgb(62, 62, 202);
		border: 0;
		border-radius: 8px;
		color: rgb(231, 231, 255);
	}

	img {
		width: 60px;
		height: auto;
	}
</style>
