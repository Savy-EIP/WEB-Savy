<script lang="ts">
	import IconAnimatedDark from './IconAnimatedDark.svelte';
	import IconAnimatedLight from './IconAnimatedLight.svelte';

	export let width: string = '354';
	export let height: string = '100%';
</script>

<div class="hidden dark:block">
	<IconAnimatedDark {width} {height} />
</div>
<div class="block dark:hidden">
	<IconAnimatedLight {width} {height} />
</div>
