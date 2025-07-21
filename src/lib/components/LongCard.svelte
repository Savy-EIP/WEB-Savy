<script lang="ts">
	export let height: string = 'h-36';
	export let width: string = 'w-1/3';
</script>

<div
	class="flex {height} {width} items-center justify-center rounded-md transition-all duration-200 hover:scale-110 bg-front-light dark:bg-front-dark"
>
	<slot />
</div>
