<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import Header from '$lib/components/Header.svelte';
	import Card from '$lib/components/Card.svelte';
	import listTeam from '$lib/data/team';
	import Footer from '$lib/components/Footer.svelte';
	import { SiAndroid, SiApple } from '@icons-pack/svelte-simple-icons';
	import { onMount } from 'svelte';
	import Background from '$lib/components/Background.svelte';

	let isAppleDevice = false;
	let isMobileView = false;

	onMount(() => {
		const userAgent = navigator.userAgent.toLowerCase();
		isAppleDevice = /iphone|ipad|ipod|mac/.test(userAgent);

		checkMobileView();

		window.addEventListener('resize', checkMobileView);

		return () => {
			window.removeEventListener('resize', checkMobileView);
		};
	});

	function checkMobileView() {
		isMobileView = window.innerWidth < 768;
	}
</script>

<div class="relative h-full w-full">
	<Background starCount={20} starColor="#5E2999" minStarSize={0} maxStarSize={2} />
	<div class="relative z-10">
		<Header />
		<div
			id="home"
			class="flex h-screen w-full flex-col items-center justify-between space-y-2 overflow-hidden py-24 md:py-16 mb:space-y-5"
		>
			<div class="h-1 w-full bg-transparent"></div>
			<div class="flex w-full flex-col items-center space-y-4 md:space-y-8">
				<h1
					class="title animated-title text-center text-2xl font-bold text-white drop-shadow-lg mb:text-6xl"
				>
					Learn by discussing,<br />
					progress by practicing.
				</h1>
				<h1
					class="animated-subtitle title text-center text-xl font-medium text-surfaceInverse drop-shadow-lg mb:text-2xl"
				>
					Your new powerful application to learn, effectively, a language.
				</h1>
			</div>

			<div
				class="flex w-full flex-col items-center justify-center space-x-0 space-y-6 md:flex-row md:space-x-6 md:space-y-0"
			>
				<a
					href="https://forms.gle/w3PQvpLnB8PvrSDB6"
					target="_blank"
					class="text-md inline-flex animate-shine items-center justify-center rounded-xl border border-front bg-[linear-gradient(110deg,#000103,45%,#9C44ff,55%,#000103)] bg-[length:200%_100%] px-4 py-2 font-medium text-surfaceInverse transition-colors"
				>
					Join beta test
				</a>
				<!-- {#if !isMobileView || (isMobileView && isAppleDevice)}
				<button
					class="flex cursor-not-allowed items-center justify-center space-x-2 rounded-md bg-white px-3 py-2 text-black transition duration-300 ease-in-out hover:text-blueSavy"
					disabled
				>
					<SiApple size={16} />
					<p>Download on iOS</p>
				</button>
			{/if}
			{#if !isMobileView || (isMobileView && !isAppleDevice)}
				<button
					class="flex cursor-not-allowed items-center justify-center space-x-2 rounded-md bg-white px-3 py-2 text-black transition duration-300 ease-in-out hover:text-greenSavy"
					disabled
				>
					<SiAndroid size={16} />
					<p>Download on Android</p>
				</button>
			{/if} -->
			</div>
		</div>

		<div id="project" class="flex w-screen flex-col items-center space-y-20">
			<div class="mt-20 flex w-5/6 flex-col items-center space-y-5 mb:w-2/3">
				<Title title="Learn language differently." subtitle="Write, speak about what you like." />
				<p class="text-md w-full text-white mb:text-lg">
					Our language learning solution powered with <strong class="text-primary"
						>artificial intelligence (AI)</strong
					>. Our aim is to simulate as much of the environment as possible for maximum written and
					spoken interaction with different <strong class="text-primary">Echos (AI)</strong> where
					they have multiples accents and personalities. We offer lessons or discussions to perfect
					your language. All this will be supervised by your
					<strong class="text-primary">SAVY assistant</strong>, who will personalize your course and
					correct any errors in spelling, syntax, meaning, pronunciation...
				</p>
			</div>
			<div class="flex w-5/6 flex-col items-center space-y-5 mb:w-2/3">
				<Title title="Savy." subtitle="Simple and easy." />
				<p class="text-md w-full text-white mb:text-lg">
					Based on the word "savvy" which means "<strong class="text-primary">knowledgeable</strong
					>", we remove the "v" to make it a unique name for the application and the assistant, easy
					to remember and pronounce
				</p>
			</div>
			<div class="flex w-5/6 flex-col items-center space-y-5 mb:w-2/3">
				<Title title="Who are the Echoes?" subtitle="Unique in all terms." />
				<p class="text-md w-full text-white mb:text-lg">
					The Echos are the AI that you will interact with. They are each <strong
						class="text-primary">unique</strong
					>
					and have their own
					<strong class="text-primary">personality</strong>, accent and 3D model.
				</p>
			</div>
		</div>

		<div class="my-10 flex w-screen justify-center">
			<div class="h-0.5 w-3/5 bg-on"></div>
		</div>

		<div id="features" class="flex w-screen flex-col items-center space-y-5">
			<Title title="Learning has never been easier." subtitle="All you need is here." />
			<Card
				title="Discussion"
				subtitle="You can discuss with the Echoes on different topics or situations in oral or written form based on your current level of language."
			/>
			<Card
				title="Savy AI"
				subtitle="Savy will correct, suggest and help you to improve your language skills when you speak or write with the Echos. He gives you feedback on your pronunciation, grammar, vocabulary, and more."
			/>
			<Card
				title="Lesson"
				subtitle="You can take lessons with the Echoes to improve your language skills. The lessons are personalized according to your level."
			/>
			<Card
				title="Progress"
				subtitle="You can track your progress and see your improvements over time to help you to understand and see the key points to improve."
			/>
			<Card
				title="Multiples Languages Handled"
				subtitle="You can learn multiple languages with Savy. The Echos can speak and understand multiple languages."
			/>
		</div>

		<div class="my-10 flex w-screen justify-center">
			<div class="h-0.5 w-3/5 bg-on"></div>
		</div>

		<div id="team" class="flex w-screen flex-col items-center space-y-5">
			<Title title="The team on this project." subtitle="Determinate and passionate." />

			<div class="w- flex w-5/6 flex-wrap items-start justify-center mb:w-3/5">
				{#each listTeam as member}
					<a href={member.github} target="_blank" class="m-3">
						<Card
							title={member.name}
							subtitle={member.role}
							isCentered={true}
							activeHover={true}
							width={'w-72 md:w-96'}
						/>
					</a>
				{/each}
			</div>
		</div>

		<div class="my-10 flex w-screen justify-center">
			<div class="h-0.5 w-3/5 bg-on"></div>
		</div>

		<Footer />
	</div>
</div>

<style>
	.title {
		font-family: 'Vision', sans-serif;
	}

	.animated-title {
		background: linear-gradient(90deg, #ffffff, #ffffff, #9c44ff, #ffffff, #ffffff);
		background-size: 200% auto;
		color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		animation: shine 5s linear infinite;
	}

	.animated-subtitle {
		background: linear-gradient(90deg, #b6b6b6, #b6b6b6, #ffffff, #b6b6b6, #b6b6b6);
		background-size: 200% auto;
		color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		animation: shine 5s linear infinite;
	}

	@keyframes shine {
		from {
			background-position: 200% center;
		}
		to {
			background-position: 0% center;
		}
	}
</style>
