<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';
</script>

<footer
	class="bg-surface-light dark:bg-surface-dark flex h-auto w-full items-center justify-center py-2" id="contact"
>
	<div class="mb-auto flex w-1/6 flex-col">
		<h2 class="vision text-lg font-bold">{$_('application')}</h2>
		<nav class="mt-2 flex flex-col space-y-1 text-sm">
			<a
				href="https://tally.so/r/3NgW4Q"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button"
				>{$_('joinAlpha')} <ArrowUpRight class="size-3" /></a
			>
			<a
				href="https://tally.so/r/mZgJ9A"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button"
				>{$_('giveUsFeedback')} <ArrowUpRight class="size-3" /></a
			>
		</nav>
	</div>
	<div class="mb-auto flex w-1/6 flex-col">
		<h2 class="vision text-lg font-bold">{$_('company')}</h2>
		<nav class="mt-2 flex flex-col space-y-1 text-sm">
			<a
				href="https://privacy-policy.savy-ai.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button"
				>{$_('privacyPolicy')}</a
			>
			<a
				href="https://terms-of-use.savy-ai.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button"
				>{$_('termsOfUse')}</a
			>
			<a
				href="/us"
				class="footer-button"
				>{$_('aboutUs')}</a
			>
			<!-- <a
				href="/"
				class="footer-button"
				>Epitech Innovative Project</a
			> -->
			<a
				href="mailto:contact@savy-ai.com"
				class="footer-button"
				>{$_('contactUs')} <ArrowUpRight class="size-3" /></a
			>
		</nav>
	</div>
	<div class="flex w-1/6 flex-col items-start justify-between">
		<h2 class="vision text-lg font-bold">{$_('socialMedia')}</h2>
		<nav class="mt-2 flex flex-col space-y-1 text-sm">
			<a
				href="https://github.com/Savy-EIP"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button"
				>GitHub <ArrowUpRight class="size-3" /></a
			>
			<a
				href="https://www.instagram.com/savy_learn/"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button"
				>Instagram <ArrowUpRight class="size-3" /></a
			>
			<a
				href="https://www.tiktok.com/@savy_learn"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button"
				>TikTok <ArrowUpRight class="size-3" /></a
			>
			<a
				href="https://www.linkedin.com/company/savyai/"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button"
				>Linkedin <ArrowUpRight class="size-3" /></a
			>
			<a
				href="https://x.com/SavyEIP"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-button"
				>X <ArrowUpRight class="size-3" /></a
			>
		</nav>
	</div>
</footer>
