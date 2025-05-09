<svelte:options customElement={{ tag: 'pb-products', shadow: 'none' }} />

<script lang="ts">
  import { onMount } from 'svelte';
  import { CONFIG } from '$lib/consts/config.const';
  import { COLLECTION_KEYS_MAP } from '$lib/consts/tracked-collection.const';

  interface FilterParams {
    initialcategories: string[];
    initialtags: string[];
    initialminprice: number;
    initialmaxprice: number;
    search: string;
    limit: string;
    direction: string;
    property: string;
  }

  export let limit: string;
  export let property: string;
  export let direction: 'desc' | 'asc';
  export let showSort: boolean;

  /**
   * Filters
   */
  export let showpricerangefilter: boolean;
  export let showcategoriesfilter: boolean;
  export let showtagsfilter: boolean;
  export let showsearch: boolean;

  /**
   * Initial values
   */
  export let initialcategories: string[];
  export let initialtags: string[];
  export let initialminprice: number;
  export let initialmaxprice: number;

  let products: any[] = [];
  let tags: any[] = [];
  let categories: any[] = [];
  let search = '';
  let searchTimeout: NodeJS.Timeout;

  onMount(async () => {
    [tags, categories, products] = await Promise.all([
      fetch(CONFIG.websiteUrl + '/data/tags.json')
        .then((response) => response.json())
        .catch(() => []),
      fetch(CONFIG.websiteUrl + '/data/categories.json')
        .then((response) => response.json())
        .catch(() => []),
      fetch(CONFIG.websiteUrl + '/data/products.json')
        .then((response) => response.json())
        .catch(() => [])
    ]);
  });

  function applyFilters(data: FilterParams) {
    // Reduce to filter, sort, and limit in one pass
    products = products.reduce((acc, product) => {
      let valid = false;

      /**
       * Check if the product belongs to the selected category
       */
      if (data.initialcategories) {
        valid = data.initialcategories.includes(product[COLLECTION_KEYS_MAP.products.category]);
      }
      /**
       * Check if the product has at least one of the selected tags
       */
      if (valid && data.initialtags) {
        valid = product[COLLECTION_KEYS_MAP.products.tags].some((tag: string) =>
          data.initialtags.includes(tag)
        );
      }

      /**
       * Check if the product price is within the selected range
       */
      if (valid && (data.initialminprice || data.initialminprice === 0)) {
        valid = product[COLLECTION_KEYS_MAP.products.price] >= data.initialminprice;
      }

      /**
       * Check if the product price is within the selected range
       */
      if (valid && data.initialmaxprice) {
        valid = product[COLLECTION_KEYS_MAP.products.price] <= data.initialmaxprice;
      }

      /**
       * Search
       */
      if (valid && data.search) {
        valid = product[COLLECTION_KEYS_MAP.products.name]
          .toLowerCase()
          .split(' ')
          .includes(data.search.toLowerCase());
      }

      // Only push if valid and we haven't exceeded the limit and limit is set
      if (valid && (!data.limit || acc.length < parseInt(data.limit, 10))) {
        acc.push(product);

        // Sort the accumulator by the property after pushing the product
        if (data.direction && data.property) {
          acc.sort((a, b) => {
            if (data.direction === 'asc') {
              return a[COLLECTION_KEYS_MAP.products[property]] >
                b[COLLECTION_KEYS_MAP.products[property]]
                ? 1
                : -1;
            } else {
              return a[COLLECTION_KEYS_MAP.products[property]] <
                b[COLLECTION_KEYS_MAP.products[property]]
                ? 1
                : -1;
            }
          });
        }
      }

      return acc;
    }, []);
  }

  function handleSearchInput(event: any) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      search = event.target.value;
    }, 300);
  }

  $: applyFilters({
    initialcategories,
    initialtags,
    initialminprice,
    initialmaxprice,
    search,
    limit,
    direction,
    property
  });
</script>

<div class="products">
  <div class="filters">
    {#if showSort}
      <h4>Sort</h4>
      <select bind:value={property}>
        <option value={COLLECTION_KEYS_MAP.products.name}>Name</option>
        <option value={COLLECTION_KEYS_MAP.products.price}>Price</option>
        <option value={COLLECTION_KEYS_MAP.products.createdOn}>Created On</option>
      </select>
      <select bind:value={direction}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    {/if}
    {#if showcategoriesfilter && categories.length}
      <h4>Categories</h4>
      <select bind:value={initialcategories}>
        {#each categories as category}
          <option value={category[COLLECTION_KEYS_MAP.categories.id]}
            >{category[COLLECTION_KEYS_MAP.categories.name]}</option
          >
        {/each}
      </select>
    {/if}

    {#if showtagsfilter && tags.length}
      <h4>Tags</h4>
      <select bind:value={initialtags}>
        {#each tags as tag}
          <option value={tag[COLLECTION_KEYS_MAP.tags.id]}
            >{tag[COLLECTION_KEYS_MAP.tags.name]}</option
          >
        {/each}
      </select>
    {/if}

    {#if showpricerangefilter}
      <input type="number" bind:value={initialmaxprice} placeholder="Min price" />
      <input type="number" bind:value={initialminprice} placeholder="Max price" />
    {/if}

    {#if showsearch}
      <input type="text" placeholder="Search" on:input={(e) => handleSearchInput(e)} />
    {/if}
  </div>

  {#if products.length === 0}
    <p>No products found</p>
  {/if}

  {#each products as product}
    <a href={`/product/${product[COLLECTION_KEYS_MAP.products.id]}`} class="product">
      <img
        src={product[COLLECTION_KEYS_MAP.products.image]}
        alt={product[COLLECTION_KEYS_MAP.products.name]}
      />
      <h4>{product[COLLECTION_KEYS_MAP.products.name]}</h4>
      <p>{product[COLLECTION_KEYS_MAP.products.description]}</p>
    </a>
  {/each}
</div>
