<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { Dropdown, DropdownItem } from 'flowbite-svelte';
	import Button from './Button.svelte';
	import ButtonTheme from './ButtonTheme.svelte';
	import Logo from './Logo.svelte';
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import { ChevronUp, List, Mail } from '@lucide/svelte';

	const navigations = [
		{ name: $_('header.solution'), href: '/#solution' },
		// { name: $_('header.AI'), href: '/ai' },
		{ name: $_('header.team'), href: '/team' },
		{ name: $_('header.contact'), href: '#contact' }
	];

	let isMobile = false;
	let dropdownOpen = false;

	onMount(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth <= 768;
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});

	function toggleOpen() {
		dropdownOpen = !dropdownOpen;
	}
</script>

<header
	class="dark:bg-surface-dark/80 bg-surface-light/80 border-front-light dark:border-front-dark fixed top-2 left-1/2 z-10 flex h-auto w-11/12 -translate-x-1/2 transform items-center justify-between space-x-6 rounded-lg border px-6 py-2 shadow backdrop-blur-sm md:w-5/6 md:justify-center"
>
	<div class="flex w-1/3 items-center justify-start">
		<a href="/">
			<Logo />
		</a>
	</div>

	{#if !isMobile}
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
	{/if}

	<div class="flex w-2/3 items-center justify-end space-x-2 md:w-1/3">
		<a href="mailto:contact@savy-ai.com" class="square-button">
			<Mail />
		</a>
		<ButtonTheme />
		<Button
			label={$_(isMobile ? 'installSavyMobile' : 'installSavy')}
			href={'/download'}
			className="h-7 w-40"
			openInNewTab={false}
		/>
		{#if isMobile}
		<button on:click={toggleOpen}>
			{#if dropdownOpen}
				<div in:scale={{ duration: 300 }}>
					<ChevronUp />
				</div>
			{:else}
				<div in:scale={{ duration: 300 }}>
					<List />
				</div>
			{/if}
		</button>
		<Dropdown class="bg-surface-light dark:bg-surface-dark list-none space-y-4 rounded-md p-3">
			{#each navigations as item}
				<DropdownItem class="mx-4 text-lg text-black dark:text-white" href={item.href}>
					{item.name}
				</DropdownItem>
			{/each}
		</Dropdown>
	{/if}
	</div>
</header>
