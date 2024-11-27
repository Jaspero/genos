import { l as copy_payload, m as assign_payload, c as pop, f as attr, e as escape_html, k as stringify, p as push, d as store_get, u as unsubscribe_stores } from "../../../chunks/index3.js";
import { g as goto } from "../../../chunks/client.js";
import { p as page } from "../../../chunks/stores.js";
import { D as Dialog } from "../../../chunks/Dialog.js";
import { R as Recaptcha } from "../../../chunks/Recaptcha.js";
import { G as GoogleButton, a as alertWrapper } from "../../../chunks/GoogleButton.js";
import { a as auth } from "../../../chunks/firebase.js";
import { signInWithPopup, GoogleAuthProvider, getMultiFactorResolver, PhoneAuthProvider } from "firebase/auth";
import "@jaspero/web-components/dist/input.wc.js";
/* empty css                    */
import { m as meta } from "../../../chunks/meta.store.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  meta.set({ title: "Sign In" });
  let email = "";
  let password = "";
  let loading = false;
  let type = "password";
  let recaptchaVerify;
  let rEmail = "";
  let rDialog = false;
  let recaptchaVerifier;
  let showCodeInput = false;
  let codeInput;
  let resolver;
  async function loginGoogle() {
    const { searchParams } = store_get($$store_subs ??= {}, "$page", page).url;
    loading = true;
    await alertWrapper(
      signInWithPopup(auth, new GoogleAuthProvider()),
      "Login successful",
      (e) => {
        if (e.code == "auth/multi-factor-auth-required") {
          resolver = getMultiFactorResolver(auth, e);
          if (resolver.hints) {
            const phoneInfoOptions = {
              multiFactorHint: resolver.hints[0],
              session: resolver.session
            };
            const phoneAuthProvider = new PhoneAuthProvider(auth);
            phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier).then((verificationId) => {
              showCodeInput = true;
              loading = false;
            }).catch((error) => {
              console.log("second error", error);
            });
          }
        }
      },
      () => loading = false
    );
    setTimeout(
      () => {
        goto(searchParams.has("forward") ? decodeURIComponent(searchParams.get("forward")) : "/my-account");
      },
      1e3
    );
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="w-[500px] mx-auto p-12 flex justify-center items-center"><div id="recaptcha-container-id"></div> `;
    if (showCodeInput) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<form class="w-full shadow-xl p-8 rounded"><h2 class="text-lg font-bold mb-4">Verification Code</h2> <div class="flex flex-col gap-2"><p>We have sent you a 6-digit verification code to: <b>${escape_html(resolver?.hints?.[0]?.phoneNumber)}</b></p> <jp-input label="Verification Code:"${attr("value", codeInput)} required></jp-input></div> <div class="mt-4"><button type="submit" class="button">Confirm</button></div> <p class="mt-8 mb-2">Sign in with a different account?</p> <button class="underline" type="button">Back to sign in</button></form>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<form class="w-full shadow-xl p-8 rounded"><h2 class="text-lg font-bold mb-4">Sign In</h2> <div class="flex flex-col gap-2"><jp-input label="Email" type="email"${attr("value", email)} required autocomplete="email"></jp-input> <jp-input label="Password"${attr("type", type)}${attr("value", password)} required autocomplete="current-password"></jp-input> <div class="mt-[-0.5rem]"><button type="button" class="underline">${escape_html("Show password")}</button></div></div> <div class="flex flex-wrap gap-4 mt-4"><button${attr("class", `button ${stringify([loading ? "loading" : ""].filter(Boolean).join(" "))}`)} type="submit">Sign In</button> `;
      GoogleButton($$payload2, {
        label: "Sign in with google",
        onClick: loginGoogle
      });
      $$payload2.out += `<!----></div> <p class="mt-8 mb-2">Forgot your password?</p> <button class="underline" type="button">Reset Password</button></form>`;
    }
    $$payload2.out += `<!--]--></div> `;
    Dialog($$payload2, {
      get showing() {
        return rDialog;
      },
      set showing($$value) {
        rDialog = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<h3 class="text-xl md:text-lg mb-4">Forgotten your password?</h3> <p class="text-lg md:text-base mb-4">Enter your email address and we will send you a link to reset it.</p> <form><jp-input label="Email" type="email"${attr("value", rEmail)} required autocomplete="email"></jp-input> <div class="mt-4"><button type="submit"${attr("class", `button ${stringify([""].filter(Boolean).join(" "))}`)}>Reset password</button></div></form>`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
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
