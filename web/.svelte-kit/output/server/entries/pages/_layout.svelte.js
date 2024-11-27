import { d as store_get, h as head, u as unsubscribe_stores, c as pop, e as escape_html, f as attr, p as push, g as slot } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
import { C as CONFIG } from "../../chunks/config.const.js";
import { M as META_SUFFIX, m as meta } from "../../chunks/meta.store.js";
import { h as html } from "../../chunks/html.js";
import "../../chunks/firebase.js";
import "@jaspero/web-components/dist/alert.wc.js";
import "@jaspero/web-components/dist/confirm.wc.js";
import "firebase/firestore";
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
function _layout($$payload, $$props) {
  push();
  $$payload.out += `<!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> `;
  Meta($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
