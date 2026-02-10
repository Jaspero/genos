import { n as copy_payload, o as assign_payload, c as pop, p as push } from "../../../chunks/index3.js";
import "../../../chunks/client.js";
import "firebase/auth";
import "../../../chunks/firebase.js";
import "@jaspero/web-components/dist/render-alert.js";
import "firebase/app";
import "@jaspero/web-components/dist/input.wc.js";
/* empty css                    */
import { m as meta } from "../../../chunks/meta.store.js";
function _page($$payload, $$props) {
  push();
  meta.set({ title: "Sign In" });
  let $$settled = true;
  let $$inner_payload;
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
