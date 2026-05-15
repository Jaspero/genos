import { w as writable } from "./index2.js";
const isBrowser = typeof window !== "undefined";
const savedLanguage = isBrowser ? localStorage.getItem("language") || "en" : "en";
const language = writable(savedLanguage);
if (isBrowser) {
  language.subscribe((value) => {
    localStorage.setItem("language", value);
  });
}
export {
  language as l
};
