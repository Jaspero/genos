<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { tick } from 'svelte';
  import {language} from '$lib/stores/language';
  import { pathInLang } from '$lib/i18n/routes';

  let scrolled = 0;
  let previousScrollY = 0;
  let showNavbar = true;
  let open = false;

  let links = [
    {
      hr: {
        label: 'O nama',
        link: '/o-nama'
      },
      en: {
        label: 'About',
        link: '/about'
      }
    },
    {
      hr: {
        label: 'Projekti',
        link: '/projekti'
      },
      en: {
        label: 'Projects',
        link: '/projects'
      }
    },
    {
      hr: {
        label: 'Publikacije',
        link: '/publikacije'
      },
      en: {
        label: 'Publications',
        link: '/publications'
      }
    },
    {
      hr: {
        label: 'Usluge',
        link: '/usluge'
      },
      en: {
        label: 'Services',
        link: '/services'
      }
    },
    {
      hr: {
        label: 'Korisni linkovi',
        link: '/korisni-linkovi'
      },
      en: {
        label: 'Resources',
        link: '/resources'
      }
    },
    {
      hr: {
        label: 'Tim',
        link: '/tim'
      },
      en: {
        label: 'Team',
        link: '/team'
      }
    },
    {
      hr: {
        label: 'Novosti',
        link: '/novosti'
      },
      en: {
        label: 'News',
        link: '/news'
      }
    },
    {
      hr: {
        label: 'Kontakt',
        link: '/kontakt'
      },
      en: {
        label: 'Contact',
        link: '/contact'
      },
    }
  ]

  function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 96 && currentScrollY > previousScrollY) {
      showNavbar = false;
    } else {
      showNavbar = true;
    }

    previousScrollY = currentScrollY;
    scrolled = currentScrollY;
  }

  let menuButton: HTMLButtonElement;
  let menuEl: HTMLDivElement;

  function openMenu() {
    open = true;
    tick().then(() => menuEl?.querySelector<HTMLElement>('a')?.focus());
  }

  function closeMenu(returnFocus = true) {
    if (!open) return;
    open = false;
    if (returnFocus) menuButton?.focus();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && open) {
      closeMenu();
    }
  }

  /** Keep keyboard focus inside the open menu (it covers the page like a dialog). */
  function trapFocus(event: KeyboardEvent) {
    if (event.key !== 'Tab' || !menuEl) return;
    const items = [...menuEl.querySelectorAll<HTMLElement>('a, button')];
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  /** Remember the visitor's choice for pages that have no language version (tools, account). */
  function chooseLanguage(lang: 'en' | 'hr', event: MouseEvent) {
    if (lang === $language) {
      event.preventDefault();
      return;
    }

    localStorage.setItem('language', lang);

    if (!pathInLang($page.url.pathname, lang)) {
      event.preventDefault();
      const currentPath = window.location.pathname;
      const stableRoutePrefixes = ['/tools', '/my-account', '/sign-in', '/sign-up', '/reset-password', '/checkout', '/posts'];
      const isStableRoute = stableRoutePrefixes.some((prefix) => currentPath === prefix || currentPath.startsWith(`${prefix}/`));

      language.set(lang);

      if (!isStableRoute) {
        goto(lang === 'en' ? '/' : '/pocetna');
      }
    }
  }

  function languageHref(lang: 'en' | 'hr', path: string) {
    return pathInLang(path, lang) || path;
  }

  onMount(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeydown);

    // genos.hr/ redirects to /home: send visitors who chose Croatian before to the Croatian home page.
    if (['/', '/home'].includes(window.location.pathname) && localStorage.getItem('language') === 'hr' && !document.referrer.startsWith(window.location.origin)) {
      goto('/pocetna');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeydown);
    };
  });

</script>

