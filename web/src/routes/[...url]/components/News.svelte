<svelte:options customElement={{ tag: 'pb-news', shadow: 'none' }} />

<script lang="ts">
  import type { BlogArticleSnippet } from '$lib/types/blog/blog-article-snippet.interface.js';
  import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    QueryConstraint,
    QueryDocumentSnapshot,
    startAt,
    where
  } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase.js';
  import { onMount } from 'svelte';

  type MapItem = {
    [key: string]: { id: string; name: string };
  };

  export let category = '';
  export let author = '';
  export let pagesize = '10';
  export let singlearticlelink: string;
  export let showcategoryfilters: 'Yes' | 'No';
  export let collectionprefx: string;
  export let loadmorelabel: string;
  export let datelabel: string;
  export let allcategorieslabel: string;

  let tab = 1;
  let loadingTwitter = true;
  let articles: BlogArticleSnippet[] = [];
  let lastRef: QueryDocumentSnapshot | null = null;
  let loading = false;
  let resetLoading = false;
  let categoryMap: MapItem = {};
  let authorMap: MapItem = {};
  let categories: Array<{ name: string; id: string }>;

  let twitterFeedLoaded = false; // Track if Twitter feed is loaded

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
        collection(db, 'blog-articles' + (collectionprefx || '')),
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
        collection(db, 'blog-articles' + (collectionprefx || '')),
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

  function loadTwitter() {
    // Prevent retriggering if the feed is already loaded
    if (twitterFeedLoaded) return;

    loadingTwitter = true;
    twitterFeedLoaded = false;

    setTimeout(() => {
      if (window.twttr) {
        window.twttr.events.bind('rendered', () => {
          loadingTwitter = false;
          twitterFeedLoaded = true; // Mark as loaded
        });
      } else {
        loadingTwitter = false;
        twitterFeedLoaded = true;
      }
    }, 1000);
  }

  onMount(async () => {
    const data = await Promise.all([
      getDocs(collection(db, 'blog-categories' + (collectionprefx || ''))),
      getDocs(collection(db, 'blog-authors' + (collectionprefx || '')))
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

<div class="grid grid-large services-grid">
  <!-- Sidebar -->
  <div class="col-span-3">
    <!-- Tab Selectors (Articles / Twitter) -->
    <div class="tab-selectors">
      <button class="tab-selector" class:active={tab === 1} on:click={() => { tab = 1; category = ''; }}>
        Articles
      </button>
      <button class="tab-selector" class:active={tab === 2} on:click={() => {
        tab = 2;
        loadTwitter(); // Only triggers when switching to Twitter tab
      }}>
        Twitter
      </button>
    </div>
  </div>

  <!-- Main Content -->
  <div class="col-span-9">
    {#if tab === 1}
      {#if showCategoryFilters}
        <div class="category-filters">
          <button class="category-filter" class:active={category === ''}
                  on:click={() => { category = ''; typeChanges(pageSize, category, author, authorMap); }}>
            {allcategorieslabel}
          </button>
          {#each categories as cat}
            <button class="category-filter" class:active={category === cat.id}
                    on:click={() => { category = cat.id; typeChanges(pageSize, category, author, authorMap); }}>
              {cat.name}
            </button>
          {/each}
        </div>
      {/if}

      {#if articles.length}
        <div class="grid">
          {#each articles as article}
            <a class="article col-span-6" href={'/posts/' + article.url}>
              <div class="article-image">
                <img src={article.image} alt={article.imageAlt || article.title} />
                {#if article.category}
                  <div class="article-category">{categoryMap[article.category]?.name || ''}</div>
                {/if}
                <div class="article-content">
                  <h3 class="article-title">{article.title}</h3>
                  <p class="article-description">{article.description}</p>
                </div>
              </div>
            </a>
          {/each}
        </div>
      {:else}
        <div class="grid">
          <div class="col-span-12">No posts yet</div>
        </div>
      {/if}

      {#if lastRef}
        <button type="button" class:loading={loading || resetLoading} on:click={loadMore}>
          {loadmorelabel}
        </button>
      {/if}

    {:else if tab === 2}
      <!-- Twitter Feed -->
      <div class="flex items-center gap-2">
        {#if loadingTwitter}
          <div class="spinner animate-spin"></div>
          Loading X feed
        {/if}
        <a class="twitter-timeline" data-width="600" data-height="600"
           href="https://twitter.com/gglycoscience">
        </a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    {/if}
  </div>
</div>
