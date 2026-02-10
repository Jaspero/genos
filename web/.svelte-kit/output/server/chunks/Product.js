import { d as store_get, n as copy_payload, o as assign_payload, u as unsubscribe_stores, k as bind_props, c as pop, p as push } from "./index3.js";
import { f as fallback } from "./utils.js";
import { u as user } from "./firebase.js";
import "firebase/firestore";
import { w as writable } from "./index2.js";
import "@jaspero/web-components/dist/review-stars.wc.js";
function Product($$payload, $$props) {
  push();
  var $$store_subs;
  let product = $$props["product"];
  let userId = $$props["userId"];
  let price = fallback($$props["price"], () => product.price, true);
  let showAdd = fallback($$props["showAdd"], true);
  let selectedVariant = {};
  const isFavoriteStore = writable(false);
  {
    userId = store_get($$store_subs ??= {}, "$user", user) ? store_get($$store_subs ??= {}, "$user", user).id : null;
    if (store_get($$store_subs ??= {}, "$user", user)?.favorites && store_get($$store_subs ??= {}, "$user", user)?.favorites.includes(product.id)) {
      isFavoriteStore.set(true);
    } else {
      isFavoriteStore.set(false);
    }
  }
  {
    const found = product.variantCombinations ? product.variantCombinations.find((x) => x.variant === Object.values(selectedVariant).join("-")) : null;
    price = found ? found.price : product.price;
  }
  let $$settled = true;
  let $$inner_payload;
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { product, userId, price, showAdd });
  pop();
}
export {
  Product as P
};
