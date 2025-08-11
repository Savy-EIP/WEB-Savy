<script lang="ts">
	import Line from './Line.svelte';
	import { _ } from 'svelte-i18n';

	export let height: string = 'h-0.5';
	export let width: string = 'w-full';

	export let title: string = 'Title';
</script>

<div class="flex w-full items-center">
	<Line {height} {width} />
	<span
		class="vision hover:text-purple mx-3 text-xl font-bold transition-all duration-200 hover:text-2xl"
		>{$_(title)}</span
	>
	<Line {height} {width} />
</div>
