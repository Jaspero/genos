<script lang="ts">
  import { classList } from '$lib/actions/class-list';
  import { page } from '$app/stores';
  import { browser, dev } from '$app/environment';
  import { meta } from '$lib/meta/meta.store';
  import './components';
  import { onMount } from 'svelte';
  import type { Page } from '@sveltejs/kit';

  export let data: {
    content: string;
    title: string;
    image?: string;
    meta: {
      description: string;
      keywords: string;
      structured: string;
      title?: string;
    };
    renderLayout?: boolean;
  };

  let scrolls: Array<{ el: any; className: string; height: number }> = [];
  let y = 0;

  $: scrolled(y);

  const classes: string[] = [];

  meta.set({ title: data.title, ...data.meta });

  if (!data.renderLayout) {
    classes.push('standalone');
  }

  if (browser) {
    pageSetup();
  }

  function scrolled(top: number) {
    scrolls.forEach((scroll) => {
      if (top > scroll.height) {
        scroll.el.classList.add(scroll.className);
      } else if (scroll.el.classList.contains(scroll.className)) {
        scroll.el.classList.remove(scroll.className);
      }
    });
  }

  function pageChange(page: Page) {
    /**
     * Page Links
     */
    document.querySelectorAll<HTMLAnchorElement>('[data-pblink]').forEach((el) => {
      const containes = el.classList.contains('active');
      const href = el.getAttribute('href');

      if (containes && href !== page.url.pathname) {
        el.classList.remove('active');
      } else if (!containes && href === page.url.pathname) {
        el.classList.add('active');
      }
    });

    /**
     * Anchor Lunks
     */
    document.querySelectorAll<HTMLAnchorElement>('[data-pbanchor]').forEach((e) => {
      e.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(e.getAttribute('href') as string);

        if (target) {
          target?.scrollIntoView({
            behavior: e.getAttribute('animation') as 'smooth' | 'instant'
          });
        }
      });
    });

    meta.set({ title: data.title, ...data.meta });

    /**
     * Scroll Listeners
     */
    scrolls = [];

    document.querySelectorAll('[data-scroll-tracker-class]').forEach((el) => {
      const className = el.getAttribute('data-scroll-tracker-class') as string;
      const height = parseInt(el.getAttribute('data-scroll-tracker-height') as string, 10) || 100;
      scrolls.push({ el, className, height });
    });

    /**
     * Scroll to Selector
     */
    document.querySelectorAll('[data-scroll-to-selector]').forEach((el) => {
      const selector = el.getAttribute('data-scroll-to-selector') as string;

      el.addEventListener('click', () => {
        const target = document.querySelector(selector);

        if (target) {
          target.scrollIntoView({
            behavior: (el.getAttribute('data-scroll-to-behavior') as ScrollBehavior) || 'smooth'
          });
        }
      });
    });

    /**
     * Toggle Class
     */
    document.querySelectorAll('[data-toggle-class-class]').forEach((el) => {
      const className = el.getAttribute('data-toggle-class-class') as string;

      el.addEventListener('click', () => {
        const hasClass = el.classList.contains(className);

        if (hasClass) {
          el.classList.remove(className);
        } else {
          el.classList.add(className);
        }
      });
    });
  }

  function pageSetup() {
    page.subscribe((page) => {
      pageChange(page);
    });
  }

  onMount(() => {
    if (!dev) {
      pageChange($page);
    }
  });
</script>

{@html data.content}

<svelte:body use:classList={classes} />

<svelte:window bind:scrollY={y} />
