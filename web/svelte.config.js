import adapter from './adapter.js';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { readFileSync } from 'fs';

const buildConfig = JSON.parse(readFileSync('build-config.json'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: '../public/web',
      strict: false,
      clearBuild: buildConfig.clearBuild,
      deleted: buildConfig.deteleted || []
    }),
    prerender: {
      crawl: buildConfig.crawl,
      handleMissingId: 'warn',
      entries: buildConfig.pages
    }
  },
  preprocess: vitePreprocess(),
  vitePlugin: {
    inspector: true
  },
  compilerOptions: {
    customElement: true
  }
};
export default config;
