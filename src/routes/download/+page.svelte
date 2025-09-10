<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { SiAndroid, SiApple } from '@icons-pack/svelte-simple-icons';

	let isAppleDevice = false;
	let isMobileView = false;

	onMount(() => {
		const userAgent = navigator.userAgent.toLowerCase();
		isAppleDevice = /iphone|ipad|ipod|mac/.test(userAgent);

		checkMobileView();

		window.addEventListener('resize', checkMobileView);
		const textElement = document.querySelector('.appear');
		if (textElement) {
			textElement.classList.remove('opacity-0');
			textElement.classList.add('opacity-100');
		}
		return () => {
			window.removeEventListener('resize', checkMobileView);
		};
	});

	function checkMobileView() {
		isMobileView = window.innerWidth < 768;
	}
</script>

<div class="flex h-screen w-full flex-col items-center justify-center gap-y-10 appear opacity-0 transition-all duration-300">
		<h1 class="vision text-center text-4xl font-bold">{$_('installSavyView')}</h1>
		<div class="flex gap-x-10">
			{#if !isMobileView || (isMobileView && isAppleDevice)}
				<a
					href="https://apps.apple.com/fr/app/savy-parle-pour-apprendre/id6744904742"
					class="hover:bg-blue/50 bg-blue flex items-center justify-center space-x-2 rounded-md px-3 py-2 text-black transition duration-300 ease-in-out"
				>
					<SiApple size={16} />
					<p>Download on iOS</p>
				</a>
			{/if}
			{#if !isMobileView || (isMobileView && !isAppleDevice)}
				<a
					href="/apk/savy.apk"
					download="savy.apk"
					class="bg-green hover:bg-green/50 flex items-center justify-center space-x-2 rounded-md px-3 py-2 text-black transition duration-300 ease-in-out"
				>
					<SiAndroid size={16} />
					<p>Download on Android</p>
				</a>
			{/if}
		</div>
</div>
