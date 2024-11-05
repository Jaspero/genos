import { elHasClass } from '../has-class';
import { SWIPER_CONSTS } from '../swiper-consts';

export function swiperNavNext(dc: any, config: any = {}) {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const { nextName, containerSelector } = SWIPER_CONSTS;
  const classId = config.classNext;
  const type = nextName;

  dc.addType(type, {
    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Nav Next',
        copyable: 0,
        draggable: containerSelector,
        ...config.nextProps
      },
      init() {
        this.get('classes').pluck('name').indexOf(classId) < 0 && this.addClass(classId);
      }
    },
    isComponent: (el) => elHasClass(el, classId),
    view: defaultType.view
  });
}
