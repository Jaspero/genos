<script lang="ts">
  import { page } from '$app/stores';
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';

  let previousScrollY = 0;
  let menu = false;
  let navVisible = true;

  function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > previousScrollY) {
      navVisible = false;
    } else {
      navVisible = true;
    }

    previousScrollY = currentScrollY;
  }

  $: if (menu && browser) {
    document.documentElement.style.overflowY = 'hidden';
  } else if (!menu && browser) {
    document.documentElement.style.overflowY = 'auto';
  }


  onMount(() => {
    if (browser) {
      window.addEventListener('scroll', handleScroll);
    }
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener('scroll', handleScroll);
    }
  });
</script>

<nav class:delay-200={!menu} class:-translate-y-full={!navVisible} class:bg={!menu}>
  <div class="logo">
    <img src="/images/logo.svg" alt="Genos logo">
  </div>
  <a href="/" class:text-white={menu}>
    GENOS
  </a>
  <div class="menu-toggle">
    <button on:click={() => menu = !menu}>
      <svg class="absolute -z-[1] h-full" width="56" height="62" viewBox="0 0 56 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="duration-500" d="M24 1.3094C26.4752 -0.119662 29.5248 -0.119661 32 1.3094L51.7128 12.6906C54.188 14.1197 55.7128 16.7607 55.7128 19.6188V42.3812C55.7128 45.2393 54.188 47.8803 51.7128 49.3094L32 60.6906C29.5248 62.1197 26.4752 62.1197 24 60.6906L4.28719 49.3094C1.81198 47.8803 0.287188 45.2393 0.287188 42.3812V19.6188C0.287188 16.7607 1.81198 14.1197 4.28719 12.6906L24 1.3094Z" fill={!menu ? '#032130' : 'white'}/>
      </svg>

      <span class="material-symbols-outlined duration-500 text-sm" class:text-white={!menu}>
        {menu ? 'close' : 'menu'}
      </span>
    </button>
  </div>
</nav>

<div class="menu" class:-translate-y-full={!menu} class:opacity-0={!menu}>
  <div class="flex w-full h-full">
    <div class="p-4 pb-12 pt-24 sm:pt-36 sm:p-10 border-r border-r-white h-full flex items-end">
      <div class="copyright">
        © 2022 — Genos Glyco
      </div>
    </div>
    <div class="flex flex-col gap-16 flex-1 pt-24 sm:pt-36">
      <div class="flex justify-center">
        <div class="flex flex-col gap-8 text-white pt-5 pr-8 sm:pr-16 w-1/2 text-right">
          <a class="menu-link" href="mailto:info@genos-glyco.com">info@genos-glyco.com</a>
          <div class="flex flex-col">
            <a class="menu-link" href="tel:+38516471181">+385 1 647 1181</a>
            <a class="menu-link" href="tel:+38516471182">+385 1 647 1182</a>
          </div>
          <a class="menu-link max-w-[16ch] ml-auto" href="https://maps.app.goo.gl/NKYKZBNWHJjri14K7" target="_blank" rel="noreferrer noopener">
            Borongajska cesta 83h
            10000 Zagreb
            <br>
            Croatia
          </a>
        </div>
        <div class="flex flex-col gap-5 pl-8 sm:pl-16 w-1/2 border-l">
          <a class="menu-primary-link" href="/" class:active={$page.url.pathname === '/'} on:click={() => menu = false}>Home</a>
          <a class="menu-primary-link" href="/about" class:active={$page.url.pathname === '/about'} on:click={() => menu = false}>About</a>
          <a class="menu-primary-link" href="/services" class:active={$page.url.pathname === '/services'} on:click={() => menu = false}>Services</a>
          <a class="menu-primary-link" href="/projects" class:active={$page.url.pathname === '/projects'} on:click={() => menu = false}>Projects</a>
          <a class="menu-primary-link" href="/publications" class:active={$page.url.pathname === '/publications'} on:click={() => menu = false}>Publications</a>
        </div>
      </div>
      <a class="cta" href="/request">
        Submit free request
      </a>
    </div>
    <div class="p-4 pb-12 pt-24 sm:pt-36 sm:p-10 border-l border-l-white h-full flex items-end">
      <div class="social">
        <a href="">Twitter</a>
        <span>—</span>
        <a href="https://www.linkedin.com/company/genos-ltd/mycompany/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
    nav {
        @apply fixed top-0 left-0 flex justify-between items-center w-full z-20 duration-500;
    }

    nav.bg {
        background: url("/images/texture.svg") white;
    }

    .logo {
        @apply p-4 sm:p-10;
    }

    .logo img {
        @apply w-16 h-16;
    }

    nav a {
        @apply font-bold text-sm sm:text-base duration-500;
    }

    .menu-toggle {
        @apply p-4 sm:p-10;
    }

    .menu-toggle button {
        @apply relative flex justify-center items-center w-16 h-16;
    }

    .menu {
        @apply fixed top-0 w-full h-full bg-[#032130] z-10 duration-500;
    }

    .copyright {
        writing-mode: tb;
        @apply w-16 text-xs text-white rotate-180 whitespace-nowrap flex items-center;
    }

    .social {
        writing-mode: tb;
        @apply w-16 text-xs text-white whitespace-nowrap flex items-center gap-4;
    }

    .social a {
        @apply hover:underline;
    }

    .menu-link {
        @apply text-xs hover:underline;
    }

    .menu-primary-link {
        @apply text-white text-sm sm:text-lg font-bold duration-500;
    }

    .menu-primary-link.active {
        @apply text-[#FFE566];
    }

    .menu-primary-link.active::before {
        content: '_';
    }

    .cta {
        @apply underline underline-offset-[12px] text-base sm:text-xl bg-[#FFD400] block text-[#032130] text-center font-bold py-16;
    }
</style>