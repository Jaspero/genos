import { e as escape_html, f as attr, k as bind_props, c as pop, p as push } from "../../../../chunks/index3.js";
import { m as meta } from "../../../../chunks/meta.store.js";
import "@jaspero/web-components/dist/image-gallery.wc.js";
import { h as html } from "../../../../chunks/html.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { author, content, image, imageAlt } = data.article;
  meta.set({
    title: data.article.meta?.title || data.article.title,
    description: data.article.meta?.description || data.article.description,
    keywords: data.article.meta?.keywords || "",
    structured: data.article.meta?.structured || "",
    og: data.article.meta?.og || {}
  });
  $$payload.out += `<div class="grid grid-small"><div class="gc-12 single-article spacer svelte-17vsdg5"><h2 class="single-article-title svelte-17vsdg5">${escape_html(data.article.title)}</h2> <p class="single-article-description svelte-17vsdg5">${escape_html(data.article.description)}</p> <img class="single-article-image svelte-17vsdg5"${attr("src", data.article.image)}${attr("alt", data.article.imageAlt)}> <div class="single-article-content"><p>${html(content)}</p></div></div></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
