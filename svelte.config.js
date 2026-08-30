import adapterStatic from '@sveltejs/adapter-static'
import adapterNode from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const isSsr = process.env.VITE_BUILD_SSR === 'true'

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: isSsr
			? adapterNode({
					out: 'dist',
				})
			: adapterStatic({
					pages: 'dist',
					fallback: '404.html',
				}),
	},
}
