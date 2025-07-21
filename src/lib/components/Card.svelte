<script lang="ts">
	export let height: string = 'h-36';
</script>

<div
	class="flex {height} w-28 items-center justify-center rounded-md bg-[radial-gradient(circle,_#dabaff_0%,_#f1f1f1_65%)] transition-all duration-200 hover:scale-110 dark:bg-[radial-gradient(circle,_#5e2999_0%,_#1f1f1f_65%)]"
>
	<slot />
</div>
