export function actionsPipe(config?: (id: string, rowData: any, index: number) => ColumnActionsConfig) {
  return (id: string, rowData: any, index: number) => {
    const internalConfig: ColumnActionsConfig = {
      links: [],
      actions: ['edit', 'duplicate', 'delete'],
      rowData,
      ...(config ? config(id, rowData, index) : {})
    };

    if (!window.columnActions) {
      window.columnActions = {};
    }

    window.columnActions[id] = internalConfig;

    return `<column-actions
      ${internalConfig.collection ? `collection=${internalConfig.collection}` : ''}
      id="${id}"
      index="${index}"
      actions="${(internalConfig.actions || []).join(',')}"
      duplicateStorage="${(internalConfig.duplicateStorage || []).join(',')}"
      duplicateSubCollections="${(internalConfig.duplicateSubCollections || []).join(',')}">
    </column-actions>`;
  };
}
