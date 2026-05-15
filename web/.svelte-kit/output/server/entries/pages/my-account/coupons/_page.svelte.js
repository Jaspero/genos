import { g as ensure_array_like, f as attr, e as escape_html, i as stringify, c as pop, p as push } from "../../../../chunks/index3.js";
import "../../../../chunks/firebase.js";
import "firebase/firestore";
import { m as meta } from "../../../../chunks/meta.store.js";
function _page($$payload, $$props) {
  push();
  let filteredItems;
  meta.set({ title: "Coupons", noIndex: true });
  let items = [];
  let activeFilter = null;
  filteredItems = items.filter((item) => {
    const activePass = activeFilter === null;
    return activePass;
  });
  const each_array = ensure_array_like(filteredItems);
  $$payload.out += `<div class="flex-1"><div class="w-full flex items-center"><label for="usedFilter"><select id="usedFilter"><option${attr("value", null)}>Show All</option><option${attr("value", true)}>Used</option><option${attr("value", false)}>Unused</option></select></label> <label for="activeFilter"><select id="activeFilter"><option${attr("value", null)}>Show All</option><option${attr("value", true)}>Active</option><option${attr("value", false)}>Inactive</option></select></label></div> <div class="flex flex-wrap justify-start items-stretch gap-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<div${attr("class", `${stringify(item.used ? "used-card" : "coupon-card")} block rounded-lg bg-white w-[45%] xl:w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 svelte-op6oe7`)}><div class="flex flex-wrap h-full"><div class="flex flex-col flex-wrap justify-start flex-1 gap-4 p-6"><h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center w-full">${escape_html(item.name)}</h5> <div class="w-full flex justify-between"><p class="text-base text-neutral-600 dark:text-neutral-200"><b>Coupon code:</b> ${escape_html(item.code)}</p> <button${attr("disabled", item.used, true)} class="svelte-op6oe7"><img src="/images/copy.svg" alt="" class="w-[25px]"></button></div> <p class="text-base text-neutral-600 dark:text-neutral-200"><b>Coupon type</b>: ${escape_html(item.type)}</p> `;
    if (item.description) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="text-base text-neutral-600 dark:text-neutral-200">${escape_html(item.description)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <p class="text-base text-neutral-600 dark:text-neutral-200"><b>Coupon ends:</b> ${escape_html(item.endDate)} at ${escape_html(item.endTime)}</p> <div class="flex flex-wrap items-end flex-1 gap-2">`;
    if (item.used === true) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="text-base text-neutral-600 dark:text-neutral-200"><b>This coupon is:</b>Used</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (item.active === true) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="text-base text-neutral-600 dark:text-neutral-200"><span class="tag-active bg-black text-white p-2 rounded-[16px]">Active</span></p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (item.active === false && item.endDate === "") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="text-base text-neutral-600 dark:text-neutral-200"><span class="bg-[#980C0C7F] text-white p-2 rounded-[16px]">Inactive</span></p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (item.used === false && item.active === false && item.setEndDate === true) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="text-base text-neutral-600 dark:text-neutral-200"><span class="bg-[#757575FF] text-white p-2 rounded-[16px]">Unused</span></p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div> <div class="flex justify-center flex-col items-center gap-2 w-[30%] border-solid border-l-[1px] border-black"><div class="bg-[#4caf50] text-white p-4 rounded-full">${escape_html(item.percent)}% off</div></div></div></div>`;
  }
  $$payload.out += `<!--]--></div> `;
  if (!items) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p>No items found.</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
