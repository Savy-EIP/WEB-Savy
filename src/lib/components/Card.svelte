<script lang="ts">
	import Title from './Title.svelte';

	export let title;
	export let subtitle;
	export let isCentered = false;
	export let activeHover = false;
	export let width = 'w-5/6 mb:w-3/5';
</script>

<div
	class="flex flex-col space-y-1 {width} rounded-lg border border-front bg-surface p-2 transition-all"
	class:mb:hover:bg-front={activeHover}
>
	<Title {title} {subtitle} {isCentered} />
</div>
