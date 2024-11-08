import type {TableHeader} from '@jaspero/web-components/dist/table-header.interface';
import {actionsPipe} from '../column-pipes/actions.pipe';

export function actionColumn(config?: (id: string, rowData: any, index: number) => ColumnActionsConfig): TableHeader {
	return  {
		key: 'id',
		label: '',
		pipes: [
			actionsPipe(config)
		],
		disableOrganize: true,
		hideOnExport: true
	} as TableHeader
}