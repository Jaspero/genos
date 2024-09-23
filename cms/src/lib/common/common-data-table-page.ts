import { collections } from '$lib/collections/collections.js';
import { error } from '@sveltejs/kit';
import type TableHeader from '../TableHeader.svelte';
import type { FilterOperators } from '../interfaces/filter-operators.interface';
import type { Sort } from '../interfaces/sort.interface';
import type { Collection } from '../collections/collection.interface';

export interface CommonDataTablePageData {
  name: string;
  headers: TableHeader[];
  headerSlot?: string;
  add: boolean;
  singularName: string;
  filterOperators?: FilterOperators;
  freezeFirstColumn?: boolean;
  freezeLastColumn?: boolean;
  pageSize: number;
  pageSizes: number[];
  showArrangingColumns?: boolean;
  allowArrangeColumns?: boolean;
  showImport?: boolean;
  showExport?: boolean;
  filterOptions?: () => Promise<any[]>;
  initialSort?: Sort;
  collection?: string;
  module?: string;
  importMethod?: (file: File) => Promise<any>;
}

export async function commonDataTablePage({ params, parent }: any) {
  await parent();

  const { collection, module } = params;

  const data: Collection = params.collectionData
    ? params.collectionData
    : collections.getCollection(collection);

  if (!data) {
    error(404, 'Collection not found');
  }

  if (module && data.module !== module) {
    error(404, 'Module not found');
  }

  return {
    collection,
    module,
    name: data.name,
    headers: data.tableHeaders,
    add: data.add,
    headerSlot: data.headerSlot,
    singularName: data.singularName || data.name,
    filterOperators: data.filterOperators,
    freezeFirstColumn: data.freezeFirstColumn,
    freezeLastColumn: data.freezeLastColumn,
    pageSize: data.pageSize || 10,
    pageSizes: data.pageSizes || [10, 25, 50, 100],
    filterOptions: data.filterOptions,
    initialSort: data.initialSort,
    showImport: data.showImport,
    showExport: data.showExport,
    showArrangingColumns: data.showArrangingColumns,
    allowArrangeColumns: data.allowArrangeColumns,
    importMethod: data.importMethod
  };
}
