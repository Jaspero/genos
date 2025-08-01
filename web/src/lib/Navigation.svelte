<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import {language} from '$lib/stores/language';

  let scrolled = 0;
  let previousScrollY = 0;
  let showNavbar = true;
  let open = false;
  let languageDisabled = false;

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

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      open = false;
    }
  }

  function switchLanguage() {
    if (languageDisabled) return;
    languageDisabled = true;
    setTimeout(() => {
      languageDisabled = false;
    }, 500);

    language.update((lang) => {
      const newLang = lang === 'en' ? 'hr' : 'en';
      if (typeof window === 'undefined') return newLang;

      localStorage.setItem('language', newLang);

      const routeMapping: Record<string, string> = {
        '/': '/pocetna',
        '/pocetna': '/',
        '/about': '/o-nama',
        '/o-nama': '/about',
        '/projects': '/projekti',
        '/projekti': '/projects',
        '/publications': '/publikacije',
        '/publikacije': '/publications',
        '/services': '/usluge',
        '/usluge': '/services',
        '/resources': '/korisni-linkovi',
        '/korisni-linkovi': '/resources',
        '/news': '/novosti',
        '/novosti': '/news',
        '/team': '/tim',
        '/tim': '/team',
        '/contact': '/kontakt',
        '/kontakt': '/contact'
      };

      const currentPath = window.location.pathname;
      const newPath = routeMapping[currentPath] || (newLang === 'en' ? '/' : '/pocetna');

      if (newPath !== currentPath) {
        goto(newPath);
      }

      return newLang;
    });
  }


  onMount(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeydown);

    if (window.location.pathname === '/' && localStorage.getItem('language') === 'hr') {
      goto('/pocetna');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeydown);
    };
  });

</script>

<header class="navigation" class:scrolled={scrolled > 96 || $page.url.pathname.includes('/posts/')} class:inactive={!showNavbar}>
  <nav>
    <a href={$language === 'en' ? '/' : '/pocetna'}>
      <img class="logo" src="/brand/genos-logo-white.svg" alt="genos logo">
    </a>
    <div class="links">
      {#each links as link}
        <a href={$language === 'en' ? link.en.link : link.hr.link}
           class:active={($language === 'en' ? link.en.link : link.hr.link) === $page.url.pathname}
        >
          {$language === 'en' ? link.en.label : link.hr.label}
        </a>
      {/each}
    </div>
    <div class="flex gap-8">
      <button class="language-toggle" on:click={() => {switchLanguage()}} disabled={languageDisabled}>
        <span class:active={$language === 'en'}>EN</span>
        <span class:active={$language === 'hr'}>HR</span>
      </button>
      <button class="menu-toggle" on:click={() => open = !open}>
        <img src="/icons/menu.svg" alt="">
      </button>
    </div>
  </nav>
</header>

{#if open}
  <button class="overlay" transition:fly on:click={() => open = false}></button>
  <div class="menu" transition:fly={{y: -1000}}>
    <div class="menu-links">
      <a
        class:active={($language === 'en' ? '/' : '/pocetna') === $page.url.pathname}
        href={$language === 'en' ? '/' : '/pocetna'}
        on:click={() => open = false}
      >
        {$language === 'en' ? 'Home' : 'Početna'}
      </a>
      {#each links as link}
        <a
          class:active={($language === 'en' ? link.en.link : link.hr.link) === $page.url.pathname}
          href={$language === 'en' ? link.en.link : link.hr.link}
          on:click={() => open = false}
        >
          {$language === 'en' ? link.en.label : link.hr.label}
        </a>
      {/each}
    </div>

    <div class="socials">
      <a href="https://x.com/gglycoscience?lang=hr" target="_blank" rel="noreferrer noopener">
        <img src="/icons/x.svg" alt="">
      </a>
      <a href="https://www.linkedin.com/company/genos-ltd/posts/?feedView=all" target="_blank" rel="noreferrer noopener">
        <img src="/icons/linkedin.svg" alt="">
      </a>
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

        span {
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
        gap: 1rem;
        padding: 1rem;
    }
</style>