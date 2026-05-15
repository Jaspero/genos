import { m as copy_payload, n as assign_payload, c as pop, p as push } from "../../../chunks/index3.js";
import "../../../chunks/client.js";
import "@jaspero/web-components/dist/render-alert.js";
import "firebase/app";
import "../../../chunks/firebase.js";
import "firebase/auth";
import "firebase/firestore";
function _page($$payload, $$props) {
  push();
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
