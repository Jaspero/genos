<svelte:options customElement={{ tag: 'pb-navigation', shadow: 'none' }} />

<script lang="ts">
  import {fly} from 'svelte/transition';
  import {onMount} from 'svelte';

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
      {#each items as link}
        <a href={link.url}><span class="line-thing"></span>{link.label}</a>
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
      <a href={link.url}>{link.label}</a>
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
