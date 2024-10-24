<script lang="ts">
  import { meta } from '$lib/meta/meta.store';
  import { getDocs, query, collection, where, limit } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import { db, user } from '$lib/utils/firebase';
  import type { Order } from '$lib/types/order.interface';

  meta.set({
    title: 'Orders',
    noIndex: true
  });

  const sizeLimit = 5;

  let orders: Order[] = [];

  onMount(async () => {
    const querySnapshot = await getDocs(
      query(collection(db, 'orders'), where('customer', '==', $user!.id), limit(sizeLimit))
    );

    orders = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Order));
  });
</script>

{#each orders as order}
  <p>Date: {new Date(order.createdOn).toLocaleDateString()}</p>
  <p>Invoice ID: {order.invoiceId}</p>
{/each}
