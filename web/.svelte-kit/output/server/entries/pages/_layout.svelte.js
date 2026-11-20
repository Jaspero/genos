import { d as store_get, h as head, u as unsubscribe_stores, c as pop, p as push, e as escape_html, f as attr, g as ensure_array_like, i as stringify, j as slot } from "../../chunks/index3.js";
import { g as get } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { C as CONFIG } from "../../chunks/config.const.js";
import { M as META_SUFFIX, m as meta } from "../../chunks/meta.store.js";
import { h as html } from "../../chunks/html.js";
import "@jaspero/web-components/dist/alert.wc.js";
import "@jaspero/web-components/dist/confirm.wc.js";
import "../../chunks/client.js";
import { l as language } from "../../chunks/language.js";
import { p as pathInLang, l as langFromPath } from "../../chunks/routes.js";
function ldJson(structured) {
  if (structured) {
    return structured.includes("<script") ? structured : `<script type="application/ld+json">${structured}<\/script>`;
  }
  return "";
}
function Meta($$payload, $$props) {
  push();
  var $$store_subs;
  let title, url, ogTitle, ogDescription, ogImage, structured;
  title = store_get($$store_subs ??= {}, "$meta", meta).title ? store_get($$store_subs ??= {}, "$meta", meta).title + META_SUFFIX : META_SUFFIX.replace(" | ", "").replace(" - ", "");
  url = CONFIG.websiteUrl + store_get($$store_subs ??= {}, "$page", page).url.pathname;
  ogTitle = (store_get($$store_subs ??= {}, "$meta", meta).og?.title || store_get($$store_subs ??= {}, "$meta", meta).title) + META_SUFFIX;
  ogDescription = store_get($$store_subs ??= {}, "$meta", meta).og?.description || store_get($$store_subs ??= {}, "$meta", meta).description;
  ogImage = store_get($$store_subs ??= {}, "$meta", meta).og?.image || CONFIG.fallbackSocialImage;
  structured = ldJson(store_get($$store_subs ??= {}, "$meta", meta).structured);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)}</title>`;
    $$payload2.out += `<meta property="og:url"${attr("content", url)}> <meta property="twitter:url"${attr("content", url)}> <meta property="twitter:card" content="summary_large_image"> <meta property="og:title"${attr("content", ogTitle)}> <meta property="twitter:title"${attr("content", ogTitle)}> <meta property="og:image"${attr("content", ogImage)}> <meta property="twitter:image"${attr("content", ogImage)}> `;
    if (store_get($$store_subs ??= {}, "$meta", meta).author) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="author"${attr("content", store_get($$store_subs ??= {}, "$meta", meta).author)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (store_get($$store_subs ??= {}, "$meta", meta).description) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="description"${attr("content", store_get($$store_subs ??= {}, "$meta", meta).description)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (store_get($$store_subs ??= {}, "$meta", meta).keywords) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="keywords"${attr("content", store_get($$store_subs ??= {}, "$meta", meta).keywords)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (store_get($$store_subs ??= {}, "$meta", meta).og?.type) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="og:type"${attr("content", store_get($$store_subs ??= {}, "$meta", meta).og?.type)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (ogDescription) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="og:description"${attr("content", ogDescription)}> <meta property="twitter:description"${attr("content", ogDescription)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (store_get($$store_subs ??= {}, "$meta", meta).noIndex) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="robots" content="noindex, nofollow">`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (store_get($$store_subs ??= {}, "$meta", meta).og?.articleAuthor) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="article:author"${attr("content", store_get($$store_subs ??= {}, "$meta", meta).og.articleAuthor)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (store_get($$store_subs ??= {}, "$meta", meta).og?.articlePublishedTime) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="article:published_time"${attr("content", store_get($$store_subs ??= {}, "$meta", meta).og.articlePublishedTime)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (store_get($$store_subs ??= {}, "$meta", meta).og?.articleModifiedTime) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="article:modified_time"${attr("content", store_get($$store_subs ??= {}, "$meta", meta).og.articleModifiedTime)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (store_get($$store_subs ??= {}, "$meta", meta).og?.articleSection) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="article:section"${attr("content", store_get($$store_subs ??= {}, "$meta", meta).og.articleSection)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (store_get($$store_subs ??= {}, "$meta", meta).og?.articleTag) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="article:tag"${attr("content", store_get($$store_subs ??= {}, "$meta", meta).og.articleTag)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (store_get($$store_subs ??= {}, "$meta", meta).og?.profileFirstName) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="profile:first_name"${attr("content", store_get($$store_subs ??= {}, "$meta", meta).og.profileFirstName)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (store_get($$store_subs ??= {}, "$meta", meta).og?.profileLastName) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="profile:last_name"${attr("content", store_get($$store_subs ??= {}, "$meta", meta).og.profileLastName)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (store_get($$store_subs ??= {}, "$meta", meta).og?.profileUsername) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="profile:username"${attr("content", store_get($$store_subs ??= {}, "$meta", meta).og.profileUsername)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> ${html(structured)}`;
  });
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Navigation($$payload, $$props) {
  push();
  var $$store_subs;
  let open = false;
  let links = [
    {
      hr: { label: "O nama", link: "/o-nama" },
      en: { label: "About", link: "/about" }
    },
    {
      hr: { label: "Projekti", link: "/projekti" },
      en: { label: "Projects", link: "/projects" }
    },
    {
      hr: { label: "Publikacije", link: "/publikacije" },
      en: { label: "Publications", link: "/publications" }
    },
    {
      hr: { label: "Usluge", link: "/usluge" },
      en: { label: "Services", link: "/services" }
    },
    {
      hr: {
        label: "Korisni linkovi",
        link: "/korisni-linkovi"
      },
      en: { label: "Resources", link: "/resources" }
    },
    {
      hr: { label: "Tim", link: "/tim" },
      en: { label: "Team", link: "/team" }
    },
    {
      hr: { label: "Novosti", link: "/novosti" },
      en: { label: "News", link: "/news" }
    },
    {
      hr: { label: "Kontakt", link: "/kontakt" },
      en: { label: "Contact", link: "/contact" }
    }
  ];
  function languageHref(lang, path) {
    return pathInLang(path, lang) || path;
  }
  const each_array = ensure_array_like(links);
  $$payload.out += `<header${attr("lang", store_get($$store_subs ??= {}, "$language", language))}${attr("class", `navigation svelte-o0uuhd ${stringify([
    store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("/posts/") || store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("/tools/") || store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("/my-account") || store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("/sign-in") || store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("/sign-up") || store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("/reset-password") ? "scrolled" : "",
    ""
  ].filter(Boolean).join(" "))}`)}><nav${attr("aria-label", store_get($$store_subs ??= {}, "$language", language) === "en" ? "Main" : "Glavna navigacija")} class="svelte-o0uuhd"><a${attr("href", store_get($$store_subs ??= {}, "$language", language) === "en" ? "/" : "/pocetna")} class="svelte-o0uuhd"><img class="logo svelte-o0uuhd" src="/brand/genos-logo-white.svg"${attr("alt", store_get($$store_subs ??= {}, "$language", language) === "en" ? "Genos, home page" : "Genos, početna stranica")}></a> <div class="links svelte-o0uuhd"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$payload.out += `<a${attr("href", store_get($$store_subs ??= {}, "$language", language) === "en" ? link.en.link : link.hr.link)}${attr("aria-current", (store_get($$store_subs ??= {}, "$language", language) === "en" ? link.en.link : link.hr.link) === store_get($$store_subs ??= {}, "$page", page).url.pathname ? "page" : void 0)}${attr("class", `svelte-o0uuhd ${stringify([
      (store_get($$store_subs ??= {}, "$language", language) === "en" ? link.en.link : link.hr.link) === store_get($$store_subs ??= {}, "$page", page).url.pathname ? "active" : ""
    ].filter(Boolean).join(" "))}`)}>${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? link.en.label : link.hr.label)}</a>`;
  }
  $$payload.out += `<!--]--></div> <div class="flex gap-8"><div class="language-toggle svelte-o0uuhd" role="group"${attr("aria-label", store_get($$store_subs ??= {}, "$language", language) === "en" ? "Language" : "Jezik")}><a${attr("href", languageHref("en", store_get($$store_subs ??= {}, "$page", page).url.pathname))} lang="en" hreflang="en"${attr("aria-current", store_get($$store_subs ??= {}, "$language", language) === "en" ? "true" : void 0)}${attr("class", `svelte-o0uuhd ${stringify([
    store_get($$store_subs ??= {}, "$language", language) === "en" ? "active" : ""
  ].filter(Boolean).join(" "))}`)}>EN<span class="sr-only">(English)</span></a> <a${attr("href", languageHref("hr", store_get($$store_subs ??= {}, "$page", page).url.pathname))} lang="hr" hreflang="hr"${attr("aria-current", store_get($$store_subs ??= {}, "$language", language) === "hr" ? "true" : void 0)}${attr("class", `svelte-o0uuhd ${stringify([
    store_get($$store_subs ??= {}, "$language", language) === "hr" ? "active" : ""
  ].filter(Boolean).join(" "))}`)}>HR<span class="sr-only">(hrvatski)</span></a></div> <button class="menu-toggle svelte-o0uuhd" type="button"${attr("aria-label", store_get($$store_subs ??= {}, "$language", language) === "en" ? "Menu" : "Izbornik")}${attr("aria-expanded", open)} aria-controls="mobile-menu"><img src="/icons/menu.svg" alt=""></button></div></nav></header> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Footer($$payload, $$props) {
  push();
  var $$store_subs;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  $$payload.out += `<footer class="spacer svelte-1qbxtuy"${attr("lang", store_get($$store_subs ??= {}, "$language", language))}><div><img src="/brand/genos-logo-white.svg" alt="Genos" class="footer-logo svelte-1qbxtuy"></div> <h2 class="footer-title svelte-1qbxtuy">${html(store_get($$store_subs ??= {}, "$language", language) === "en" ? 'If you want to know more, collaborate, or use our services, <a class="footer-cta" href="/contact">get in touch</a> with us to discuss your ideas.' : 'Ako želite saznati više, surađivati ili koristiti naše usluge, <a class="footer-cta" href="/kontakt">kontaktirajte nas</a> kako bismo razgovarali o vašim idejama.')}</h2> <div class="flex-1"></div> <div class="subfooter svelte-1qbxtuy"><div class="subfooter-social svelte-1qbxtuy"><a href="https://www.linkedin.com/company/genos-ltd" target="_blank" rel="noreferrer noopener" class="svelte-1qbxtuy"><img src="/icons/linkedin-w.svg"${attr("alt", store_get($$store_subs ??= {}, "$language", language) === "en" ? "Genos on LinkedIn (opens in a new tab)" : "Genos na LinkedInu (otvara se u novoj kartici)")}></a> <a href="https://x.com/gglycoscience" target="_blank" rel="noreferrer noopener" class="svelte-1qbxtuy"><img src="/icons/x-w.svg"${attr("alt", store_get($$store_subs ??= {}, "$language", language) === "en" ? "Genos on X (opens in a new tab)" : "Genos na X-u (otvara se u novoj kartici)")}></a></div> <div class="subfooter-legal svelte-1qbxtuy"><a href="/privacy-policy.pdf" target="_blank" aria-describedby="footer-pdf-note" class="svelte-1qbxtuy">${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Privacy policy" : "Pravila privatnosti")}</a> <a href="/gep.pdf" target="_blank" aria-describedby="footer-pdf-note" class="svelte-1qbxtuy">${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Gender Equality Plan" : "Plan za ravnopravnost spolova")}</a> `;
  if (store_get($$store_subs ??= {}, "$language", language) === "en") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a href="/conflict-of-interest.pdf" target="_blank" aria-describedby="footer-pdf-note" class="svelte-1qbxtuy">Conflict of interest</a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<a href="/sukob-interesa.pdf" target="_blank" aria-describedby="footer-pdf-note" class="svelte-1qbxtuy">Sukob interesa</a>`;
  }
  $$payload.out += `<!--]--></div> <div class="subfooter-contact svelte-1qbxtuy"><a href="mailto:info@genos.hr" class="svelte-1qbxtuy">info@genos.hr</a> <span>© ${escape_html(year)} Genos Glyco</span> <span>${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Made by" : "Izradio")} <a href="https://jaspero.co" class="svelte-1qbxtuy">jaspero.co</a></span></div></div> <span id="footer-pdf-note" class="sr-only">${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "PDF, opens in a new tab" : "PDF, otvara se u novoj kartici")}</span> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></footer>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let alternates;
  function syncLanguage(path) {
    const routeLang = langFromPath(path);
    if (routeLang) {
      if (get(language) !== routeLang) {
        language.set(routeLang);
      }
    } else {
      language.set("en");
    }
  }
  syncLanguage(store_get($$store_subs ??= {}, "$page", page).url.pathname);
  alternates = ["en", "hr"].map((lang) => ({
    lang,
    path: pathInLang(store_get($$store_subs ??= {}, "$page", page).url.pathname, lang)
  })).filter((a) => a.path);
  head($$payload, ($$payload2) => {
    const each_array = ensure_array_like(alternates);
    $$payload2.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let alt = each_array[$$index];
      $$payload2.out += `<link rel="alternate"${attr("hreflang", alt.lang)}${attr("href", CONFIG.websiteUrl + alt.path)}>`;
    }
    $$payload2.out += `<!--]--> `;
    if (alternates.length) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<link rel="alternate" hreflang="x-default"${attr("href", CONFIG.websiteUrl + alternates[0].path)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  $$payload.out += `<a class="skip-link"${attr("href", store_get($$store_subs ??= {}, "$page", page).url.pathname + "#main")}${attr("lang", store_get($$store_subs ??= {}, "$language", language))}>${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Skip to content" : "Preskoči na sadržaj")}</a> `;
  Navigation($$payload);
  $$payload.out += `<!----> <div class="bg svelte-s1366u"></div> <main id="main" tabindex="-1"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Meta($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
