export function actionsPipe(config?: (id: string, rowData?: any) => ColumnActionsConfig) {
  return (id: string, rowData: any) => {
    const internalConfig: ColumnActionsConfig = {
      links: [],
      actions: ['edit', 'duplicate', 'delete'],
      rowData,
      ...(config ? config(id, rowData) : {})
    };

    if (!window.columnActions) {
      window.columnActions = {};
    }

    window.columnActions[id] = internalConfig;

    return `<column-actions
      ${internalConfig.collection ? `collection=${internalConfig.collection}` : ''}
      id="${id}"
      actions="${(internalConfig.actions || []).join(',')}"
      duplicateStorage="${(internalConfig.duplicateStorage || []).join(',')}"
      duplicateSubCollections="${(internalConfig.duplicateSubCollections || []).join(',')}">
    </column-actions>`;
  };
}
