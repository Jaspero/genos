import {elHasClass} from '../has-class';
import {SWIPER_CONSTS} from '../swiper-consts';


export function swiperPagination(dc: any, config: any = {}) {
	const defaultType = dc.getType('default');
	const defaultModel = defaultType.model;
	const {paginationName, containerSelector} = SWIPER_CONSTS;
	const classId = config.classPagination;
	const type = paginationName;

	dc.addType(type, {
		model: {
			defaults: {
				...defaultModel.prototype.defaults,
				name: 'Pagination',
				copyable: 0,
				draggable: containerSelector,
				...config.paginationProps
			},

			init() {
				this.get('classes').pluck('name').indexOf(classId) < 0 && this.addClass(classId);
			}
		},
		isComponent: (el: any) => elHasClass(el, classId),
		view: defaultType.view
	});
}
