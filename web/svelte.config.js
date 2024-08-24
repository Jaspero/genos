import adapter from './adapter.js';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { readFileSync } from 'fs';

const buildConfig = JSON.parse(readFileSync('build-config.json'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: '../public/web',
      fallback: 'index.html',
      strict: false,
      clearBuild: buildConfig.clearBuild
    }),
    prerender: {
      crawl: true,
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
