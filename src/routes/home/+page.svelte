<script>
	import { onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import LogoAnimated from '$lib/icons/logo-animated.svelte';
	import LogoStatic from '$lib/icons/logo-static.svelte';
	import WipEip from '$lib/icons/wip-eip.svelte';
	import SavyDot from '$lib/icons/savy-dot.svelte';
	import Card from '$lib/components/card.svelte';
	import fight from '$lib/img/savy_won_duo1.png';

	let showContent = false;
	let showFight = false;
	const email = 'savy.eip@gmail.com';

	function toggleFight() {
		showFight = !showFight;
	}

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
		<div id="home" class="flex w-full h-screen justify-center items-center pulse-gradient">
			<button class="text-4xl cursor-default" on:click={toggleFight}>
				{#if showFight}
					<img src={fight} alt="fight" />
				{:else}
					<WipEip />
				{/if}
			</button>
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
			<div class="flex items-baseline">
				<h1 class="text-5xl mb-24 pr-1">TEAM</h1>
				<SavyDot />
			</div>
			<div class="flex flex-wrap w-screen gap-y-8 teams">
				<div class="flex justify-center w-1/3">
					<a href="https://github.com/StEgo2103">
						<Card name={'Luca Deltort'} job={'iOS Developer'} />
					</a>
				</div>
				<div class="flex justify-center w-1/3">
					<a href="https://github.com/chaquentin">
						<Card name={'Quentin Challon'} job={'Scrum Master'} />
					</a>
				</div>
				<div class="flex justify-center w-1/3">
					<a href="https://github.com/yomlaiolo">
						<Card name={'Tom Laiolo'} job={'Android Developer'} />
					</a>
				</div>

				<div class="flex justify-center w-1/3">
					<a href="https://github.com/TerryMazzoni">
						<Card name={'Terry Mazzoni'} job={'Back-end Developer'} />
					</a>
				</div>
				<div class="flex justify-center w-1/3">
					<a href="https://github.com/ArtigasChristopher">
						<Card name={'Christopher Artigas'} job={'AI Developer'} />
					</a>
				</div>
				<div class="flex justify-center w-1/3">
					<a href="https://github.com/AntoninLaudon">
						<Card name={'Antonin Laudon'} job={'AI Developer'} />
					</a>
				</div>
			</div>
		</div>

		<!-- Contact content -->
		<div id="contact" class="flex w-full h-screen justify-center items-center">
			<a href={`mailto:${email}`} class="text-4xl">{email}</a>
		</div>
	</div>
{/if}

<style>
	.pulse-gradient::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(circle, #9c44ff 0%, #000000 20%);
		animation: pulse 3s infinite;
		z-index: -1;
		border-radius: inherit;
	}

	@keyframes pulse {
		0% {
			transform: scale(0.8);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(0.8);
		}
	}
</style>
