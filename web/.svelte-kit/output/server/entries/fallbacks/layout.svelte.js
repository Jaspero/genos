import { c as pop, p as push } from "../../chunks/index3.js";
function Layout($$payload, $$props) {
  push();
  let { children } = $$props;
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  Layout as default
};
