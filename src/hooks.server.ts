import type { Handle } from '@sveltejs/kit';
import { locale } from 'svelte-i18n';

type SupportedLanguage = 'fr' | 'en';

const title: Record<SupportedLanguage, string> = {
	fr: 'Savy - Parle pour apprendre',
	en: 'Savy - Speak to learn'
};

export const handle: Handle = async ({ event, resolve }) => {
	const defaultLanguage: SupportedLanguage = 'en';
	const langHeader = event.request.headers.get('accept-language');
	let lang: SupportedLanguage = defaultLanguage;

	if (langHeader) {
		const detectedLang = langHeader.split(',')[0];
		const detectedLangCode = detectedLang.split('-')[0];
		if (detectedLangCode === 'fr' || detectedLangCode === 'en') {
			lang = detectedLangCode as SupportedLanguage;
		}
		locale.set(detectedLang);
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('%lang%', lang).replace('%title%', title[lang]);
		}
	});
};
