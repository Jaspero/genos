<script lang="ts">
  import { page } from '$app/stores';
  import Button from '$lib/Button.svelte';
  import DataTable from '$lib/DataTable.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import { CONFIG } from '$lib/consts/config.const';
  import type { CommonDataTablePageData } from './common-data-table-page';

  export let data: CommonDataTablePageData;

  $: col = ($page.params.collection || data.collection) as string;
  $: baseLink = ['/dashboard', $page.params.module || data.module, col].filter(Boolean).join('/');
</script>

<Grid>
  <GridCol span="12">
    <DataTable
      {col}
      id={$page.url.pathname}
      headers={data.headers}
      initialSort={data.initialSort}
      filterOptions={data.filterOptions}
      filterOperators={data.filterOperators}
      freezeFirstColumn={data.freezeFirstColumn}
      freezeLastColumn={data.freezeLastColumn}
      showArrangingColumns={data.showArrangingColumns}
      allowArrangeColumns={data.allowArrangeColumns}
      showImport={data.showImport}
      showExport={data.showExport}
      importMethod={data.importMethod}
      {baseLink}
    >
      <slot slot="header">
        {#if data.headerSlot}
          {@html data.headerSlot}
        {/if}
        {#if data.add}
          <Button href="{baseLink}/new">Add new {data.singularName}</Button>
        {/if}
      </slot>
    </DataTable>
  </GridCol>
</Grid>

<svelte:head>
  <title>{data.name} - {CONFIG.title}</title>
</svelte:head>
