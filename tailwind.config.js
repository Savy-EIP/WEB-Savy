/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				svBack: '#181818',
				svBack95: '#18181895',
				svPurple: '#9C44FF',
			},
			keyframes: {
				colorChange: {
					'0%': { color: '#FFFFFF' },
					'26%': { color: '#DABAFF' },
					'50%': { color: '#9C44FF' },
					'75%': { color: '#DABAFF' },
					'100%': { color: '#FFFFFF' },
				},
				'shine-pulse': {
					'0%': {
						'background-position': '0% 0%',
					},
					'50%': {
						'background-position': '100% 100%',
					},
					to: {
						'background-position': '0% 0%',
					},
				},
			},
			screens: {
				mb: '375px',
				hd: '1920px',
				'2k': '2048px',
				'4k': '3840px',
			},
		},
		animation: {
			colorChange: 'colorChange 1.5s ease-in-out infinite',
		},
	},
	plugins: [],
};
