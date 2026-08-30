import adapterStatic from '@sveltejs/adapter-static'
import adapterNode from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const isSsg = process.env.VITE_BUILD_TARGET === 'ssg'

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: isSsg
			? adapterStatic({
					pages: 'dist',
					fallback: '404.html',
				})
			: adapterNode({
					out: 'build',
				}),
	},
}
