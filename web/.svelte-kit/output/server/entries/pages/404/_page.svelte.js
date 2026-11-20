import { d as store_get, e as escape_html, u as unsubscribe_stores, c as pop, p as push } from "../../../chunks/index3.js";
import { l as language } from "../../../chunks/language.js";
import { m as meta } from "../../../chunks/meta.store.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  meta.set({
    title: store_get($$store_subs ??= {}, "$language", language) === "en" ? "Page not found" : "Stranica nije pronađena",
    noIndex: true
  });
  $$payload.out += `<div class="intro-container svelte-9mbb1k"><img src="/images/footer.jpg" alt="" class="intro-bg svelte-9mbb1k"> <div class="grid grid-large"><div class="gc-12"><h1 class="svelte-9mbb1k">404</h1></div></div></div> <div class="grid grid-large"><div class="gc-12"><h2 class="mb-2">${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Page not found" : "Stranica nije pronađena")}</h2> <p class="mb-4">${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Sorry, the page you're looking for doesn't exist." : "Žao nam je, stranica koju tražite ne postoji.")}</p> <a href="/" class="underline text-blue-900">${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Go back home" : "Povratak na početnu")}</a></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
