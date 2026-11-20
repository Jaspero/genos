import adapter from './adapter.js';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { readFileSync } from 'fs';

const buildConfig = JSON.parse(readFileSync('build-config.json'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: '../public/web',
      fallback: '200.html',
      strict: false,
      clearBuild: buildConfig.clearBuild,
      deleted: buildConfig.deleted || []
    }),
    prerender: {
      crawl: buildConfig.crawl,
      handleMissingId: 'warn',
      entries: buildConfig.pages
    }
  },
  preprocess: vitePreprocess(),
  vitePlugin: {
    inspector: true,
    /**
     * Only the page-builder blocks (pb-*) are custom elements. Compiling every other component
     * (navigation, footer, pages) as a custom element made Svelte inject their styles with
     * JavaScript, so the prerendered header and footer were unstyled until the app started
     * and the page jumped (layout shift). Their CSS is now emitted into the stylesheet.
     */
    dynamicCompileOptions({ filename }) {
      return { customElement: filename.includes('/routes/[...url]/components/') };
    }
  },
  compilerOptions: {
    customElement: true
  }
};
export default config;
