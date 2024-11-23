<script>
	import ShineBorder from './shine-border.svelte';

	export let name = '';
	export let job = '';
</script>

<ShineBorder class="p-3 rounded-lg w-64 md:w-96 w-128 w-256">
	<h1 class="text-2xl md:text-4xl 2k:text-6xl 4k:text-7xl pb-2 2k:pb-4 4k:pb-8">{name}</h1>
	<hr />
	<h2 class="text-xl md:text-2xl 2k:text-4xl 4k:text-5xl pt-2 2k:pt-4 4k:pt-8">{job}</h2>
</ShineBorder>

<style>
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
