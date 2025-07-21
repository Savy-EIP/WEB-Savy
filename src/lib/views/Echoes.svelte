<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { _ } from 'svelte-i18n';
	import Echo1 from './../../assets/echoes/echo1.png';
	import Echo2 from './../../assets/echoes/echo2.png';
	import Echo3 from './../../assets/echoes/echo3.png';
	import Echo4 from './../../assets/echoes/echo4.png';
	import Echo5 from './../../assets/echoes/echo5.png';
	import Echo6 from './../../assets/echoes/echo6.png';
	import Echo7 from './../../assets/echoes/echo7.png';

	const listEchoImage = [Echo1, Echo2, Echo3, Echo4, Echo5, Echo6, Echo7];
</script>

<div
	class="mx-4 flex h-auto w-auto flex-col items-center justify-center pt-36 md:mx-36"
	id="solution"
>
	<div class="flex flex-col items-center md:items-start justify-center md:gap-x-4 gap-y-4 md:gap-y-0 md:w-full md:flex-row text-4xl text-center">
		<h3>{$_('savyIntro.with')}</h3>
		<Logo height="md:h-12 h-auto" width="w-32 md:w-auto" />
		<h3>{$_('savyIntro.learnReally')}</h3>
	</div>

	<h3 class="mt-32 text-center text-2xl md:text-3xl">
		{@html $_('speakWithEchoes')}
	</h3>

	<div class="my-16 flex w-full flex-wrap justify-center md:justify-between gap-4">
		{#each listEchoImage as echoImage}
			<Card>
				<img src={echoImage} alt="echo" class="h-24 w-24" />
			</Card>
		{/each}
	</div>

	<h3 class="text-center text-2xl md:text-3xl">
		{@html $_('echoesUnique')}
	</h3>
</div>
