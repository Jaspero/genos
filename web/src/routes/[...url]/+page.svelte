<script lang="ts">
  import { classList } from '$lib/actions/class-list';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { meta } from '$lib/meta/meta.store';
  import './components';

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

  let scrolls: Array<{el: any, className: string; height: number}> = [];
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
		scrolls.forEach(scroll => {
      if (top > scroll.height) {
        scroll.el.classList.add(scroll.className);
      } else if (scroll.el.classList.contains(scroll.className)) {
        scroll.el.classList.remove(scroll.className);
      }
    })
	}

  function pageSetup() {
    let first = true;

    page.subscribe((page) => {
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

      if (!first) {
        meta.set({ title: data.title, ...data.meta });
      }

      /**
       * Scroll Listeners 
       */
      scrolls = [];

      document.querySelectorAll('[data-scroll-tracker-class]').forEach((el) => {
        const className = el.getAttribute('data-scroll-tracker-class') as string;
        const height = parseInt(el.getAttribute('data-scroll-tracker-height') as string, 10) || 100;
        scrolls.push({el, className, height});
      })

      first = false;
    });
  }
</script>

{@html data.content}

<svelte:body use:classList={classes} />

<svelte:window bind:scrollY={y} />