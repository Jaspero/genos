import { d as store_get, u as unsubscribe_stores, k as bind_props, c as pop, p as push } from "../../../chunks/index3.js";
import "firebase/auth";
import "../../../chunks/client.js";
import "../../../chunks/firebase.js";
import { p as page } from "../../../chunks/stores.js";
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let data = $$props["data"];
  store_get($$store_subs ??= {}, "$page", page).url.pathname;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
export {
  _layout as default
};
