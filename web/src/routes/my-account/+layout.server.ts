import { CONFIG } from '$lib/consts/config.const';
import { loadLayoutItem } from '$lib/utils/load-layout-item';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    header: await loadLayoutItem(CONFIG.singleHeader),
    footer: await loadLayoutItem(CONFIG.singleFooter)
  };
};
