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
        collection(db, 'blog-articles'),
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
        collection(db, 'blog-articles'),
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
      getDocs(collection(db, 'blog-categories')),
      getDocs(collection(db, 'blog-authors'))
    ]);

    categories = data[0].docs.map((doc) => ({ name: doc.data().name, id: doc.id }));
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

{#if showCategoryFilters}
  {#each categories as cat}
    <button
      type="button"
      class:active={category === cat.id}
      on:click={() => {
        category = cat.id;
        typeChanges(pageSize, category, author, authorMap);
      }}>{cat.name}</button
    >
  {/each}
{/if}

<div class="articles">
  {#each articles as article}
    <div class="article">
      <img src={article.image} alt={article.imageAlt || article.title} />
      <h4>{article.title}</h4>
      {#if article.description}
        <p>{article.description}</p>
      {/if}
      <a href={singleArticleLink + '/' + article.url}>Read More</a>
    </div>
  {/each}

  {#if lastRef}
    <button type="button" disabled={loading || resetLoading} on:click={loadMore}>Load More</button>
  {/if}
</div>

<style>
  .articles {
    padding: 1rem;
  }
</style>
