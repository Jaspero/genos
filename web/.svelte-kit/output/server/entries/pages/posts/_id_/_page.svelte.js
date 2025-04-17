import { f as attr, e as escape_html, i as bind_props, c as pop, p as push, k as stringify } from "../../../../chunks/index3.js";
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
  $$payload.out += `<header${attr("class", `navigation ${stringify([""].filter(Boolean).join(" "))}`)}><nav><a href="/"><img class="logo" src="/brand/genos-logo-white.svg" alt="genos logo"></a> <div class="links"><a class="links-link desktop" href="/about"><span class="line-thing"></span>About</a> <a class="links-link desktop" href="/projects"><span class="line-thing"></span>Projects</a> <a class="links-link desktop" href="/publications"><span class="line-thing"></span>Publications</a> <a class="links-link desktop" href="/services"><span class="line-thing"></span>Services</a> <a class="links-link desktop" href="/resources"><span class="line-thing"></span>Resources</a> <a class="links-link desktop" href="/news"><span class="line-thing"></span>News</a> <a class="links-link desktop" href="/team"><span class="line-thing"></span>Our team</a> <a class="links-link desktop contact" href="/contact">Contact us</a> <button class="links-link mobile"><span class="line-thing"></span>Menu</button></div></nav></header> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> ${html(data.header)} <section class="section single-article-section svelte-138s1mw"><div class="container-xs flex-col single-article-container svelte-138s1mw"><h2 class="h2 subtitle">${escape_html(data.article.title)}</h2> `;
  if (data.article.description) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="article-info"><p class="single-article-description svelte-138s1mw">${escape_html(data.article.description)}</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="author-content svelte-138s1mw">`;
  if (author) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img${attr("src", author.image || "/images/dummy-img.jpg")}${attr("alt", author.name)} class="author-img svelte-138s1mw"> <p class="author-name svelte-138s1mw">${escape_html(author.name)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  if (data.article.publicationDate) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="article-date svelte-138s1mw">Date: ${escape_html(new Date(data.article.publicationDate).toLocaleDateString())}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="article-content svelte-138s1mw">`;
  if (image) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div><img${attr("src", image)}${attr("alt", imageAlt)} class="article-img svelte-138s1mw"></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="article-content svelte-138s1mw"><p class="article-text p svelte-138s1mw">${html(content)}</p></div></div></div></section> ${html(data.footer)}`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
