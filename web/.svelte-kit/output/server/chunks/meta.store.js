import { w as writable } from "./index2.js";
import { C as CONFIG } from "./config.const.js";
const META_SUFFIX = ` | ${CONFIG.title}`;
const meta = writable({ title: "Home" });
export {
  META_SUFFIX as M,
  meta as m
};
