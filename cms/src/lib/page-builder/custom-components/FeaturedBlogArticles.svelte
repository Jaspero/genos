<svelte:options customElement={{ tag: 'pb-featured-blog-articles', shadow: 'none' }} />

<script lang="ts">
  import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import type { BlogArticleSnippet } from '../../interfaces/blog-article-snippet.interface';
  import { db } from '../../utils/firebase';

  export let collectionPrefx: string;
  export let singlearticlelink: string;
  export let linkLabel: string;

  let articles: BlogArticleSnippet[] = [];

  onMount(async () => {
    const { docs } = await getDocs(
      query(
        collection(db, 'blog-articles' + (collectionPrefx || '')),
        orderBy('publicationDate', 'desc'),
        limit(3)
      )
    );

    articles = docs.map((doc) => doc.data() as BlogArticleSnippet);
  });
</script>

<div class="card container news-card-container">
  {#each articles as article}
    <div class="news-card">
      <div class="news-bg-img" style="background-image: url({article.image})"></div>
      <div class="card news-content">
        <h3 class="h3">{article.title}</h3>
        <p class="p">{article.description}</p>
        <div>
          <a href="{singlearticlelink}/{article.url}" class="btn-pink">{linkLabel}</a>
        </div>
      </div>
    </div>
  {/each}
</div>
