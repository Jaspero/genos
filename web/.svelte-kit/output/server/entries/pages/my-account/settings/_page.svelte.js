import { d as store_get, m as copy_payload, n as assign_payload, u as unsubscribe_stores, c as pop, p as push } from "../../../../chunks/index3.js";
import { u as user } from "../../../../chunks/firebase.js";
import "firebase/auth";
import "../../../../chunks/client.js";
import "@jaspero/web-components/dist/render-alert.js";
import "firebase/app";
import { m as meta } from "../../../../chunks/meta.store.js";
import "firebase/firestore";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  meta.set({ title: "Settings", noIndex: true });
  let firstName = "";
  let lastName = "";
  let recoveryEmail = "";
  let institution = "";
  let position = "";
  let institutionAddress = "";
  if (store_get($$store_subs ??= {}, "$user", user)) {
    firstName = firstName || store_get($$store_subs ??= {}, "$user", user).firstName || "";
    lastName = lastName || store_get($$store_subs ??= {}, "$user", user).lastName || "";
    recoveryEmail = recoveryEmail || store_get($$store_subs ??= {}, "$user", user).recoveryEmail || "";
    institution = institution || store_get($$store_subs ??= {}, "$user", user).institution || "";
    position = position || store_get($$store_subs ??= {}, "$user", user).position || "";
    institutionAddress = institutionAddress || store_get($$store_subs ??= {}, "$user", user).institutionAddress || "";
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
  pop();
}
export {
  _page as default
};
