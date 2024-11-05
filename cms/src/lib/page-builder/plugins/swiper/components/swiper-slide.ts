import { elHasClass } from '../has-class';
import { SWIPER_CONSTS } from '../swiper-consts';

export function swiperSlide(dc: any, config: any = {}) {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const { slideName, wrapperSelector } = SWIPER_CONSTS;

  dc.addType(slideName, {
    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Slide',
        draggable: wrapperSelector,
        ...config.slideProps
      }
    },
    isComponent: (el: any) => elHasClass(el, config.classSlide),
    view: defaultView
  });
}
