<script lang="ts">
  import { classList } from '$lib/actions/class-list';
  import { page } from '$app/stores';
  import { browser, dev } from '$app/environment';
  import { meta } from '$lib/meta/meta.store';
  import './components';
  import { onDestroy, onMount } from 'svelte';
  import type { Page } from '@sveltejs/kit';
  import type { Unsubscriber } from 'svelte/store';

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
    scripts: string;
    renderLayout?: boolean;
  };

  let scrolls: Array<{ el: any; className: string; height: number }> = [];
  let scrollTrackers: Array<{
    el: HTMLElement;
    classesToAdd: string[];
    classesToRemove: string[];
  }> = [];
  let y = 0;
  let unsubscribe: Unsubscriber;

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
      if (!scroll.el || !scroll.className) {
        return;
      }

      if (top > scroll.height) {
        scroll.el.classList.add(scroll.className);
      } else if (scroll.el.classList.contains(scroll.className)) {
        scroll.el.classList.remove(scroll.className);
      }
    });
  }

  async function renderSwiper() {
    while (!window.Swiper) {
      await new Promise((r) => setTimeout(r, 50));
    }

    if (!window.swipers) {
      return;
    }

    if (!Object.keys(window.swipers).length) {
      return;
    }

    for (const key in window.swipers) {
      const { swiper, id } = window.swipers![key];
      const el = document.getElementById(id);

      if (el) {
        swiper(el);
      }
    }
  }

  function pageChange(page: Page) {
    if (browser) {
      renderSwiper().catch();

      if (data.scripts) {
        const script = document.createElement('script');
        script.innerHTML = data.scripts;
        document.body.appendChild(script);
      }
    }

    scrollTrackers = [];

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

    /**
     * Is in view
     */
    scrollTrackers = [
      ...document.querySelectorAll(
        '[data-is-in-view-classes-to-add], [data-is-in-view-classes-to-remove]'
      )
    ].map((el) => {
      const classesToAdd = el.getAttribute('data-is-in-view-classes-to-add')?.split(',') || [];
      const classesToRemove =
        el.getAttribute('data-is-in-view-classes-to-remove')?.split(',') || [];

      return {
        el: el as HTMLElement,
        classesToAdd,
        classesToRemove
      };
    });
  }

  function pageSetup() {
    unsubscribe = page.subscribe((page) => {
      pageChange(page);
    });
  }

  function scroll() {
    for (let i = scrollTrackers.length - 1; i >= 0; i--) {
      const { el, classesToAdd, classesToRemove } = scrollTrackers[i];
      const rect = el.getBoundingClientRect();

      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      ) {
        if (classesToAdd?.length) {
          el.classList.add(...classesToAdd);
        }

        if (classesToRemove?.length) {
          el.classList.remove(...classesToRemove);
        }

        scrollTrackers.splice(i, 1);
      }
    }
  }

  onMount(() => {
    pageChange($page);
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });
</script>

{@html data.content}

<svelte:body use:classList={classes} />

<svelte:window
  bind:scrollY={y}
  on:scroll|passive={scroll}
  on:resize|passive={scroll}
  on:load={scroll}
/>
