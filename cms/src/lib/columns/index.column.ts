import type {TableHeader} from '@jaspero/web-components/dist/table-header.interface';
import {indexPipe} from '../column-pipes/index.pipe';

export function indexColumn(): TableHeader {
	return  {
		key: '/id',
		label: 'Number',
		pipes: [indexPipe],
		disableOrganize: true
	} as TableHeader
}