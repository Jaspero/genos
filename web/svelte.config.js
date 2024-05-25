import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: '../public/web',
      fallback: 'index.html',
      strict: false
    }),
    prerender: {
      crawl: true,
      entries: [
        '/sitemap'
      ]
    }
  },
  preprocess: vitePreprocess(),
  vitePlugin: {
    inspector: true
  }
};
export default config;
