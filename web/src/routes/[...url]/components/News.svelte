<svelte:options customElement={{ tag: 'pb-news', shadow: 'none' }} />

<script lang="ts">
  import type {BlogArticleSnippet} from '$lib/types/blog/blog-article-snippet.interface.js';
  import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    QueryConstraint,
    QueryDocumentSnapshot, startAt,
    where
  } from 'firebase/firestore';
  import {db} from '$lib/utils/firebase.js';
  import {onMount} from 'svelte';

  let tab = 1;

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
  <div class="col-span-3 tab-selectors">
    {#if showCategoryFilters}
      <button
        class="tab-selector"
        type="button"
        class:active={category === ''}
        on:click={() => {
        category = '';
        typeChanges(pageSize, category, author, authorMap);
      }}>{allcategorieslabel}</button
      >
      {#each categories as cat}
        <button class="tab-selector"
                class:active={category === cat.id}
                on:click={() => {
                category = cat.id;
                typeChanges(pageSize, category, author, authorMap);
              }}>
          {cat.name}
        </button>
      {/each}
    {/if}
  </div>
  <div class="col-span-9">
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
        <div class="col-span-12">
          No posts yet<svelte:options customElement={{ tag: 'pb-news', shadow: 'none' }} />

          <script lang="ts">
            import type {BlogArticleSnippet} from '$lib/types/blog/blog-article-snippet.interface.js';
            import {
              collection,
              getDocs,
              limit,
              orderBy,
              query,
              QueryConstraint,
              QueryDocumentSnapshot, startAt,
              where
            } from 'firebase/firestore';
            import {db} from '$lib/utils/firebase.js';
            import {onMount} from 'svelte';

            let tab = 1;

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

          <svelte:head>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </svelte:head>

          <div class="grid grid-large services-grid">
            <div class="col-span-4 tab-selectors">
              <button class="tab-selector" class:active={tab === 1} on:click={() => tab = 1}>Our posts</button>
              <button class="tab-selector" class:active={tab === 2} on:click={() => tab = 2}>Twitter feed</button>
            </div>
            <div class="col-span-8 tabs">
              {#if tab === 2}
                <a class="twitter-timeline" href="https://twitter.com/GGlycoscience?ref_src=twsrc%5Etfw">Tweets by GGlycoscience</a>
              {:else if tab === 1}
                {#if showCategoryFilters}
                  <div class="container categories-container">
                    <button
                      class="cat-btn"
                      type="button"
                      class:active={category === ''}
                      on:click={() => {
        category = '';
        typeChanges(pageSize, category, author, authorMap);
      }}>{allcategorieslabel}</button
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
                  </div>
                {/if}

                {#if articles}
                  <div class="container blog-container">
                    {#each articles as article}
                      <a class="post-card" href={'/posts/' + article.url}>
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
                                {datelabel}: {new Date(article.publicationDate).toLocaleDateString()}
                              </p>
                            {/if}
                            <p class="p">{article.description}</p>
                          </div>
                        </div>
                      </a>
                    {/each}
                  </div>
                {/if}

                {#if lastRef}
                  <button type="button" class:loading={loading || resetLoading} on:click={loadMore}
                  >{loadmorelabel}</button
                  >
                {/if}
              {/if}
            </div>
          </div>
        </div>
      </div>
    {/if}

    {#if lastRef}
      <button type="button" class:loading={loading || resetLoading} on:click={loadMore}
      >{loadmorelabel}</button
      >
    {/if}
  </div>
</div>