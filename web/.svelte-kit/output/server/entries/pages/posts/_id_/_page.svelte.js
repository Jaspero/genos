import { e as escape_html, d as store_get, u as unsubscribe_stores, c as pop, p as push } from "../../../../chunks/index3.js";
import "../../../../chunks/client.js";
import "../../../../chunks/firebase.js";
import "firebase/firestore";
import { l as language } from "../../../../chunks/language.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="grid grid-small"><div class="gc-12 single-article spacer svelte-hw02tv" style="text-align: center; padding: 4rem;"><p>${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Loading..." : "Učitavanje...")}</p></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
