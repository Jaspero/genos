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
  import { db } from '../../utils/firebase';
  import type { BlogArticleSnippet } from '../../interfaces/blog-article-snippet.interface';
  import { onMount } from 'svelte';

  type MapItem = {
    [key: string]: { id: string; name: string };
  };

  export let category = '';
  export let author = '';
  export let pageSize = '10';
  export let singleArticleLink: string;

  let articles: BlogArticleSnippet[] = [];
  let lastRef: QueryDocumentSnapshot | null = null;
  let loading = false;
  let resetLoading = false;
  let size: number;
  let categoryMap: MapItem = {};
  let authorMap: MapItem = {};

  $: typeChanges(pageSize, category, author, authorMap);

  async function typeChanges(
    pageSize: string,
    category?: string,
    author?: string,
    authorMap?: MapItem
  ) {
    if (!Object.keys(authorMap!).length) {
      return;
    }

    resetLoading = true;
    lastRef = null;

    size = parseInt(pageSize, 10);

    const { docs } = await getDocs(
      query(
        collection(db, 'blog-articles'),
        ...([
          category ? where('category', '==', category) : null,
          author ? where('author', '==', author) : null
        ].filter(Boolean) as QueryConstraint[]),
        orderBy('createdOn', 'desc'),
        limit(size + 1)
      )
    );

    if (docs.length === size + 1) {
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
        orderBy('createdOn', 'desc'),
        startAt(lastRef),
        limit(size + 1)
      )
    );

    if (docs.length === size + 1) {
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

  <button type="button" disabled={loading || resetLoading} on:click={loadMore}>Load More</button>
</div>

<style>
  .articles {
    padding: 1rem;
  }
</style>
