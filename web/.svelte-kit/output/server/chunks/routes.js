const ROUTE_PAIRS = [
  { en: "/home", hr: "/pocetna" },
  { en: "/about", hr: "/o-nama" },
  { en: "/projects", hr: "/projekti" },
  { en: "/publications", hr: "/publikacije" },
  { en: "/services", hr: "/usluge" },
  { en: "/resources", hr: "/korisni-linkovi" },
  { en: "/team", hr: "/tim" },
  { en: "/news", hr: "/novosti" },
  { en: "/contact", hr: "/kontakt" }
];
function normalize(path) {
  const p = path.replace(/\/+$/, "").replace(/\.html$/, "");
  return p === "" ? "/home" : p;
}
function langFromPath(path) {
  const p = normalize(path);
  for (const pair of ROUTE_PAIRS) {
    if (pair.en === p) return "en";
    if (pair.hr === p) return "hr";
  }
  return null;
}
function pathInLang(path, lang) {
  const p = normalize(path);
  const pair = ROUTE_PAIRS.find((r) => r.en === p || r.hr === p);
  return pair ? pair[lang] : null;
}
export {
  langFromPath as l,
  pathInLang as p
};
