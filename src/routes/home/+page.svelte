<script>
	import { onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import LogoAnimated from '$lib/icons/logo-animated.svelte';
	import LogoStatic from '$lib/icons/logo-static.svelte';
	import WipEip from '$lib/icons/wip-eip.svelte';
	import SavyDot from '$lib/icons/savy-dot.svelte';
	import Card from '$lib/components/card.svelte';
	import fight from '$lib/img/savy_won_duo1.png';
	import Github from '$lib/icons/github.svg';
	import BoxReveal from '$lib/components/box-reveal.svelte';
	import ShineBorder from '$lib/components/shine-border.svelte';

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
		<div class="fixed w-full p-2 md:p-4 z-50">
			<div
				class="flex flex-col md:flex-row justify-center md:justify-normal items-center p-4 bg-svBack md:bg-opacity-95 rounded-xl header"
			>
				<a href="/" class="flex w-1/4 justify-center">
					<LogoStatic ratio={ratioSavyLogo} />
				</a>
				<div
					class="flex md:flex-row justify-around w-full md:w-2/4 space-y-2 md:space-y-0 space-x-2 md:space-x-0 tab"
				>
					<a href="#home" class="text-lg md:text-xl 2k:text-3xl 4k:text-4xl equilibrate">Home</a>
					<a href="#project" class="text-lg md:text-xl 2k:text-3xl 4k:text-4xl">Project</a>
					<a href="#features" class="text-lg md:text-xl 2k:text-3xl 4k:text-4xl">Features</a>
					<a href="#team" class="text-lg md:text-xl 2k:text-3xl 4k:text-4xl">Team</a>
					<a href="#contact" class="text-lg md:text-xl 2k:text-3xl 4k:text-4xl">Contact</a>
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
		<div id="project" class="flex w-full justify-center items-center">
			<div class="flex flex-col justify-center items-center mt-32">
				<BoxReveal>
					<div class="flex pb-8">
						<h1 class="text-4xl 2k:text-5xl 4k:text-6xl pr-4">PROJECT</h1>
						<LogoAnimated ratio={ratioSavyLogo} />
					</div>
				</BoxReveal>
				<div class="flex flex-col gap-y-8 mx-8 md:mx-20">
					<BoxReveal>
						<h4 class="text-2xl md:text-4xl 2k:text-5xl 4k:text-6xl pb-4">What is SAVY?</h4>
						<p class="text:lg md:text-2xl 2k:text-3xl 4k:text-4xl">
							Savy is a language learning solution powered with <strong class="text-svPurple"
								>artificial intelligence (AI)</strong
							>
							. Our aim is to simulate as much of the environment as possible for maximum written and
							spoken interaction with different
							<strong class="text-svPurple">Echos (AI)</strong> where they have mulitples accents
							and personalities. We offer lessons or discussions to perfect your language. All this
							will be supervised by your <strong class="text-svPurple">SAVY assistant</strong>, who
							will personalize your course and correct any errors in spelling, syntax, meaning,
							pronunciation...
						</p>
					</BoxReveal>
					<BoxReveal>
						<h4 class="text-2xl md:text-4xl 2k:text-5xl 4k:text-6xl pb-4">Why SAVY?</h4>
						<p class="text:lg md:text-2xl 2k:text-3xl 4k:text-4xl">
							Based on the word "savvy" which means "<strong class="text-svPurple"
								>knowledgeable</strong
							>", we remove the "v" to make it a unique name for the application and the assistant,
							easy to remember and pronounce
						</p>
					</BoxReveal>
					<BoxReveal>
						<h4 class="text-2xl md:text-4xl 2k:text-5xl 4k:text-6xl pb-4">Who are the Echos?</h4>
						<p class="text:lg md:text-2xl 2k:text-3xl 4k:text-4xl">
							The Echos are the AI that you will interact with. They are each <strong
								class="text-svPurple">unique</strong
							>
							and have their
							<strong class="text-svPurple">own personality</strong>, accent and 3D model.
						</p>
					</BoxReveal>
				</div>
			</div>
		</div>

		<!-- Features content -->
		<div id="features" class="flex flex-col w-full items-center py-44 md:pt-0 my-32">
			<div class="pt-16">
				<BoxReveal>
					<div class="flex items-baseline">
						<h1 class="text-3xl md:text-5xl 2k:text-6xl 4k:text-7xl mb-24 pr-1 2k:pr-2 4k:pr-3">
							FEATURES
						</h1>
						<SavyDot ratio={ratioWIP} />
					</div>
				</BoxReveal>
			</div>
			<BoxReveal>
				<div
					class="flex flex-col md:flex-row justify-around items-center md:items-start gap-y-12 md:gap-y-0 w-screen"
				>
					<ShineBorder>
						<div class="flex flex-col w-64 md:w-96 w-128 w-256 p-4">
							<h1
								class="text-center text-2xl md:text-4xl 2k:text-6xl 4k:text-7xl pb-2 2k:pb-4 4k:pb-8"
							>
								Discussions
							</h1>
							<hr />
							<h2
								class="text-xl md
							:text-2xl 2k:text-4xl 4k:text-5xl pt-2 2k:pt-4 4k:pt-8"
							>
								You can discuss with the Echos on different topics or situations in oral or written
								form.
							</h2>
						</div>
					</ShineBorder>
					<ShineBorder>
						<div class="flex flex-col w-64 md:w-96 w-128 w-256 p-4">
							<h1
								class="text-center text-2xl md:text-4xl 2k:text-6xl 4k:text-7xl pb-2 2k:pb-4 4k:pb-8"
							>
								Savy AI
							</h1>
							<hr />
							<h2
								class="text-xl md
						:text-2xl 2k:text-4xl 4k:text-5xl pt-2 2k:pt-4 4k:pt-8"
							>
								Savy will correct, suggest and help you to improve your language skills when you
								speak or write with the Echos. He gives you feedback on your pronunciation, grammar,
								vocabulary, and more.
							</h2>
						</div>
					</ShineBorder>
					<ShineBorder>
						<div class="flex flex-col w-64 md:w-96 w-128 w-256 p-4">
							<h1
								class="text-center text-2xl md:text-4xl 2k:text-6xl 4k:text-7xl pb-2 2k:pb-4 4k:pb-8"
							>
								Lessons
							</h1>
							<hr />
							<h2
								class="text-xl md
					:text-2xl 2k:text-4xl 4k:text-5xl pt-2 2k:pt-4 4k:pt-8"
							>
								You can take lessons based on your level and your needs. The lessons are
								personalized and adapted to your progress.
							</h2>
						</div>
					</ShineBorder>
				</div>
			</BoxReveal>
			<BoxReveal>
				<div
					class="flex flex-col md:flex-row justify-around items-center md:items-start w-screen gap-y-12 pt-12 md:gap-y-0 md:pt-24"
				>
					<ShineBorder>
						<div class="flex flex-col w-64 md:w-96 w-128 w-256 p-4">
							<h1
								class="text-center text-2xl md:text-4xl 2k:text-6xl 4k:text-7xl pb-2 2k:pb-4 4k:pb-8"
							>
								Progress
							</h1>
							<hr />
							<h2
								class="text-xl md
							:text-2xl 2k:text-4xl 4k:text-5xl pt-2 2k:pt-4 4k:pt-8"
							>
								You can track your progress and see your improvements over time.
							</h2>
						</div>
					</ShineBorder>
					<ShineBorder>
						<div class="flex flex-col w-64 md:w-96 w-128 w-256 p-4">
							<h1
								class="text-center text-2xl md:text-4xl 2k:text-6xl 4k:text-7xl pb-2 2k:pb-4 4k:pb-8"
							>
								Multiple languages handled
							</h1>
							<hr />
							<h2
								class="text-xl md
						:text-2xl 2k:text-4xl 4k:text-5xl pt-2 2k:pt-4 4k:pt-8"
							>
								You can learn multiple languages with Savy. The Echos can speak and understand
								multiple languages.
							</h2>
						</div>
					</ShineBorder>
				</div>
			</BoxReveal>
		</div>

		<!-- Team content -->
		<div id="team" class="flex flex-col w-full justify-center items-center pb-44">
			<BoxReveal>
				<div class="flex items-baseline">
					<h1 class="text-3xl md:text-5xl 2k:text-6xl 4k:text-7xl mb-24 pr-1 2k:pr-2 4k:pr-3">
						TEAM
					</h1>
					<SavyDot ratio={ratioWIP} />
				</div>
			</BoxReveal>
			<BoxReveal>
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
							<Card name={'Christopher Artigas'} job={'Product Owner & AI Developer'} />
						</a>
					</div>
					<div class="flex justify-center w-full md:w-1/3">
						<a href="https://github.com/AntoninLaudon">
							<Card name={'Antonin Laudon'} job={'AI Developer'} />
						</a>
					</div>
				</div>
			</BoxReveal>
		</div>

		<div class="w-auto h-1 mt-10 md:mt-0 bg-svPurple bg-opacity-70 mx-10"></div>
		<!-- Contact content -->
		<div
			id="contact"
			class="flex flex-col md:flex-row w-full h-52 justify-center items-center gap-y-16 md:gap-y-0 md:gap-x-16 contact"
		>
			<a href={`mailto:${email}`} class="text-2xl md:text-4xl 2k:text-5xl 4k:text-6xl">{email}</a>
			<a href="https://github.com/Savy-EIP" target="_blank">
				<img src={Github} alt="github logo" class="h-8 w-8" />
			</a>
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
		background: radial-gradient(circle, #9c44ff 0%, #000 20%);
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
	.tab a:active {
		transform: scale(0.95);
	}
	.equilibrate {
		--tw-space-y-reverse: 0;
		margin-top: calc(0.5rem /* 8px */ * calc(1 - var(--tw-space-y-reverse)));
		margin-bottom: calc(0.5rem /* 8px */ * var(--tw-space-y-reverse));
	}

	@media (min-width: 768px) {
		.header a {
			position: relative;
			display: inline-block;
			text-decoration: none;
			transition: transform 0.3s ease-in-out;
		}

		.tab a:hover {
			transform: scale(1.05);
		}

		.tab a::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: -2px;
			width: 100%;
			height: 2px;
			background-color: currentColor;
			transform: scaleX(0);
			transform-origin: left;
			transition: transform 0.3s ease-in-out;
		}

		.tab a:hover::after {
			transform: scaleX(1);
		}

		.equilibrate {
			--tw-space-y-reverse: 0;
			margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
			margin-bottom: calc(0px * var(--tw-space-y-reverse));
		}

		.contact a {
			transition: transform 0.3s ease-in-out;
		}

		.contact a:hover {
			transform: scale(1.1);
		}
	}
</style>
