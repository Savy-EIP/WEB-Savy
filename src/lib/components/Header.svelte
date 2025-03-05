<script lang="ts">
	import { ChevronUp, List, Mail } from 'lucide-svelte';
	import { Dropdown, DropdownItem, Button } from 'flowbite-svelte';
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
	import Logo from '$lib/assets/logo.svg';
	import HeaderNavigation from '$lib/components/HeaderNavigation.svelte';
	import { onMount } from 'svelte';
	import { fade, scale, fly } from 'svelte/transition';

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

{#if isMobile}
	<div
		class="fixed z-10 flex w-full justify-between border border-front bg-surface80 px-10 py-3 backdrop-blur-md"
	>
		<a href="#home">
			<img src={Logo} alt="savy logo" class="h-7" />
		</a>
		<Button on:click={toggleOpen}>
			{#if dropdownOpen}
				<div in:scale={{ duration: 300 }}>
					<ChevronUp />
				</div>
			{:else}
				<div in:scale={{ duration: 300 }}>
					<List />
				</div>
			{/if}
		</Button>
		<Dropdown class="rounded-md bg-surface p-3 space-y-4">
			<DropdownItem class="mx-4 text-lg text-on" href="#project">Project</DropdownItem>
			<DropdownItem class="mx-4 text-lg text-on" href="#features">Features</DropdownItem>
			<DropdownItem class="mx-4 text-lg text-on" href="#team">Team</DropdownItem>
		</Dropdown>
	</div>
{:else}
	<div class="fixed z-10 mt-7 flex w-full justify-center">
		<div
			class="flex h-12 items-center justify-center space-x-10 rounded-lg border border-front bg-surface80 px-10 backdrop-blur-md"
		>
			<a href="#home">
				<img src={Logo} alt="savy logo" class="h-7" />
			</a>
			<div class="h-5 w-px bg-onSurface"></div>
			<div class="flex space-x-10">
				<HeaderNavigation name={'Project'} route={'#project'} />
				<HeaderNavigation name={'Features'} route={'#features'} />
				<HeaderNavigation name={'Team'} route={'#team'} />
			</div>
			<div class="h-5 w-px bg-onSurface"></div>
			<div class="flex space-x-2">
				<div class="rounded-md p-1 transition-all mb:hover:bg-front">
					<a href="mailto:contact@savy-ai.com">
						<Mail class="h-6 w-6 text-on" />
					</a>
				</div>
				<div class="rounded-md p-1 transition-all mb:hover:bg-front">
					<a href="https://github.com/Savy-EIP" target="_blank">
						<SiGithub color="#FFFFFF" />
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}
