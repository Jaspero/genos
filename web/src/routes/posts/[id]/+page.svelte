<svelte:options customElement={{ tag: 'pb-navigation', shadow: 'none' }} />

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
</script>

<div class="grid grid-small">
  <div class="gc-12 single-article spacer">
    <h2 class="single-article-title">{data.article.title}</h2>
    <p class="single-article-description">{data.article.description}</p>
    <img class="single-article-image" src={data.article.image} alt={data.article.imageAlt} />
    <div class="single-article-content">
      <p>{@html content}</p>
    </div>
  </div>
</div>
<!--<section class="section single-article-section">
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
</section>-->
<style>
    .single-article {
        padding: 6.5rem;
    }
    .single-article-title {
    }
    .single-article-description {
        margin-top: .5rem;
    }
    .single-article-image {
        margin-top: 1rem;
        border-radius: 1rem;
    }

    :global(.single-article-content h1) {
        margin: 2em 0 0.75em;
        font-size: 2rem;
        font-family: var(--ff-2);
        font-weight: normal;
    }
    :global(.single-article-content h2) {
        margin: 2em 0 0.75em;
        font-size: 1.75rem;
        font-weight: normal;
    }

    :global(.single-article-content h3) {
        margin: 2em 0 0.75em;
        font-size: 1.5rem;
        font-weight: normal;
    }

    :global(.single-article-content ul) {
        margin: 1rem 0;
    }

    :global(.single-article-content li) {
        margin: 0.5rem;
    }

    :global(.single-article-content p) {
        margin: 1em 0;
        font-size: 1rem;
    }

    :global(.single-article-content hr) {
        border-top: 2px dashed var(--fg-3);
        border-bottom: none;
        border-right: none;
        border-left: none;
        margin: 2rem 0;
        width: 100%;
    }

    :global(.single-article-content img) {
        width: calc(100% + 4rem);
        max-width: calc(100% + 4rem);
        border-radius: 1.5rem;
        margin: 2rem -2rem;
        color: transparent;
        height: auto;
    }

    :global(.single-article-content blockquote) {
        margin: 2rem 0;
        padding: 0 1rem;
        border-left: 2px solid var(--fg-3);
    }

    :global(.single-article-content figure) {
        margin: 2rem 0;
    }

    :global(.single-article-content figure img) {
        margin: 0 -2rem;
    }

    :global(.single-article-content figcaption) {
        margin: 0.5rem 0;
        text-align: center;
        font-size: 0.875rem;
    }
  /*.single-article-section {
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
  }*/
</style>
