import { g as ensure_array_like, e as escape_html, c as pop, p as push } from "../../../chunks/index3.js";
import { m as meta } from "../../../chunks/meta.store.js";
import "firebase/firestore";
import "../../../chunks/firebase.js";
function _page($$payload, $$props) {
  push();
  meta.set({ title: "Orders", noIndex: true });
  let orders = [];
  const each_array = ensure_array_like(orders);
  $$payload.out += `<!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let order = each_array[$$index];
    $$payload.out += `<p>Date: ${escape_html(new Date(order.createdOn).toLocaleDateString())}</p> <p>Invoice ID: ${escape_html(order.invoiceId)}</p>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _page as default
};
