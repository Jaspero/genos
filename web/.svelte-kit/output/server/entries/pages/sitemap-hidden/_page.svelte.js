import { g as ensure_array_like, f as attr, e as escape_html, k as bind_props, c as pop, p as push } from "../../../chunks/index3.js";
import { m as meta } from "../../../chunks/meta.store.js";
import { C as CONFIG } from "../../../chunks/config.const.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  meta.set({ title: "Hidden Sitemap", noIndex: true });
  const each_array = ensure_array_like(data.pages);
  const each_array_1 = ensure_array_like(data.blog.articles);
  const each_array_2 = ensure_array_like(data.blog.authors);
  $$payload.out += `<h1>Sitemap</h1> <h3>Pages</h3> <ul><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let page = each_array[$$index];
    $$payload.out += `<li><a${attr("href", page.url)}>${escape_html(page.title)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul> <h3>Blog</h3> <h4>Articles</h4> <ul><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let article = each_array_1[$$index_1];
    $$payload.out += `<li><a${attr("href", CONFIG.singlePostUrlPrefix + article.id)}>${escape_html(article.title)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul> <h4>Authors</h4> <ul><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let author = each_array_2[$$index_2];
    $$payload.out += `<li><a${attr("href", CONFIG.singleBlogAuthorUrlPrefix + author.id)}>${escape_html(author.name)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul> <h5>Static Pages</h5> <ul><li><a href="/checkout">Checkout</a></li> <li><a href="/reset-password">Reset Password</a></li> <li><a href="/sign-in">Sign In</a></li> <li><a href="/sign-up">Sign Up</a></li> <li><a href="/my-account">My Account</a></li> <li><a href="/my-account/coupons">My Account - Coupons</a></li> <li><a href="/my-account/favorites">My Account - Favorites</a></li> <li><a href="/my-account/settings">My Account - Settings</a></li></ul>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
