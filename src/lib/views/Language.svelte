<script lang="ts">
	import { _ } from 'svelte-i18n';
	import FlagEN from './../../assets/flag-en.png';
	import FlagFR from './../../assets/flag-fr.png';
	import FlagES from './../../assets/flag-es.png';
	import FlagIT from './../../assets/flag-it.png';
	import Line from '$lib/components/Line.svelte';

	const languages = [
		{ code: 'en', flag: FlagEN },
		{ code: 'fr', flag: FlagFR },
		{ code: 'es', flag: FlagES },
		{ code: 'it', flag: FlagIT }
	];
</script>

<div class="mx-4 md:mx-32 flex h-auto w-auto flex-col items-center justify-center">
	<h4 class="w-full text-2xl md:text-4xl">{$_('languagesAvailable')}</h4>
	<div class="mt-4 mb-12 flex w-full flex-wrap gap-4 md:gap-12">
		{#each languages as language}
			<div class="flex items-center space-x-4">
				<img src={language.flag} alt={language.code} class="h-5 md:h-9" />
				<span class="text-lg">{$_(`languages.${language.code}`)}</span>
			</div>
		{/each}
		<span class="text-lg text-gray-500">{$_('andMoreToCome')}</span>
	</div>
	<Line />
</div>
