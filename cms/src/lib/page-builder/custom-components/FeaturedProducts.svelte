<svelte:options customElement={{ tag: 'pb-featured-products', shadow: 'none' }} />

<script lang="ts">
  import { collection, doc, getDoc, getDocs, orderBy, query, limit as l } from 'firebase/firestore';
  import type { Product } from '../../interfaces/product.interface';
  import { db } from '../../utils/firebase';

  export let type: 'pre-defined' | 'dynamic';
  export let ids: string;
  export let property: string;
  export let direction: 'desc' | 'asc';
  export let limit: string;

  let products: Product[] = [];

  $: typeChanges(type);

  async function typeChanges(t: string) {
    switch (t) {
      case 'pre-defined': {
        if (ids) {
          const docs = await Promise.all(
            ids.split(',').map((id) => getDoc(doc(db, 'products', id)))
          );

          products = docs
            .filter((d) => d.exists)
            .map((d) => ({ id: d.id, ...d.data() }) as Product);
        } else {
          products = [];
        }

        break;
      }
      case 'dynamic': {
        if (property && direction) {
          const { docs } = await getDocs(
            query(collection(db, 'products'), orderBy(property, direction), l(parseInt(limit, 10)))
          );

          products = docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Product);
        } else {
          products = [];
        }

        break;
      }
    }
  }
</script>

<div class="products">
  {#each products as product}
    <div class="product">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
    </div>
  {/each}
</div>
