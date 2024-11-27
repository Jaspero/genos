import { i as bind_props, c as pop, p as push } from "./index3.js";
import "firebase/auth";
import { o as onDestroy } from "./index-server.js";
import "./firebase.js";
import { f as fallback } from "./utils.js";
function Recaptcha($$payload, $$props) {
  push();
  let verify = fallback($$props["verify"], null);
  onDestroy(() => {
  });
  $$payload.out += `<div id="recaptcha"></div>`;
  bind_props($$props, { verify });
  pop();
}
export {
  Recaptcha as R
};
