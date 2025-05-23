import { d as store_get, l as copy_payload, m as assign_payload, u as unsubscribe_stores, k as bind_props, c as pop, p as push, f as attr, i as stringify, e as escape_html, g as ensure_array_like } from "./index3.js";
import { D as Dialog } from "./Dialog.js";
import { u as user } from "./firebase.js";
import "firebase/firestore";
import { f as fallback } from "./utils.js";
import { w as writable } from "./index2.js";
import "@jaspero/web-components/dist/review-stars.wc.js";
function Product($$payload, $$props) {
  push();
  var $$store_subs;
  let product = $$props["product"];
  let userId = $$props["userId"];
  let price = fallback($$props["price"], () => product.price, true);
  let showAdd = fallback($$props["showAdd"], true);
  let removeItem = false;
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
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"><a${attr("href", `/shop/${stringify(product.id)}`)}>`;
    if (product.gallery && product.gallery.length > 0) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<img class="w-full h-[200px] rounded-t-lg"${attr("src", product.gallery[0])} alt="product image">`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<img class="w-full h-[200px] rounded-t-lg" src="/images/dummy-img.jpg" alt="default image">`;
    }
    $$payload2.out += `<!--]--> <div class="w-full z-10 relative"><jp-review-stars${attr("value", product.averageRating)}></jp-review-stars></div></a> <div class="px-5 pb-5"><a${attr("href", `/shop/${stringify(product.id)}`)}><h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${escape_html(product.name || "")}</h5></a> <div class="flex items-center justify-start flex-wrap"><span class="text-3xl w-full font-bold text-gray-900 dark:text-white">$${escape_html(price || "")}</span> <span class="text-1xl w-full text-gray-900 dark:text-white">${escape_html(product.shortDescription || "")}</span> `;
    if (product.variants) {
      $$payload2.out += "<!--[-->";
      const each_array = ensure_array_like(product.variants);
      $$payload2.out += `<div class="w-full flex justify-between items-center text-gray-900 dark:text-white"><div class="w-full flex justify-between items-center" style="flex-direction: column"><!--[-->`;
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let variant = each_array[$$index_1];
        $$payload2.out += `<div class="w-full flex justify-around items-center"><p>${escape_html(variant.name)}</p> `;
        if (variant.options) {
          $$payload2.out += "<!--[-->";
          const each_array_1 = ensure_array_like(variant.options);
          $$payload2.out += `<select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"><!--[-->`;
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let opt = each_array_1[$$index];
            $$payload2.out += `<option${attr("value", opt)}>${escape_html(opt)}</option>`;
          }
          $$payload2.out += `<!--]--></select>`;
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]--></div>`;
      }
      $$payload2.out += `<!--]--></div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div class="w-full flex justify-between items-center text-gray-900 dark:text-white">`;
    if (showAdd) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove</button>`;
    }
    $$payload2.out += `<!--]--></div> <img class="cursor-pointer transition-opacity duration-300 hover:opacity-80"${attr("src", store_get($$store_subs ??= {}, "$isFavoriteStore", isFavoriteStore) ? "/images/favorites.svg" : "/images/favorites-unselected.svg")} alt="Favorite" width="35px" height="35px"></div></div></div> `;
    Dialog($$payload2, {
      get showing() {
        return removeItem;
      },
      set showing($$value) {
        removeItem = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<div class="w-full text-center"><h1>Remove ${escape_html(product.name)}</h1></div> <div class="flex w-full justify-center"><button class="bg-red-700 p-4 text-white rounded-lg mr-[10px]">Yes</button> <button class="bg-black text-white rounded-lg p-4">Cancel</button></div>`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->`;
  }
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
