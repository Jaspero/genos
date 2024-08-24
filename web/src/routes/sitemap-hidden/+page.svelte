<script lang="ts">
  import { meta } from '$lib/meta/meta.store';
  import BlogAuthor from '$lib/blog/BlogAuthor.svelte';
  import type { BlogArticle } from '$lib/types/blog/blog-article.interface';
  import type { BlogCategory } from '$lib/types/blog/blog-category.interface';
  import { CONFIG } from '$lib/consts/config.const';

  export let data: {
    pages: Array<{ url: string; title: string }>;
    blog: {
      articles: BlogArticle[];
      categories: BlogCategory[];
      authors: BlogAuthor[];
      pages: Array<{
        category: BlogCategory;
        pages: number[];
      }>;
      allPages: number[];
    };
  };

  meta.set({ title: 'Sitemap', noIndex: true });
</script>

<h1>Sitemap</h1>

<h3>Pages</h3>

<ul>
  {#each data.pages as page}
    <li><a href={page.url}>{page.title}</a></li>
  {/each}
</ul>

<h3>Blog</h3>

<h4>Articles</h4>

<ul>
  {#each data.blog.articles as article}
    <li><a href={CONFIG.singlePostUrlPrefix + article.id}>{article.title}</a></li>
  {/each}
</ul>

<h4>Authors</h4>

<ul>
  {#each data.blog.authors as author}
    <li><a href={CONFIG.singleBlogAuthorUrlPrefix + author.id}>{author.name}</a></li>
  {/each}
</ul>

<h5>Static Pages</h5>

<ul>
  <li><a href="/checkout">Checkout</a></li>
  <li><a href="/reset-password">Reset Password</a></li>
  <li><a href="/sign-in">Sign In</a></li>
  <li><a href="/sign-up">Sign Up</a></li>
</ul>
