<svelte:options customElement={{ tag: 'pb-products', shadow: 'none' }} />

<script lang="ts">
  import type { Product } from '../../interfaces/product.interface';
  import { onMount } from 'svelte';
  import { CONFIG } from '$lib/consts/config.const';

  export let categories: string;
  export let tags: string;
  export let property: string;
  export let direction: 'desc' | 'asc';
  export let showPriceRangeFilter: boolean;
  export let showCategoriesFilter: boolean;
  export let showTagsFilter: boolean;
  export let minPrice: number;
  export let maxPrice: number;
  export let limit: string;

  let products: Product[] = [];
  let allProducts: any[] = [];
  let selectedCategories = '';
  let selectedTags = '';
  let selectedMinPrice: number;
  let selectedMaxPrice: number;

  onMount(async () => {
    const [fetchedTags, fetchedCategories, fetchedProducts] = await Promise.all([
      fetch(CONFIG.webUrl + '/data/tags.json').then(response => response.json()).catch(() => []),
      fetch(CONFIG.webUrl + '/data/categories.json').then(response => response.json()).catch(() => []),
      fetch(CONFIG.webUrl + '/data/products.json').then(response => response.json()).catch(() => [])
    ]);

    tags = fetchedTags;
    categories = fetchedCategories;
    allProducts = fetchedProducts;

    console.log(tags, categories, allProducts);
    applyFilters();
  });

  // Apply filters based on the provided options
  function applyFilters() {

  }

  // Reactively re-apply filters when relevant properties change
  $: applyFilters();

</script>

<div class="products">
  <div class="filters">
    {#if showCategoriesFilter}
      <select bind:value={selectedCategories}>
        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
    {/if}

    {#if showTagsFilter}
      <select bind:value={selectedTags}>
        {#each tags as tag}
          <option value={tag}>{tag}</option>
        {/each}
      </select>
    {/if}

    {#if showPriceRangeFilter}
      <input type="number" bind:value={selectedMinPrice} placeholder="Min price" />
      <input type="number" bind:value={selectedMaxPrice} placeholder="Max price" />
    {/if}
  </div>
  {#if products.length === 0}
    <p>No products found</p>
  {/if}

  {#each products as product}
    <div class="product">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <!--todo: add to card?-->
    </div>
  {/each}
</div>
