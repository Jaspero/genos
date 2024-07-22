declare interface ColumnActionsConfigLink {
  label: string;
  href: string;
  icon?: string;
}

declare interface ColumnActionsConfigButton {
  icon?: string;
  label: string;
  action: (value: any) => void;
}

declare interface ColumnActionsConfig {
  actions?: Array<'edit' | 'duplicate' | 'delete'>;
  buttons?: ColumnActionsConfigButton[];
  links?: ColumnActionsConfigLink[];
  duplicateSubCollections?: string[];
}

declare interface Window {
  columnActions?: {
    [key: string]: ColumnActionsConfig;
  };
  columnSelects?: {
    [key: string]: Array<{value: string; label: string}>;
  }
}
