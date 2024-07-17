import type {DocumentReference} from 'firebase/firestore';
import type { FilterOperators } from '../interfaces/filter-operators.interface';
import type { Sort } from '../interfaces/sort.interface';

export interface TableHeader {
  key: string;
  label: string;
  pipes?: Array<(value: any, row: any, index: number) => any>;
  exportPipes?: Array<(value: any, row: any, index: number) => any>;
  sortable?: boolean;
}

export interface Collection {
  name: string;
  module?: string;
  tableHeaders: TableHeader[];
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
  filterOptions?: () => Promise<any[]>;
  form?: (id: string) => any;
  singularName?: string;
  add?: boolean;
  editKey?: string;

  /**
   * Applicable only on new document creation
   */
  formInitialValue?: any,

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
  preCreate?: (id: string, value: any) => Promise<void>;
  preEdit?: (id: string, value: any) => Promise<void>;
  createMethod?: (collection: string, id: string, value: any) => Promise<void>;
  editMethod?: (ref: DocumentReference, value: any) => Promise<void>;
  importMethod?: (file: File) => Promise<any>;
}
