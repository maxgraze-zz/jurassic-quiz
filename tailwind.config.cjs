/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
	content: ['./src/**/*.html', './src/**/*.svelte'],
	theme: {
		extend: {
			colors: {
				purple: '#B353AD',
				khaki: '#858039',
				cream: '#F1EDD3',
				blackish: '#1F1E1E'
			},
			fontFamily: {
				janguky: ['janguky', 'regular']
			}
		}
	},
	plugins: []
};
