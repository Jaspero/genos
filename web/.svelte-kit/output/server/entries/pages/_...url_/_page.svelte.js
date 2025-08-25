import { m as current_component, k as bind_props, c as pop, p as push } from "../../../chunks/index3.js";
import "../../../chunks/client.js";
import { m as meta } from "../../../chunks/meta.store.js";
import "../../../chunks/firebase.js";
import "firebase/firestore";
import "@jaspero/web-components/dist/render-alert.js";
import "firebase/app";
import "../../../chunks/language.js";
import "@jaspero/web-components/dist/review-stars.wc.js";
import "@jaspero/web-components/dist/image-gallery.wc.js";
import { h as html } from "../../../chunks/html.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
const TRACKED_COLLECTIONS = [
  // {
  //   collection: 'products',
  //   titleKey: 'name',
  //   urlKey: 'url',
  //   prefix: '/products',
  //   keysToTrack: ['id', 'name', 'price', 'description', 'tags', 'categories', 'createdOn', 'image'],
  // },
  // { collection: 'tags', titleKey: 'name', urlKey: 'url', prefix: '/products', keysToTrack: ['id', 'name'] },
  // { collection: 'categories', titleKey: 'name', urlKey: 'url', prefix: '/products', keysToTrack: ['id', 'name'] },
  {
    collection: "pages",
    titleKey: "title",
    urlKey: "url",
    prefix: "",
    keysToTrack: ["id", "title", "lastUpdatedOn"],
    skipGenerateJsonFile: true
  }
];
TRACKED_COLLECTIONS.reduce(
  (acc, { keysToTrack, collection }) => {
    acc[collection] = keysToTrack.reduce((sAcc, key) => {
      let shortKey = key[0];
      let count = 1;
      while (sAcc.hasOwnProperty(shortKey)) {
        shortKey = key[0] + count;
        count++;
      }
      sAcc[key] = shortKey;
      return sAcc;
    }, {});
    return acc;
  },
  {}
);
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
  $$payload.out += `${html(data.content)}`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
