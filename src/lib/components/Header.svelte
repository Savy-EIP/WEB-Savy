<script lang="ts">
	import SiGithub from './../../../node_modules/@icons-pack/svelte-simple-icons/icons/SiGithub.svelte';
	import Mail from './../../../node_modules/@lucide/svelte/dist/icons/mail.svelte';
	import { _ } from 'svelte-i18n';
	import Button from './Button.svelte';
	import ButtonTheme from './ButtonTheme.svelte';
	import Logo from './Logo.svelte';

	const navigations = [
		{ name: $_('header.solution'), href: '/#solution' },
		{ name: $_('header.AI'), href: '/ai' },
		{ name: $_('header.team'), href: '/team' },
		{ name: $_('header.contact'), href: '#contact' }
	];
</script>

<header
	class="dark:bg-surface-dark/80 bg-surface-light/80 border-front-light dark:border-front-dark fixed top-2 left-1/2 z-10 flex h-auto w-5/6 -translate-x-1/2 transform items-center justify-center space-x-6 rounded-lg border px-6 py-2 shadow backdrop-blur-sm"
>
	<div class="flex w-1/3 items-center justify-start">
		<a href="/">
			<Logo />
		</a>
	</div>

	<nav class="flex w-1/3 items-center justify-center space-x-4">
		{#each navigations as item}
			<a
				href={item.href}
				class="text-onfront-white dark:text-onfront-black hover:text-purple-dark dark:hover:text-purple-light transition-all duration-200"
			>
				{item.name}
			</a>
		{/each}
	</nav>

	<div class="flex w-1/3 items-center justify-end space-x-2">
		<a href="mailto:contact@savy-ai.com" class="square-button">
			<Mail />
		</a>
		<!-- <a
			href="https://github.com/Savy-EIP"
			target="_blank"
			rel="noopener noreferrer"
			class="hover:bg-front-dark rounded-md p-1 transition-all duration-200"
		>
			<SiGithub />
		</a> -->
		<ButtonTheme />
		<Button label={$_('installSavy')} href={'https://tally.so/r/3NgW4Q'} className="h-7 w-40 " />
	</div>
</header>
