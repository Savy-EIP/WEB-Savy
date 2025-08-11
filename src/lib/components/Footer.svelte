<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';
</script>

<footer
	class="bg-surface-light dark:bg-surface-dark flex h-auto w-full flex-col items-center justify-center gap-y-2 py-4 md:flex-row md:gap-y-0"
	id="contact"
>
	<div class="mb-auto flex w-2/3 flex-col md:w-1/6">
		<h2 class="vision text-xl font-bold md:text-lg">{$_('application')}</h2>
		<nav class="mt-0.5 flex flex-col space-y-1 text-sm md:mt-2">
			<a href="/download" class="footer-button"
				>{$_('installSavy')} <ArrowUpRight class="size-3" /></a
			>
			<a
				href="https://tally.so/r/mZgJ9A"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button">{$_('giveUsFeedback')} <ArrowUpRight class="size-3" /></a
			>
		</nav>
	</div>
	<div class="mb-auto flex w-2/3 flex-col md:w-1/6">
		<h2 class="vision text-xl font-bold md:text-lg">{$_('company')}</h2>
		<nav class="mt-0.5 flex flex-col space-y-1 text-sm md:mt-2">
			<a
				href="https://privacy-policy.savy-ai.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button">{$_('privacyPolicy')}</a
			>
			<a
				href="https://terms-of-use.savy-ai.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button">{$_('termsOfUse')}</a
			>
			<a
				href="https://www.epitech.eu/programme-grande-ecole-informatique/innovation-track/"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button">Epitech Innovative Project</a
			>
			<a href="mailto:contact@savy-ai.com" class="footer-button"
				>{$_('contactUs')} <ArrowUpRight class="size-3" /></a
			>
		</nav>
	</div>
	<div class="flex w-2/3 flex-col items-start justify-between md:w-1/6">
		<h2 class="vision text-xl font-bold md:text-lg">{$_('socialMedia')}</h2>
		<nav class="mt-0.5 flex flex-col space-y-1 text-sm md:mt-2">
			<a
				href="https://github.com/Savy-EIP"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button">GitHub <ArrowUpRight class="size-3" /></a
			>
			<a
				href="https://www.instagram.com/savy_learn/"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button">Instagram <ArrowUpRight class="size-3" /></a
			>
			<a
				href="https://www.tiktok.com/@savy_learn"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button">TikTok <ArrowUpRight class="size-3" /></a
			>
			<a
				href="https://www.linkedin.com/company/savyai/"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button">Linkedin <ArrowUpRight class="size-3" /></a
			>
			<a
				href="https://x.com/SavyEIP"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button">X <ArrowUpRight class="size-3" /></a
			>
		</nav>
	</div>
</footer>
