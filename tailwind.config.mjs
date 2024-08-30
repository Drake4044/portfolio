/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			screens : {
				"xxs": "410px",
				"xs": "480px",
			}
		},
	},
	plugins: [],
}
