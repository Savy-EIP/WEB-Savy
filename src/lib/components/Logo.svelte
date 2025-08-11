<script lang="ts">
	import SavyWhite from './../../assets/savy-white.png';
	import SavyBlack from './../../assets/savy-black.png';

	export let height: string = 'h-10';
	export let width: string = 'w-auto';
</script>

<img src={SavyWhite} alt="logo" class="hidden {height} {width} dark:block" />
<img src={SavyBlack} alt="logo" class="block {height} {width} dark:hidden" />
