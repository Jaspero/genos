<script lang="ts">
  import { cartState } from '$lib/cart/cart-state';
  import Meta from '$lib/meta/Meta.svelte';
  import '@jaspero/web-components/dist/alert.wc';
  import '@jaspero/web-components/dist/confirm.wc';
  import { onMount } from 'svelte';
  import '../../../shared/styles/index.pcss';
  import '$lib/styles/a11y.css';
  import '$lib/styles/fonts.css';
  import Navigation from '$lib/Navigation.svelte';
  import Footer from '$lib/Footer.svelte';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { get } from 'svelte/store';
  import { language } from '$lib/stores/language';
  import { langFromPath, pathInLang } from '$lib/i18n/routes';
  import { CONFIG } from '$lib/consts/config.const';

  /**
   * The page decides the language: /usluge is Croatian and /services English, whatever was chosen before.
   * Pages without a language version (tools, account) keep the visitor's last choice (English when prerendering).
   */
  $: syncLanguage($page.url.pathname);

  function syncLanguage(path: string) {
    const routeLang = langFromPath(path);

    if (routeLang) {
      if (get(language) !== routeLang) {
        language.set(routeLang);
      }
    } else if (!browser) {
      language.set('en');
    }
  }

  // Pages without a language version: the plasmid builder, posts and 404 are translated, the others
  // (sign-in, account) are written in English. The header and footer carry their own lang attribute.
  $: if (browser) {
    document.documentElement.lang =
      langFromPath($page.url.pathname) ?? (/^\/(tools|posts)\/|^\/404$/.test($page.url.pathname) ? $language : 'en');
  }

  function skipToContent() {
    const main = document.getElementById('main');
    main?.focus();
    main?.scrollIntoView();
  }

  $: alternates = (['en', 'hr'] as const)
    .map((lang) => ({ lang, path: pathInLang($page.url.pathname, lang) }))
    .filter((a) => a.path);

  /**
   * Firebase (about 100 KB of JavaScript, plus the sign-in frame it loads) is only needed here to
   * restore a saved cart, so it is loaded only when there is one. Pages that use Firebase import it
   * themselves.
   */
  onMount(async () => {
    const items = localStorage.getItem('cart');

    if (!items) {
      return;
    }

    const [{ db, user }, { doc, getDoc }] = await Promise.all([
      import('$lib/utils/firebase'),
      import('firebase/firestore')
    ]);
    const userDoc: any = get(user);
    let currentCartState = JSON.parse(items);

    if (userDoc && userDoc.cartItems) {
      if (currentCartState && currentCartState.cartUpdate) {
        if (currentCartState.cartUpdate < userDoc.cartUpdate) {
          currentCartState = {
            cartItems: userDoc.cartItems
          };
        }
      } else {
        currentCartState = {
          cartItems: userDoc.cartItems
        };
      }
    }

    if (currentCartState && currentCartState.cartItems) {
      const cartItems = await Promise.all(
        currentCartState.cartItems.map(async (product) => {
          const productSnapshot = await getDoc(doc(db, 'products', product.id));
          if (productSnapshot.exists()) {
            const productData = productSnapshot.data();
            return {
              ...productData,
              id: product.id,
              selectedVariant: product.selectedVariant
            };
          }

          return null;
        })
      );
      cartState.set(cartItems);
    }
  });
</script>

<svelte:head>
  {#each alternates as alt}
    <link rel="alternate" hreflang={alt.lang} href={CONFIG.websiteUrl + alt.path} />
  {/each}
  {#if alternates.length}
    <link rel="alternate" hreflang="x-default" href={CONFIG.websiteUrl + alternates[0].path} />
  {/if}
</svelte:head>

<!-- <base href="/"> would turn a bare "#main" into a link to the home page, so the path is included and focus is moved here. -->
<a class="skip-link" href={$page.url.pathname + '#main'} lang={$language} on:click|preventDefault={skipToContent}>{$language === 'en' ? 'Skip to content' : 'Preskoči na sadržaj'}</a>

<Navigation></Navigation>

<div class="bg"></div>

<main id="main" tabindex="-1">
  <slot />
</main>

<Meta />

<Footer></Footer>

<style>
  .bg {
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-image: url(/images/texture.svg);
  }
</style>