import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import image from 'svelte-image';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	//was preprocess() before
	preprocess: preprocess({
		...image()
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
