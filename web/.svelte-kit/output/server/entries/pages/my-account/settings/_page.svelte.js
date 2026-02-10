import { n as copy_payload, o as assign_payload, c as pop, p as push } from "../../../../chunks/index3.js";
import "../../../../chunks/firebase.js";
import "firebase/auth";
import "../../../../chunks/client.js";
import "@jaspero/web-components/dist/render-alert.js";
import "firebase/app";
import { m as meta } from "../../../../chunks/meta.store.js";
import "@jaspero/web-components/dist/input.wc.js";
/* empty css                       */
function _page($$payload, $$props) {
  push();
  meta.set({ title: "Settings", noIndex: true });
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
