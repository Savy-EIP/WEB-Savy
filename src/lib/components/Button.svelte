<script lang="ts">
	export let label: string = 'Click Me';
	export let onClick: () => void = () => {};
	export let href: string | undefined = undefined;
	export let className: string = '';
	export let colorClass: string = 'action-button-color';
</script>

{#if href}
	<a
		{href}
		target="_blank"
		rel="noopener noreferrer"
		class="{className} {colorClass} flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300"
	>
		{label}
	</a>
{:else}
	<button
		on:click={onClick}
		class="{className} {colorClass} rounded-md transition-all duration-300"
	>
		{label}
	</button>
{/if}
