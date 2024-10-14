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
	let ratioSavyLogo = 0.5;
	let ratioWIP = 1;
	const email = 'savy.eip@gmail.com';

	function toggleFight() {
		showFight = !showFight;
	}

	function updateRatio() {
		const width = window.innerWidth;
		if (width < 640) {
			ratioSavyLogo = 0.5;
			ratioWIP = 0.5;
		} else if (width >= 2560 && width < 3840) {
			ratioSavyLogo = 0.75;
			ratioWIP = 1.5;
		} else if (width >= 3840) {
			ratioSavyLogo = 1;
			ratioWIP = 2;
		} else {
			ratioSavyLogo = 0.5;
			ratioWIP = 1;
		}
	}

	onMount(() => {
		showContent = true;
		updateRatio();
		window.addEventListener('resize', updateRatio);
		return () => window.removeEventListener('resize', updateRatio);
	});

	onDestroy(() => {
		showContent = false;
	});
</script>

{#if showContent}
	<div transition:fade>
		<!-- Navbar -->
		<div class="fixed w-full p-4 z-10">
			<div class="flex flex-col md:flex-row justify-center md:justify-normal items-center p-4 bg-svBack95 rounded-xl">
				<a href="/" class="flex w-1/4 justify-center">
					<LogoStatic ratio={ratioSavyLogo} />
				</a>
				<div class="flex md:flex-row justify-around w-full md:w-2/4 space-y-2 md:space-y-0 space-x-2 md:space-x-0">
					<a href="#home" class="text-lg md:text-xl 2k:text-3xl 4k:text-4xl equilibrate hover:animate-colorChange"
						>Home</a
					>
					<a href="#project" class="text-lg md:text-xl 2k:text-3xl 4k:text-4xl hover:animate-colorChange">Project</a>
					<a href="#team" class="text-lg md:text-xl 2k:text-3xl 4k:text-4xl hover:animate-colorChange">Team</a>
					<a href="#contact" class="text-lg md:text-xl 2k:text-3xl 4k:text-4xl hover:animate-colorChange">Contact</a>
				</div>
			</div>
		</div>

		<!-- Home content -->
		<div id="home" class="flex w-full h-screen justify-center items-center pulse-gradient">
			<button class="text-4xl cursor-default" on:click={toggleFight}>
				{#if showFight}
					<img src={fight} alt="fight" />
				{:else}
					<WipEip ratio={ratioWIP} />
				{/if}
			</button>
		</div>

		<!-- Project content -->
		<div id="project" class="flex w-full h-screen justify-center items-center">
			<div class="flex">
				<h1 class="text-4xl 2k:text-5xl 4k:text-6xl pr-4">PROJECT</h1>
				<LogoAnimated ratio={ratioSavyLogo} />
			</div>
		</div>

		<!-- Team content -->
		<div id="team" class="flex flex-col w-full h-screen justify-center items-center">
			<div class="flex items-baseline">
				<h1 class="text-3xl md:text-5xl 2k:text-6xl 4k:text-7xl mb-24 pr-1 2k:pr-2 4k:pr-3">TEAM</h1>
				<SavyDot ratio={ratioWIP} />
			</div>
			<div class="flex flex-wrap w-screen gap-y-4 md:gap-y-8 2k:gap-y-16 4k:gap-y-32">
				<div class="flex justify-center w-full md:w-1/3">
					<a href="https://github.com/StEgo2103">
						<Card name={'Luca Deltort'} job={'iOS Developer'} />
					</a>
				</div>
				<div class="flex justify-center w-full md:w-1/3">
					<a href="https://github.com/yomlaiolo">
						<Card name={'Tom Laiolo'} job={'Android Developer'} />
					</a>
				</div>
				<div class="flex justify-center w-full md:w-1/3">
					<a href="https://github.com/chaquentin">
						<Card name={'Quentin Challon'} job={'Scrum Master'} />
					</a>
				</div>
				<div class="flex justify-center w-full md:w-1/3">
					<a href="https://github.com/TerryMazzoni">
						<Card name={'Terry Mazzoni'} job={'Back-end Developer'} />
					</a>
				</div>
				<div class="flex justify-center w-full md:w-1/3">
					<a href="https://github.com/ArtigasChristopher">
						<Card name={'Christopher Artigas'} job={'AI Developer'} />
					</a>
				</div>
				<div class="flex justify-center w-full md:w-1/3">
					<a href="https://github.com/AntoninLaudon">
						<Card name={'Antonin Laudon'} job={'AI Developer'} />
					</a>
				</div>
			</div>
		</div>

		<!-- Contact content -->
		<div id="contact" class="flex w-full h-screen justify-center items-center">
			<a href={`mailto:${email}`} class="text-4xl 2k:text-5xl 4k:text-6xl">{email}</a>
		</div>
	</div>
{/if}

<style>
	.pulse-gradient {
		position: relative;
		overflow: hidden;
		border-radius: inherit;
	}
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

	.equilibrate {
		--tw-space-y-reverse: 0;
		margin-top: calc(0.5rem /* 8px */ * calc(1 - var(--tw-space-y-reverse)));
		margin-bottom: calc(0.5rem /* 8px */ * var(--tw-space-y-reverse));
	}

	@media (min-width: 768px) {
		.equilibrate {
			--tw-space-y-reverse: 0;
			margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
			margin-bottom: calc(0px * var(--tw-space-y-reverse));
		}
	}
</style>
