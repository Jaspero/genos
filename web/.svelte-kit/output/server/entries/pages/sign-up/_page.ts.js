import { r as redirectAuthorized } from "../../../chunks/redirect-authorized.js";
const ssr = false;
async function load() {
  await redirectAuthorized();
}
export {
  load,
  ssr
};
