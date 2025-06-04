<svelte:options customElement={{ tag: 'pb-navigation', shadow: 'none' }} />

<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import {language} from '$lib/page-builder/stores/language';

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
        label: 'Naš tim',
        link: '/tim'
      },
      en: {
        label: 'Our team',
        link: '/team'
      }
    },
    {
      hr: {
        label: 'Kontaktirajte nas',
        link: '/kontakt'
      },
      en: {
        label: 'Contact us',
        link: '/contact'
      },
      alt: true
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
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      open = false;
    }
  }

  function switchLanguage() {
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
        '/kontakt': '/contact',
        '/glikomika': '/glycomics',
        '/glycomics': '/glikomika',
        '/epigenetika': '/epigenetics',
        '/epigenetics': '/epigenetika',
        '/dna-i-forenzika': '/dna-and-forensics',
        '/dna-and-forensics': '/dna-i-forenzika'
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
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<header class="navigation" class:inactive={!showNavbar}>
  <nav>
    <a href={$language === 'en' ? '/' : '/pocetna'}>
      <img class="logo" src="/brand/genos-logo-white.svg" alt="genos logo">
    </a>
    <div class="links">
      {#each links as link}
        <a class="links-link desktop" class:contact={link.alt} href={$language === 'en' ? link.en.link : link.hr.link}>
          {#if !link.alt}
            <span class="line-thing"></span>
          {/if}
          {$language === 'en' ? link.en.label : link.hr.label}
        </a>
      {/each}
    </div>
    <div class="flex gap-12">
      <button class="links-link mobile" on:click={() => {open = !open}}>
        Menu
        <span class="line-thing"></span>
      </button>
      <button class="flex gap-4 text-white" on:click={() => {switchLanguage()}}>
        <span class:underline={$language === 'en'}>EN</span>
        <span class:underline={$language === 'hr'}>HR</span>
      </button>
    </div>
  </nav>
</header>

{#if open}
  <button class="overlay" transition:fly on:click={() => open = false}></button>
  <div class="menu" transition:fly={{y: -1000}}>
    {#each links as link}
      <a href={$language === 'en' ? link.en.link : link.hr.link}>
        {$language === 'en' ? link.en.label : link.hr.label}
      </a>
    {/each}
    <div class="filler"></div>
    <div class="socials">
      <a href="https://x.com/gglycoscience?lang=hr" target="_blank" rel="noreferrer noopener">
        <img src="/socials/x.svg" alt="">
      </a>
      <a href="https://www.linkedin.com/company/genos-ltd/posts/?feedView=all" target="_blank" rel="noreferrer noopener">
        <img src="/socials/linkedin.svg" alt="">
      </a>
    </div>
  </div>
{/if}
