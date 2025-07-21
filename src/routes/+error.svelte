<script lang="ts">
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';

  onMount(() => {
    const textElement = document.querySelector('.flex-col');
    if (textElement) {
      textElement.classList.remove('opacity-0');
      textElement.classList.add('opacity-100');
    }
  });
</script>

<div class="flex flex-col items-center justify-center h-screen opacity-0 duration-800 transition-all">
	<h1 class="mb-4 text-2xl font-bold">{$_("404Title")}</h1>
	<a href="/" class="mt-4 text-blue-500 hover:underline">{$_("404Button")}</a>
</div>
