<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import Mockups from './../../assets/mockups.png';
	import IconAnimated from '$lib/components/IconAnimated.svelte';

	onMount(() => {
		setTimeout(() => {
			const textElement = document.querySelector('.appear');
			if (textElement) {
				textElement.classList.remove('opacity-0');
				textElement.classList.add('opacity-100');
			}
		}, 800);
	});
</script>

<div class="z-10 flex h-screen w-full flex-col items-center justify-center">
	<div class="my-auto flex flex-col items-center justify-center text-center">
		<div class="flex items-center justify-center space-x-16">
			<!-- <img src={Mockups} alt="mockups" class="h-64 w-auto" /> -->
			<IconAnimated />
			<div
				class="just appear flex flex-col items-center space-y-4 opacity-0 transition-all duration-800"
			>
				<h1 class="vision text-right text-5xl font-bold">
					{@html $_('title')}
				</h1>
				<div class="flex w-full justify-between space-x-4">
					<Button
						label={$_('installSavy')}
						href={'https://tally.so/r/3NgW4Q'}
						className="h-10 w-full"
					/>
					<Button
						label={$_('discoverSavy')}
						href={'https://tally.so/r/3NgW4Q'}
						className="h-10 w-full"
						colorClass="outlined-button-color"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
