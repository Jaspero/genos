import type { DocumentReference } from 'firebase/firestore';
import type { FilterOperators } from '../interfaces/filter-operators.interface';
import type { Sort } from '../interfaces/sort.interface';
import type { CommonDataContext } from '$lib/interfaces/common-data-context.interface';

export interface TableHeader {
  key: string;
  label: string;
  pipes?: Array<(value: any, row: any, index: number) => any>;
  exportPipes?: Array<(value: any, row: any, index: number) => any>;
  sortable?: boolean;
  disabled?: boolean;
}

export interface Collection {
  name: string;
  module?: string;
  tableHeaders: TableHeader[];
  /**
   * Allows for providing an html snippet that is injected
   * in the header slot of the overview page
   */
  headerSlot?: string;
  // @default false
  freezeFirstColumn?: boolean;
  // @default false
  freezeLastColumn?: boolean;
  // @default 10
  pageSize?: number;
  // @default [10, 25, 50, 100]
  pageSizes?: number[];
  // @default true
  showArrangingColumns?: boolean;
  // @default true
  allowArrangeColumns?: boolean;
  // @default false
  showImport?: boolean;
  // @default true
  showExport?: boolean;
  initialSort?: Sort;
  filterOperators?: FilterOperators;
  filterOptions?: (context: CommonDataContext) => Promise<any[]>;
  defaultFilters?: (context: CommonDataContext) => Promise<any[]>;
  onTableLoad?: (context: CommonDataContext) => Promise<any>;
  form?: (id: string, entryData?: any) => any;
  formOnValueChange?: (value: any, elements?: any) => void;
  singularName?: string;
  add?: boolean;
  editKey?: string;

  /**
   * Applicable only on new document creation
   */
  formInitialValue?: any;

  /**
   * Runs before rendering the form
   */
  formatPreRender?: (value: any) => any;

  /**
   * Provide either an idPrefix or createId.
   * An idPrefix will produce `${idPrefix}-${random.string(24)}` and
   * createId allows for providing a custom method.
   */
  idPrefix?: string;
  createId?: () => string;

  /**
   * Invoked before the form is submitted use preCreate or preEdit for logic that
   * needs to invoke only before creates or edits.
   */
  preSubmit?: (id: string, value: any) => Promise<void>;
  preCreate?: (id: string, value: any) => Promise<string | void>;
  preEdit?: (id: string, value: any) => Promise<void>;
  createMethod?: (collection: string, id: string, value: any) => Promise<void>;
  editMethod?: (ref: DocumentReference, value: any) => Promise<void>;
  importMethod?: (file: File) => Promise<any>;
  postSubmit?: (id: string, value: any) => Promise<void>;
}
