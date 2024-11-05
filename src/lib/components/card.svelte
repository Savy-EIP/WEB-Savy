<script>
	export let name = '';
	export let job = '';
</script>

<div>
	<div class="bg-svBack p-3 rounded-xl w-64 md:w-96 w-128 w-256 animated-border">
		<h1 class="text-2xl md:text-4xl 2k:text-6xl 4k:text-7xl pb-2 2k:pb-4 4k:pb-8">{name}</h1>
		<hr />
		<h2 class="text-xl md:text-2xl 2k:text-4xl 4k:text-5xl pt-2 2k:pt-4 4k:pt-8">{job}</h2>
	</div>
</div>

<style>
	.animated-border:active {
		transform: scale(0.95);
	}

	@media (min-width: 768px) {
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
	}

	@media (min-width: 2048px) {
		.w-128 {
			width: 32rem;
		}
	}

	@media (min-width: 3840px) {
		.w-256 {
			width: 64rem;
		}
	}
</style>
