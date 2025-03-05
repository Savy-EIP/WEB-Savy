import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				background: '#0E0E0E',
				surface: '#1f1f1f',
				surface80: 'rgba(31, 31, 31, 0.8)',
				surfaceInverse: '#d0d0d0',
				front: '#2d2d2d',
				primary: '#9C44ff',
				on: '#ffffff',
				onSurface: '#b6b6b6',
				blueSavy: '#2f6dec',
				greenSavy: '#529b51'
			},
			screens: {
				mb: '768px'
			}
		}
	},

	plugins: []
} satisfies Config;
