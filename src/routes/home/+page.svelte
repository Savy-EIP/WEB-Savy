<script>
	import LogoAnimated from './../../lib/icons/logo-animated.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import LogoStatic from '$lib/icons/logo-static.svelte';
	import Card from '$lib/components/card.svelte';

	let showContent = false;
	const email = 'savy.eip@gmail.com';

	onMount(() => {
		showContent = true;
	});

	onDestroy(() => {
		showContent = false;
	});
</script>

{#if showContent}
	<div transition:fade>
		<!-- Navbar -->
		<div class=" fixed w-full p-4 z-10">
			<div class="flex flex-row items-center p-4 bg-svBack95 rounded-xl">
				<a href="/" class="w-1/5">
					<LogoStatic ratio={0.5} />
				</a>
				<div class="flex flex-row justify-around w-3/5">
					<a href="#home" class="text-xl hover:animate-colorChange">Home</a>
					<a href="#project" class="text-xl hover:animate-colorChange">Project</a>
					<a href="#team" class="text-xl hover:animate-colorChange">Team</a>
					<a href="#contact" class="text-xl hover:animate-colorChange">Contact</a>
				</div>
			</div>
		</div>

		<!-- Home content -->
		<div id="home" class="flex w-full h-screen justify-center items-center">
			<h1 class="text-4xl">WORK IN PROGRESS</h1>
		</div>

		<!-- Project content -->
		<div id="project" class="flex w-full h-screen justify-center items-center">
			<div class="flex">
				<h1 class="text-4xl pr-4">PROJECT</h1>
				<LogoAnimated ratio={0.5} />
			</div>
		</div>

		<!-- Team content -->
		<div id="team" class="flex flex-col w-full h-screen justify-center items-center">
			<h1 class="text-5xl underline mb-24">TEAM</h1>
			<div class="flex flex-wrap w-screen gap-y-8">
				<div class="flex justify-center w-1/3">
					<Card name={'Luca Deltort'} job={'iOS Developer'} />
				</div>
				<div class="flex justify-center w-1/3">
					<Card name={'Quentin Challon'} job={'Scrum Master'} />
				</div>
				<div class="flex justify-center w-1/3">
					<Card name={'Tom Laiolo'} job={'Android Developer'} />
				</div>

				<div class="flex justify-center w-1/3">
					<Card name={'Terry Mazzoni'} job={'Back-end Developer'} />
				</div>
				<div class="flex justify-center w-1/3">
					<Card name={'Christopher Artigas'} job={'AI Developer'} />
				</div>
				<div class="flex justify-center w-1/3">
					<Card name={'Antonin Laudon'} job={'AI Developer'} />
				</div>
			</div>
		</div>

		<!-- Contact content -->
		<div id="contact" class="flex w-full h-screen justify-center items-center">
			<a href={`mailto:${email}`} class="text-4xl">{email}</a>
		</div>
	</div>
{/if}
