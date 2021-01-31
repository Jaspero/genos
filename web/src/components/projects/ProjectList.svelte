<script>
  import {onMount} from 'svelte';
  import {firebase} from '../../config/firebase';

  export let projects;

  let fb;
  let hasMore = projects.length === 11;
  let items = projects.slice(0, 10);

  async function loadMore() {
    const data = await fb.collection('projects')
      .orderBy('createdOn', 'desc')
      .startAfter(items[items.length - 1].createdOn)
      .limit(11)
      .get();

    items = [
      ...items,
      ...data.docs.slice(0, 10).map(it => ({
        id: it.id,
        ...it.data()
      }))
    ];
    hasMore = data.docs.length === 11;
  }

  onMount(async () => {
    fb = (await firebase()).firestore();
  })
</script>

<section class="p-y-l">
  <div class="grid">
    {#each items as project}
      <div class="col-6 col-s-12">
        <a class="gg-card h-full" rel="prefetch" href="projekti/{project.id}">
          <p class="m-b-s fw-bold">{project.title}</p>
          <p class="m-b-s">{project.excerpt}</p>
        </a>
      </div>
    {/each}
    <div class="col-12 ta-center">
      <button type="button" class="gg-button m-y-xs" disabled={!hasMore} on:click={loadMore}>Load more</button>
    </div>
  </div>
</section>
