import { p as push, f as attr, i as stringify, j as slot, k as bind_props, c as pop } from "./index3.js";
import { f as fallback } from "./utils.js";
function Dialog($$payload, $$props) {
  push();
  let showing = fallback($$props["showing"], false);
  let showClose = fallback($$props["showClose"], true);
  let src = fallback($$props["src"], "");
  let alt = fallback($$props["alt"], "");
  let fullScreen = fallback($$props["fullScreen"], false);
  let contentfull = fallback($$props["contentfull"], false);
  let removeMinW = fallback($$props["removeMinW"], false);
  let buttonOutside = fallback($$props["buttonOutside"], false);
  if (showing) {
    $$payload.out += "<!--[-->";
    if (!fullScreen) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="blurred-bg svelte-8gb86w"></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${attr("class", `dialog svelte-8gb86w ${stringify([
      fullScreen ? "fullscreen" : "",
      removeMinW ? "min-w-0" : "",
      buttonOutside ? "button-outside" : ""
    ].filter(Boolean).join(" "))}`)}>`;
    if (src) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<img${attr("src", src)}${attr("alt", alt)} class="svelte-8gb86w">`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${attr("class", `dialog-content svelte-8gb86w ${stringify([contentfull ? "contentfull" : ""].filter(Boolean).join(" "))}`)}><!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!----></div> <button type="button" class="dialog-close svelte-8gb86w"><span class="material-symbols-outlined">close</span></button></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    showing,
    showClose,
    src,
    alt,
    fullScreen,
    contentfull,
    removeMinW,
    buttonOutside
  });
  pop();
}
export {
  Dialog as D
};
