import { renderAlert } from "@jaspero/web-components/dist/render-alert.js";
import { FirebaseError } from "firebase/app";
import { e as escape_html, i as bind_props } from "./index3.js";
const firebaseErrors = {
  "auth/invalid-credential": "The email and password you entered did not match our records. Please double-check and try again.",
  "auth/wrong-password": "The email and password you entered did not match our records. Please double-check and try again.",
  "auth/too-many-requests": "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.",
  "auth/user-not-found": "There is no user record corresponding to this identifier.",
  "auth/weak-password": "Please provide a stronger password.",
  "auth/missing-email": "The provided email address is not valid.",
  "auth/user-token-expired": `This is a sensitive action. Please login again to perform it.`,
  "auth/invalid-login-credentials": "The email and password you entered did not match our records. Please double-check and try again.",
  "auth/invalid-verification-code": "The code you entered is invalid. Please try again.",
  "auth/code-expired": "The code you entered has expired. Please try again.",
  "auth/missing-code": "Please enter the code you received via SMS.",
  "auth/invalid-phone-number": "Please enter a valid phone number.",
  "auth/unverified-email": "Please verify your email first.",
  "auth/requires-recent-login": "This action requires you to login again.",
  "auth/email-already-in-use": "Email is already in use. Please use a different email.",
  "permission-denied": `You don't have permission to perform this action.`
};
async function alertWrapper(request, successMessage = "", errorMessage, onError) {
  let resp;
  try {
    resp = await request;
    if (successMessage) {
      renderAlert({ title: "Success", message: successMessage, state: "success" });
    }
  } catch (e) {
    if (errorMessage !== false) {
      const content = {
        title: "Error",
        state: "error",
        message: typeof errorMessage === "function" ? errorMessage(e) : errorMessage || e.toString()
      };
      if (e instanceof FirebaseError) {
        if (e.code === "functions/internal") {
          content.message = e.toString().replace("FirebaseError: ", "");
        } else {
          content.message = firebaseErrors[e.code] || "";
        }
      }
      if (e.code !== "auth/multi-factor-auth-required" && e.code !== "auth/unverified-email") {
        renderAlert(content);
      }
    }
    console.error(e);
    if (onError) {
      await onError(e);
    }
    throw e;
  }
  return resp;
}
function GoogleButton($$payload, $$props) {
  let label = $$props["label"];
  let onClick = $$props["onClick"];
  $$payload.out += `<button class="gsi-material-button svelte-1k92smm" type="button"><div class="gsi-material-button-state svelte-1k92smm"></div> <div class="gsi-material-button-content-wrapper svelte-1k92smm"><div class="gsi-material-button-icon svelte-1k92smm"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg></div> <span class="gsi-material-button-contents svelte-1k92smm">${escape_html(label)}</span></div></button>`;
  bind_props($$props, { label, onClick });
}
export {
  GoogleButton as G,
  alertWrapper as a
};
