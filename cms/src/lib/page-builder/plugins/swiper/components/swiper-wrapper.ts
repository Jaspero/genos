import { elHasClass } from '../has-class';
import { SWIPER_CONSTS } from '../swiper-consts';

export function swiperWrapper(dc: any, config: any = {}) {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const { wrapperName, slideSelector, containerSelector } = SWIPER_CONSTS;

  dc.addType(wrapperName, {
    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Wrapper',
        droppable: slideSelector,
        draggable: containerSelector,
        ...config.wrapperProps
      },

      init() {
        const cls = config.classWrapper;
        this.get('classes').pluck('name').indexOf(cls) < 0 && this.addClass(cls);
      }
    },
    isComponent: (el: any) => elHasClass(el, config.classWrapper),
    view: {
      init() {
        this.listenTo(this.model.components(), 'add remove', this.renderSlider);
      },

      renderSlider() {
        const slider = this.model.parent().parent();
        slider && slider.view.render();
      }
    }
  });
}
