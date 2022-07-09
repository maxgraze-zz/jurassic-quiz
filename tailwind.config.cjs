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
			backgroundImage: {
				'split-black-cream': 'linear-gradient(to right, #1F1E1E 50% , #EEEAE0 50%);'
			},
			fontFamily: {
				janguky: ['janguky', 'regular'],
				body: ['Poppins']
			},
			fontSize: {
				h1: '110px',
				h2: '90px'
			}
		}
	},
	plugins: []
};
