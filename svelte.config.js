import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		prerender: {
			default: true,
		},
		trailingSlash: 'always',
		paths: {
			base: '/sveltekit-test'
		}
	}
};

export default config;
