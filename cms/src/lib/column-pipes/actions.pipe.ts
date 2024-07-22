export function actionsPipe(config?: (id: string) => ColumnActionsConfig) {
  return (id: string) => {
    const internalConfig: ColumnActionsConfig = {
      links: [],
      actions: ['edit', 'duplicate', 'delete'],
      ...(config ? config(id) : {})
    };

    if (!window.columnActions) {
      window.columnActions = {};
    }

    window.columnActions[id] = internalConfig;

    return `<column-actions
      id="${id}"
      actions="${(internalConfig.actions || []).join(',')}"
      duplicateSubCollections="${(internalConfig.duplicateSubCollections || []).join(',')}">
    </column-actions>`;
  };
}
