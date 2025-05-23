<script lang="ts">
  import { collection, getCountFromServer } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase';
  import { base64UrlEncode } from '@jaspero/utils';
  import DataTable from '$lib/DataTable.svelte';
  import { reviewStarsPipe } from '$lib/column-pipes/review-stars.pipe';
  import { datePipe } from '$lib/column-pipes/date.pipe';
  import { CONFIG } from '$lib/consts/config.const';
  import { indexPipe } from '$lib/column-pipes/index.pipe';

  const headers = [
    {
      key: '/id',
      label: 'Number',
      pipes: [indexPipe]
    },
    {
      key: '/createdOn',
      label: 'Created On',
      pipes: [datePipe]
    },
    {
      key: '/rating',
      label: 'Rating',
      pipes: [reviewStarsPipe()]
    },
    {
      key: '/comment',
      label: 'Comment'
    },
    {
      key: '/customer',
      label: 'Customer'
    }
  ];
  export let data: any;

  async function allReviews() {
    const reviewsCollectionRef = collection(db, 'products', data.id, 'reviews');
    return (await getCountFromServer(reviewsCollectionRef)).data().count;
  }
</script>

<svelte:head>
  <title>Product Reviews - Shop - {CONFIG.title}</title>
</svelte:head>

<div class="flex flex-col max-w-7xl mx-auto p-6">
  <div class="flex">
    <div class="w-1/5">
      <div class="text-2xl font-bold mb-4">{data.name}</div>

      <div class="text-6xl text-secondary font-bold mb-4">
        {#await allReviews()}
          -
        {:then count}
          {count}
        {/await}
      </div>
      <a
        href="/dashboard/sales/orders?filters={base64UrlEncode({ category: data.id })}"
        class="text-blue-500 mb-8">View reviews</a
      >
      <jp-review-star-rating value={data.averageRating}></jp-review-star-rating>
    </div>

    <div class="w-4/5">
      <DataTable
        {headers}
        baseLink="/dashboard/shop/products/"
        col={'products/' + data.id + '/reviews'}
      />
    </div>
  </div>
</div>

<style lang="postcss">
  .counter {
    @apply flex flex-col items-center col-span-3;
  }

  .counter-number {
    @apply text-6xl text-secondary font-bold;
  }
</style>
