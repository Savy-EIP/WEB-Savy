<script>
	export let name = '';
	export let job = '';
</script>

<div>
	<div class="bg-svBack p-3 rounded-xl w-full animated-border">
		<h1 class="text-4xl pb-2">{name}</h1>
		<hr />
		<h2 class="text-2xl pt-2">{job}</h2>
	</div>
</div>

<style>
	.animated-border {
		position: relative;
		overflow: hidden;
	}

	.animated-border::before {
		content: '';
		position: absolute;
		top: 0;
		left: -10%;
		width: 110%;
		height: 100%;
		border: 2px solid transparent;
		background: linear-gradient(90deg, rgba(255, 255, 255, 0) 50%, #9b44ff53 100%);
		background-size: 200% 100%;
		z-index: 0;
		transition: background-position 0.5s;
	}

	.animated-border:hover::before {
		left: 0;
		background-position: -100% 0;
	}
</style>
