<svelte:options customElement={{ tag: 'pb-navigation', shadow: 'none' }} />

<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let previousScrollY = 0;
  let showNavbar = true;
  let open = false;
  let servicesMenu = false;
  let servicesMenuRef: HTMLElement | null = null;
  let resourcesMenu = false;
  let resourcesMenuRef: HTMLElement | null = null;

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
      servicesMenu = false;
    }
  }

  function toggleServicesMenu() {
    servicesMenu = !servicesMenu;
  }

  function toggleResourcesMenu() {
    resourcesMenu = !resourcesMenu;
  }

  function handleClickOutside(event: MouseEvent) {
    if (servicesMenuRef && !servicesMenuRef.contains(event.target as Node)) {
      servicesMenu = false;
    }
    if (resourcesMenuRef && !resourcesMenuRef.contains(event.target as Node)) {
      resourcesMenu = false;
    }
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeydown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<header class:inactive={!showNavbar}>
  <nav>
    <a href="/">
      <img class="logo" src="/brand/genos-logo-white.svg" alt="genos logo">
    </a>
    <div class="links">
      <a class="links-link" href="/about"><span class="line-thing"></span>About</a>
      <a class="links-link" href="/publications"><span class="line-thing"></span>Publications</a>
      <button class="links-link" on:click={toggleServicesMenu} bind:this={servicesMenuRef}>
        <span class="line-thing"></span>
        Services

        {#if servicesMenu}
          <span class="submenu">
            <a href="/glycomics">Glycomics</a>
            <a href="/epigenetics">Epigenetics</a>
            <a href="/dna-and-forensics">DNA & Forensics</a>
            <a href="https://glycanage.com">GlycanAge</a>
          </span>
        {/if}
      </button>
      <a class="links-link" href="/projects"><span class="line-thing"></span>Projects</a>
      <a class="links-link" href="/team"><span class="line-thing"></span>Our team</a>
      <a class="links-link" href="/contact"><span class="line-thing"></span>Contact us</a>
      <button class="links-link" on:click={toggleResourcesMenu} bind:this={resourcesMenuRef}>
        <span class="line-thing"></span>
        Resources

        {#if resourcesMenu}
          <span class="submenu">
            <a href="/glycomics">Glycomics</a>
            <a href="https://www.youtube.com/@HumanGlycomeProject" target="_blank" rel="noreferrer noopener">The Human Glycome Project</a>
            <a href="https://glycanage.com/blog" target="_blank" rel="noreferrer noopener">GlycanAge blog</a>
            <a href="https://glycanage.com">GlycanAge</a>
          </span>
        {/if}
      </button>
      <button class="mobile" on:click={() => (open = !open)}>
        <span class="line-thing"></span>Menu
      </button>
    </div>
  </nav>
</header>

{#if open}
  <button class="overlay" transition:fly on:click={() => open = false}></button>
  <div class="menu" transition:fly={{y: -1000}}>
    <a href="/about">About</a>
    <a href="/publications">Publications</a>
    <button on:click={toggleServicesMenu}>Services</button>
    <a href="/projects">Projects</a>
    <a href="/team">Our team</a>
    <a href="/contact">Contact us</a>
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
