import type { SelectOptions } from '../interfaces/select-options.interface';

export function selectPipe(collection: string, key: string, options: SelectOptions) {
  return (id: string, row: any) => {
    if (!window.columnSelects) {
      window.columnSelects = {};
    }

    window.columnSelects[id] = options;

    return `<column-select id="${id}" collection="${collection}" key="${key}" value="${row[key]}"></column-toggle>`;
  };
}
