<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import Circle from '$lib/components/shapes/Circle.svelte';
	import Diamond from '$lib/components/shapes/Diamond.svelte';
	import Heptagon from '$lib/components/shapes/Heptagon.svelte';
	import Hexagon from '$lib/components/shapes/Hexagon.svelte';
	import Pentagon from '$lib/components/shapes/Pentagon.svelte';
	import { AudioLines, Keyboard, Music2, PencilLine, Puzzle } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';
</script>

<div class="mx-4 md:mx-36 flex h-auto w-auto flex-col items-center justify-center pt-36" id="solution">
	<div
		class="flex flex-col items-center justify-center gap-y-4 text-center text-4xl md:w-full md:flex-row md:items-start md:gap-x-4 md:gap-y-0"
	>
		<h3>{$_('savyCoach.supervised')}</h3>
		<Logo height="md:h-12 h-auto" width="w-32 md:w-auto" />
		<h3>{$_('savyCoach.himself')}</h3>
	</div>

	<h3 class="mt-32 text-center text-2xl md:text-3xl">
		{@html $_('explanationErrors')}
	</h3>

	<div class="my-16 flex flex-col md:flex-row w-full gap-y-7 md:gap-y-0">
		<div class="flex w-full flex-col space-y-7">
			<div class="flex items-center space-x-4">
				<Circle />
				<span class="text-xl md:text-2xl">{$_('error.noError')}</span>
			</div>
			<div class="flex items-center space-x-4">
				<Diamond />
				<span class="text-xl md:text-2xl">{$_('error.suggestion')}</span>
			</div>
			<div class="flex items-center space-x-4">
				<Pentagon />
				<span class="text-xl md:text-2xl">{$_('error.minor')}</span>
			</div>
			<div class="flex items-center space-x-4">
				<Hexagon />
				<span class="text-xl md:text-2xl">{$_('error.major')}</span>
			</div>
			<div class="flex items-center space-x-4">
				<Heptagon />
				<span class="text-xl md:text-2xl">{$_('error.blocking')}</span>
			</div>
		</div>
		<div class="flex w-full flex-col space-y-7">
			<div class="flex items-center space-x-4">
				<Keyboard class="h-12 w-12" />
				<span class="text-xl md:text-2xl">{$_('error.writing')}</span>
			</div>
			<div class="flex items-center space-x-4">
				<Puzzle class="h-12 w-12" />
				<span class="text-xl md:text-2xl">{$_('error.structure')}</span>
			</div>
			<div class="flex items-center space-x-4">
				<PencilLine class="h-12 w-12" />
				<span class="text-xl md:text-2xl">{$_('error.lexical')}</span>
			</div>
			<div class="flex items-center space-x-4">
				<AudioLines class="h-12 w-12" />
				<span class="text-xl md:text-2xl">{$_('error.pronunciation')}</span>
			</div>
			<div class="flex items-center space-x-4">
				<Music2 class="h-12 w-12" />
				<span class="text-xl md:text-2xl">{$_('error.rhythm')}</span>
			</div>
		</div>
	</div>

	<h3 class="mb-32 text-center text-2xl md:text-3xl">
		{@html $_('feedbackClick')}
	</h3>
</div>
