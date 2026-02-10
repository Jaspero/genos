import { d as store_get, g as ensure_array_like, u as unsubscribe_stores, c as pop, p as push } from "../../../../chunks/index3.js";
import { u as user } from "../../../../chunks/firebase.js";
import "firebase/firestore";
import { P as Product } from "../../../../chunks/Product.js";
import { m as meta } from "../../../../chunks/meta.store.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  meta.set({ title: "Coupons", noIndex: true });
  let favoriteProducts = [];
  if (store_get($$store_subs ??= {}, "$user", user) && store_get($$store_subs ??= {}, "$user", user).favorites && store_get($$store_subs ??= {}, "$user", user).favorites.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(favoriteProducts);
    $$payload.out += `<div class="grid grid-cols-3 gap-4"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let product = each_array[$$index];
      Product($$payload, { product });
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p>There are no products added to favorites</p>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
