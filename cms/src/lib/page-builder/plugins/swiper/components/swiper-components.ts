import {swiperContainer} from './swiper-container';
import {swiperNavNext} from './swiper-nav-next';
import {swiperNavPrev} from './swiper-nav-prev';
import {swiperPagination} from './swiper-pagination';
import {swiperScrollbar} from './swiper-scrollbar';
import {swiperSlide} from './swiper-slide';
import {swiperWrapper} from './swiper-wrapper';

export function swiperComponents(editor: any, config: any = {}) {
  const domComponents = editor.DomComponents;

  swiperContainer(domComponents, config);
  swiperWrapper(domComponents, config);
  swiperSlide(domComponents, config);
  swiperNavNext(domComponents, config);
  swiperNavPrev(domComponents, config);
  swiperPagination(domComponents, config);
  swiperScrollbar(domComponents, config);
}
