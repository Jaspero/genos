<script lang="ts">
  import type { QueryDocumentSnapshot } from 'firebase/firestore';
  import { collection, getDocs, limit, orderBy, query, startAt, where } from 'firebase/firestore';
  import { onDestroy, onMount } from 'svelte';
  import { db } from './utils/firebase';
  import '@jaspero/web-components/dist/async-table.wc';
  import '@jaspero/web-components/dist/async-table.css';
  import { goto } from '$app/navigation';
  import Button from './Button.svelte';
  import Dialog from './Dialog.svelte';
  import FormModule from './FormModule.svelte';
  import type { FilterOperators } from './interfaces/filter-operators.interface';
  import { page } from '$app/stores';
  import { base64UrlDecode, base64UrlEncode } from '@jaspero/utils';
  import { clientStorage } from './services/client-storage.service';
  import { token, user } from '$lib/utils/firebase';
  import type { Sort } from './interfaces/sort.interface';
  import type { CommonDataContext } from '$lib/interfaces/common-data-context.interface';
  import type { TableHeader } from '@jaspero/web-components/dist/table-header.interface';

  export let col: string;
  export let headers: TableHeader[];
  export let pageSize = 10;
  export let pageSizes = [10, 25, 50, 100];
  export let baseLink: string | null = null;
  export let id: string;
  export let initialSort: {
    key: string;
    direction: 'asc' | 'desc';
  } | null = null;
  export let filterOptions: ((context: CommonDataContext) => Promise<any[]>) | null = null;
  export let defaultFilters: ((context: CommonDataContext) => Promise<any[]>) | null = null;
  export let onTableLoad: ((context: CommonDataContext) => Promise<void>) | null = null;
  export let filterOperators: FilterOperators = {};
  export let filtersValue: any = {};
  export let rawClick = false;
  export let freezeFirstColumn = true;
  export let freezeLastColumn = true;
  export let showImport = false;
  export let showExport = true;
  export let showArrangingColumns = true;
  export let allowArrangeColumns = true;
  export let importMethod: ((file: File) => Promise<any>) | null = null;

  let el: HTMLDivElement;
  let ref: QueryDocumentSnapshot<any> | null = null;
  let instance: any;
  let filtersLoading = false;
  let filterItems: any[] | null;
  let defaultFilterItems: any[] | null;
  let filterDialogOpen = false;
  let pageSubscription: any;

  $: filterOptions && (filterItems = null);
  $: (defaultFilters || defaultFilters === undefined) && (defaultFilterItems = null);

  async function get(sort: null | Sort, size: number) {
    if (!defaultFilterItems && defaultFilters) {
      defaultFilterItems = (await defaultFilters!({ user: $user, token: $token })).map((filter) =>
        where(filter.key, filter.operator, filter.value)
      );
    }

    const queries: any[] = [collection(db, col), ...(defaultFilterItems || [])];

    if (sort) {
      queries.push(orderBy(sort.key.replace('/', ''), sort.direction));
    }

    if (Object.keys(filtersValue).length) {
      queries.push(
        ...Object.entries(filtersValue)
          /**
           * We consider undefined and '' as empty values
           * while null and false are valid
           */
          .filter(([key, value]) => value !== '' && value !== undefined)
          .map(([key, value]) =>
            where(filterOperators[key]?.key || key, filterOperators[key]?.operator || '==', value)
          )
      );
    }

    const snap = await getDocs(
      // @ts-ignore
      query(...queries, limit(size + 1))
    );

    ref = snap.docs[snap.docs.length - 1];

    return {
      hasMore: snap.docs.length > size,
      rows: snap.docs.slice(0, size).map((doc, index) => ({
        index: index + 1,
        id: doc.id,
        ...(doc.data() as any)
      }))
    };
  }

  async function loadMore(sort: null | Sort, size: number) {
    const queries: any[] = [collection(db, col), ...(defaultFilterItems || [])];

    if (sort) {
      queries.push(orderBy(sort.key.replace('/', ''), sort.direction));
    }

    if (Object.keys(filtersValue).length) {
      queries.push(
        ...Object.entries(filtersValue)
          /**
           * We consider undefined and '' as empty values
           * while null and false are valid
           */
          .filter(([key, value]) => value !== '' && value !== undefined)
          .map(([key, value]) =>
            where(filterOperators[key]?.key || key, filterOperators[key]?.operator || '==', value)
          )
      );
    }

    if (ref) {
      queries.push(startAt(ref));
    }

    const snap = await getDocs(
      // @ts-ignore
      query(...queries, limit(size + 1))
    );

    ref = snap.docs[snap.docs.length - 1];

    return {
      hasMore: snap.docs.length > size,
      rows: snap.docs.slice(0, size).map((doc, index) => ({
        index: index + 1,
        id: doc.id,
        ...(doc.data() as any)
      }))
    };
  }

  async function openFilters() {
    filtersLoading = true;

    if (!filterItems) {
      filterItems = await filterOptions!({ user: $user, token: $token });
    }

    filterDialogOpen = true;
    filtersLoading = false;
  }

  async function adjustPageSize(size: number) {
    await clientStorage.updatePageSize(size);
  }

  async function adjustSort(sort: any) {
    await clientStorage.updateSort(sort);
  }

  async function clearFilters() {
    filtersValue = {};

    $page.url.searchParams.delete('filters');

    await instance.getData();

    goto($page.url.toString());

    filterDialogOpen = false;
  }

  async function applyFilters() {
    filtersValue = Object.keys(filtersValue).reduce((acc: any, cur) => {
      if (filtersValue[cur] || filtersValue[cur] === false) {
        acc[cur] = filtersValue[cur];
      }
      return acc;
    }, {});

    $page.url.searchParams.set('filters', base64UrlEncode(filtersValue));

    await instance.getData();

    goto($page.url.toString());

    filterDialogOpen = false;
  }

  async function importData(file: File) {
    if (importMethod) {
      return await importMethod(file);
    }
  }

  async function exportData() {
    const queries: any[] = [collection(db, col), ...(defaultFilterItems || [])];

    if (Object.keys(filtersValue).length) {
      queries.push(
        ...Object.entries(filtersValue)
          /**
           * We consider undefined and '' as empty values
           * while null and false are valid
           */
          .filter(([key, value]) => value !== '' && value !== undefined)
          .map(([key, value]) =>
            where(filterOperators[key]?.key || key, filterOperators[key]?.operator || '==', value)
          )
      );
    }

    const snap = await getDocs(
      // @ts-ignore
      query(...queries)
    );

    ref = snap.docs[snap.docs.length - 1];

    return snap.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as any)
    }));
  }

  onMount(async () => {
    let lastPage = '';

    pageSubscription = page.subscribe(async ({ url }) => {
      if (lastPage === url.pathname) {
        return;
      }

      if (onTableLoad) {
        await onTableLoad!({ user: $user, token: $token });
      }

      lastPage = url.pathname;

      const state = await clientStorage.getByUrl();

      if (state) {
        if (state.size) {
          pageSize = state.size;
        }

        if (state.sort) {
          initialSort = state.sort;
        }
      }

      if ($page.url.searchParams.has('filters')) {
        filtersValue = base64UrlDecode($page.url.searchParams.get('filters')!);
      } else {
        filtersValue = {};
      }

      if (instance) {
        instance.parentElement.removeChild(instance);
      }

      instance = document.createElement('jp-async-table') as any;

      instance.service = {
        get,
        loadMore,
        adjustPageSize,
        adjustSort,
        export: exportData,
        import: importData,
        arrangeColumns: (id: string, headers: string[]) => clientStorage.saveHeaders(id, headers),
        getColumnOrder: (id: string) => clientStorage.getHeaders(id)
      };
      instance.headers = headers;
      instance.pageSizes = pageSizes;
      instance.pageSize = pageSize;
      instance.showArrangingColumns = showArrangingColumns;
      instance.allowArrangeColumns = allowArrangeColumns;
      instance.showImport = showImport;
      instance.showExport = showExport;
      instance.rowClickable = rawClick;
      instance.freezeFirstColumn = freezeFirstColumn;
      instance.freezeLastColumn = freezeLastColumn;
      instance.dropdownMenuExport = true;
      instance.id = id;

      if (initialSort) {
        instance.sort = initialSort;
      }

      const { y } = el.getBoundingClientRect();
      const headerHeight = 44;
      const footerHeight = 80;
      const bottomPadding = 40;

      instance.height = `calc(100vh - ${y + headerHeight + footerHeight + bottomPadding}px)`;

      const rowClickHandler = (e: any) => {
        if (!rawClick) {
          return;
        }
        const { row } = e.detail;
        goto(baseLink! + row.id);
      };

      instance.addEventListener('rowClick', rowClickHandler);
      el.appendChild(instance);
    });
  });

  onDestroy(() => {
    if (pageSubscription) {
      pageSubscription();
    }
  });
</script>

<div class="header">
  <div class="flex">
    {#if filterOptions}
      <Button on:click={openFilters} loading={filtersLoading}>Filters</Button>
      {#if Object.keys(filtersValue).length}
        <Button variant="outlined" color="warn" on:click={clearFilters}>Clear</Button>
      {/if}
    {/if}
  </div>
  <div class="flex gap-2 items-center">
    <slot name="header" />
  </div>
</div>

<div bind:this={el}></div>

<Dialog bind:open={filterDialogOpen} removePadding>
  <svelte:fragment slot="title">Filters</svelte:fragment>

  <form id="filters" on:submit|preventDefault={applyFilters}>
    <FormModule items={filterItems} bind:value={filtersValue} />
  </form>

  <slot slot="actions">
    <Button variant="filled" color="primary" type="submit" form="filters">Apply filters</Button>
  </slot>
</Dialog>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
</style>
