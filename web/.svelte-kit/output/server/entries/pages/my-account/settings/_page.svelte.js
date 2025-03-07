import { l as copy_payload, m as assign_payload, c as pop, p as push, f as attr } from "../../../../chunks/index3.js";
import { D as Dialog } from "../../../../chunks/Dialog.js";
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
  let newPassword = "";
  let repeatPassword = "";
  let email = "";
  let deleteDialog = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<main class="flex flex-col gap-4 max-w-[400px]"><div class="shadow rounded p-4 w-full"><h3 class="mb-2 text-l font-bold">Change Password</h3> <form class="flex flex-col gap-2"><jp-input label="New Password" type="password"${attr("value", newPassword)} required></jp-input> <jp-input label="Repeat Password" type="password"${attr("value", repeatPassword)} required></jp-input> <div><button type="submit" class="button">Change Password</button></div></form></div> <div class="shadow rounded p-4 w-full"><h3 class="mb-2 text-l font-bold">Change Email</h3> <form class="flex flex-col gap-2"><jp-input label="New Email" type="email"${attr("value", email)} required></jp-input> <div><button type="submit" class="button">Change Email</button></div></form></div> <div class="shadow rounded p-4 w-full"><h3 class="mb-2 text-l font-bold text-red-400">Delete Account</h3> <p>In case you want to remove your account and any information associated with it from our
      system. You can do so here.</p> <p>Be careful this action is irreversible and all of your personal information will be removed.</p> <button type="button" class="button mt-2">Delete Account</button></div></main> `;
    Dialog($$payload2, {
      get showing() {
        return deleteDialog;
      },
      set showing($$value) {
        deleteDialog = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<div class="w-full text-center"><h1>Delete account</h1> <p>This action will delete your account permanently, are you sure you want to continue?</p></div> <div class="flex w-full justify-center"><button type="button" class="bg-red-700 p-4 text-white rounded-lg mr-[10px]">Yes, delete my account</button> <button type="button" class="bg-black text-white rounded-lg p-4">Cancel</button></div>`;
      },
      $$slots: { default: true }
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
