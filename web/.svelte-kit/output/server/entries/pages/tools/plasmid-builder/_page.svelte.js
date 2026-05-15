import { c as pop, p as push, d as store_get, u as unsubscribe_stores } from "../../../../chunks/index3.js";
import "../../../../chunks/client.js";
import "../../../../chunks/firebase.js";
import "firebase/functions";
import { l as language } from "../../../../chunks/language.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let t, backboneVal, promoterVal, edVal, dcasVal, terminatorVal, backboneSize, gRNASize, promoterSize, edSize, dcasSize, markerSize, terminatorSize, totalSize;
  const I18N = {
    en: {
      heroTitle: "Design your own expression plasmid",
      heroText: "Choose number of gRNAs (gRNAs), eukaryotic promoter type (Pro), effector domain (ED), selection markers - fluorescence markers or antibiotic resistance markers (M), transcriptional terminators (Ter) and backbone type (B).",
      rulesTitle: "Quick rules",
      rulesText: "• dSpCas9 works with all ED domains<br>• dSaCas9 works only with: <b>DNMT3A, TET1, VPR, KRAB</b><br>• gRNA: unlimited number can be added<br>• Custom option for each module is available.",
      buildTitle: "Build modules",
      buildText: "Click module cards below or click colored boxes around the plasmid map to edit the same module.",
      plasmidMapTitle: "Plasmid map",
      plasmidMapText: "Module colors match Build modules and the boxes around the map.",
      legBb: "Backbone",
      legGrna: "gRNAs",
      legPro: "Promoter",
      legEd: "Effector",
      legDcas: "dCas9",
      legM: "Markers",
      legTer: "Terminator",
      configTitle: "Current configuration",
      configText: "“Add to cart” is enabled when B, gRNAs, Pro, ED, dCas9 and Ter are selected.",
      sumKb: "Backbone (B)",
      sumKg: "gRNAs",
      sumKp: "Eukaryotic promoter type (Pro)",
      sumKe: "Effector domain (ED)",
      sumKd: "dCas9",
      sumKm: "Selection markers (M)",
      sumKt: "Transcription terminator (Ter)",
      sumKtotal: "Total plasmid size",
      cartTitle: "Cart",
      cartText: "Saved configurations.",
      addToCart: "Add to cart",
      reset: "Reset",
      notSelected: "Not selected",
      noGRNA: "No gRNAs added",
      optional: "Optional",
      moduleBackbone: "Backbone",
      moduleBackboneSub: "(backbone type)",
      moduleGrnaSub: "(guide RNAs)",
      moduleProSub: "(eukaryotic promoter type)",
      moduleEdSub: "(effector domain)",
      moduleDcasSub: "(dCas9 type)",
      moduleMSub: "(selection markers)",
      moduleTerSub: "(transcription terminator)",
      strongPromoters: "Strong promoters",
      weakPromoters: "Weak promoters",
      custom: "Custom",
      modalBackbone: "Select backbone (B)",
      modalBackboneCustom: "Custom backbone (if selected Custom)",
      modalBackboneNote: "If you choose Custom, write your own backbone type.",
      configureGRNA: "Configure gRNAs (no limit)",
      gRNAIntro: "Choose gRNA type and add as many gRNAs as you want.",
      gRNAType: "gRNA type",
      gRNADetails: "gRNA details",
      existingGRNAs: "Existing gRNAs",
      clearFields: "Clear fields",
      addGRNA: "Add gRNA",
      done: "Done",
      remove: "Remove",
      copy: "Copy",
      gRNAName: "gRNA name",
      gRNASeq: "gRNA sequence (without PAM)",
      gRNATarget: "Target gene / UCSC coordinates",
      saDesc: "Enter gRNA name and sequence without PAM.",
      spDesc: "Enter gRNA name and sequence without PAM.",
      customDesc: "Enter target gene / UCSC coordinates.",
      noGRNAsAdded: "No gRNAs added.",
      promoterTitle: "Eukaryotic promoter type (Pro)",
      promoterCustom: "Custom promoter (if selected Custom)",
      effectorTitle: "Effector domains (ED)",
      dnaMeth: "Manipulation of DNA methylation",
      directGene: "Direct gene expression manipulation",
      acetylation: "Histone acetylation",
      h3k4: "Histone H3K4 methylation",
      h3k9: "Histone H3K9 methylation",
      edCustom: "Custom ED (if selected Custom)",
      edNote: "Compatibility: dSaCas9 only with DNMT3A, TET1, VPR, KRAB. Others → dSpCas9.",
      dcasTitle: "Select dCas9",
      dcasCustom: "Custom dCas9 (if selected Custom)",
      markersTitle: "Selection markers (M)",
      markersIntro: "Choose fluorescence markers and/or antibiotic resistance markers.",
      fluorTitle: "Fluorescence markers",
      abxTitle: "Antibiotic resistance markers",
      clear: "Clear",
      terminatorTitle: "Transcription terminator (Ter)",
      customTer: "Custom terminator (if selected Custom)",
      cartEmpty: "Cart is empty.",
      configNum: "Configuration",
      name: "name",
      seq: "seq",
      target: "target",
      size: "size",
      totalSize: "Total size",
      bp: "bp",
      toastBackbone: "Backbone selected",
      toastGRNAAdded: "gRNA added",
      toastGRNAUpdated: "gRNAs updated",
      toastPromoter: "Promoter selected",
      toastED: "ED selected",
      toastDcas: "dCas9 selected",
      toastMarkersUpdated: "Markers updated",
      toastMarkersCleared: "Markers cleared",
      toastTer: "Terminator selected",
      toastReset: "Reset done",
      toastCart: "Added to cart",
      toastNeedAll: "Please select all required modules first",
      toastCopied: "Configuration copied to builder",
      toastNeedSeq: "Please enter gRNA sequence without PAM",
      toastNeedTarget: "Please enter target gene / UCSC coordinates",
      toastDcasReset: "dCas9 reset (incompatible with selected ED)",
      standardBackbone: "Standard Backbone",
      lentiviralBackbone: "Lentiviral backbone",
      piggyBackbone: "PiggyBac compatible backbone",
      sleepingBackbone: "Sleeping Beauty compatible backbone",
      secondaryPuro: "Secondary backbone - Puro",
      secondaryMClover: "Secondary backbone - mClover3",
      bbDesc1: "for transient transfections",
      bbDesc2: "for stable transfections",
      bbDesc3: "for stable integrations",
      bbDesc4: "for stable integrations",
      bbDesc5: "Puromycin resistance already under the strong promoter with cloning cassette for other modules",
      bbDesc6: "mClover3 already under the strong promoter with cloning cassette for other modules",
      bghTerm: "BGH terminator",
      sv40Term: "SV40 terminator",
      submitOrder: "Submit order and request quotation",
      submitting: "Submitting…",
      notes: "Notes (optional)",
      notesPlaceholder: "Additional notes or requirements…",
      orderSubmitted: "Order submitted successfully! ID:",
      dSpCas9Desc: "Compatible with all effector domains.",
      dSaCas9Desc: "Compatible only with DNMT3A, TET1, VPR, KRAB.",
      ordersLinkTitle: "Profile & plasmid orders",
      ordersLinkText: "View submitted plasmid orders, current statuses, pricing and configuration details.",
      ordersLinkCta: "View existing orders"
    },
    hr: {
      heroTitle: "Dizajniraj svoj ekspresijski plazmid",
      heroText: "Odaberi broj gRNA (gRNAs), tip eukariotskog promotora (Pro), efektorsku domenu (ED), selekcijske markere - fluorescentne markere ili markere antibiotske rezistencije (M), transkripcijske terminatore (Ter) i tip okosnice plazmida (B).",
      rulesTitle: "Brza pravila",
      rulesText: "• dSpCas9 radi sa svim ED domenama<br>• dSaCas9 radi samo s: <b>DNMT3A, TET1, VPR, KRAB</b><br>• gRNA: može se dodati neograničen broj<br>• Za svaki modul dostupna je Custom opcija.",
      buildTitle: "Odabir modula",
      buildText: "Klikni kartice modula ispod ili klikni obojane prozorčiće oko mape plazmida za uređivanje istog modula.",
      plasmidMapTitle: "Mapa plazmida",
      plasmidMapText: "Boje modula iste su u Build modules, na plasmid map i u prozorčićima oko mape.",
      legBb: "Okosnica",
      legGrna: "gRNA",
      legPro: "Promotor",
      legEd: "Efektor",
      legDcas: "dCas9",
      legM: "Markeri",
      legTer: "Terminator",
      configTitle: "Trenutna konfiguracija",
      configText: "„Dodaj u košaricu“ je aktivan kada su odabrani B, gRNAs, Pro, ED, dCas9 i Ter.",
      sumKb: "Okosnica (B)",
      sumKg: "gRNA",
      sumKp: "Tip eukariotskog promotora (Pro)",
      sumKe: "Efektorska domena (ED)",
      sumKd: "dCas9",
      sumKm: "Selekcijski markeri (M)",
      sumKt: "Transkripcijski terminator (Ter)",
      sumKtotal: "Ukupna veličina plazmida",
      cartTitle: "Košarica",
      cartText: "Spremljene konfiguracije.",
      addToCart: "Dodaj u košaricu",
      reset: "Reset",
      notSelected: "Nije odabrano",
      noGRNA: "Nijedna gRNA nije dodana",
      optional: "Opcionalno",
      moduleBackbone: "Okosnica",
      moduleBackboneSub: "(tip okosnice)",
      moduleGrnaSub: "(guide RNA)",
      moduleProSub: "(tip eukariotskog promotora)",
      moduleEdSub: "(efektorska domena)",
      moduleDcasSub: "(tip dCas9)",
      moduleMSub: "(selekcijski markeri)",
      moduleTerSub: "(transkripcijski terminator)",
      strongPromoters: "Jaki promotori",
      weakPromoters: "Slabi promotori",
      custom: "Custom",
      modalBackbone: "Odaberi okosnicu (B)",
      modalBackboneCustom: "Custom okosnica (ako je odabran Custom)",
      modalBackboneNote: "Ako odabereš Custom, upiši vlastiti tip okosnice.",
      configureGRNA: "Konfiguracija gRNA (bez ograničenja)",
      gRNAIntro: "Odaberi tip gRNA i dodaj koliko god gRNA želiš.",
      gRNAType: "Tip gRNA",
      gRNADetails: "Detalji gRNA",
      existingGRNAs: "Postojeće gRNA",
      clearFields: "Očisti polja",
      addGRNA: "Dodaj gRNA",
      done: "Gotovo",
      remove: "Ukloni",
      copy: "Kopiraj",
      gRNAName: "Naziv gRNA",
      gRNASeq: "gRNA sekvenca (bez PAM-a)",
      gRNATarget: "Ciljni gen / UCSC koordinate",
      saDesc: "Unesi naziv gRNA i sekvencu bez PAM-a.",
      spDesc: "Unesi naziv gRNA i sekvencu bez PAM-a.",
      customDesc: "Unesi ciljni gen / UCSC koordinate.",
      noGRNAsAdded: "Nijedna gRNA nije dodana.",
      promoterTitle: "Tip eukariotskog promotora (Pro)",
      promoterCustom: "Custom promotor (ako je odabran Custom)",
      effectorTitle: "Efektorske domene (ED)",
      dnaMeth: "Manipulacija DNA metilacijom",
      directGene: "Izravna manipulacija ekspresijom gena",
      acetylation: "Histonska acetilacija",
      h3k4: "Metilacija histona H3K4",
      h3k9: "Metilacija histona H3K9",
      edCustom: "Custom ED (ako je odabran Custom)",
      edNote: "Kompatibilnost: dSaCas9 samo s DNMT3A, TET1, VPR, KRAB. Ostalo → dSpCas9.",
      dcasTitle: "Odaberi dCas9",
      dcasCustom: "Custom dCas9 (ako je odabran Custom)",
      markersTitle: "Selekcijski markeri (M)",
      markersIntro: "Odaberi fluorescentne markere i/ili markere antibiotske rezistencije.",
      fluorTitle: "Fluorescentni markeri",
      abxTitle: "Markeri antibiotske rezistencije",
      clear: "Obriši",
      terminatorTitle: "Transkripcijski terminator (Ter)",
      customTer: "Custom terminator (ako je odabran Custom)",
      cartEmpty: "Košarica je prazna.",
      configNum: "Konfiguracija",
      name: "ime",
      seq: "sek",
      target: "target",
      size: "veličina",
      totalSize: "Ukupna veličina",
      bp: "bp",
      toastBackbone: "Okosnica je odabrana",
      toastGRNAAdded: "gRNA je dodana",
      toastGRNAUpdated: "gRNA su ažurirane",
      toastPromoter: "Promotor je odabran",
      toastED: "ED je odabran",
      toastDcas: "dCas9 je odabran",
      toastMarkersUpdated: "Markeri su ažurirani",
      toastMarkersCleared: "Markeri su obrisani",
      toastTer: "Terminator je odabran",
      toastReset: "Reset je napravljen",
      toastCart: "Dodano u košaricu",
      toastNeedAll: "Molimo odaberi sve obavezne module",
      toastCopied: "Konfiguracija kopirana u builder",
      toastNeedSeq: "Molimo unesi gRNA sekvencu bez PAM-a",
      toastNeedTarget: "Molimo unesi ciljni gen / UCSC koordinate",
      toastDcasReset: "dCas9 je resetiran (nije kompatibilan s odabranim ED)",
      standardBackbone: "Standard Backbone",
      lentiviralBackbone: "Lentiviral backbone",
      piggyBackbone: "PiggyBac compatible backbone",
      sleepingBackbone: "Sleeping Beauty compatible backbone",
      secondaryPuro: "Secondary backbone - Puro",
      secondaryMClover: "Secondary backbone - mClover3",
      bbDesc1: "za prolazne transfekcije",
      bbDesc2: "za stabilne transfekcije",
      bbDesc3: "za stabilne integracije",
      bbDesc4: "za stabilne integracije",
      bbDesc5: "Puromycin resistance je već pod jakim promotorom s klonirajućom kasetom za druge module",
      bbDesc6: "mClover3 je već pod jakim promotorom s klonirajućom kasetom za druge module",
      bghTerm: "BGH terminator",
      sv40Term: "SV40 terminator",
      submitOrder: "Pošalji narudžbu i zatraži ponudu",
      submitting: "Slanje…",
      notes: "Napomene (opcionalno)",
      notesPlaceholder: "Dodatne napomene ili zahtjevi…",
      orderSubmitted: "Narudžba je uspješno poslana! ID:",
      dSpCas9Desc: "Kompatibilan sa svim efektorskim domenama.",
      dSaCas9Desc: "Kompatibilan samo s DNMT3A, TET1, VPR, KRAB.",
      ordersLinkTitle: "Profil i narudžbe plazmida",
      ordersLinkText: "Pogledaj poslane narudžbe plazmida, trenutne statuse, cijene i detalje konfiguracija.",
      ordersLinkCta: "Pogledaj postojeće narudžbe"
    }
  };
  const SIZE_BP = {
    "Standard Backbone": 2013,
    "Lentiviral backbone": 7528,
    "PiggyBac compatible backbone": 3187,
    "Sleeping Beauty compatible backbone": 3174,
    "Secondary backbone - Puro": 3147,
    "Secondary backbone - mClover3": 3264,
    "SaCas9-gRNA": 390,
    "SpCas9-gRNA": 390,
    "CbH": 848,
    "SV40": 369,
    "EF1a": 1204,
    "EFS": 281,
    "DNMT3A": 1001,
    "TET1": 2219,
    "VPR": 1643,
    "KRAB": 275,
    "p300": 1958,
    "HDAC3": 1334,
    "LSD1": 2609,
    "KDM5A": 2447,
    "RIOX1": 1973,
    "PRDM9": 965,
    "G9a": 1181,
    "G9a-me3": 1181,
    "dSpCas9": 4290,
    "dSaCas9": 3276,
    "mRuby3": 809,
    "mClover3": 815,
    "mCerulean3": 810,
    "Puromycin resistance": 676,
    "Hygromycin resistance": 1105,
    "Blasticidin resistance": 472,
    "BGH terminator": 213,
    "SV40 terminator": 151
  };
  let gRNAs = [];
  let markersFluorescent = [];
  let markersAntibiotic = [];
  function baseED(label) {
    if (!label) return "";
    if (label === "Custom") return "Custom";
    return label.split(" ")[0];
  }
  function normalizeLabel(label) {
    return String(label || "").replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();
  }
  function sizeOf(label) {
    const normalized = normalizeLabel(label);
    const withoutDetails = normalizeLabel(normalized.replace(/\s*\(.+\)$/, ""));
    return SIZE_BP[normalized] || SIZE_BP[withoutDetails] || SIZE_BP[baseED(withoutDetails)] || 0;
  }
  function polarToCartesian(cx, cy, r, angleDeg) {
    const a = (angleDeg - 90) * Math.PI / 180;
    return {
      x: cx + r * Math.cos(a),
      y: cy + r * Math.sin(a)
    };
  }
  function arcPath(cx, cy, r, startAngle, endAngle) {
    const s = polarToCartesian(cx, cy, r, endAngle);
    const e = polarToCartesian(cx, cy, r, startAngle);
    const large = endAngle - startAngle <= 180 ? "0" : "1";
    return `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${large} 0 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
  }
  const MODULE_KEYS = [
    "bb",
    "gRNA",
    "pro",
    "ed",
    "dcas",
    "m",
    "ter"
  ];
  t = (key) => I18N[store_get($$store_subs ??= {}, "$language", language)]?.[key] ?? key;
  backboneVal = "";
  promoterVal = "";
  edVal = "";
  dcasVal = "";
  terminatorVal = "";
  backboneSize = sizeOf(backboneVal);
  gRNASize = gRNAs.reduce((s, g) => s + sizeOf(g.type), 0);
  promoterSize = sizeOf(promoterVal);
  edSize = sizeOf(edVal);
  dcasSize = sizeOf(dcasVal);
  markerSize = [...markersFluorescent, ...markersAntibiotic].reduce((s, x) => s + sizeOf(x), 0);
  terminatorSize = sizeOf(terminatorVal);
  totalSize = backboneSize + gRNASize + promoterSize + edSize + dcasSize + markerSize + terminatorSize;
  (() => {
    const sizes = {
      bb: backboneSize || 300,
      gRNA: gRNASize || 300,
      pro: promoterSize || 300,
      ed: edSize || 300,
      dcas: dcasSize || 300,
      m: markerSize || 300,
      ter: terminatorSize || 300
    };
    const total = MODULE_KEYS.reduce((s, k) => s + sizes[k], 0);
    let start = 0;
    const sizeGetter = {
      bb: backboneSize,
      gRNA: gRNASize,
      pro: promoterSize,
      ed: edSize,
      dcas: dcasSize,
      m: markerSize,
      ter: terminatorSize
    };
    const out = {};
    MODULE_KEYS.forEach((k) => {
      const angle = sizes[k] / total * 360;
      const end = start + angle;
      out[k] = {
        start,
        end,
        path: arcPath(310, 310, 150, start, end),
        active: !!sizeGetter[k]
      };
      start = end;
    });
    return out;
  })();
  [
    {
      key: "bb",
      abbr: "B",
      tag: t("moduleBackbone"),
      subKey: "moduleBackboneSub",
      val: backboneVal ? `${backboneVal} · ${backboneSize} ${t("bp")}` : t("notSelected")
    },
    {
      key: "gRNA",
      abbr: "gRNAs",
      tag: "B → A",
      subKey: "moduleGrnaSub",
      val: gRNAs.length ? `${[
        ...new Set(gRNAs.map((g) => g.type))
      ].join(", ")} · ${gRNASize} ${t("bp")}` : t("noGRNA")
    },
    {
      key: "pro",
      abbr: "Pro",
      tag: "A → I",
      subKey: "moduleProSub",
      val: promoterVal ? `${promoterVal} · ${promoterSize} ${t("bp")}` : t("notSelected")
    },
    {
      key: "ed",
      abbr: "ED",
      tag: "I → II",
      subKey: "moduleEdSub",
      val: edVal ? `${baseED(edVal)} · ${edSize} ${t("bp")}` : t("notSelected")
    },
    {
      key: "dcas",
      abbr: "dCas9",
      tag: "II → III",
      subKey: "moduleDcasSub",
      val: dcasVal ? `${dcasVal} · ${dcasSize} ${t("bp")}` : t("notSelected")
    },
    {
      key: "m",
      abbr: "M",
      tag: "III → IV",
      subKey: "moduleMSub",
      val: markerSize ? `${[...markersFluorescent, ...markersAntibiotic].join(", ")} · ${markerSize} ${t("bp")}` : t("optional")
    },
    {
      key: "ter",
      abbr: "Ter",
      tag: "IV → Z",
      subKey: "moduleTerSub",
      val: terminatorVal ? `${terminatorVal} · ${terminatorSize} ${t("bp")}` : t("notSelected")
    }
  ];
  [
    {
      name: t("standardBackbone"),
      desc: t("bbDesc1")
    },
    {
      name: t("lentiviralBackbone"),
      desc: t("bbDesc2")
    },
    {
      name: t("piggyBackbone"),
      desc: t("bbDesc3")
    },
    {
      name: t("sleepingBackbone"),
      desc: t("bbDesc4")
    },
    {
      name: t("secondaryPuro"),
      desc: t("bbDesc5")
    },
    {
      name: t("secondaryMClover"),
      desc: t("bbDesc6")
    },
    { name: "Custom", desc: "" }
  ];
  [
    {
      title: t("strongPromoters"),
      items: ["CbH", "SV40", "EF1a"]
    },
    {
      title: t("weakPromoters"),
      items: ["EFS"]
    },
    { title: "Custom", items: ["Custom"] }
  ];
  [
    {
      title: t("dnaMeth"),
      items: ["DNMT3A", "TET1"]
    },
    {
      title: t("directGene"),
      items: [
        "VPR (direct gene activation)",
        "KRAB (direct gene repression)"
      ]
    },
    {
      title: t("acetylation"),
      items: [
        "p300 (histone acetylation)",
        "HDAC3 (histone deacetylation)"
      ]
    },
    {
      title: t("h3k4"),
      items: [
        "LSD1 (H3K4me1/2 demethylation)",
        "KDM5A (H3K4me2/3 demethylation)",
        "RIOX1 (H3K4me1/2/3 demethylation)",
        "PRDM9 (introduction of H3K4me3)"
      ]
    },
    {
      title: t("h3k9"),
      items: [
        "G9a (introduction of H3K9me2)",
        "G9a-me3 (introduction of H3K9me3)"
      ]
    },
    { title: "Custom", items: ["Custom"] }
  ];
  [
    {
      label: t("sumKb"),
      value: backboneVal ? `${backboneVal} · ${backboneSize} ${t("bp")}` : "—"
    },
    {
      label: t("sumKg"),
      value: gRNAs.length ? gRNAs.map((g, i) => `${i + 1}. ${g.type}${g.name ? ` — ${g.name}` : ""}${g.sequence ? ` — ${g.sequence}` : ""}${g.target ? ` — ${g.target}` : ""}`).join(" | ") + ` · ${gRNASize} ${t("bp")}` : "—"
    },
    {
      label: t("sumKp"),
      value: promoterVal ? `${promoterVal} · ${promoterSize} ${t("bp")}` : "—"
    },
    {
      label: t("sumKe"),
      value: edVal ? `${baseED(edVal)} · ${edSize} ${t("bp")}` : "—"
    },
    {
      label: t("sumKd"),
      value: dcasVal ? `${dcasVal} · ${dcasSize} ${t("bp")}` : "—"
    },
    {
      label: t("sumKm"),
      value: markerSize ? `${[...markersFluorescent, ...markersAntibiotic].join(", ")} · ${markerSize} ${t("bp")}` : "—"
    },
    {
      label: t("sumKt"),
      value: terminatorVal ? `${terminatorVal} · ${terminatorSize} ${t("bp")}` : "—"
    },
    {
      label: t("sumKtotal"),
      value: `${totalSize} ${t("bp")}`
    }
  ];
  ({
    bb: backboneVal || t("notSelected"),
    gRNA: gRNAs.length ? [
      ...new Set(gRNAs.map((g) => g.type))
    ].join(", ") : t("notSelected"),
    pro: promoterVal || t("notSelected"),
    ed: edVal ? baseED(edVal) : t("notSelected"),
    dcas: dcasVal || t("notSelected"),
    m: [...markersFluorescent, ...markersAntibiotic].join(", ") || t("notSelected"),
    ter: terminatorVal || t("notSelected")
  });
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="pt-36 flex items-center justify-center min-h-[60vh] text-[#032130]"><p>Loading...</p></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
