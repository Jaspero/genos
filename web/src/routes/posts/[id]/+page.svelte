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

  onMount(() => console.log(data.article))
</script>

<div class="single-article">
  <img src="https://firebasestorage.googleapis.com/v0/b/genos-ec52a.firebasestorage.app/o/blog-articles%2Fbar-Bat8LhhH8n0nAJzjoedSyt0F%2F6qm931jx.png?alt=media" alt="">
  <h2 class="single-article-title">{data.article.title}</h2>
  <p class="single-article-description">{data.article.description}</p>
      <img class="single-article-image" src={data.article.image} alt={data.article.imageAlt} />
  {data.article.image}
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
