<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { meta } from '$lib/meta/meta.store';
  import { db } from '$lib/utils/firebase';
  import { collection, getDocs, query, where } from 'firebase/firestore';
  import { language } from '$lib/stores/language';

  let article: any = null;
  let loading = true;
  let notFound = false;

  function getField(article: any, field: string, lang: string) {
    if (lang === 'hr') {
      return article[field + 'Hr'] || article[field] || '';
    }
    return article[field + 'En'] || article[field] || '';
  }

  onMount(async () => {
    const slug = $page.params.id;

    const snap = await getDocs(
      query(
        collection(db, 'blog-articles'),
        where('url', '==', slug)
      )
    );

    if (snap.empty) {
      notFound = true;
      loading = false;
      return;
    }

    const doc = snap.docs[0];
    article = { id: doc.id, ...doc.data() };

    meta.set({
      title: article.meta?.title || article.title,
      description: article.meta?.description || article.description,
      keywords: article.meta?.keywords || '',
      structured: article.meta?.structured || '',
      og: article.meta?.og || {}
    });

    loading = false;
  });
</script>

{#if loading}
  <div class="grid grid-small">
    <div class="gc-12 single-article spacer" style="text-align: center; padding: 4rem;">
      <p>{$language === 'en' ? 'Loading...' : 'Učitavanje...'}</p>
    </div>
  </div>
{:else if notFound}
  <div class="grid grid-small">
    <div class="gc-12 single-article spacer" style="text-align: center; padding: 4rem;">
      <h2>{$language === 'en' ? 'Article not found' : 'Članak nije pronađen'}</h2>
      <a href={$language === 'en' ? '/news' : '/novosti'}>{$language === 'en' ? 'Back to News' : 'Povratak na Novosti'}</a>
    </div>
  </div>
{:else if article}
  <div class="grid grid-small">
    <div class="gc-12 single-article spacer">
      <h2 class="single-article-title">{getField(article, 'title', $language)}</h2>
      <p class="single-article-description">{getField(article, 'description', $language)}</p>
      {#if article.image}
        <img class="single-article-image" src={article.image} alt={article.imageAlt || ''} />
      {/if}
      <div class="single-article-content">
        <p>{@html getField(article, 'content', $language)}</p>
      </div>
    </div>
  </div>
{/if}
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
</style>
