<script lang="ts">
  import { page } from '$app/stores';
  import DataTable from '$lib/DataTable.svelte';
  import { datePipe } from '$lib/column-pipes/date.pipe';
  import { indexPipe } from '$lib/column-pipes/index.pipe';
  import { CONFIG } from '$lib/consts/config.const';
  import type { Sort } from '$lib/interfaces/sort.interface';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';

  export let data: {
    properties: Array<{ key: string; label: string }>;
  };

  const headers = [
    {
      key: '/id',
      label: '#',
      pipes: [indexPipe]
    },
    {
      key: '/createdOn',
      label: 'Created On',
      pipes: [datePipe]
    },
    ...data.properties.map((it) => ({
      key: `/${it.key}`,
      label: it.label
    }))
  ];
  const initialSort: Sort = { key: 'createdOn', direction: 'desc' };
</script>

<Grid>
  <GridCol span="12">
    <DataTable
      id="form-responses"
      col={'forms/' + $page.params.id + '/form-responses'}
      {headers}
      {initialSort}
      baseLink="/"
    />
  </GridCol>
</Grid>

<svelte:head>
  <title>Form Results - {CONFIG.title}</title>
</svelte:head>
