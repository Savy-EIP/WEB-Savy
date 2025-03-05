<script lang="ts">
	export let title;
	export let subtitle;
  export let isCentered = true;
</script>

<div class="flex flex-col" class:items-center={isCentered}>
	<h2 class="text-lg mb:text-2xl text-on">{title}</h2>
	<h3 class="text-md mb:text-xl text-onSurface">{subtitle}</h3>
</div>
