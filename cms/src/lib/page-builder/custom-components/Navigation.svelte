<svelte:options customElement={{ tag: 'pb-navigation', shadow: 'none' }} />

<script lang="ts">
  import {fly, slide} from 'svelte/transition';
  import {onMount} from 'svelte';
  import { page } from '$app/stores';

  let previousScrollY = 0;
  let showNavbar = true;
  export let links: string;
  export let labels: string;

  $: items = links && labels ? constructLinks() : [];

  let open = false;

  function constructLinks() {
    const allLinks = links.split(',');
    const allLabels = labels.split(',');

    return allLinks.map((link, index) => ({ label: allLabels[index], url: link }));
  }

  function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 400 && currentScrollY > previousScrollY) {
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
      {#each items as link}
        <a class:active={$page.url.pathname === link.url} href={link.url}><span class="line-thing"></span>{link.label}</a>
      {/each}
      <a href="https://glycanage.com/blog" target="_blank" rel="noopener"><span class="line-thing"></span>Science Magazine</a>
      <button on:click={() => (open = !open)}>
        <span class="line-thing"></span>Menu
      </button>
    </div>
  </nav>
</header>

{#if open}
  <button class="overlay" transition:fly on:click={() => open = false}></button>
  <div class="menu" transition:fly={{y: -1000}}>
    {#each items as link}
      <a class:active={$page.url.pathname === link.url} href={link.url}>{link.label}</a>
    {/each}
    <a href="https://glycanage.com/blog" target="_blank" rel="noopener">Science Magazine</a>
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

<!--<header class:transparent-bg={open} class:inactive={!showNavbar}>
  <div>
    <a href="/">
      <img class="logo" src="/brand/logo.svg" alt="genos logo">
      {#each items as link}
        <li><a href={link.url}>{link.label}</a></li>
      {/each}
    </a>
  </div>
</header>-->

<!--
<div class="mobile-menu" class:active={open}>
          <a href="mailto:info@genos-glyco.com" style="text-decoration: underline">info@genos-glyco.com</a>
          <a href="tel:+38516471181">+385 1 647 1181</a>
          <a href="tel:+38516471182">+385 1 647 1182</a>
          <a href="https://maps.app.goo.gl/1bfL66FpdEin1hL16" target="_blank" rel="noreferrer noopener">Borongajska cesta 83h, 10000 Zagreb, Croatia</a>
        {#each items as link}
          <li><a href={link.url}>{link.label}</a></li>
        {/each}
  &lt;!&ndash;<a class="link-to-contact" href="/contact">Submit free request</a>&ndash;&gt;
      &lt;!&ndash;<a href="https://x.com/gglycoscience?lang=hr" target="_blank" rel="noreferrer noopener">Twitter</a>&ndash;&gt;
      &lt;!&ndash;<a href="https://www.linkedin.com/company/genos-ltd/posts/?feedView=all" target="_blank" rel="noreferrer noopener">LinkedIn</a>&ndash;&gt;
</div>-->
