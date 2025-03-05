<script lang="ts">
	export let name: string;
	export let route: string;
</script>

<a href={route} class="text-md text-onSurface mb:hover:text-on transition-colors">{name}</a>