<header lang={$language} class="navigation" class:scrolled={scrolled > 96 || $page.url.pathname.includes('/posts/') || $page.url.pathname.includes('/tools/') || $page.url.pathname.includes('/my-account') || $page.url.pathname.includes('/sign-in') || $page.url.pathname.includes('/sign-up') || $page.url.pathname.includes('/reset-password')} class:inactive={!showNavbar}>
  <nav aria-label={$language === 'en' ? 'Main' : 'Glavna navigacija'}>
    <a href={$language === 'en' ? '/' : '/pocetna'}>
      <img class="logo" src="/brand/genos-logo-white.svg" alt={$language === 'en' ? 'Genos, home page' : 'Genos, početna stranica'}>
    </a>
    <div class="links">
      {#each links as link}
        <a href={$language === 'en' ? link.en.link : link.hr.link}
           class:active={($language === 'en' ? link.en.link : link.hr.link) === $page.url.pathname}
           aria-current={($language === 'en' ? link.en.link : link.hr.link) === $page.url.pathname ? 'page' : undefined}
        >
          {$language === 'en' ? link.en.label : link.hr.label}
        </a>
      {/each}
    </div>
    <div class="flex gap-8">
      <div class="language-toggle" role="group" aria-label={$language === 'en' ? 'Language' : 'Jezik'}>
        <a href={languageHref('en', $page.url.pathname)} lang="en" hreflang="en" aria-label="English" class:active={$language === 'en'} aria-current={$language === 'en' ? 'true' : undefined} on:click={(e) => chooseLanguage('en', e)}>EN</a>
        <a href={languageHref('hr', $page.url.pathname)} lang="hr" hreflang="hr" aria-label="Hrvatski" class:active={$language === 'hr'} aria-current={$language === 'hr' ? 'true' : undefined} on:click={(e) => chooseLanguage('hr', e)}>HR</a>
      </div>
      <button class="menu-toggle" type="button" bind:this={menuButton} aria-label={$language === 'en' ? 'Menu' : 'Izbornik'} aria-expanded={open} aria-controls="mobile-menu" on:click={() => (open ? closeMenu() : openMenu())}>
        <img src="/icons/menu.svg" alt="">
      </button>
    </div>
  </nav>
</header>

{#if open}
  <!-- Clicking outside closes the menu; keyboard users close it with Escape or the close button. -->
  <div class="overlay" transition:fly on:click={() => closeMenu()} aria-hidden="true"></div>
  <div lang={$language} class="menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label={$language === 'en' ? 'Menu' : 'Izbornik'} bind:this={menuEl} on:keydown={trapFocus} transition:fly={{y: -1000}}>
    <nav class="menu-links" aria-label={$language === 'en' ? 'Main' : 'Glavna navigacija'}>
      <a
        class:active={($language === 'en' ? '/' : '/pocetna') === $page.url.pathname}
        aria-current={($language === 'en' ? '/' : '/pocetna') === $page.url.pathname ? 'page' : undefined}
        href={$language === 'en' ? '/' : '/pocetna'}
        on:click={() => closeMenu(false)}
      >
        {$language === 'en' ? 'Home' : 'Početna'}
      </a>
      {#each links as link}
        <a
          class:active={($language === 'en' ? link.en.link : link.hr.link) === $page.url.pathname}
          aria-current={($language === 'en' ? link.en.link : link.hr.link) === $page.url.pathname ? 'page' : undefined}
          href={$language === 'en' ? link.en.link : link.hr.link}
          on:click={() => closeMenu(false)}
        >
          {$language === 'en' ? link.en.label : link.hr.label}
        </a>
      {/each}
    </nav>

    <div class="socials">
      <a href="https://x.com/gglycoscience?lang=hr" target="_blank" rel="noreferrer noopener">
        <img src="/icons/x.svg" alt={$language === 'en' ? 'Genos on X (opens in a new tab)' : 'Genos na X-u (otvara se u novoj kartici)'}>
      </a>
      <a href="https://www.linkedin.com/company/genos-ltd/posts/?feedView=all" target="_blank" rel="noreferrer noopener">
        <img src="/icons/linkedin.svg" alt={$language === 'en' ? 'Genos on LinkedIn (opens in a new tab)' : 'Genos na LinkedInu (otvara se u novoj kartici)'}>
      </a>
      <button type="button" class="menu-close" on:click={() => closeMenu()}>
        {$language === 'en' ? 'Close' : 'Zatvori'}
      </button>
    </div>
  </div>
{/if}

<style lang="postcss">
    .navigation {
        z-index: 11;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        transition: .25s;

        &.inactive {
            transform: translateY(-100%);
        }

        /* Never hide the header while keyboard focus is in it. */
        &.inactive:focus-within {
            transform: none;
        }

        &.scrolled {
            background-color: #032130;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 87.5rem;
            margin: 0 auto;
            padding: 2rem 3rem;
            gap: 1rem;
            @media (max-width: 1100px) {
                padding: 2rem;
            }

            .logo {
                height: 3rem;
                @media (max-width: 1100px) {
                    height: 2rem;
                }
            }

            .links {
                display: flex;
                gap: 1.5rem;
                color: white;

                @media (max-width: 1100px) {
                    gap: 1rem;
                }
                @media (max-width: 1000px) {
                    font-size: .875rem;
                }
                @media (max-width: 730px) {
                    display: none;
                }
                a {
                    font-weight: 600;
                    opacity: .8;
                    transition: .25s;
                    &.contact {
                    }
                    &:hover {
                        opacity: 1;
                    }
                    &.active {
                        opacity: 1;
                        text-decoration: underline;
                        text-underline-offset: .75rem;
                        text-decoration-thickness: .125rem;
                        text-decoration-color: #FFD500;
                    }
                }
            }
        }
    }

    .language-toggle {
        display: flex;
        border: 1px solid white;
        border-radius: 999px;
        padding: .25rem;
        @media (max-width: 1000px) {
            padding: .125rem;
        }

        a {
            display: block;
            border-radius: 999px;
            padding: .125rem .5rem;
            font-size: .75rem;
            font-weight: bold;
            color: rgba(255,255,255,.8);
            &.active {
                color: #032130;
                background-color: white;
            }
        }
    }

    .menu-toggle {
        @media (min-width: 731px) {
            display: none;
        }
    }

    .menu {
        z-index: 11;
        position: fixed;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        max-width: 16rem;
        padding: .5rem 0;
        background-color: white;

        .menu-links {
            display: flex;
            flex-direction: column;
            flex: 1 1 0;

            a {
                padding: .75rem 1rem;
                font-weight: bold;
                opacity: .75;
                transition: .25s;

                &:hover, &.active {
                    background-color: rgba(0,0,0,.08);
                    opacity: 1;
                }
            }
        }
    }

    .socials {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
    }

    .menu-close {
        margin-left: auto;
        padding: .5rem .75rem;
        font-weight: bold;
        border: 1px solid #032130;
        border-radius: .25rem;
    }
</style>