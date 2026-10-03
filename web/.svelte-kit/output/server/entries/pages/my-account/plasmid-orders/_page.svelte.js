import { c as pop, p as push } from "../../../../chunks/index3.js";
import { o as onDestroy } from "../../../../chunks/index-server.js";
import "firebase/firestore";
import "../../../../chunks/firebase.js";
import { m as meta } from "../../../../chunks/meta.store.js";
function _page($$payload, $$props) {
  push();
  meta.set({ title: "Plasmid Orders" });
  onDestroy(() => {
  });
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p>Loading...</p>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _page as default
};
