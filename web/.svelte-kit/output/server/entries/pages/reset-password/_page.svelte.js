import { l as copy_payload, m as assign_payload, c as pop, p as push, f as attr, i as stringify } from "../../../chunks/index3.js";
import "../../../chunks/client.js";
import "@jaspero/web-components/dist/input.wc.js";
/* empty css                    */
import "@jaspero/web-components/dist/render-alert.js";
import "firebase/app";
import "../../../chunks/firebase.js";
import "firebase/auth";
import { m as meta } from "../../../chunks/meta.store.js";
import { R as Recaptcha } from "../../../chunks/Recaptcha.js";
function _page($$payload, $$props) {
  push();
  meta.set({ title: "Reset Password", noIndex: true });
  const form = { password: "", repeatPassword: "" };
  let recaptchaVerify;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="w-[500px] mx-auto p-12 flex justify-center items-center"><div id="recaptcha-container-id"></div> <form class="w-full shadow-xl p-8 rounded"><h2 class="text-lg font-bold mb-4">Reset Password</h2> <div class="flex flex-col gap-2"><jp-input label="Password" required type="password"${attr("value", form.password)}></jp-input> <jp-input label="Repeat Password" required type="password"${attr("value", form.repeatPassword)}></jp-input></div> <div class="mt-4"><button type="submit"${attr("class", `button ${stringify([""].filter(Boolean).join(" "))}`)}>Submit</button></div> <p class="mt-8 mb-2">You don't need to change your password?</p> <a class="underline" href="/sign-in">Back to sign in</a></form></div> `;
    Recaptcha($$payload2, {
      get verify() {
        return recaptchaVerify;
      },
      set verify($$value) {
        recaptchaVerify = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!---->`;
  }
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
