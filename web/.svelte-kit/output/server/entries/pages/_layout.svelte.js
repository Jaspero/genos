import { d as store_get, h as head, u as unsubscribe_stores, c as pop, p as push, e as escape_html, f as attr, g as ensure_array_like, i as stringify, j as slot } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
import { C as CONFIG } from "../../chunks/config.const.js";
import { M as META_SUFFIX, m as meta } from "../../chunks/meta.store.js";
import { h as html } from "../../chunks/html.js";
import "../../chunks/firebase.js";
import "@jaspero/web-components/dist/alert.wc.js";
import "@jaspero/web-components/dist/confirm.wc.js";
import "firebase/firestore";
import "../../chunks/client.js";
import { l as language } from "../../chunks/language.js";
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
  let languageDisabled = false;
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
  const each_array = ensure_array_like(links);
  $$payload.out += `<header${attr("class", `navigation svelte-2qgyet ${stringify([
    store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("/posts/") ? "scrolled" : "",
    ""
  ].filter(Boolean).join(" "))}`)}><nav class="svelte-2qgyet"><a${attr("href", store_get($$store_subs ??= {}, "$language", language) === "en" ? "/" : "/pocetna")} class="svelte-2qgyet"><img class="logo svelte-2qgyet" src="/brand/genos-logo-white.svg" alt="genos logo"></a> <div class="links svelte-2qgyet"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$payload.out += `<a${attr("href", store_get($$store_subs ??= {}, "$language", language) === "en" ? link.en.link : link.hr.link)}${attr("class", `svelte-2qgyet ${stringify([
      (store_get($$store_subs ??= {}, "$language", language) === "en" ? link.en.link : link.hr.link) === store_get($$store_subs ??= {}, "$page", page).url.pathname ? "active" : ""
    ].filter(Boolean).join(" "))}`)}>${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? link.en.label : link.hr.label)}</a>`;
  }
  $$payload.out += `<!--]--></div> <div class="flex gap-8"><button class="language-toggle svelte-2qgyet"${attr("disabled", languageDisabled, true)}><span${attr("class", `svelte-2qgyet ${stringify([
    store_get($$store_subs ??= {}, "$language", language) === "en" ? "active" : ""
  ].filter(Boolean).join(" "))}`)}>EN</span> <span${attr("class", `svelte-2qgyet ${stringify([
    store_get($$store_subs ??= {}, "$language", language) === "hr" ? "active" : ""
  ].filter(Boolean).join(" "))}`)}>HR</span></button> <button class="menu-toggle svelte-2qgyet"><img src="/icons/menu.svg" alt=""></button></div></nav></header> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Footer($$payload) {
  var $$store_subs;
  $$payload.out += `<footer class="spacer svelte-ddg00p"><div><img src="/brand/genos-logo-white.svg" alt="genos logo" class="footer-logo svelte-ddg00p"></div> <h2 class="footer-title svelte-ddg00p">${html(store_get($$store_subs ??= {}, "$language", language) === "en" ? 'If you want to know more, collaborate, or use our services, <a class="footer-cta" href="/contact">get in touch</a> with us to discuss your ideas.' : 'Ako želite saznati više, surađivati ili koristiti naše usluge, <a class="footer-cta" href="/kontakt">kontaktirajte nas</a> kako bismo razgovarali o vašim idejama.')}</h2> <div class="flex-1"></div> <div class="subfooter svelte-ddg00p"><div class="subfooter-social svelte-ddg00p"><a href="https://www.linkedin.com/company/genos-ltd" target="_blank" class="svelte-ddg00p"><img src="/icons/linkedin-w.svg" alt="linkedin"></a> <a href="https://x.com/gglycoscience" target="_blank" class="svelte-ddg00p"><img src="/icons/x-w.svg" alt="x"></a></div> <div class="subfooter-legal svelte-ddg00p"><a href="/privacy-policy.pdf" target="_blank" class="svelte-ddg00p">${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Privacy policy" : "Pravila privatnosti")}</a> <a href="/gep.pdf" target="_blank" class="svelte-ddg00p">${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Gender Equality Plan" : "Plan za ravnopravnost spolova")}</a> `;
  if (store_get($$store_subs ??= {}, "$language", language) === "en") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a href="/conflict-of-interest.pdf" target="_blank" class="svelte-ddg00p">Conflict of interest</a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<a href="/sukob-interesa.pdf" target="_blank" class="svelte-ddg00p">Sukob interesa</a>`;
  }
  $$payload.out += `<!--]--></div> <div class="subfooter-contact svelte-ddg00p"><a href="mailto:info@genos.hr" class="svelte-ddg00p">info@genos.hr</a> <span>© 2025 Genos Glyco</span></div></div> <img class="footer-bg svelte-ddg00p" src="/images/footer.jpg" alt=""></footer>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
function _layout($$payload, $$props) {
  push();
  Navigation($$payload);
  $$payload.out += `<!----> <div class="bg svelte-s1366u"></div> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> `;
  Meta($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
