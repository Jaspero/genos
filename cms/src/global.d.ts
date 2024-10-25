declare interface ColumnActionsConfigLink {
  label: string;
  href: string;
  icon?: string;
  disabled?: boolean;
}

declare interface ColumnActionsConfigButton {
  icon?: string;
  disabled?: boolean;
  label: string;
  action: (value: any) => void;
}

declare interface ColumnActionsConfig {
  collection?: string;
  actions?: Array<'edit' | 'duplicate' | 'delete'>;
  buttons?: ColumnActionsConfigButton[];
  prefix?: string;
  links?: ColumnActionsConfigLink[];
  rowData?: any;
  duplicateStorage?: string[];
  duplicateSubCollections?: string[];
}

declare interface Window {
  swipers?: {[key: string]: any};
  Swiper: any;
  columnActions?: {
    [key: string]: ColumnActionsConfig;
  };
  columnSelects?: {
    [key: string]: Array<{ value: string; label: string }>;
  };
}
