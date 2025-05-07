import { browser } from '$app/environment';
import { init, register, locale } from 'svelte-i18n';

register('en', () => import('./lib/locales/en.json'));
register('fr', () => import('./lib/locales/fr.json'));

const defaultLocale = 'en';

init({
	fallbackLocale: 'en',
	initialLocale: browser ? window.navigator.language : defaultLocale
});

export { locale };
