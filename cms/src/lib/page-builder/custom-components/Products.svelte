<svelte:options customElement={{ tag: 'pb-products', shadow: 'none' }} />

<script lang="ts">
  import { onMount } from 'svelte';
  import { CONFIG } from '$lib/consts/config.const';
  import { COLLECTION_KEYS_MAP } from '$lib/page-builder/consts/tracked-collection.const';

  export let limit: string;
  export let property: string;
  export let direction: 'desc' | 'asc';

  /**
   * Filters
   */
  export let showPriceRangeFilter: boolean;
  export let showCategoriesFilter: boolean;
  export let showTagsFilter: boolean;
  export let showSearch: boolean;

  /**
   * Initial values
   */
  export let initialCategories: string[];
  export let initialTags: string[];
  export let initialMinPrice: number;
  export let initialMaxPrice: number;

  let products: any[] = [];
  let tags: any[] = [];
  let categories: any[] = [];
  let search = '';

  onMount(async () => {
    [tags, categories, products] = await Promise.all([
      fetch(CONFIG.webUrl + '/data/tags.json').then(response => response.json()).catch(() => []),
      fetch(CONFIG.webUrl + '/data/categories.json').then(response => response.json()).catch(() => []),
      fetch(CONFIG.webUrl + '/data/products.json').then(response => response.json()).catch(() => [])
    ]);

    applyFilters();
  });

  // Apply filters based on the provided options
  function applyFilters() {
    products = products.filter(product => {
      let valid = true;

      /**
       * Check if the product belongs to the selected category
       */
      if (initialCategories) {
        valid = initialCategories.includes(product[COLLECTION_KEYS_MAP.products.category]);
      }

      /**
       * Check if the product has at least one of the selected tags
       */
      if (initialTags) {
        valid = product[COLLECTION_KEYS_MAP.products.tags].some((tag: string) => initialTags.includes(tag));
      }

      /**
       * Check if the product price is within the selected range
       */
      if (initialMinPrice || initialMinPrice === 0) {
        valid = product[COLLECTION_KEYS_MAP.products.price] >= initialMinPrice;
      }

      /**
       * Check if the product price is within the selected range
       */
      if (initialMaxPrice) {
        valid = product[COLLECTION_KEYS_MAP.products.price] <= initialMaxPrice;
      }

      /**
       * Search
       */
      if (search) {
        // todo: implement search
      }

      return valid;
    });
  }

  // Reactively re-apply filters when relevant properties change
  $: applyFilters();
</script>

<div class="products">
  <div class="filters">
    {#if showCategoriesFilter && categories.length}
      <h4>Categories</h4>
      <select bind:value={initialCategories}>
        {#each categories as category}
          <option value={category[COLLECTION_KEYS_MAP.categories.id]}>{category[COLLECTION_KEYS_MAP.categories.name]}</option>
        {/each}
      </select>
    {/if}

    {#if showTagsFilter && tags.length}
      <h4>Tags</h4>
      <select bind:value={initialTags}>
        {#each tags as tag}
          <option value={tag[COLLECTION_KEYS_MAP.tags.id]}>{tag[COLLECTION_KEYS_MAP.tags.name]}</option>
        {/each}
      </select>
    {/if}

    {#if showPriceRangeFilter}
      <input type="number" bind:value={initialMaxPrice} placeholder="Min price" />
      <input type="number" bind:value={initialMinPrice} placeholder="Max price" />
    {/if}

    {#if showSearch}
      <input type="text" bind:value={search} placeholder="Search" />
    {/if}
  </div>
  {#if products.length === 0}
    <p>No products found</p>
  {/if}

  {#each products as product}
    <div class="product">
      <img src={product[COLLECTION_KEYS_MAP.products.image]} alt={product[COLLECTION_KEYS_MAP.products.name]} />
      <h4>{product[COLLECTION_KEYS_MAP.products.name]}</h4>
      <p>{product[COLLECTION_KEYS_MAP.products.description]}</p>
      <!--todo: add to card? quantity & price-->
    </div>
  {/each}
</div>
