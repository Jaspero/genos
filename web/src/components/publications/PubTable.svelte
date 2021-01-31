<script>
  import {onMount} from 'svelte';
  import {firebase} from '../../config/firebase';

  export let publications;

  let fb;
  let hasMore = publications.length === 11;
  let items = publications.slice(0, 10);

  async function loadMore() {
    const data = await fb.collection('publications')
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

<section class="p-y-l bg-l-secondary">
  <div class="grid">
    <div class="col-12">
      <table class="gg-publications-table">
        <thead>
        <tr>
          <th>Year</th>
          <th>Title</th>
          <th>Reference</th>
          <th>Authors</th>
        </tr>
        </thead>
        <tbody>
        {#each items as publication}
          <tr>
            <td data-label="Year">{new Date(publication.createdOn).getFullYear()}</td>
            <td data-label="Title">{publication.title}</td>
          <td data-label="Reference">
            {#if publication.link}
              <a class="link" href="{publication.link}" rel="noopener" target="_blank">{publication.description || ''}</a>
            {:else}
              {publication.description || ''}
            {/if}
            <td data-label="Authors">{publication.authors}</td>
          </tr>
        {/each}
        </tbody>
      </table>
    </div>
    <div class="col-12 ta-center">
      <button type="button" class="gg-button m-y-xs" disabled={!hasMore} on:click={loadMore}>Load more</button>
    </div>
  </div>
</section>
