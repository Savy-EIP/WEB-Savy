<script>
	import { fade } from 'svelte/transition';
	import LogoAnim from '$lib/icons/logo-animated.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let ratio = 1.5;

	function navigateToHome() {
		goto('/home');
	}

	function updateRatio() {
		const width = window.innerWidth;
		if (width < 640) {
			ratio = 1;
		} else if (width >= 2560 && width < 3840) {
			ratio = 2;
		} else if (width >= 3840) {
			ratio = 3;
		} else {
			ratio = 1.5;
		}
	}

	onMount(() => {
		updateRatio();
		window.addEventListener('resize', updateRatio);
		return () => window.removeEventListener('resize', updateRatio);
	});
</script>

<button class="flex justify-center items-center w-screen h-screen clickon" on:click={navigateToHome} type="button" aria-label="Navigate to Home">
	<LogoAnim {ratio} />
</button>

<style>
	.clickon {
		animation: scale 4s infinite;
	}

	@keyframes scale {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
