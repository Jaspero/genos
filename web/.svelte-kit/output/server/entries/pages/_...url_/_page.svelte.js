import { k as bind_props, c as pop, p as push } from "../../../chunks/index3.js";
import { o as onDestroy } from "../../../chunks/index-server.js";
import "../../../chunks/client.js";
import { m as meta } from "../../../chunks/meta.store.js";
import "../../../chunks/language.js";
import "@jaspero/web-components/dist/image-gallery.wc.js";
import "@jaspero/web-components/dist/render-alert.js";
import { h as html } from "../../../chunks/html.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let scrolls = [];
  let y = 0;
  meta.set({ title: data.title, ...data.meta });
  if (!data.renderLayout) ;
  function scrolled(top) {
    scrolls.forEach((scroll2) => {
      if (!scroll2.el || !scroll2.className) {
        return;
      }
      if (top > scroll2.height) {
        scroll2.el.classList.add(scroll2.className);
      } else if (scroll2.el.classList.contains(scroll2.className)) {
        scroll2.el.classList.remove(scroll2.className);
      }
    });
  }
  onDestroy(() => {
  });
  scrolled(y);
  $$payload.out += `<div class="pb-page svelte-n45pd7">${html(data.content)}</div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
