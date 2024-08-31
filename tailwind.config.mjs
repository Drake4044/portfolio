/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			screens : {
				"xxs": "410px",
				"xs": "480px",
			},
			animation: {
				'slide-up': 'slideUp 1s ease-out',
			},
			keyframes: {
				slideUp: {
				  '0%': { transform: 'translateY(10%)', opacity: '0' },
				  '100%': { transform: 'translateY(0)', opacity: '1' },
				},
			}
		},
	},
	plugins: [],
}
