<svelte:options customElement={{ tag: 'pb-blog', shadow: 'none' }} />

<script lang="ts">
  import {
    collection,
    getDocs,
    orderBy,
    query,
    limit,
    where,
    QueryConstraint,
    QueryDocumentSnapshot,
    startAt
  } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import type { BlogArticleSnippet } from '$lib/types/blog/blog-article-snippet.interface';
  import { db } from '$lib/utils/firebase';

  type MapItem = {
    [key: string]: { id: string; name: string };
  };

  export let category = '';
  export let author = '';
  export let pagesize = '10';
  export let singlearticlelink: string;
  export let showcategoryfilters: 'Yes' | 'No';
  export let collectionPrefx: string;
  export let loadMoreLabel: string;
  export let dateLabel: string;
  export let allCategoriesLabel: string;

  let articles: BlogArticleSnippet[] = [];
  let lastRef: QueryDocumentSnapshot | null = null;
  let loading = false;
  let resetLoading = false;
  let categoryMap: MapItem = {};
  let authorMap: MapItem = {};
  let categories: Array<{ name: string; id: string }>;

  $: showCategoryFilters = showcategoryfilters === 'Yes';
  $: singleArticleLink = singlearticlelink;
  $: pageSize = parseInt(pagesize, 10);
  $: typeChanges(pageSize, category, author, authorMap);

  async function typeChanges(
    pageSize: number,
    category?: string,
    author?: string,
    authorMap?: MapItem
  ) {
    if (!Object.keys(authorMap!).length) {
      return;
    }

    resetLoading = true;
    lastRef = null;

    const { docs } = await getDocs(
      query(
        collection(db, 'blog-articles' + (collectionPrefx || '')),
        ...([
          category ? where('category', '==', category) : null,
          author ? where('author', '==', author) : null
        ].filter(Boolean) as QueryConstraint[]),
        where('active', '==', true),
        orderBy('publicationDate', 'desc'),
        limit(pageSize + 1)
      )
    );

    if (docs.length === pageSize + 1) {
      lastRef = docs[docs.length - 1];
    } else {
      lastRef = null;
    }

    articles = docs.map((doc) => doc.data() as BlogArticleSnippet);

    resetLoading = false;
  }

  async function loadMore() {
    const { docs } = await getDocs(
      query(
        collection(db, 'blog-articles' + (collectionPrefx || '')),
        ...([
          category ? where('category', '==', category) : null,
          author ? where('author', '==', author) : null
        ].filter(Boolean) as QueryConstraint[]),
        where('active', '==', true),
        orderBy('publicationDate', 'desc'),
        startAt(lastRef),
        limit(pageSize + 1)
      )
    );

    if (docs.length === pageSize + 1) {
      lastRef = docs[docs.length - 1];
    } else {
      lastRef = null;
    }

    articles = [...articles, ...docs.map((doc) => doc.data() as BlogArticleSnippet)];
  }

  onMount(async () => {
    const data = await Promise.all([
      getDocs(collection(db, 'blog-categories' + (collectionPrefx || ''))),
      getDocs(collection(db, 'blog-authors' + (collectionPrefx || '')))
    ]);

    categories = data[0].docs.map((doc) => ({ name: doc.data()?.name || '', id: doc.id }));
    categoryMap = data[0].docs.reduce((acc: MapItem, doc) => {
      acc[doc.id] = doc.data() as any;
      return acc;
    }, {});

    authorMap = data[1].docs.reduce((acc: MapItem, doc) => {
      acc[doc.id] = doc.data() as any;
      return acc;
    }, {});
  });
</script>

<div class="container categories-container">
  {#if showCategoryFilters}
    <button
      class="cat-btn"
      type="button"
      class:active={category === ''}
      on:click={() => {
        category = '';
        typeChanges(pageSize, category, author, authorMap);
      }}>{allCategoriesLabel}</button
    >
    {#each categories as cat}
      <button
        type="button"
        class="cat-btn"
        class:active={category === cat.id}
        on:click={() => {
          category = cat.id;
          typeChanges(pageSize, category, author, authorMap);
        }}>{cat.name}</button
      >
    {/each}
  {/if}
</div>

<div class="container blog-container">
  {#each articles as article}
    <a class="post-card" href={singleArticleLink + '/' + article.url}>
      <img src={article.image} alt={article.imageAlt || article.title} class="news-img" />
      <div class="post-content-wrapper">
        {#if article.category}
          <div class="post-category-wrapper">
            <span class="news-category">{categoryMap[article.category]?.name || ''}</span>
          </div>
        {/if}
        <div class="post-content">
          <h3 class="h3">{article.title}</h3>
          {#if article.publicationDate}
            <p class="post-date">
              {dateLabel}: {new Date(article.publicationDate).toLocaleDateString()}
            </p>
          {/if}
          <p class="p">{article.description}</p>
        </div>
      </div>
    </a>
  {/each}
</div>

{#if lastRef}
  <button type="button" class:loading={loading || resetLoading} on:click={loadMore}
    >{loadMoreLabel}</button
  >
{/if}
