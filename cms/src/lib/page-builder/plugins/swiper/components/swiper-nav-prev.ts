import {elHasClass} from '../has-class';
import {SWIPER_CONSTS} from '../swiper-consts';

export function swiperNavPrev(dc: any, config: any = {}) {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const { prevName, containerSelector } = SWIPER_CONSTS;
  const classId = config.classPrev;
  const type = prevName;

  dc.addType(type, {
		model: {
			defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Nav Previous',
        copyable: 0,
        draggable: containerSelector,
        ...config.prevProps
      },

      init() {
        this.get('classes').pluck('name').indexOf(classId) < 0 && this.addClass(classId);
      }
		},
		isComponent: (el: any) => elHasClass(el, classId),
    view: defaultType.view
  });
}
