<script lang="ts">
	import LineTitle from '$lib/components/LineTitle.svelte';
	import { _ } from 'svelte-i18n';
	import Antonin from './../../assets/team/antonin.png';
	import Chris from './../../assets/team/chris.png';
	import Luca from './../../assets/team/luca.png';
	import Quentin from './../../assets/team/quentin.png';
	import Terry from './../../assets/team/terry.png';
	import Tom from './../../assets/team/tom.png';
	import LongCard from '$lib/components/LongCard.svelte';
	import Line from '$lib/components/Line.svelte';

	const team = [
		{
			name: 'Antonin',
			image: Antonin,
			linkedin: 'https://www.linkedin.com/in/antonin-laudon-97475b22b/',
			github: 'https://github.com/AntoninLaudon',
			website: ''
		},
		{
			name: 'Chris',
			image: Chris,
			linkedin: 'https://www.linkedin.com/in/christopher-artigas-fuentes/',
			github: 'https://github.com/ArtigasChristopher',
			website: 'https://chrisartigas-ai.notion.site/Portfolio-22648775338c801ab230d073b86fad4f'
		},
		{
			name: 'Luca',
			image: Luca,
			linkedin: 'https://www.linkedin.com/in/luca-deltort/',
			github: 'https://github.com/StEgo2103',
			website: 'https://deltort.net'
		},
		{
			name: 'Quentin',
			image: Quentin,
			linkedin: 'https://www.linkedin.com/in/quentin-challon/',
			github: 'https://github.com/chaquentin',
			website: ''
		},
		{
			name: 'Terry',
			image: Terry,
			linkedin: 'https://www.linkedin.com/in/terry-mazzoni-26900222b/',
			github: 'https://github.com/TerryMazzoni',
			website: ''
		},
		{
			name: 'Tom',
			image: Tom,
			linkedin: 'https://www.linkedin.com/in/tomlaiolo/',
			github: 'https://github.com/yomlaiolo',
			website: ''
		}
	];
</script>

<div class="mx-32 flex h-screen w-auto flex-col items-center pt-32">
	<h4 class="w-full text-4xl">{$_('discoverTeam')}</h4>
	<Line />
	<div class="flex w-full flex-wrap justify-center gap-10 pt-8">
		{#each team as member}
			<LongCard height="h-44">
				<div class="flex h-full w-full items-center gap-2 p-4">
					<img src={member.image} alt={member.name} class="h-28" />
					<div class="flex h-full flex-col items-start justify-between py-4">
						<div class="flex flex-col items-start">
							<h5 class="text-lg font-semibold">{member.name}</h5>
							<h5 class="text-xl font-light">{$_(`team.${member.name}`)}</h5>
						</div>
						<div class="flex gap-2 pt-2 underline">
							<a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
							<a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a>
							{#if member.website}
								<a href={member.website} target="_blank" rel="noopener noreferrer">Website</a>
							{/if}
						</div>
					</div>
				</div>
			</LongCard>
		{/each}
	</div>
</div>
