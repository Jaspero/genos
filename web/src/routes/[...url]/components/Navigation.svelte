<svelte:options customElement={{ tag: 'pb-navigation', shadow: 'none' }} />

<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let previousScrollY = 0;
  let showNavbar = true;
  let open = false;

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

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<header class:inactive={!showNavbar}>
  <nav>
    <a href="/">
      <img class="logo" src="/brand/genos-logo-white.svg" alt="genos logo">
    </a>
    <div class="links">
      <a class="links-link desktop" href="/about"><span class="line-thing"></span>About</a>
      <a class="links-link desktop" href="/projects"><span class="line-thing"></span>Projects</a>
      <a class="links-link desktop" href="/publications"><span class="line-thing"></span>Publications</a>
      <a class="links-link desktop" href="/services"><span class="line-thing"></span>Services</a>
      <a class="links-link desktop" href="/resources"><span class="line-thing"></span>Resources</a>
      <a class="links-link desktop" href="/news"><span class="line-thing"></span>News</a>
      <a class="links-link desktop" href="/team"><span class="line-thing"></span>Our team</a>
      <a class="links-link desktop" href="/price-list"><span class="line-thing"></span>Price list</a>
      <a class="links-link desktop contact" href="/contact">Contact us</a>
      <button class="links-link mobile" on:click={() => (open = !open)}>
        <span class="line-thing"></span>Menu
      </button>
    </div>
  </nav>
</header>

{#if open}
  <button class="overlay" transition:fly on:click={() => open = false}></button>
  <div class="menu" transition:fly={{y: -1000}}>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/publications">Publications</a>
    <a href="/services">Services</a>
    <a href="/resources">Resources</a>
    <a href="/news">News</a>
    <a href="/team">Our team</a>
    <a href="/price-list">Price list</a>
    <a href="/contact">Contact us</a>
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
