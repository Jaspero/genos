import { o as current_component } from "./index3.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
export {
  onDestroy as o
};
