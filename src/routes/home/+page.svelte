<script>
	import { onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import LogoStatic from '$lib/icons/logo-static.svelte';

	let showContent = false;

	onMount(() => {
		showContent = true;
	});

	onDestroy(() => {
		showContent = false;
	});
</script>

{#if showContent}
	<div class="p-4" transition:fade>
		<div class="flex flex-row items-center w-full p-4 bg-svBack rounded-xl">
			<a href="/" class="w-1/5">
				<LogoStatic ratio={0.5} />
			</a>
			<div class="flex flex-row justify-around w-3/5">
				<a href="#home" class="text-xl hover:animate-colorChange">Home</a>
				<a href="#project" class="text-xl hover:animate-colorChange">Project</a>
				<a href="#team" class="text-xl hover:animate-colorChange">Team</a>
				<a href="#contact" class="text-xl hover:animate-colorChange">Contact</a>
			</div>
		</div>
	</div>
{/if}
