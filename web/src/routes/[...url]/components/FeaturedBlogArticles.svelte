<svelte:options customElement={{ tag: 'pb-featured-blog-articles', shadow: 'none' }} />

<script lang="ts">
  import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import type { BlogArticleSnippet } from '$lib/types/blog/blog-article-snippet.interface';
  import { db } from '$lib/utils/firebase';

  export let collectionPrefx: string;
  export let singlearticlelink: string;
  export let linklabel: string;

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
      <div
        class="news-bg-img"
        style="background-image: url({article.image}); background-repeat: no-repeat;
      background-size: cover;
      background-position: center;"
      ></div>
      <div class="card news-content">
        <h3 class="h3">{article.title}</h3>
        <p class="p">{article.description}</p>
        <div>
          <a href="{singlearticlelink}/{article.url}" class="btn-pink">{linklabel}</a>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .news-card-container {
    gap: 20px;
    padding-top: 70px !important;
    justify-content: center;
    @media (max-width: 1100px) {
      gap: 20px;
    }
    @media (max-width: 900px) {
      flex-direction: column;
    }

    .news-card {
      max-width: 900px;
      border: 1px solid #000;
      border-radius: 6px;
      display: flex;
      max-height: 550px;
      flex-direction: column;
      .news-bg-img {
        height: 230px;
      }
      h3 {
        color: var(--text-primary);
      }
    }
    .news-content {
      display: flex;
      padding: 20px;
      flex-direction: column;
      gap: 10px;
      h3 {
        margin-top: 0;
        margin-bottom: 10px;
      }
      .p {
        font-size: 20px;
        line-height: 26px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
    .news-content > div {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
