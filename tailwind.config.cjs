/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
	content: ['./src/**/*.html', './src/**/*.svelte'],
	theme: {
		extend: {
			colors: {
				purple: '#B353AD',
				khaki: '#858039',
				cream: '#EEEAE0',
				pink: '#D0A8D7',
				blackish: '#1F1E1E'
			},
			fontFamily: {
				janguky: ['janguky', 'regular']
			},
			fontSize: {
				h1: '110px',
				h2: '90px'
			}
		}
	},
	plugins: []
};
