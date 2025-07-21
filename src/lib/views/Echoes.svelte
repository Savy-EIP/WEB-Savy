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

<div class="mx-36 pt-36 flex h-auto w-auto flex-col items-center justify-center" id="solution">
	<div class="flex w-full justify-center gap-x-4 text-4xl">
		<h3>{$_('savyIntro.with')}</h3>
		<Logo height="h-12" />
		<h3>{$_('savyIntro.learnReally')}</h3>
	</div>

	<h3 class="mt-32 text-center text-3xl">
		{@html $_('speakWithEchoes')}
	</h3>

	<div class="my-16 flex w-full flex-wrap justify-between gap-4">
		{#each listEchoImage as echoImage}
			<Card>
				<img src={echoImage} alt="echo" class="h-24 w-24" />
			</Card>
		{/each}
	</div>

	<h3 class="text-center text-3xl">
		{@html $_('echoesUnique')}
	</h3>
</div>
