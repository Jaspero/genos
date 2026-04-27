<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { authenticated, functions } from '$lib/utils/firebase';
  import { httpsCallable } from 'firebase/functions';
  import { language } from '$lib/stores/language';

  // ── I18N ──
  const I18N: Record<string, Record<string, string>> = {
    en: {
      heroTitle: "Design your own expression plasmid",
      heroText: "Choose number of gRNAs (gRNAs), eukaryotic promoter type (Pro), effector domain (ED), selection markers - fluorescence markers or antibiotic resistance markers (M), transcriptional terminators (Ter) and backbone type (B).",
      rulesTitle: "Quick rules",
      rulesText: '• dSpCas9 works with all ED domains<br>• dSaCas9 works only with: <b>DNMT3A, TET1, VPR, KRAB</b><br>• gRNA: unlimited number can be added<br>• Custom option for each module is available.',
      buildTitle: "Build modules",
      buildText: "Click module cards below or click colored boxes around the plasmid map to edit the same module.",
      plasmidMapTitle: "Plasmid map",
      plasmidMapText: "Module colors match Build modules and the boxes around the map.",
      legBb: "Backbone", legGrna: "gRNAs", legPro: "Promoter", legEd: "Effector",
      legDcas: "dCas9", legM: "Markers", legTer: "Terminator",
      configTitle: "Current configuration",
      configText: "\u201CAdd to cart\u201D is enabled when B, gRNAs, Pro, ED, dCas9 and Ter are selected.",
      sumKb: "Backbone (B)", sumKg: "gRNAs", sumKp: "Eukaryotic promoter type (Pro)",
      sumKe: "Effector domain (ED)", sumKd: "dCas9", sumKm: "Selection markers (M)",
      sumKt: "Transcription terminator (Ter)", sumKtotal: "Total plasmid size",
      cartTitle: "Cart", cartText: "Saved configurations.",
      addToCart: "Add to cart", reset: "Reset",
      notSelected: "Not selected", noGRNA: "No gRNAs added", optional: "Optional",
      moduleBackbone: "Backbone",
      moduleBackboneSub: "(backbone type)", moduleGrnaSub: "(guide RNAs)",
      moduleProSub: "(eukaryotic promoter type)", moduleEdSub: "(effector domain)",
      moduleDcasSub: "(dCas9 type)", moduleMSub: "(selection markers)",
      moduleTerSub: "(transcription terminator)",
      strongPromoters: "Strong promoters", weakPromoters: "Weak promoters",
      custom: "Custom",
      modalBackbone: "Select backbone (B)",
      modalBackboneCustom: "Custom backbone (if selected Custom)",
      modalBackboneNote: "If you choose Custom, write your own backbone type.",
      configureGRNA: "Configure gRNAs (no limit)",
      gRNAIntro: "Choose gRNA type and add as many gRNAs as you want.",
      gRNAType: "gRNA type", gRNADetails: "gRNA details",
      existingGRNAs: "Existing gRNAs", clearFields: "Clear fields",
      addGRNA: "Add gRNA", done: "Done", remove: "Remove",
      gRNAName: "gRNA name", gRNASeq: "gRNA sequence (without PAM)",
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
      h3k4: "Histone H3K4 methylation", h3k9: "Histone H3K9 methylation",
      edCustom: "Custom ED (if selected Custom)",
      edNote: "Compatibility: dSaCas9 only with DNMT3A, TET1, VPR, KRAB. Others \u2192 dSpCas9.",
      dcasTitle: "Select dCas9",
      dcasCustom: "Custom dCas9 (if selected Custom)",
      markersTitle: "Selection markers (M)",
      markersIntro: "Choose fluorescence markers and/or antibiotic resistance markers.",
      fluorTitle: "Fluorescence markers", abxTitle: "Antibiotic resistance markers",
      clear: "Clear",
      terminatorTitle: "Transcription terminator (Ter)",
      customTer: "Custom terminator (if selected Custom)",
      cartEmpty: "Cart is empty.", configNum: "Configuration",
      name: "name", seq: "seq", target: "target", size: "size",
      totalSize: "Total size", bp: "bp",
      toastBackbone: "Backbone selected", toastGRNAAdded: "gRNA added",
      toastGRNAUpdated: "gRNAs updated", toastPromoter: "Promoter selected",
      toastED: "ED selected", toastDcas: "dCas9 selected",
      toastMarkersUpdated: "Markers updated", toastMarkersCleared: "Markers cleared",
      toastTer: "Terminator selected", toastReset: "Reset done",
      toastCart: "Added to cart", toastNeedAll: "Please select all required modules first",
      toastNeedSeq: "Please enter gRNA sequence without PAM",
      toastNeedTarget: "Please enter target gene / UCSC coordinates",
      toastDcasReset: "dCas9 reset (incompatible with selected ED)",
      standardBackbone: "Standard Backbone", lentiviralBackbone: "Lentiviral backbone",
      piggyBackbone: "PiggyBac compatible backbone",
      sleepingBackbone: "Sleeping Beauty compatible backbone",
      secondaryPuro: "Secondary backbone - Puro",
      secondaryMClover: "Secondary backbone - mClover3",
      bbDesc1: "for transient transfections", bbDesc2: "for stable transfections",
      bbDesc3: "for stable integrations", bbDesc4: "for stable integrations",
      bbDesc5: "Puromycin resistance already under the strong promoter with cloning cassette for other modules",
      bbDesc6: "mClover3 already under the strong promoter with cloning cassette for other modules",
      bghTerm: "BGH terminator", sv40Term: "SV40 terminator",
      submitOrder: "Submit order", submitting: "Submitting\u2026",
      notes: "Notes (optional)", notesPlaceholder: "Additional notes or requirements\u2026",
      orderSubmitted: "Order submitted successfully! ID:",
      dSpCas9Desc: "Compatible with all effector domains.",
      dSaCas9Desc: "Compatible only with DNMT3A, TET1, VPR, KRAB.",
      ordersLinkTitle: "Profile & plasmid orders",
      ordersLinkText: "View submitted plasmid orders, current statuses, pricing and configuration details.",
      ordersLinkCta: "View existing orders",
    },
    hr: {
      heroTitle: "Dizajniraj svoj ekspresijski plazmid",
      heroText: "Odaberi broj gRNA (gRNAs), tip eukariotskog promotora (Pro), efektorsku domenu (ED), selekcijske markere - fluorescentne markere ili markere antibiotske rezistencije (M), transkripcijske terminatore (Ter) i tip okosnice plazmida (B).",
      rulesTitle: "Brza pravila",
      rulesText: '• dSpCas9 radi sa svim ED domenama<br>• dSaCas9 radi samo s: <b>DNMT3A, TET1, VPR, KRAB</b><br>• gRNA: može se dodati neograničen broj<br>• Za svaki modul dostupna je Custom opcija.',
      buildTitle: "Odabir modula",
      buildText: "Klikni kartice modula ispod ili klikni obojane prozorčiće oko mape plazmida za uređivanje istog modula.",
      plasmidMapTitle: "Mapa plazmida",
      plasmidMapText: "Boje modula iste su u Build modules, na plasmid map i u prozorčićima oko mape.",
      legBb: "Okosnica", legGrna: "gRNA", legPro: "Promotor", legEd: "Efektor",
      legDcas: "dCas9", legM: "Markeri", legTer: "Terminator",
      configTitle: "Trenutna konfiguracija",
      configText: "\u201EDodaj u košaricu\u201C je aktivan kada su odabrani B, gRNAs, Pro, ED, dCas9 i Ter.",
      sumKb: "Okosnica (B)", sumKg: "gRNA", sumKp: "Tip eukariotskog promotora (Pro)",
      sumKe: "Efektorska domena (ED)", sumKd: "dCas9", sumKm: "Selekcijski markeri (M)",
      sumKt: "Transkripcijski terminator (Ter)", sumKtotal: "Ukupna veličina plazmida",
      cartTitle: "Košarica", cartText: "Spremljene konfiguracije.",
      addToCart: "Dodaj u košaricu", reset: "Reset",
      notSelected: "Nije odabrano", noGRNA: "Nijedna gRNA nije dodana", optional: "Opcionalno",
      moduleBackbone: "Okosnica",
      moduleBackboneSub: "(tip okosnice)", moduleGrnaSub: "(guide RNA)",
      moduleProSub: "(tip eukariotskog promotora)", moduleEdSub: "(efektorska domena)",
      moduleDcasSub: "(tip dCas9)", moduleMSub: "(selekcijski markeri)",
      moduleTerSub: "(transkripcijski terminator)",
      strongPromoters: "Jaki promotori", weakPromoters: "Slabi promotori",
      custom: "Custom",
      modalBackbone: "Odaberi okosnicu (B)",
      modalBackboneCustom: "Custom okosnica (ako je odabran Custom)",
      modalBackboneNote: "Ako odabereš Custom, upiši vlastiti tip okosnice.",
      configureGRNA: "Konfiguracija gRNA (bez ograničenja)",
      gRNAIntro: "Odaberi tip gRNA i dodaj koliko god gRNA želiš.",
      gRNAType: "Tip gRNA", gRNADetails: "Detalji gRNA",
      existingGRNAs: "Postojeće gRNA", clearFields: "Očisti polja",
      addGRNA: "Dodaj gRNA", done: "Gotovo", remove: "Ukloni",
      gRNAName: "Naziv gRNA", gRNASeq: "gRNA sekvenca (bez PAM-a)",
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
      h3k4: "Metilacija histona H3K4", h3k9: "Metilacija histona H3K9",
      edCustom: "Custom ED (ako je odabran Custom)",
      edNote: "Kompatibilnost: dSaCas9 samo s DNMT3A, TET1, VPR, KRAB. Ostalo \u2192 dSpCas9.",
      dcasTitle: "Odaberi dCas9",
      dcasCustom: "Custom dCas9 (ako je odabran Custom)",
      markersTitle: "Selekcijski markeri (M)",
      markersIntro: "Odaberi fluorescentne markere i/ili markere antibiotske rezistencije.",
      fluorTitle: "Fluorescentni markeri", abxTitle: "Markeri antibiotske rezistencije",
      clear: "Obriši",
      terminatorTitle: "Transkripcijski terminator (Ter)",
      customTer: "Custom terminator (ako je odabran Custom)",
      cartEmpty: "Košarica je prazna.", configNum: "Konfiguracija",
      name: "ime", seq: "sek", target: "target", size: "veličina",
      totalSize: "Ukupna veličina", bp: "bp",
      toastBackbone: "Okosnica je odabrana", toastGRNAAdded: "gRNA je dodana",
      toastGRNAUpdated: "gRNA su ažurirane", toastPromoter: "Promotor je odabran",
      toastED: "ED je odabran", toastDcas: "dCas9 je odabran",
      toastMarkersUpdated: "Markeri su ažurirani", toastMarkersCleared: "Markeri su obrisani",
      toastTer: "Terminator je odabran", toastReset: "Reset je napravljen",
      toastCart: "Dodano u košaricu", toastNeedAll: "Molimo odaberi sve obavezne module",
      toastNeedSeq: "Molimo unesi gRNA sekvencu bez PAM-a",
      toastNeedTarget: "Molimo unesi ciljni gen / UCSC koordinate",
      toastDcasReset: "dCas9 je resetiran (nije kompatibilan s odabranim ED)",
      standardBackbone: "Standard Backbone", lentiviralBackbone: "Lentiviral backbone",
      piggyBackbone: "PiggyBac compatible backbone",
      sleepingBackbone: "Sleeping Beauty compatible backbone",
      secondaryPuro: "Secondary backbone - Puro",
      secondaryMClover: "Secondary backbone - mClover3",
      bbDesc1: "za prolazne transfekcije", bbDesc2: "za stabilne transfekcije",
      bbDesc3: "za stabilne integracije", bbDesc4: "za stabilne integracije",
      bbDesc5: "Puromycin resistance je već pod jakim promotorom s klonirajućom kasetom za druge module",
      bbDesc6: "mClover3 je već pod jakim promotorom s klonirajućom kasetom za druge module",
      bghTerm: "BGH terminator", sv40Term: "SV40 terminator",
      submitOrder: "Pošalji narudžbu", submitting: "Slanje\u2026",
      notes: "Napomene (opcionalno)", notesPlaceholder: "Dodatne napomene ili zahtjevi\u2026",
      orderSubmitted: "Narudžba je uspješno poslana! ID:",
      dSpCas9Desc: "Kompatibilan sa svim efektorskim domenama.",
      dSaCas9Desc: "Kompatibilan samo s DNMT3A, TET1, VPR, KRAB.",
      ordersLinkTitle: "Profil i narudžbe plazmida",
      ordersLinkText: "Pogledaj poslane narudžbe plazmida, trenutne statuse, cijene i detalje konfiguracija.",
      ordersLinkCta: "Pogledaj postojeće narudžbe",
    }
  };

  $: t = (key: string) => I18N[$language]?.[key] ?? key;

  // ── Size data ──
  const SIZE_BP: Record<string, number> = {
    "Standard Backbone": 2013, "Lentiviral backbone": 7528,
    "PiggyBac compatible backbone": 3187, "Sleeping Beauty compatible backbone": 3174,
    "Secondary backbone - Puro": 3147, "Secondary backbone - mClover3": 3264,
    "SaCas9-gRNA": 390, "SpCas9-gRNA": 390,
    "CbH": 848, "SV40": 369, "EF1a": 1204, "EFS": 281,
    "DNMT3A": 1001, "TET1": 2219, "VPR": 1643, "KRAB": 275,
    "p300": 1958, "HDAC3": 1334, "LSD1": 2609, "KDM5A": 2447,
    "RIOX1": 1973, "PRDM9": 965, "G9a": 1181, "G9a-me3": 1181,
    "dSpCas9": 4290, "dSaCas9": 3276,
    "mRuby3": 809, "mClover3": 815, "mCerulean3": 810,
    "Puromycin resistance": 676, "Hygromycin resistance": 1105,
    "Blasticidin resistance": 472,
    "BGH terminator": 213, "SV40 terminator": 151
  };

  // ── State ──
  let ready = false;
  let backbone: string | null = null;
  let backboneCustom = "";
  let gRNAs: Array<{type: string; name: string; sequence: string; target: string}> = [];
  let promoter: string | null = null;
  let promoterCustom = "";
  let ed: string | null = null;
  let edCustom = "";
  let dcas: string | null = null;
  let dcasCustom = "";
  let markersFluorescent: string[] = [];
  let markersAntibiotic: string[] = [];
  let terminator: string | null = null;
  let terminatorCustom = "";
  let cart: any[] = [];
  let notes = "";
  let isSubmitting = false;
  let toastMsg = "";
  let toastTimer: ReturnType<typeof setTimeout>;

  // Modal
  let modalOpen = false;
  type ModalType = 'backbone' | 'gRNA' | 'promoter' | 'ed' | 'dcas' | 'markers' | 'terminator' | null;
  let modalType: ModalType = null;

  // gRNA draft
  let gDraftType = "SpCas9-gRNA";
  let gDraftName = "";
  let gDraftSeq = "";
  let gDraftTarget = "";

  function showToast(msg: string) {
    toastMsg = msg;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastMsg = "", 1800);
  }

  // ── Derived ──
  function getVal(field: string): string {
    if (field === 'backbone') return !backbone ? "" : backbone === "Custom" ? (backboneCustom || "Custom") : backbone;
    if (field === 'promoter') return !promoter ? "" : promoter === "Custom" ? (promoterCustom || "Custom") : promoter;
    if (field === 'ed') return !ed ? "" : ed === "Custom" ? (edCustom || "Custom") : ed;
    if (field === 'dcas') return !dcas ? "" : dcas === "Custom" ? (dcasCustom || "Custom") : dcas;
    if (field === 'terminator') return !terminator ? "" : terminator === "Custom" ? (terminatorCustom || "Custom") : terminator;
    return "";
  }

  function baseED(label: string): string {
    if (!label) return "";
    if (label === "Custom") return "Custom";
    return label.split(" ")[0];
  }

  function sizeOf(label: string): number {
    const normalized = String(label || '').trim();
    return SIZE_BP[normalized] || SIZE_BP[baseED(normalized)] || 0;
  }

  $: backboneSize = sizeOf(getVal('backbone'));
  $: gRNASize = gRNAs.reduce((s, g) => s + sizeOf(g.type), 0);
  $: promoterSize = sizeOf(getVal('promoter'));
  $: edSize = sizeOf(getVal('ed'));
  $: dcasSize = sizeOf(getVal('dcas'));
  $: markerSize = [...markersFluorescent, ...markersAntibiotic].reduce((s, x) => s + sizeOf(x), 0);
  $: terminatorSize = sizeOf(getVal('terminator'));
  $: totalSize = backboneSize + gRNASize + promoterSize + edSize + dcasSize + markerSize + terminatorSize;
  $: requiredComplete = !!getVal('backbone') && gRNAs.length > 0 && !!getVal('promoter') && !!getVal('ed') && !!getVal('dcas') && !!getVal('terminator');

  function getMainName(field: string): string {
    if (field === 'gRNA') return gRNAs.length ? [...new Set(gRNAs.map(g => g.type))].join(", ") : t("notSelected");
    if (field === 'markers') {
      const all = [...markersFluorescent, ...markersAntibiotic];
      return all.length ? all.join(", ") : t("notSelected");
    }
    if (field === 'ed') return getVal('ed') ? baseED(getVal('ed')) : t("notSelected");
    return getVal(field) || t("notSelected");
  }

  function allowedDcasOptions(): string[] {
    if (!ed) return ["dSpCas9", "dSaCas9", "Custom"];
    if (ed === "Custom") return ["dSpCas9", "Custom"];
    const edBase = baseED(getVal('ed'));
    if (["DNMT3A","TET1","VPR","KRAB"].includes(edBase)) return ["dSpCas9","dSaCas9","Custom"];
    return ["dSpCas9", "Custom"];
  }

  function reconcileDcasWithED() {
    const allowed = new Set(allowedDcasOptions());
    if (dcas && !allowed.has(dcas)) {
      dcas = null; dcasCustom = "";
      showToast(t("toastDcasReset"));
    }
  }

  // ── SVG ring ──
  function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
    const a = (angleDeg - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  }
  function arcPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
    const s = polarToCartesian(cx, cy, r, endAngle);
    const e = polarToCartesian(cx, cy, r, startAngle);
    const large = (endAngle - startAngle) <= 180 ? "0" : "1";
    return `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${large} 0 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
  }
  function clamp(val: number, min: number, max: number) { return Math.max(min, Math.min(max, val)); }

  const MODULE_KEYS = ["bb","gRNA","pro","ed","dcas","m","ter"] as const;

  $: segments = (() => {
    const sizes: Record<string, number> = {
      bb: backboneSize || 300, gRNA: gRNASize || 300,
      pro: promoterSize || 300, ed: edSize || 300,
      dcas: dcasSize || 300, m: markerSize || 300,
      ter: terminatorSize || 300
    };
    const total = MODULE_KEYS.reduce((s, k) => s + sizes[k], 0);
    let start = 0;
    const sizeGetter: Record<string, number> = { bb: backboneSize, gRNA: gRNASize, pro: promoterSize, ed: edSize, dcas: dcasSize, m: markerSize, ter: terminatorSize };
    const out: Record<string, {start: number; end: number; path: string; active: boolean}> = {};
    MODULE_KEYS.forEach(k => {
      const angle = sizes[k] / total * 360;
      const end = start + angle;
      out[k] = { start, end, path: arcPath(310, 310, 150, start, end), active: !!sizeGetter[k] };
      start = end;
    });
    return out;
  })();

  let hoveredSegment: string | null = null;

  // Ring label positioning (needs DOM measurements)
  let plasmidStage: HTMLDivElement;
  let ringLabelEls: Record<string, HTMLDivElement> = {};

  function layoutLabels() {
    if (!plasmidStage) return;
    const stageW = plasmidStage.clientWidth || 620;
    const stageH = plasmidStage.clientHeight || 650;
    const items: any[] = [];
    for (const k of MODULE_KEYS) {
      const el = ringLabelEls[k];
      if (!el) continue;
      const seg = segments[k];
      const midAngle = (seg.start + seg.end) / 2;
      const rad = (midAngle - 90) * Math.PI / 180;
      const px = 310 + 270 * Math.cos(rad);
      const py = 310 + 270 * Math.sin(rad);
      el.style.left = "0px"; el.style.top = "0px";
      const w = el.offsetWidth || 150;
      const h = el.offsetHeight || 46;
      items.push({ el, w, h, preferredX: clamp(px - w/2, 16, stageW - w - 16), preferredY: clamp(py - h/2, 24, stageH - h - 16), side: px >= 310 ? "right" : "left" });
    }
    const groups: Record<string, any[]> = { left: [], right: [] };
    items.forEach(it => groups[it.side].push(it));
    for (const side of ["left","right"]) {
      const g = groups[side].sort((a: any, b: any) => a.preferredY - b.preferredY);
      if (!g.length) continue;
      g.forEach((it: any) => { it.x = clamp(it.preferredX, 16, stageW - it.w - 16); it.y = it.preferredY; });
      g[0].y = clamp(g[0].y, 24, stageH - g[0].h - 16);
      for (let i = 1; i < g.length; i++) g[i].y = Math.max(g[i].y, g[i-1].y + g[i-1].h + 10);
      const overflow = g[g.length-1].y + g[g.length-1].h + 16 - stageH;
      if (overflow > 0) { for (let i = g.length-1; i >= 0; i--) g[i].y -= overflow; g[0].y = Math.max(g[0].y, 24); for (let i = 1; i < g.length; i++) g[i].y = Math.max(g[i].y, g[i-1].y + g[i-1].h + 10); }
      g.forEach((it: any) => {
        it.x = it.side === "right" ? clamp(Math.max(it.preferredX, 420), 16, stageW - it.w - 16) : clamp(Math.min(it.preferredX, 200 - it.w), 16, stageW - it.w - 16);
        it.y = clamp(it.y, 24, stageH - it.h - 16);
        it.el.style.left = `${it.x}px`; it.el.style.top = `${it.y}px`;
      });
    }
  }

  $: if (segments && plasmidStage) requestAnimationFrame(layoutLabels);

  // ── Modal ──
  const moduleModalMap: Record<string, ModalType> = { bb: 'backbone', gRNA: 'gRNA', pro: 'promoter', ed: 'ed', dcas: 'dcas', m: 'markers', ter: 'terminator' };

  function openModal(type: ModalType) {
    modalType = type;
    modalOpen = true;
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modalOpen = false;
    modalType = null;
    document.body.style.overflow = "";
  }

  function selectBackbone(val: string) { backbone = val; showToast(t("toastBackbone")); if (val !== "Custom") closeModal(); }

  function selectGRNAType(type: string) { gDraftType = type; }
  function addGRNA() {
    if (gDraftType !== "Custom" && !gDraftSeq.trim()) { showToast(t("toastNeedSeq")); return; }
    if (gDraftType === "Custom" && !gDraftTarget.trim()) { showToast(t("toastNeedTarget")); return; }
    gRNAs = [...gRNAs, { type: gDraftType, name: gDraftName.trim(), sequence: gDraftSeq.trim(), target: gDraftTarget.trim() }];
    showToast(t("toastGRNAAdded"));
    gDraftName = ""; gDraftSeq = ""; gDraftTarget = "";
  }
  function removeGRNA(i: number) { gRNAs = gRNAs.filter((_, idx) => idx !== i); }

  function selectPromoter(val: string) { promoter = val; showToast(t("toastPromoter")); if (val !== "Custom") closeModal(); }

  function parseEDOption(option: string) {
    if (option === "Custom") return { title: option, desc: "", value: option };
    const match = option.match(/^([^()]+?)\s*\((.+)\)$/);
    if (!match) return { title: option, desc: "", value: option };
    return { title: match[1].trim(), desc: `(${match[2].trim()})`, value: option };
  }
  function selectED(val: string) { ed = val; reconcileDcasWithED(); showToast(t("toastED")); if (val !== "Custom") closeModal(); }
  function selectDcas(val: string) { dcas = val; showToast(t("toastDcas")); if (val !== "Custom") closeModal(); }

  function toggleMarker(group: 'fluorescent' | 'antibiotic', name: string) {
    if (group === 'fluorescent') {
      markersFluorescent = markersFluorescent.includes(name) ? markersFluorescent.filter(m => m !== name) : [...markersFluorescent, name];
    } else {
      markersAntibiotic = markersAntibiotic.includes(name) ? markersAntibiotic.filter(m => m !== name) : [...markersAntibiotic, name];
    }
  }

  function selectTerminator(val: string) { terminator = val; showToast(t("toastTer")); if (val !== "Custom") closeModal(); }

  function addToCart() {
    if (!requiredComplete) { showToast(t("toastNeedAll")); return; }
    cart = [{
      backbone: getVal('backbone'), backboneSizeBp: backboneSize,
      gRNAs: gRNAs.map(g => ({ ...g })), gRNAsSizeBp: gRNASize,
      promoter: getVal('promoter'), promoterSizeBp: promoterSize,
      ed: baseED(getVal('ed')), edSizeBp: edSize,
      dcas: getVal('dcas'), dcasSizeBp: dcasSize,
      markersFluorescent: [...markersFluorescent], markersAntibiotic: [...markersAntibiotic], markersSizeBp: markerSize,
      terminator: getVal('terminator'), terminatorSizeBp: terminatorSize,
      totalSizeBp: totalSize
    }, ...cart];
    showToast(t("toastCart"));
  }

  function resetAll() {
    backbone = null; backboneCustom = ""; gRNAs = [];
    promoter = null; promoterCustom = "";
    ed = null; edCustom = "";
    dcas = null; dcasCustom = "";
    markersFluorescent = []; markersAntibiotic = [];
    terminator = null; terminatorCustom = "";
    gDraftType = "SpCas9-gRNA"; gDraftName = ""; gDraftSeq = ""; gDraftTarget = "";
    showToast(t("toastReset"));
  }

  async function submitOrder() {
    if (!cart.length || isSubmitting) return;
    isSubmitting = true;
    try {
      const fn = httpsCallable(functions, 'submitPlasmidOrder');
      const res = await fn({ configurations: cart, notes: notes.trim(), language: $language });
      const orderId = (res.data as any)?.orderId as string;
      showToast(`${t("orderSubmitted")} ${orderId}`);
      cart = []; notes = "";
    } catch (e: any) {
      console.error(e);
      showToast(e.message || "Error");
    } finally {
      isSubmitting = false;
    }
  }

  // ── Module button data ──
  const MODULE_BG: Record<string, string> = {
    bb: 'background: linear-gradient(180deg, rgba(53,80,112,.38), rgba(53,80,112,.20)); border-color: rgba(53,80,112,.74);',
    gRNA: 'background: linear-gradient(180deg, rgba(58,134,255,.38), rgba(58,134,255,.20)); border-color: rgba(58,134,255,.74);',
    pro: 'background: linear-gradient(180deg, rgba(47,191,113,.38), rgba(47,191,113,.20)); border-color: rgba(47,191,113,.74);',
    ed: 'background: linear-gradient(180deg, rgba(255,140,66,.38), rgba(255,140,66,.20)); border-color: rgba(255,140,66,.74);',
    dcas: 'background: linear-gradient(180deg, rgba(155,93,229,.38), rgba(155,93,229,.20)); border-color: rgba(155,93,229,.74);',
    m: 'background: linear-gradient(180deg, rgba(230,57,70,.34), rgba(230,57,70,.18)); border-color: rgba(230,57,70,.74);',
    ter: 'background: linear-gradient(180deg, rgba(0,184,148,.38), rgba(0,184,148,.20)); border-color: rgba(0,184,148,.74);',
  };
  const RING_LABEL_BG: Record<string, string> = {
    bb: 'background: linear-gradient(180deg, rgba(53,80,112,.44), rgba(53,80,112,.24)); border-color: rgba(53,80,112,.76);',
    gRNA: 'background: linear-gradient(180deg, rgba(58,134,255,.44), rgba(58,134,255,.24)); border-color: rgba(58,134,255,.76);',
    pro: 'background: linear-gradient(180deg, rgba(47,191,113,.44), rgba(47,191,113,.24)); border-color: rgba(47,191,113,.76);',
    ed: 'background: linear-gradient(180deg, rgba(255,140,66,.44), rgba(255,140,66,.24)); border-color: rgba(255,140,66,.76);',
    dcas: 'background: linear-gradient(180deg, rgba(155,93,229,.44), rgba(155,93,229,.24)); border-color: rgba(155,93,229,.76);',
    m: 'background: linear-gradient(180deg, rgba(230,57,70,.40), rgba(230,57,70,.22)); border-color: rgba(230,57,70,.76);',
    ter: 'background: linear-gradient(180deg, rgba(0,184,148,.44), rgba(0,184,148,.24)); border-color: rgba(0,184,148,.76);',
  };
  const STROKE_COLORS: Record<string, string> = { bb: '#355070', gRNA: '#3a86ff', pro: '#2fbf71', ed: '#ff8c42', dcas: '#9b5de5', m: '#e63946', ter: '#00b894' };

  $: moduleBtns = [
    { key: 'bb', abbr: 'B', tag: t('moduleBackbone'), subKey: 'moduleBackboneSub', valFn: () => backbone ? `${getVal('backbone')} · ${backboneSize} ${t('bp')}` : t('notSelected') },
    { key: 'gRNA', abbr: 'gRNAs', tag: 'B → A', subKey: 'moduleGrnaSub', valFn: () => gRNAs.length ? `${getMainName('gRNA')} · ${gRNASize} ${t('bp')}` : t('noGRNA') },
    { key: 'pro', abbr: 'Pro', tag: 'A → I', subKey: 'moduleProSub', valFn: () => promoter ? `${getVal('promoter')} · ${promoterSize} ${t('bp')}` : t('notSelected') },
    { key: 'ed', abbr: 'ED', tag: 'I → II', subKey: 'moduleEdSub', valFn: () => ed ? `${getMainName('ed')} · ${edSize} ${t('bp')}` : t('notSelected') },
    { key: 'dcas', abbr: 'dCas9', tag: 'II → III', subKey: 'moduleDcasSub', valFn: () => dcas ? `${getVal('dcas')} · ${dcasSize} ${t('bp')}` : t('notSelected') },
    { key: 'm', abbr: 'M', tag: 'III → IV', subKey: 'moduleMSub', valFn: () => markerSize ? `${getMainName('markers')} · ${markerSize} ${t('bp')}` : t('optional') },
    { key: 'ter', abbr: 'Ter', tag: 'IV → Z', subKey: 'moduleTerSub', valFn: () => terminator ? `${getVal('terminator')} · ${terminatorSize} ${t('bp')}` : t('notSelected') },
  ];

  $: backboneOptions = [
    { name: t("standardBackbone"), desc: t("bbDesc1") },
    { name: t("lentiviralBackbone"), desc: t("bbDesc2") },
    { name: t("piggyBackbone"), desc: t("bbDesc3") },
    { name: t("sleepingBackbone"), desc: t("bbDesc4") },
    { name: t("secondaryPuro"), desc: t("bbDesc5") },
    { name: t("secondaryMClover"), desc: t("bbDesc6") },
    { name: "Custom", desc: "" },
  ];

  $: promoterGroups = [
    { title: t("strongPromoters"), items: ["CbH","SV40","EF1a"] },
    { title: t("weakPromoters"), items: ["EFS"] },
    { title: "Custom", items: ["Custom"] },
  ];

  $: edGroups = [
    { title: t("dnaMeth"), items: ["DNMT3A","TET1"] },
    { title: t("directGene"), items: ["VPR (direct gene activation)","KRAB (direct gene repression)"] },
    { title: t("acetylation"), items: ["p300 (histone acetylation)","HDAC3 (histone deacetylation)"] },
    { title: t("h3k4"), items: ["LSD1 (H3K4me1/2 demethylation)","KDM5A (H3K4me2/3 demethylation)","RIOX1 (H3K4me1/2/3 demethylation)","PRDM9 (introduction of H3K4me3)"] },
    { title: t("h3k9"), items: ["G9a (introduction of H3K9me2)","G9a-me3 (introduction of H3K9me3)"] },
    { title: "Custom", items: ["Custom"] },
  ];

  $: summaryItems = [
    { label: t('sumKb'), value: backbone ? `${getVal('backbone')} · ${backboneSize} ${t('bp')}` : '—' },
    { label: t('sumKg'), value: gRNAs.length ? gRNAs.map((g, i) => `${i+1}. ${g.type}${g.name ? ` — ${g.name}` : ''}${g.sequence ? ` — ${g.sequence}` : ''}${g.target ? ` — ${g.target}` : ''}`).join(' | ') + ` · ${gRNASize} ${t('bp')}` : '—' },
    { label: t('sumKp'), value: promoter ? `${getVal('promoter')} · ${promoterSize} ${t('bp')}` : '—' },
    { label: t('sumKe'), value: ed ? `${getMainName('ed')} · ${edSize} ${t('bp')}` : '—' },
    { label: t('sumKd'), value: dcas ? `${getVal('dcas')} · ${dcasSize} ${t('bp')}` : '—' },
    { label: t('sumKm'), value: markerSize ? `${getMainName('markers')} · ${markerSize} ${t('bp')}` : '—' },
    { label: t('sumKt'), value: terminator ? `${getVal('terminator')} · ${terminatorSize} ${t('bp')}` : '—' },
    { label: t('sumKtotal'), value: `${totalSize} ${t('bp')}` },
  ];

  const legendItems = [
    { key: 'bb', colorClass: 'bg-[#355070]', labelKey: 'legBb' },
    { key: 'gRNA', colorClass: 'bg-[#3a86ff]', labelKey: 'legGrna' },
    { key: 'pro', colorClass: 'bg-[#2fbf71]', labelKey: 'legPro' },
    { key: 'ed', colorClass: 'bg-[#ff8c42]', labelKey: 'legEd' },
    { key: 'dcas', colorClass: 'bg-[#9b5de5]', labelKey: 'legDcas' },
    { key: 'm', colorClass: 'bg-[#e63946]', labelKey: 'legM' },
    { key: 'ter', colorClass: 'bg-[#00b894]', labelKey: 'legTer' },
  ];

  function ringLabelTitle(k: string): string {
    const map: Record<string, string> = { bb: 'backbone', gRNA: 'gRNA', pro: 'promoter', ed: 'ed', dcas: 'dcas', m: 'markers', ter: 'terminator' };
    return getMainName(map[k]);
  }
  function ringLabelSize(k: string): number {
    const map: Record<string, number> = { bb: backboneSize, gRNA: gRNASize, pro: promoterSize, ed: edSize, dcas: dcasSize, m: markerSize, ter: terminatorSize };
    return map[k] ?? 0;
  }

  onMount(() => {
    const unsub = authenticated.subscribe((val) => {
      if (val === null) return;          // still loading
      try { unsub(); } catch {}
      if (!val) {
        const forward = window.location.pathname + window.location.search + window.location.hash;
        goto('/sign-in?forward=' + encodeURIComponent(forward));
        return;
      }
      ready = true;
    });
  });
</script>

{#if !ready}
  <div class="pt-36 flex items-center justify-center min-h-[60vh] text-[#032130]">
    <p>Loading...</p>
  </div>
{:else}
  <div class="pt-36 max-w-[1280px] mx-auto px-4 mlg:pt-32">
    <!-- Hero -->
    <div class="[display:grid] grid-cols-[1.2fr_.8fr] gap-4 mb-4 mlg:grid-cols-1">
      <div class="rounded-lg p-5 bg-[#032130] text-white">
        <h1 class="text-[1.75rem] font-bold leading-tight tracking-tight">{t('heroTitle')}</h1>
        <p class="mt-2 text-white/70 text-sm leading-relaxed">{t('heroText')}</p>
      </div>
      <div class="rounded-lg p-5 bg-[#032130] text-white">
        <h2 class="text-base font-bold mb-1">{t('rulesTitle')}</h2>
        <p class="text-white/60 text-[.8125rem] leading-relaxed">{@html t('rulesText')}</p>
        <a href="/my-account/plasmid-orders" class="mt-4 flex items-center justify-between gap-3 rounded-md border border-white/15 bg-white/10 px-3 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/15">
          <span>{t('ordersLinkCta')}</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <!-- Builder -->
    <div id="builder" class="scroll-mt-28 [display:grid] grid-cols-[1.18fr_.82fr] gap-4 items-start pb-8 mlg:grid-cols-1">
      <!-- Left column -->
      <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h2 class="text-base font-bold text-[#032130] mb-1">{t('buildTitle')}</h2>
        <p class="text-gray-500 text-[.8125rem]">{t('buildText')}</p>

        <div class="[display:grid] grid-cols-4 gap-2.5 mt-3 mlg:grid-cols-2 sm:grid-cols-1">
          {#each moduleBtns as mod}
            <button
              type="button"
              class="flex flex-col gap-2 p-3 rounded-lg border cursor-pointer min-h-[6.5rem] text-left text-white transition-all hover:brightness-105 active:scale-[.99]"
              style={MODULE_BG[mod.key]}
              on:click={() => openModal(moduleModalMap[mod.key])}
            >
              <div class="flex justify-between items-center gap-2.5">
                <span class="font-black">{mod.abbr}</span>
                <span class="text-xs px-2 py-1.5 rounded-full border border-white/20 bg-black/10">{mod.tag}</span>
              </div>
              <div class="text-xs text-white/80 leading-snug min-h-[1.875rem]">{t(mod.subKey)}</div>
              <div class="text-[.8125rem] text-white/80 overflow-hidden whitespace-nowrap text-ellipsis">{mod.valFn()}</div>
            </button>
          {/each}
        </div>

        <!-- Plasmid map -->
        <div id="plasmid" class="scroll-mt-28 mt-2.5">
          <div class="relative rounded-xl border border-gray-800/10 bg-[#0b1220] p-3.5 min-h-[740px] overflow-hidden md:min-h-[760px]">
            <div class="flex justify-between items-center gap-2.5 mb-2.5 text-white/90">
              <div class="font-black">{t('plasmidMapTitle')}</div>
              <div class="text-white/60 text-[.8125rem]">{t('plasmidMapText')}</div>
            </div>
            <div class="relative w-full min-h-[650px] md:min-h-[660px]" bind:this={plasmidStage}>
              {#each MODULE_KEYS as k}
                <div
                  bind:this={ringLabelEls[k]}
                  class="absolute p-2.5 rounded-lg text-white text-xs font-bold cursor-pointer max-w-[10.625rem] border shadow-lg select-none transition-all hover:scale-105 hover:brightness-110 md:max-w-[8.75rem] md:text-[.6875rem]"
                  style={RING_LABEL_BG[k]}
                  role="button"
                  tabindex="0"
                  on:click={() => openModal(moduleModalMap[k])}
                  on:mouseenter={() => hoveredSegment = k}
                  on:mouseleave={() => hoveredSegment = null}
                  on:keydown={e => e.key === 'Enter' && openModal(moduleModalMap[k])}
                >
                  {ringLabelTitle(k)}
                  <span class="block text-[.6875rem] font-semibold opacity-90 mt-0.5">{t('size')}: {ringLabelSize(k)} {t('bp')}</span>
                </div>
              {/each}

              <svg class="w-full h-auto block" viewBox="0 0 620 620" role="img" aria-label="Plasmid map">
                <rect x="10" y="10" width="600" height="600" rx="22" fill="rgba(255,255,255,.02)" stroke="rgba(255,255,255,.08)"/>
                <circle cx="310" cy="310" r="150" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="20"/>
                {#each MODULE_KEYS as k}
                  <path
                    d={segments[k].path} fill="none" stroke={STROKE_COLORS[k]}
                    stroke-width={hoveredSegment === k ? 28 : 20} stroke-linecap="round"
                    opacity={segments[k].active ? 1 : 0.25}
                    style={hoveredSegment === k ? 'filter: brightness(1.25);' : ''}
                  />
                {/each}
                <circle cx="310" cy="310" r="98" fill="rgba(15,26,51,.84)" stroke="rgba(255,255,255,.10)"/>
                <text x="310" y="300" text-anchor="middle" font-size="18" fill="rgba(255,255,255,.94)" font-weight="800">Expression plasmid</text>
                <text x="310" y="326" text-anchor="middle" font-size="14" fill="rgba(255,255,255,.82)" font-weight="700">{totalSize} {t('bp')}</text>
                <g opacity="0">
                  {#each MODULE_KEYS as k}
                    <path
                      d={segments[k].path} fill="none" stroke="#fff" stroke-width="34" stroke-linecap="round"
                      style="cursor:pointer"
                      on:click={() => openModal(moduleModalMap[k])}
                      on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(moduleModalMap[k])}
                      role="button" tabindex="-1"
                    />
                  {/each}
                </g>
              </svg>
            </div>
            <div class="flex gap-2.5 flex-wrap mt-3.5">
              {#each legendItems as leg}
                <div class="flex items-center gap-2 text-xs text-white/75 px-2 py-1.5 rounded-full border border-white/10 bg-white/5">
                  <span class="w-2.5 h-2.5 rounded-sm {leg.colorClass}"></span>
                  <span>{t(leg.labelKey)}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <!-- Right column -->
      <div class="flex flex-col gap-3 sticky top-24 mlg:relative mlg:top-auto">
        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h2 class="text-base font-bold text-[#032130] mb-1">{t('configTitle')}</h2>
          <p class="text-gray-500 text-[.8125rem]">{t('configText')}</p>
          <div class="[display:grid] gap-2.5 mt-2.5">
            {#each summaryItems as item}
              <div class="border border-gray-100 bg-gray-50 rounded-md p-3">
                <div class="text-xs text-gray-500">{item.label}</div>
                <div class="text-[.8125rem] mt-1 text-gray-800">{item.value}</div>
              </div>
            {/each}
          </div>
          <div class="mt-3 [display:grid] gap-2.5">
            <button type="button" class="w-full py-3 px-3.5 rounded bg-[#0A415C] text-white font-bold hover:bg-[#063044] disabled:opacity-45 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors" disabled={!requiredComplete} on:click={addToCart}>{t('addToCart')}</button>
            <button type="button" class="w-full py-3 px-3.5 rounded border border-gray-300 text-gray-700 font-bold bg-transparent hover:bg-gray-100 transition-colors" on:click={resetAll}>{t('reset')}</button>
          </div>
        </div>

        <div id="cart" class="scroll-mt-28 bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="mb-4 rounded-md border border-[#0A415C]/15 bg-[#0A415C]/5 p-3">
            <h2 class="text-base font-bold text-[#032130] mb-1">{t('ordersLinkTitle')}</h2>
            <p class="text-gray-500 text-[.8125rem] leading-relaxed mb-3">{t('ordersLinkText')}</p>
            <a href="/my-account/plasmid-orders" class="inline-flex items-center justify-center rounded bg-[#0A415C] px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-[#063044]">
              {t('ordersLinkCta')}
            </a>
          </div>
          <h2 class="text-base font-bold text-[#032130] mb-1">{t('cartTitle')}</h2>
          <p class="text-gray-500 text-[.8125rem]">{t('cartText')}</p>
          <div class="mt-2.5 [display:grid] gap-2.5">
            {#if !cart.length}
              <p class="text-gray-500 text-[.8125rem] mt-2">{t('cartEmpty')}</p>
            {:else}
              {#each cart as c, idx}
                <div class="border border-gray-100 rounded-md p-3 bg-gray-50">
                  <div class="text-[.8125rem] font-black text-gray-800">{t('configNum')} #{cart.length - idx}</div>
                  <div class="mt-1.5 text-xs text-gray-600 leading-relaxed">
                    <b>B</b>: {c.backbone} · {c.backboneSizeBp} bp<br>
                    <b>gRNAs</b>: {c.gRNAs.length} · {c.gRNAsSizeBp} bp<br>
                    <b>Pro</b>: {c.promoter} · {c.promoterSizeBp} bp<br>
                    <b>ED</b>: {c.ed} · {c.edSizeBp} bp<br>
                    <b>dCas9</b>: {c.dcas} · {c.dcasSizeBp} bp<br>
                    <b>M</b>: {[...c.markersFluorescent, ...c.markersAntibiotic].join(', ') || '—'} · {c.markersSizeBp} bp<br>
                    <b>Ter</b>: {c.terminator} · {c.terminatorSizeBp} bp<br>
                    <b>{t('totalSize')}</b>: {c.totalSizeBp} {t('bp')}
                  </div>
                </div>
              {/each}
            {/if}
          </div>
          <div class="mt-3">
            <label class="block text-gray-500 text-[.8125rem] mb-1.5" for="notesInput">{t('notes')}</label>
            <textarea id="notesInput" bind:value={notes} class="w-full resize-y rounded border border-gray-200 bg-gray-50 p-2.5 text-[.8125rem] text-gray-800 outline-none focus:border-[#0A415C]" rows="3" placeholder={t('notesPlaceholder')}></textarea>
          </div>
          <div class="mt-3">
            <button type="button" class="w-full py-3 px-3.5 rounded bg-[#0A415C] text-white font-bold hover:bg-[#063044] disabled:opacity-45 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors" disabled={!cart.length || isSubmitting} on:click={submitOrder}>{isSubmitting ? t('submitting') : t('submitOrder')}</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  {#if modalOpen}
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" on:click|self={closeModal} on:keydown={(e) => e.key === 'Escape' && closeModal()} role="presentation">
      <div class="w-full max-w-[920px] rounded-lg border border-gray-700 bg-[#032130] shadow-2xl overflow-hidden text-white" role="dialog" aria-modal="true">
        <div class="flex items-center justify-between p-4 pb-3 border-b border-white/10">
          <h3 class="text-[.9375rem] font-bold">
            {#if modalType === 'backbone'}{t('modalBackbone')}
            {:else if modalType === 'gRNA'}{t('configureGRNA')}
            {:else if modalType === 'promoter'}{t('promoterTitle')}
            {:else if modalType === 'ed'}{t('effectorTitle')}
            {:else if modalType === 'dcas'}{t('dcasTitle')}
            {:else if modalType === 'markers'}{t('markersTitle')}
            {:else if modalType === 'terminator'}{t('terminatorTitle')}
            {/if}
          </h3>
          <button type="button" class="w-9 h-9 rounded border border-white/15 bg-white/5 text-white text-lg cursor-pointer hover:bg-white/10" on:click={closeModal}>×</button>
        </div>
        <div class="p-4 max-h-[70vh] overflow-y-auto">

          {#if modalType === 'backbone'}
            <div class="[display:grid] grid-cols-2 gap-2.5 sm:grid-cols-1">
              {#each backboneOptions as opt}
                <button type="button" class="p-3 rounded-md border text-left transition-all hover:bg-white/10 {backbone === opt.name ? 'bg-white/[.12] border-white/40' : 'border-white/15 bg-white/5'}" on:click={() => selectBackbone(opt.name)}>
                  <div class="font-black text-[.8125rem]">{opt.name}</div>
                  {#if opt.desc}<div class="mt-1.5 text-xs text-white/75 leading-snug">{opt.desc}</div>{/if}
                </button>
              {/each}
            </div>
            {#if backbone === 'Custom'}
              <div class="mt-3"><input class="w-full p-2.5 rounded border border-white/15 bg-white/5 text-white text-[.8125rem] outline-none" placeholder={t('modalBackboneCustom')} bind:value={backboneCustom} /></div>
            {/if}
            <p class="mt-2.5 text-xs text-white/75">{t('modalBackboneNote')}</p>

          {:else if modalType === 'gRNA'}
            <p class="text-white/60 text-[.8125rem] mb-3">{t('gRNAIntro')}</p>
            <div class="text-xs uppercase tracking-widest text-white/75 mb-2">{t('gRNAType')}</div>
            <div class="[display:grid] grid-cols-2 gap-2.5 sm:grid-cols-1">
              {#each ["SaCas9-gRNA", "SpCas9-gRNA", "Custom"] as gType}
                <button type="button" class="p-3 rounded-md border text-left transition-all hover:bg-white/10 {gDraftType === gType ? 'bg-white/[.12] border-white/40' : 'border-white/15 bg-white/5'}" on:click={() => selectGRNAType(gType)}>
                  <div class="font-black text-[.8125rem]">{gType}</div>
                  <div class="mt-1.5 text-xs text-white/75">{gType === 'SaCas9-gRNA' ? t('saDesc') : gType === 'SpCas9-gRNA' ? t('spDesc') : t('customDesc')}</div>
                </button>
              {/each}
            </div>
            <div class="text-xs uppercase tracking-widest text-white/75 mt-3.5 mb-2">{t('gRNADetails')}</div>
            <div class="flex gap-2.5 flex-wrap">
              <input class="flex-1 min-w-[220px] p-2.5 rounded border border-white/15 bg-white/5 text-white text-[.8125rem] outline-none" placeholder={t('gRNAName')} bind:value={gDraftName} />
              <input class="flex-1 min-w-[220px] p-2.5 rounded border border-white/15 bg-white/5 text-white text-[.8125rem] outline-none" placeholder={t('gRNASeq')} bind:value={gDraftSeq} />
            </div>
            {#if gDraftType === 'Custom'}
              <div class="mt-3"><input class="w-full p-2.5 rounded border border-white/15 bg-white/5 text-white text-[.8125rem] outline-none" placeholder={t('gRNATarget')} bind:value={gDraftTarget} /></div>
            {/if}
            <div class="flex gap-2.5 mt-3">
              <button type="button" class="px-2.5 py-2 rounded border border-white/15 bg-white/5 text-white text-xs hover:bg-white/10" on:click={() => { gDraftName=''; gDraftSeq=''; gDraftTarget=''; }}>{t('clearFields')}</button>
              <button type="button" class="px-2.5 py-2 rounded border border-white/15 bg-white/5 text-white text-xs hover:bg-white/10" on:click={addGRNA}>{t('addGRNA')}</button>
            </div>
            <div class="text-xs uppercase tracking-widest text-white/75 mt-3.5 mb-2">{t('existingGRNAs')}</div>
            {#if !gRNAs.length}
              <p class="text-xs text-white/75">{t('noGRNAsAdded')}</p>
            {:else}
              <div class="border border-white/10 rounded-md overflow-hidden">
                {#each gRNAs as g, i}
                  <div class="flex items-center justify-between gap-2.5 px-3 py-2.5 bg-white/[.02] {i > 0 ? 'border-t border-white/10' : ''}">
                    <div class="min-w-0">
                      <div class="text-[.8125rem] font-black whitespace-nowrap overflow-hidden text-ellipsis">{g.type} <span class="opacity-75">#{i+1}</span></div>
                      <div class="text-xs text-white/75 whitespace-nowrap overflow-hidden text-ellipsis">
                        {#if g.name}<b>{g.name}</b>{/if}
                        {#if g.sequence} · {g.sequence}{/if}
                        {#if g.target} · {t('target')}: {g.target}{/if}
                      </div>
                    </div>
                    <button type="button" class="shrink-0 px-2.5 py-2 rounded border border-white/15 bg-white/5 text-white text-xs hover:bg-white/10" on:click={() => removeGRNA(i)}>{t('remove')}</button>
                  </div>
                {/each}
              </div>
            {/if}
            <div class="flex justify-end mt-3">
              <button type="button" class="px-2.5 py-2 rounded border border-white/15 bg-white/5 text-white text-xs hover:bg-white/10" on:click={() => { closeModal(); showToast(t('toastGRNAUpdated')); }}>{t('done')}</button>
            </div>

          {:else if modalType === 'promoter'}
            {#each promoterGroups as group}
              <div class="text-xs uppercase tracking-widest text-white/75 mt-3.5 first:mt-0 mb-2">{group.title}</div>
              <div class="[display:grid] grid-cols-2 gap-2.5 sm:grid-cols-1">
                {#each group.items as val}
                  <button type="button" class="p-3 rounded-md border text-left transition-all hover:bg-white/10 {promoter === val ? 'bg-white/[.12] border-white/40' : 'border-white/15 bg-white/5'}" on:click={() => selectPromoter(val)}>
                    <div class="font-black text-[.8125rem]">{val}</div>
                  </button>
                {/each}
              </div>
            {/each}
            {#if promoter === 'Custom'}
              <div class="mt-3"><input class="w-full p-2.5 rounded border border-white/15 bg-white/5 text-white text-[.8125rem] outline-none" placeholder={t('promoterCustom')} bind:value={promoterCustom} /></div>
            {/if}

          {:else if modalType === 'ed'}
            {#each edGroups as group}
              <div class="text-xs uppercase tracking-widest text-white/75 mt-3.5 first:mt-0 mb-2">{group.title}</div>
              <div class="[display:grid] grid-cols-2 gap-2.5 sm:grid-cols-1">
                {#each group.items as val}
                  {@const parsed = parseEDOption(val)}
                  <button type="button" class="p-3 rounded-md border text-left transition-all hover:bg-white/10 {ed === parsed.value ? 'bg-white/[.12] border-white/40' : 'border-white/15 bg-white/5'}" on:click={() => selectED(parsed.value)}>
                    <div class="font-black text-[.8125rem]">{parsed.title}</div>
                    {#if parsed.desc}<div class="mt-1.5 text-xs text-white/75">{parsed.desc}</div>{/if}
                  </button>
                {/each}
              </div>
            {/each}
            {#if ed === 'Custom'}
              <div class="mt-3"><input class="w-full p-2.5 rounded border border-white/15 bg-white/5 text-white text-[.8125rem] outline-none" placeholder={t('edCustom')} bind:value={edCustom} /></div>
            {/if}
            <p class="mt-2.5 text-xs text-white/75">{t('edNote')}</p>

          {:else if modalType === 'dcas'}
            <div class="[display:grid] grid-cols-2 gap-2.5 sm:grid-cols-1">
              {#each allowedDcasOptions() as val}
                <button type="button" class="p-3 rounded-md border text-left transition-all hover:bg-white/10 {dcas === val ? 'bg-white/[.12] border-white/40' : 'border-white/15 bg-white/5'}" on:click={() => selectDcas(val)}>
                  <div class="font-black text-[.8125rem]">{val}</div>
                  {#if val === 'dSpCas9'}<div class="mt-1.5 text-xs text-white/75">{t('dSpCas9Desc')}</div>{/if}
                  {#if val === 'dSaCas9'}<div class="mt-1.5 text-xs text-white/75">{t('dSaCas9Desc')}</div>{/if}
                </button>
              {/each}
            </div>
            {#if dcas === 'Custom'}
              <div class="mt-3"><input class="w-full p-2.5 rounded border border-white/15 bg-white/5 text-white text-[.8125rem] outline-none" placeholder={t('dcasCustom')} bind:value={dcasCustom} /></div>
            {/if}

          {:else if modalType === 'markers'}
            <p class="text-white/60 text-[.8125rem] mb-3">{t('markersIntro')}</p>
            <div class="text-xs uppercase tracking-widest text-white/75 mb-2">{t('fluorTitle')}</div>
            <div class="[display:grid] grid-cols-2 gap-2.5 sm:grid-cols-1">
              {#each ["mRuby3","mClover3","mCerulean3"] as name}
                <label class="flex gap-2.5 items-start p-3 rounded-md border cursor-pointer transition-all hover:bg-white/10 {markersFluorescent.includes(name) ? 'bg-white/[.12] border-white/40' : 'border-white/15 bg-white/5'}">
                  <input type="checkbox" checked={markersFluorescent.includes(name)} on:change={() => toggleMarker('fluorescent', name)} class="mt-0.5 scale-110" />
                  <div>
                    <div class="font-black text-[.8125rem]">{name}</div>
                    <div class="text-xs text-white/75 mt-1">{t('fluorTitle')}</div>
                  </div>
                </label>
              {/each}
            </div>
            <div class="text-xs uppercase tracking-widest text-white/75 mt-3.5 mb-2">{t('abxTitle')}</div>
            <div class="[display:grid] grid-cols-2 gap-2.5 sm:grid-cols-1">
              {#each ["Puromycin resistance","Hygromycin resistance","Blasticidin resistance"] as name}
                <label class="flex gap-2.5 items-start p-3 rounded-md border cursor-pointer transition-all hover:bg-white/10 {markersAntibiotic.includes(name) ? 'bg-white/[.12] border-white/40' : 'border-white/15 bg-white/5'}">
                  <input type="checkbox" checked={markersAntibiotic.includes(name)} on:change={() => toggleMarker('antibiotic', name)} class="mt-0.5 scale-110" />
                  <div>
                    <div class="font-black text-[.8125rem]">{name}</div>
                    <div class="text-xs text-white/75 mt-1">{t('abxTitle')}</div>
                  </div>
                </label>
              {/each}
            </div>
            <div class="flex justify-end gap-2.5 mt-3">
              <button type="button" class="px-2.5 py-2 rounded border border-white/15 bg-white/5 text-white text-xs hover:bg-white/10" on:click={() => { markersFluorescent=[]; markersAntibiotic=[]; closeModal(); showToast(t('toastMarkersCleared')); }}>{t('clear')}</button>
              <button type="button" class="px-2.5 py-2 rounded border border-white/15 bg-white/5 text-white text-xs hover:bg-white/10" on:click={() => { closeModal(); showToast(t('toastMarkersUpdated')); }}>{t('done')}</button>
            </div>

          {:else if modalType === 'terminator'}
            <div class="[display:grid] grid-cols-2 gap-2.5 sm:grid-cols-1">
              {#each [t('bghTerm'), t('sv40Term'), 'Custom'] as val}
                <button type="button" class="p-3 rounded-md border text-left transition-all hover:bg-white/10 {terminator === val ? 'bg-white/[.12] border-white/40' : 'border-white/15 bg-white/5'}" on:click={() => selectTerminator(val)}>
                  <div class="font-black text-[.8125rem]">{val}</div>
                </button>
              {/each}
            </div>
            {#if terminator === 'Custom'}
              <div class="mt-3"><input class="w-full p-2.5 rounded border border-white/15 bg-white/5 text-white text-[.8125rem] outline-none" placeholder={t('customTer')} bind:value={terminatorCustom} /></div>
            {/if}
          {/if}
        </div>
      </div>
    </div>
  {/if}

  <!-- Toast -->
  {#if toastMsg}
    <div class="fixed left-1/2 bottom-5 -translate-x-1/2 bg-[#032130] border border-white/15 px-3.5 py-2.5 rounded-md shadow-2xl text-white text-[.8125rem] z-[60]">
      {toastMsg}
    </div>
  {/if}
{/if}
