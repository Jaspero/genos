import {elHasClass} from '../has-class';
import {SWIPER_CONSTS} from '../swiper-consts';

export function swiperScrollbar(dc: any, config: any = {}) {
	const defaultType = dc.getType('default');
	const defaultModel = defaultType.model;
	const {scrollbarName, containerSelector} = SWIPER_CONSTS;
	const classId = config.classScrollbar;
	const type = scrollbarName;

	dc.addType(type, {
		model: {
			defaults: {
				...defaultModel.prototype.defaults,
				name: 'Scrollbar',
				copyable: 0,
				draggable: containerSelector,
				...config.scrollbarProps
			},

			init() {
				this.get('classes').pluck('name').indexOf(classId) < 0 && this.addClass(classId);
			}
		},
		isComponent: (el: any) => elHasClass(el, classId),
		view: defaultType.view
	});
}
