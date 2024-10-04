<svelte:options customElement={{ tag: 'pb-product-card', shadow: 'none' }} />

<script lang="ts">
  import { doc, getDoc } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase';
  import { onMount } from 'svelte';
  import type { Product } from '$lib/interfaces/product.interface';

  export let id: string;

  let product: Product;

  onMount(async () => {
    const docSnap = await getDoc(doc(db, 'products', id));

    if (docSnap.exists()) {
      product = docSnap.data() as Product;
    }
  });
</script>

{#if product}
  <div class="product">
    <img src={product.image} alt={product.name} />
    <h4>{product.name}</h4>
    <p>{product.description}</p>
  </div>
{/if}
