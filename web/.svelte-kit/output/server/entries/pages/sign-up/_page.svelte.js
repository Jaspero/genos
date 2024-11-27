import { l as copy_payload, m as assign_payload, c as pop, f as attr, e as escape_html, k as stringify, p as push, d as store_get, u as unsubscribe_stores } from "../../../chunks/index3.js";
import { g as goto } from "../../../chunks/client.js";
import { p as page } from "../../../chunks/stores.js";
import { G as GoogleButton, a as alertWrapper } from "../../../chunks/GoogleButton.js";
import { a as auth } from "../../../chunks/firebase.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { R as Recaptcha } from "../../../chunks/Recaptcha.js";
import "@jaspero/web-components/dist/input.wc.js";
/* empty css                    */
import "@jaspero/web-components/dist/render-alert.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let email = "";
  let password = "";
  let passwordConfirm = "";
  let loading = false;
  let recaptchaVerify;
  let type = "password";
  async function signupGoogle() {
    loading = true;
    await alertWrapper(signInWithPopup(auth, new GoogleAuthProvider()), "Sign up successful", "", () => loading = false);
    loading = false;
    navigate();
  }
  function navigate() {
    const { searchParams } = store_get($$store_subs ??= {}, "$page", page).url;
    goto(searchParams.has("forward") ? decodeURIComponent(searchParams.get("forward")) : "/");
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="w-[500px] mx-auto p-12 flex justify-center items-center"><div id="recaptcha-container-id"></div> <form class="w-full shadow-xl p-8 rounded"><h2 class="text-lg font-bold mb-4">Sign up</h2> <div class="flex flex-col gap-2">`;
    GoogleButton($$payload2, {
      onClick: signupGoogle,
      label: "Sign up with Google"
    });
    $$payload2.out += `<!----> <p>Or sign up with email instead</p> <jp-input label="Email" type="email"${attr("value", email)} required autocomplete="email"></jp-input> <jp-input label="Password"${attr("type", type)}${attr("value", password)} required autocomplete="new-password"></jp-input> <jp-input label="Confirm Password"${attr("type", type)}${attr("value", passwordConfirm)} required autocomplete="repeat-password"></jp-input> <div class="mt-[-0.5rem]"><button type="button" class="underline">${escape_html("Show password")}</button></div></div> <div class="mt-4"><button${attr("class", `button ${stringify([loading ? "loading" : ""].filter(Boolean).join(" "))}`)} type="submit">Sign up</button></div></form></div> `;
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
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
