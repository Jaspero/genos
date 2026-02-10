import { g as ensure_array_like, d as store_get, h as head, u as unsubscribe_stores, c as pop, p as push, e as escape_html } from "../../../chunks/index3.js";
import { P as Product } from "../../../chunks/Product.js";
import { w as writable } from "../../../chunks/index2.js";
import { C as CONFIG } from "../../../chunks/config.const.js";
import { f as functions } from "../../../chunks/firebase.js";
import { httpsCallable } from "firebase/functions";
const cartState = writable([]);
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  httpsCallable(functions, "cms-processCheckout");
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$cartState", cartState));
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Checkout - ${escape_html(CONFIG.title)}</title>`;
  });
  $$payload.out += `<p>Products:</p> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let product = each_array[$$index];
    Product($$payload, { product, showAdd: false });
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
