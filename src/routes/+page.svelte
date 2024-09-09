<script>
	import LogoAnim from '$lib/icons/logo-animated.svelte';
	import { goto } from '$app/navigation';

	function navigateToHome() {
		goto('/home');
	}
</script>

<button class="flex justify-center items-center w-screen h-screen" on:click={navigateToHome} type="button" aria-label="Navigate to Home">
	<LogoAnim ratio={1.5} />
</button>
