<script lang="ts">
	import { Moon, Sun } from '@lucide/svelte';

	const toggleTheme = (ev: MouseEvent) => {
		const target = ev.target as HTMLElement;
		const isDark = target.ownerDocument.documentElement.classList.toggle('dark');
		if (target.ownerDocument === document)
			localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
	};
</script>

<svelte:head>
	<script>
		if ('color-theme' in localStorage) {
			localStorage.getItem('color-theme') === 'dark'
				? window.document.documentElement.classList.add('dark')
				: window.document.documentElement.classList.remove('dark');
		} else {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches)
				window.document.documentElement.classList.add('dark');
		}
	</script>
</svelte:head>

<button on:click={toggleTheme} type="button" aria-label="Toggle dark mode" class="square-button">
	<span class="hidden dark:block">
		<Sun />
	</span>
	<span class="block dark:hidden">
		<Moon />
	</span>
</button>
