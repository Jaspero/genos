<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { meta } from '$lib/meta/meta.store';
  import type { BlogArticle } from '$lib/types/blog/blog-article.interface';
  import '@jaspero/web-components/dist/image-gallery.wc';

  export let data: {
    header: string;
    article: BlogArticle;
    footer: string;
  };

  let previousScrollY = 0;
  let showNavbar = true;
  let open = false;

  const { author, content, image, imageAlt } = data.article;

  let galleryEl: HTMLDivElement;

  meta.set({
    title: data.article.meta?.title || data.article.title,
    description: data.article.meta?.description || data.article.description,
    keywords: data.article.meta?.keywords || '',
    structured: data.article.meta?.structured || '',
    og: data.article.meta?.og || {}
  });

  $: galleryEl && renderGallery();

  function renderGallery() {
    const el = document.createElement('jp-image-gallery') as any;

    el.images = data.article.gallery?.map((src) => ({ src }));

    galleryEl.appendChild(el);
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

<svelte:options customElement={{ tag: 'pb-navigation', shadow: 'none' }} />

<header class="navigation" class:inactive={!showNavbar}>
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


{@html data.header}

<section class="section single-article-section">
  <div class="container-xs flex-col single-article-container">
    <h2 class="h2 subtitle">{data.article.title}</h2>

    {#if data.article.description}
      <div class="article-info">
        <p class="single-article-description">{data.article.description}</p>
      </div>
    {/if}
    <div class="author-content">
      {#if author}
        <img src={author.image || '/images/dummy-img.jpg'} alt={author.name} class="author-img" />
        <p class="author-name">{author.name}</p>
      {/if}
    </div>
    {#if data.article.publicationDate}
      <p class="article-date">
        Date: {new Date(data.article.publicationDate).toLocaleDateString()}
      </p>
    {/if}
    <div class="article-content">
      {#if image}
        <div>
          <img src={image} alt={imageAlt} class="article-img" />
        </div>
      {/if}
      <div class="article-content">
        <p class="article-text p">{@html content}</p>
      </div>
    </div>
  </div>
</section>

{@html data.footer}

<style>
  .single-article-section {
    padding-top: 20px !important;
  }
  .single-article-container {
    text-align: center;
  }

  .single-article-description {
    text-align: left;
    font-size: 19px;
    padding: 0 0 30px 0;
    color: #292929;
    font-weight: 300;
  }
  
  .article-img {
    max-height: 640px;
    object-fit: cover;
    border: 1px solid #000;
    object-position: center;
    width: 100%;
    border-radius: 10px;
    max-width: 100%;
  }
  .article-content {
    display: flex;
    flex-direction: column;
  }
  .article-text {
    text-align: left;
    padding: 50px 0 !important;
  }

  .author-content {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 20px;
  }
  .author-name {
    font-size: 20px;
  }
  .author-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: contain;
    object-position: center;
  }
  .article-date {
    margin-right: auto;
    padding-bottom: 50px;
  }
</style>
