import { e as escape_html, d as store_get, u as unsubscribe_stores } from "../../../chunks/index3.js";
import { l as language } from "../../../chunks/language.js";
function _page($$payload) {
  var $$store_subs;
  $$payload.out += `<div class="intro-container svelte-1xa85so"><img src="/images/footer.jpg" alt="" class="intro-bg svelte-1xa85so"> <div class="grid grid-large"><div class="gc-12"><h1 class="svelte-1xa85so">404</h1></div></div></div> <div class="grid grid-large"><div class="gc-12"><h2 class="mb-2">${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Page not found" : "Stranica nije pronađena")}</h2> <p class="mb-4">${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Sorry, the page you're looking for doesn't exist." : "Žao nam je, stranica koju tražite ne postoji.")}</p> <a href="/" class="underline text-blue-900">${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Go back home" : "Povratak na početnu")}</a></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  _page as default
};
