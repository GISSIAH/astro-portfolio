/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			width:{
				300:"300px"
			},
			height:{
				300:"300px",
				200:"200px"
			}
		},
	},
	plugins: [],
}
