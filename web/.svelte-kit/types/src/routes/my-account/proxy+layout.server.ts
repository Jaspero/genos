// @ts-nocheck
import { CONFIG } from '$lib/consts/config.const';
import { loadLayoutItem } from '$lib/utils/load-layout-item';
import type { PageServerLoad } from './$types';

export const load = async () => {
  return {
    header: await loadLayoutItem(CONFIG.singleHeader),
    footer: await loadLayoutItem(CONFIG.singleFooter)
  };
};
;null as any as PageServerLoad;