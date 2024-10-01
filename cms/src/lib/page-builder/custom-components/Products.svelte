<svelte:options customElement={{ tag: 'pb-products', shadow: 'none' }} />

<script lang="ts">
  import type { Product } from '../../interfaces/product.interface';
  import { onMount } from 'svelte';

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

  onMount(async () => {
    const [tags, categories, products] = await Promise.all([
      fetch('/public/tags.json'),
      fetch('/public/categories.json'),
      fetch('/public/products.json')
    ])
      .then(response => Promise.all(response.map(res => res.json().catch(() => []))))

    console.log(tags, categories, products);
  });
</script>

<div class="products">
  <div>
    Filter
  </div>
  {#if products.length === 0}
    <p>No products found</p>
  {/if}

  {#each products as product}
    <div class="product">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
    </div>
  {/each}
</div>
