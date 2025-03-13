<script>
	import { SiGithub, SiX, SiInstagram, SiTiktok } from '@icons-pack/svelte-simple-icons';
	import { Mail } from 'lucide-svelte';
	import Linkedin from '$lib/assets/linkedin.svelte';
</script>

<div class="mb-10 flex w-full justify-center" id="contact">
	<div class="flex flex-col items-center space-x-2 space-y-2 mb:flex-row">
		<p class="text-on">©2025 Savy - All rights reserved.</p>
		<div class="rounded-md p-1">
			<div class="flex items-center space-x-2">
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
				<div class="rounded-md p-1 transition-all mb:hover:bg-front">
					<a href="https://www.linkedin.com/company/savyai/" target="_blank">
						<Linkedin />
					</a>
				</div>
				<div class="rounded-md p-1 transition-all mb:hover:bg-front">
					<a href="https://x.com/SavyEIP" target="_blank">
						<SiX color="#FFFFFF" />
					</a>
				</div>
				<div class="rounded-md p-1 transition-all mb:hover:bg-front">
					<a href="https://www.instagram.com/savy_learn/" target="_blank">
						<SiInstagram color="#FFFFFF" />
					</a>
				</div>
				<div class="rounded-md p-1 transition-all mb:hover:bg-front">
					<a href="https://www.tiktok.com/@savy_learn" target="_blank">
						<SiTiktok color="#FFFFFF" />
					</a>
				</div>
			</div>
		</div>
		<p class="text-on">
			Savy is developed by <a href="https://github.com/Savy-EIP" class="underline">Savy-EIP</a>
			for
			<a href="https://www.epitech.eu/" class="underline">Epitech</a>
		</p>
	</div>
</div>
