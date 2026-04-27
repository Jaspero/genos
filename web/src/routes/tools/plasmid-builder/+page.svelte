<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';
  import { authenticated, functions } from '$lib/utils/firebase';
  import { httpsCallable } from 'firebase/functions';
  import { language } from '$lib/stores/language';

  let ready = false;
  let container: HTMLDivElement;
  let langUnsub: (() => void) | null = null;

  // This callback will be set by initBuilder so we can push language changes into it
  let onLangChange: ((lang: string) => void) | null = null;

  onMount(async () => {
    const authUser: any = await new Promise((resolve) => {
      const unsub = authenticated.subscribe((data) => {
        if (data === null) return;
        try { unsub(); } catch {}
        resolve(data);
      });
    });

    if (!authUser) {
      goto('/sign-in?forward=' + encodeURIComponent('/tools/plasmid-builder'));
      return;
    }

    ready = true;

    // Wait for DOM to render the template
    await new Promise(r => setTimeout(r, 0));

    onLangChange = initBuilder(container, $language, async (cartData: any[], notes: string, lang: string) => {
      const fn = httpsCallable(functions, 'submitPlasmidOrder');
      const res = await fn({ configurations: cartData, notes, language: lang });
      return (res.data as any)?.orderId as string;
    });

    // Subscribe to the site-wide language store and push changes into the builder
    langUnsub = language.subscribe((lang) => {
      if (onLangChange) onLangChange(lang);
    });
  });

  onDestroy(() => {
    langUnsub?.();
  });

  function scrollTo(id: string) {
    const el = container?.querySelector('#' + id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function initBuilder(
    root: HTMLElement,
    initialLang: string,
    submitFn: (cart: any[], notes: string, lang: string) => Promise<string>
  ): (lang: string) => void {
    // All the builder logic runs in vanilla JS against the rendered DOM inside root.
    // This is a direct port of the preview HTML demo.

    let currentLang = initialLang || "en";

    const I18N: Record<string, Record<string, string>> = {
      en: {
        brandTitle: "Genos · Plasmid Builder",
        navBuilder: "Builder",
        navMap: "Plasmid map",
        navCart: "Cart",
        heroTitle: "Design your own expression plasmid",
        heroText: "Choose number of gRNAs (gRNAs), eukaryotic promoter type (Pro), effector domain (ED), selection markers - fluorescence markers or antibiotic resistance markers (M), transcriptional terminators (Ter) and backbone type (B).",
        rulesTitle: "Quick rules",
        rulesText: "• dSpCas9 works with all ED domains<br>• dSaCas9 works only with: <b>DNMT3A, TET1, VPR, KRAB</b><br>• gRNA: unlimited number can be added<br>• Custom option for each module is available - write your own module of interest, target gene or UCSC coordinates for gRNA design.",
        buildTitle: "Build modules",
        buildText: "Click module cards below or click colored module boxes around the plasmid map to edit the same module.",
        plasmidMapTitle: "Plasmid map",
        plasmidMapText: "Module colors match Build modules and the boxes around the plasmid map.",
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
        backToProjects: "Back to projects",
        orderSubmitted: "Order submitted successfully! ID:",
      },
      hr: {
        brandTitle: "Genos · Konstruktor plazmida",
        navBuilder: "Konstruktor", navMap: "Mapa plazmida", navCart: "Košarica",
        heroTitle: "Dizajniraj svoj ekspresijski plazmid",
        heroText: "Odaberi broj gRNA (gRNAs), tip eukariotskog promotora (Pro), efektorsku domenu (ED), selekcijske markere - fluorescentne markere ili markere antibiotske rezistencije (M), transkripcijske terminatore (Ter) i tip okosnice plazmida (B).",
        rulesTitle: "Brza pravila",
        rulesText: "• dSpCas9 radi sa svim ED domenama<br>• dSaCas9 radi samo s: <b>DNMT3A, TET1, VPR, KRAB</b><br>• gRNA: može se dodati neograničen broj<br>• Za svaki modul dostupna je Custom opcija - upiši vlastiti modul, ciljni gen ili UCSC koordinate za dizajn gRNA.",
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
        backToProjects: "Povratak na projekte",
        orderSubmitted: "Narudžba je uspješno poslana! ID:",
      }
    };

    function t(key: string) { return I18N[currentLang]?.[key] ?? key; }

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

    const $ = (id: string) => root.querySelector('#' + id) as HTMLElement;

    function showToast(msg: string) {
      const el = $('toast');
      el.textContent = msg;
      el.style.display = 'block';
      clearTimeout((showToast as any)._tm);
      (showToast as any)._tm = setTimeout(() => el.style.display = 'none', 1800);
    }

    function esc(s: unknown) {
      return String(s ?? '').replace(/[&<>"']/g, (m: string) =>
        ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'} as any)[m]);
    }

    const state: any = {
      backbone: null, backboneCustom: "",
      gRNAs: [] as any[], promoter: null, promoterCustom: "",
      ed: null, edCustom: "", dcas: null, dcasCustom: "",
      markers: { fluorescent: [] as string[], antibiotic: [] as string[] },
      terminator: null, terminatorCustom: ""
    };

    let gDraft: any = { type: "SpCas9-gRNA", name: "", sequence: "", target: "" };

    function getVal(field: string): string {
      if (field === 'backbone') {
        if (!state.backbone) return "";
        return state.backbone === t("custom") ? (state.backboneCustom || t("custom")) : state.backbone;
      }
      if (field === 'promoter') {
        if (!state.promoter) return "";
        return state.promoter === t("custom") ? (state.promoterCustom || t("custom")) : state.promoter;
      }
      if (field === 'ed') {
        if (!state.ed) return "";
        return state.ed === t("custom") ? (state.edCustom || t("custom")) : state.ed;
      }
      if (field === 'dcas') {
        if (!state.dcas) return "";
        return state.dcas === t("custom") ? (state.dcasCustom || t("custom")) : state.dcas;
      }
      if (field === 'terminator') {
        if (!state.terminator) return "";
        return state.terminator === t("custom") ? (state.terminatorCustom || t("custom")) : state.terminator;
      }
      return "";
    }

    function baseED(label: string): string {
      if (!label) return "";
      if (label === t("custom")) return t("custom");
      return label.split(" ")[0];
    }

    function allowedDcasOptions(): string[] {
      if (!state.ed) return ["dSpCas9", "dSaCas9", t("custom")];
      if (state.ed === t("custom")) return ["dSpCas9", t("custom")];
      const edBase = baseED(getVal('ed'));
      if (["DNMT3A","TET1","VPR","KRAB"].includes(edBase)) return ["dSpCas9","dSaCas9",t("custom")];
      return ["dSpCas9", t("custom")];
    }

    function reconcileDcasWithED() {
      const allowed = new Set(allowedDcasOptions());
      if (state.dcas && !allowed.has(state.dcas)) {
        state.dcas = null; state.dcasCustom = "";
        showToast(t("toastDcasReset"));
      }
    }

    const getSize = (field: string) => SIZE_BP[getVal(field)] || 0;
    const getBackboneSize = () => getSize('backbone');
    const getGRNASize = () => state.gRNAs.reduce((s: number, g: any) => s + (SIZE_BP[g.type] || 0), 0);
    const getPromoterSize = () => getSize('promoter');
    const getEDSize = () => SIZE_BP[baseED(getVal('ed'))] || 0;
    const getDcasSize = () => getSize('dcas');
    const getMarkerSize = () => [...state.markers.fluorescent, ...state.markers.antibiotic].reduce((s: number, x: string) => s + (SIZE_BP[x] || 0), 0);
    const getTerminatorSize = () => getSize('terminator');
    const getTotalSelectedSize = () => getBackboneSize() + getGRNASize() + getPromoterSize() + getEDSize() + getDcasSize() + getMarkerSize() + getTerminatorSize();

    function getMainName(field: string): string {
      if (field === 'gRNA') {
        if (!state.gRNAs.length) return t("notSelected");
        return [...new Set(state.gRNAs.map((g: any) => g.type))].join(", ");
      }
      if (field === 'markers') {
        const all = [...state.markers.fluorescent, ...state.markers.antibiotic];
        return all.length ? all.join(", ") : t("notSelected");
      }
      if (field === 'ed') return getVal('ed') ? baseED(getVal('ed')) : t("notSelected");
      return getVal(field) || t("notSelected");
    }

    function isRequiredComplete(): boolean {
      return !!getVal('backbone') && state.gRNAs.length > 0 && !!getVal('promoter') && !!getVal('ed') && !!getVal('dcas') && !!getVal('terminator');
    }

    function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
      const a = (angleDeg - 90) * Math.PI / 180;
      return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
    }
    function arcPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
      const start = polarToCartesian(cx, cy, r, endAngle);
      const end = polarToCartesian(cx, cy, r, startAngle);
      const largeArc = (endAngle - startAngle) <= 180 ? "0" : "1";
      return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${r} ${r} 0 ${largeArc} 0 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
    }
    function clamp(val: number, min: number, max: number) { return Math.max(min, Math.min(max, val)); }

    function computeSegments() {
      const sizes: Record<string, number> = {
        bb: getBackboneSize() || 300, gRNA: getGRNASize() || 300,
        pro: getPromoterSize() || 300, ed: getEDSize() || 300,
        dcas: getDcasSize() || 300, m: getMarkerSize() || 300,
        ter: getTerminatorSize() || 300
      };
      const order = ["bb","gRNA","pro","ed","dcas","m","ter"];
      const total = order.reduce((s, k) => s + sizes[k], 0);
      let start = 0;
      const out: Record<string, any> = {};
      order.forEach(k => {
        const angle = sizes[k] / total * 360;
        out[k] = { start, end: start + angle, size: sizes[k] };
        start += angle;
      });
      return out;
    }

    function setArc(id: string, a0: number, a1: number) {
      $(id)?.setAttribute("d", arcPath(310, 310, 150, a0, a1));
    }

    function highlightSegment(moduleKey: string, on: boolean) {
      const arc = $(`arc-${moduleKey}`);
      if (!arc) return;
      (arc as any).style.strokeWidth = on ? "28" : "20";
      (arc as any).style.filter = on ? "brightness(1.25)" : "";
    }

    const modalBack = $('modalBack');
    const modalBody = $('modalBody');
    const modalTitle = $('modalTitle');

    function openModal(title: string, html: string) {
      modalTitle.textContent = title;
      modalBody.innerHTML = html;
      modalBack.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
    function closeModal() {
      modalBack.style.display = "none";
      document.body.style.overflow = "";
    }

    $('modalClose').addEventListener("click", closeModal);
    modalBack.addEventListener("click", (e: Event) => { if (e.target === modalBack) closeModal(); });

    function buildOptionCard(title: string, desc: string, attrName: string, value: string, active: boolean): string {
      return `<button class="opt ${active ? "active" : ""}" ${attrName}="${esc(value)}" type="button"><div class="t">${esc(title)}</div><div class="d">${esc(desc || "")}</div></button>`;
    }

    // --- Backbone ---
    function openBackbonePicker() {
      const list = [
        { name: t("standardBackbone"), desc: t("bbDesc1") },
        { name: t("lentiviralBackbone"), desc: t("bbDesc2") },
        { name: t("piggyBackbone"), desc: t("bbDesc3") },
        { name: t("sleepingBackbone"), desc: t("bbDesc4") },
        { name: t("secondaryPuro"), desc: t("bbDesc5") },
        { name: t("secondaryMClover"), desc: t("bbDesc6") },
        { name: t("custom"), desc: "" }
      ];
      const cards = list.map(item => buildOptionCard(item.name, item.desc, "data-bb", item.name, state.backbone === item.name)).join("");
      openModal(t("modalBackbone"), `<div class="opt-grid">${cards}</div><div class="form-row"><input class="input" id="customBB" placeholder="${esc(t("modalBackboneCustom"))}" value="${esc(state.backboneCustom)}" /></div><div class="note">${t("modalBackboneNote")}</div>`);
      modalBody.querySelectorAll("[data-bb]").forEach((btn: Element) => btn.addEventListener("click", () => {
        state.backbone = (btn as HTMLElement).getAttribute("data-bb");
        render(); showToast(t("toastBackbone"));
        if (state.backbone !== t("custom")) closeModal(); else openBackbonePicker();
      }));
      (modalBody.querySelector("#customBB") as HTMLInputElement).addEventListener("input", (e: Event) => {
        state.backboneCustom = (e.target as HTMLInputElement).value.trim();
        if (state.backbone === t("custom")) render();
      });
    }

    // --- gRNA ---
    function renderGRNAList(): string {
      if (!state.gRNAs.length) return `<div class="note">${t("noGRNAsAdded")}</div>`;
      return `<div class="list">${state.gRNAs.map((g: any, i: number) => `<div class="li"><div class="li-left"><div class="l1">${esc(g.type)} <span style="opacity:.75;font-weight:750">#${i + 1}</span></div><div class="l2">${g.name ? `<b>${esc(g.name)}</b>` : ""}${g.sequence ? ` · <span style="opacity:.95">${esc(g.sequence)}</span>` : ""}${g.target ? ` · <span style="opacity:.90">${t("target")}: ${esc(g.target)}</span>` : ""}</div></div><button class="mini-btn" data-del="${i}" type="button">${t("remove")}</button></div>`).join("")}</div>`;
    }
    function wireGRNADeleteButtons() {
      modalBody.querySelectorAll("[data-del]").forEach((btn: Element) => btn.addEventListener("click", () => {
        state.gRNAs.splice(Number((btn as HTMLElement).getAttribute("data-del")), 1);
        render(); openGRNAPicker();
      }));
    }
    function openGRNAPicker() {
      const cards = ["SaCas9-gRNA", "SpCas9-gRNA", "Custom"].map(type => {
        let desc = t("customDesc");
        if (type === "SaCas9-gRNA") desc = t("saDesc");
        if (type === "SpCas9-gRNA") desc = t("spDesc");
        return buildOptionCard(type, desc, "data-gt", type, gDraft.type === type);
      }).join("");
      openModal(t("configureGRNA"), `<div class="muted">${t("gRNAIntro")}</div><div class="section-title">${t("gRNAType")}</div><div class="opt-grid">${cards}</div><div class="section-title">${t("gRNADetails")}</div><div class="form-row"><input class="input" id="gName" placeholder="${esc(t("gRNAName"))}" value="${esc(gDraft.name)}" /><input class="input" id="gSeq" placeholder="${esc(t("gRNASeq"))}" value="${esc(gDraft.sequence)}" /></div><div class="form-row" id="targetRow" style="display:none"><input class="input" id="gTarget" placeholder="${esc(t("gRNATarget"))}" value="${esc(gDraft.target)}" /></div><div class="form-row"><button class="mini-btn" id="clearDraft" type="button">${t("clearFields")}</button><button class="mini-btn" id="addG" type="button">${t("addGRNA")}</button></div><div class="section-title">${t("existingGRNAs")}</div>${renderGRNAList()}<div class="form-row" style="justify-content:flex-end"><button class="mini-btn" id="doneG" type="button">${t("done")}</button></div>`);
      if (gDraft.type === "Custom") ($("targetRow") as HTMLElement).style.display = "flex";
      modalBody.querySelectorAll("[data-gt]").forEach((btn: Element) => btn.addEventListener("click", () => {
        gDraft.type = (btn as HTMLElement).getAttribute("data-gt"); openGRNAPicker();
      }));
      ($("gName") as HTMLInputElement).addEventListener("input", (e: Event) => gDraft.name = (e.target as HTMLInputElement).value);
      ($("gSeq") as HTMLInputElement).addEventListener("input", (e: Event) => gDraft.sequence = (e.target as HTMLInputElement).value);
      const gt = $("gTarget") as HTMLInputElement | null;
      if (gt) gt.addEventListener("input", (e: Event) => gDraft.target = (e.target as HTMLInputElement).value);
      $("clearDraft").addEventListener("click", () => { gDraft = { type: gDraft.type, name: "", sequence: "", target: "" }; openGRNAPicker(); });
      $("addG").addEventListener("click", () => {
        const name = (($("gName") as HTMLInputElement).value || "").trim();
        const seq = (($("gSeq") as HTMLInputElement).value || "").trim();
        const target = (($("gTarget") as HTMLInputElement)?.value || "").trim();
        if (gDraft.type !== "Custom" && !seq) { showToast(t("toastNeedSeq")); return; }
        if (gDraft.type === "Custom" && !target) { showToast(t("toastNeedTarget")); return; }
        state.gRNAs.push({ type: gDraft.type, name, sequence: seq, target });
        render(); showToast(t("toastGRNAAdded"));
        gDraft = { type: gDraft.type, name: "", sequence: "", target: "" };
        openGRNAPicker();
      });
      wireGRNADeleteButtons();
      $("doneG").addEventListener("click", () => { closeModal(); showToast(t("toastGRNAUpdated")); });
    }

    // --- Promoter ---
    function openPromoterPicker() {
      const groups = [
        { title: t("strongPromoters"), items: ["CbH","SV40","EF1a"] },
        { title: t("weakPromoters"), items: ["EFS"] },
        { title: t("custom"), items: [t("custom")] }
      ];
      const html = groups.map(g => `<div class="section-title">${esc(g.title)}</div><div class="opt-grid">${g.items.map(v => buildOptionCard(v, "", "data-pro", v, state.promoter === v)).join("")}</div>`).join("") + `<div class="form-row"><input class="input" id="customPro" placeholder="${esc(t("promoterCustom"))}" value="${esc(state.promoterCustom)}" /></div>`;
      openModal(t("promoterTitle"), html);
      modalBody.querySelectorAll("[data-pro]").forEach((btn: Element) => btn.addEventListener("click", () => {
        state.promoter = (btn as HTMLElement).getAttribute("data-pro");
        render(); showToast(t("toastPromoter"));
        if (state.promoter !== t("custom")) closeModal(); else openPromoterPicker();
      }));
      (modalBody.querySelector("#customPro") as HTMLInputElement).addEventListener("input", (e: Event) => {
        state.promoterCustom = (e.target as HTMLInputElement).value.trim();
        if (state.promoter === t("custom")) render();
      });
    }

    // --- ED ---
    function parseEDOption(option: string) {
      if (option === t("custom")) return { title: option, desc: "", value: option };
      const match = String(option).match(/^([^()]+?)\s*\((.+)\)$/);
      if (!match) return { title: option, desc: "", value: option };
      return { title: match[1].trim(), desc: `(${match[2].trim()})`, value: option };
    }
    function openEDPicker() {
      const groups = [
        { title: t("dnaMeth"), items: ["DNMT3A","TET1"] },
        { title: t("directGene"), items: ["VPR (direct gene activation)","KRAB (direct gene repression)"] },
        { title: t("acetylation"), items: ["p300 (histone acetylation)","HDAC3 (histone deacetylation)"] },
        { title: t("h3k4"), items: ["LSD1 (H3K4me1/2 demethylation)","KDM5A (H3K4me2/3 demethylation)","RIOX1 (H3K4me1/2/3 demethylation)","PRDM9 (introduction of H3K4me3)"] },
        { title: t("h3k9"), items: ["G9a (introduction of H3K9me2)","G9a-me3 (introduction of H3K9me3)"] },
        { title: t("custom"), items: [t("custom")] }
      ];
      const html = groups.map(g => `<div class="section-title">${esc(g.title)}</div><div class="opt-grid">${g.items.map(v => { const p = parseEDOption(v); return buildOptionCard(p.title, p.desc, "data-ed", p.value, state.ed === p.value); }).join("")}</div>`).join("") + `<div class="form-row"><input class="input" id="customED" placeholder="${esc(t("edCustom"))}" value="${esc(state.edCustom)}" /></div><div class="note">${t("edNote")}</div>`;
      openModal(t("effectorTitle"), html);
      modalBody.querySelectorAll("[data-ed]").forEach((btn: Element) => btn.addEventListener("click", () => {
        state.ed = (btn as HTMLElement).getAttribute("data-ed");
        reconcileDcasWithED(); render(); showToast(t("toastED"));
        if (state.ed !== t("custom")) closeModal(); else openEDPicker();
      }));
      (modalBody.querySelector("#customED") as HTMLInputElement).addEventListener("input", (e: Event) => {
        state.edCustom = (e.target as HTMLInputElement).value.trim();
        if (state.ed === t("custom")) { reconcileDcasWithED(); render(); }
      });
    }

    // --- dCas9 ---
    function openDcasPicker() {
      const cards = allowedDcasOptions().map(v => {
        let desc = "";
        if (v === "dSpCas9") desc = currentLang === "en" ? "Compatible with all effector domains." : "Kompatibilan sa svim efektorskim domenama.";
        if (v === "dSaCas9") desc = currentLang === "en" ? "Compatible only with DNMT3A, TET1, VPR, KRAB." : "Kompatibilan samo s DNMT3A, TET1, VPR, KRAB.";
        return buildOptionCard(v, desc, "data-dcas", v, state.dcas === v);
      }).join("");
      openModal(t("dcasTitle"), `<div class="opt-grid">${cards}</div><div class="form-row"><input class="input" id="customDCAS" placeholder="${esc(t("dcasCustom"))}" value="${esc(state.dcasCustom)}" /></div>`);
      modalBody.querySelectorAll("[data-dcas]").forEach((btn: Element) => btn.addEventListener("click", () => {
        state.dcas = (btn as HTMLElement).getAttribute("data-dcas");
        render(); showToast(t("toastDcas"));
        if (state.dcas !== t("custom")) closeModal(); else openDcasPicker();
      }));
      (modalBody.querySelector("#customDCAS") as HTMLInputElement).addEventListener("input", (e: Event) => {
        state.dcasCustom = (e.target as HTMLInputElement).value.trim();
        if (state.dcas === t("custom")) render();
      });
    }

    // --- Markers ---
    function toggleInArray(arr: string[], val: string, shouldHave: boolean) {
      const idx = arr.indexOf(val);
      if (shouldHave && idx === -1) arr.push(val);
      if (!shouldHave && idx !== -1) arr.splice(idx, 1);
    }
    function openMarkersPicker() {
      const fluor = ["mRuby3","mClover3","mCerulean3"];
      const abx = ["Puromycin resistance","Hygromycin resistance","Blasticidin resistance"];
      const mk = (group: string, name: string, checked: boolean) => `<label class="opt ${checked ? "active" : ""}" style="display:flex;gap:10px;align-items:flex-start;cursor:pointer"><input type="checkbox" data-mg="${esc(group)}" data-mv="${esc(name)}" ${checked ? "checked" : ""} style="margin-top:3px;transform:scale(1.1)" /><div><div class="t">${esc(name)}</div><div class="d">${group === "fluor" ? t("fluorTitle") : t("abxTitle")}</div></div></label>`;
      openModal(t("markersTitle"), `<div class="muted">${t("markersIntro")}</div><div class="section-title">${t("fluorTitle")}</div><div class="opt-grid">${fluor.map(v => mk("fluor", v, state.markers.fluorescent.includes(v))).join("")}</div><div class="section-title">${t("abxTitle")}</div><div class="opt-grid">${abx.map(v => mk("abx", v, state.markers.antibiotic.includes(v))).join("")}</div><div class="form-row" style="justify-content:flex-end"><button class="mini-btn" id="clearMarkers" type="button">${t("clear")}</button><button class="mini-btn" id="doneMarkers" type="button">${t("done")}</button></div>`);
      modalBody.querySelectorAll("input[type=checkbox][data-mg]").forEach((ch: Element) => ch.addEventListener("change", () => {
        const g = (ch as HTMLElement).getAttribute("data-mg")!;
        const v = (ch as HTMLElement).getAttribute("data-mv")!;
        if (g === "fluor") toggleInArray(state.markers.fluorescent, v, (ch as HTMLInputElement).checked);
        else toggleInArray(state.markers.antibiotic, v, (ch as HTMLInputElement).checked);
        render(); openMarkersPicker();
      }));
      $("clearMarkers").addEventListener("click", () => { state.markers.fluorescent = []; state.markers.antibiotic = []; render(); closeModal(); showToast(t("toastMarkersCleared")); });
      $("doneMarkers").addEventListener("click", () => { render(); closeModal(); showToast(t("toastMarkersUpdated")); });
    }

    // --- Terminator ---
    function openTerminatorPicker() {
      const items = [t("bghTerm"), t("sv40Term"), t("custom")];
      const cards = items.map(v => buildOptionCard(v, "", "data-ter", v, state.terminator === v)).join("");
      openModal(t("terminatorTitle"), `<div class="opt-grid">${cards}</div><div class="form-row"><input class="input" id="customTer" placeholder="${esc(t("customTer"))}" value="${esc(state.terminatorCustom)}" /></div>`);
      modalBody.querySelectorAll("[data-ter]").forEach((btn: Element) => btn.addEventListener("click", () => {
        state.terminator = (btn as HTMLElement).getAttribute("data-ter");
        render(); showToast(t("toastTer"));
        if (state.terminator !== t("custom")) closeModal(); else openTerminatorPicker();
      }));
      (modalBody.querySelector("#customTer") as HTMLInputElement).addEventListener("input", (e: Event) => {
        state.terminatorCustom = (e.target as HTMLInputElement).value.trim();
        if (state.terminator === t("custom")) render();
      });
    }

    // --- Plasmid ring ---
    function prepareRingLabel(id: string, moduleKey: string, midAngle: number, title: string, sizeText: string) {
      const stage = $("plasmidStage");
      const label = $(id);
      const r = 270;
      const rad = (midAngle - 90) * Math.PI / 180;
      const px = 310 + r * Math.cos(rad);
      const py = 310 + r * Math.sin(rad);
      label.innerHTML = `${esc(title)}<span class="small">${esc(t("size"))}: ${esc(sizeText)}</span>`;
      label.style.left = "0px"; label.style.top = "0px";
      const width = label.offsetWidth || 150;
      const height = label.offsetHeight || 46;
      const stageWidth = stage.clientWidth || 620;
      const stageHeight = stage.clientHeight || 650;
      label.onmouseenter = () => highlightSegment(moduleKey, true);
      label.onmouseleave = () => highlightSegment(moduleKey, false);
      return { id, label, width, height, preferredX: clamp(px - width / 2, 16, stageWidth - width - 16), preferredY: clamp(py - height / 2, 24, stageHeight - height - 16), x: 0, y: 0, side: px >= 310 ? "right" : "left" as "left" | "right" };
    }
    function layoutRingLabels(items: any[]) {
      const stage = $("plasmidStage");
      const stageWidth = stage.clientWidth || 620;
      const stageHeight = stage.clientHeight || 650;
      const margin = 16, gap = 10;
      const groups: any = {
        left: items.filter((i: any) => i.side === "left").sort((a: any, b: any) => a.preferredY - b.preferredY),
        right: items.filter((i: any) => i.side === "right").sort((a: any, b: any) => a.preferredY - b.preferredY)
      };
      Object.values(groups).forEach((group: any) => {
        if (!group.length) return;
        group.forEach((item: any) => { item.x = clamp(item.preferredX, margin, stageWidth - item.width - margin); item.y = item.preferredY; });
        group[0].y = clamp(group[0].y, margin + 8, stageHeight - group[0].height - margin);
        for (let i = 1; i < group.length; i++) { const minY = group[i - 1].y + group[i - 1].height + gap; group[i].y = Math.max(group[i].y, minY); }
        const overflow = group[group.length - 1].y + group[group.length - 1].height + margin - stageHeight;
        if (overflow > 0) { for (let i = group.length - 1; i >= 0; i--) group[i].y -= overflow; group[0].y = Math.max(group[0].y, margin + 8); for (let i = 1; i < group.length; i++) { const minY = group[i - 1].y + group[i - 1].height + gap; group[i].y = Math.max(group[i].y, minY); } }
        for (let i = group.length - 2; i >= 0; i--) { const maxY = group[i + 1].y - group[i].height - gap; group[i].y = Math.min(group[i].y, maxY); }
        group.forEach((item: any) => {
          item.x = item.side === "right" ? clamp(Math.max(item.preferredX, 420), margin, stageWidth - item.width - margin) : clamp(Math.min(item.preferredX, 200 - item.width), margin, stageWidth - item.width - margin);
          item.y = clamp(item.y, margin + 8, stageHeight - item.height - margin);
          item.label.style.left = `${item.x}px`; item.label.style.top = `${item.y}px`;
        });
      });
    }

    function renderPlasmidRing() {
      const segs = computeSegments();
      Object.entries(segs).forEach(([k, v]: [string, any]) => { setArc(`arc-${k}`, v.start, v.end); setArc(`hit-${k}`, v.start, v.end); });
      $("arc-bb").style.opacity = getBackboneSize() ? "1" : ".25";
      $("arc-gRNA").style.opacity = getGRNASize() ? "1" : ".25";
      $("arc-pro").style.opacity = getPromoterSize() ? "1" : ".25";
      $("arc-ed").style.opacity = getEDSize() ? "1" : ".25";
      $("arc-dcas").style.opacity = getDcasSize() ? "1" : ".25";
      $("arc-m").style.opacity = getMarkerSize() ? "1" : ".25";
      $("arc-ter").style.opacity = getTerminatorSize() ? "1" : ".25";
      const labelItems = [
        prepareRingLabel("ring-bb", "bb", (segs.bb.start + segs.bb.end) / 2, getMainName('backbone'), `${getBackboneSize()} ${t("bp")}`),
        prepareRingLabel("ring-gRNA", "gRNA", (segs.gRNA.start + segs.gRNA.end) / 2, getMainName('gRNA'), `${getGRNASize()} ${t("bp")}`),
        prepareRingLabel("ring-pro", "pro", (segs.pro.start + segs.pro.end) / 2, getMainName('promoter'), `${getPromoterSize()} ${t("bp")}`),
        prepareRingLabel("ring-ed", "ed", (segs.ed.start + segs.ed.end) / 2, getMainName('ed'), `${getEDSize()} ${t("bp")}`),
        prepareRingLabel("ring-dcas", "dcas", (segs.dcas.start + segs.dcas.end) / 2, getMainName('dcas'), `${getDcasSize()} ${t("bp")}`),
        prepareRingLabel("ring-m", "m", (segs.m.start + segs.m.end) / 2, getMainName('markers'), `${getMarkerSize()} ${t("bp")}`),
        prepareRingLabel("ring-ter", "ter", (segs.ter.start + segs.ter.end) / 2, getMainName('terminator'), `${getTerminatorSize()} ${t("bp")}`)
      ];
      layoutRingLabels(labelItems);
      $("centerSize").textContent = `${getTotalSelectedSize()} ${t("bp")}`;
    }

    function renderSummary() {
      $("val-bb").textContent = state.backbone ? `${getVal('backbone')} · ${getBackboneSize()} ${t("bp")}` : t("notSelected");
      $("val-gRNA").textContent = state.gRNAs.length ? `${getMainName('gRNA')} · ${getGRNASize()} ${t("bp")}` : t("noGRNA");
      $("val-pro").textContent = state.promoter ? `${getVal('promoter')} · ${getPromoterSize()} ${t("bp")}` : t("notSelected");
      $("val-ed").textContent = state.ed ? `${getMainName('ed')} · ${getEDSize()} ${t("bp")}` : t("notSelected");
      $("val-dcas").textContent = state.dcas ? `${getVal('dcas')} · ${getDcasSize()} ${t("bp")}` : t("notSelected");
      $("val-m").textContent = getMarkerSize() ? `${getMainName('markers')} · ${getMarkerSize()} ${t("bp")}` : t("optional");
      $("val-ter").textContent = state.terminator ? `${getVal('terminator')} · ${getTerminatorSize()} ${t("bp")}` : t("notSelected");
      $("sum-bb").textContent = state.backbone ? `${getVal('backbone')} · ${getBackboneSize()} ${t("bp")}` : "—";
      $("sum-gRNA").textContent = state.gRNAs.length ? state.gRNAs.map((g: any, i: number) => { const parts = [`${i + 1}. ${g.type}`]; if (g.name) parts.push(`${t("name")}: ${g.name}`); if (g.sequence) parts.push(`${t("seq")}: ${g.sequence}`); if (g.target) parts.push(`${t("target")}: ${g.target}`); return parts.join(" — "); }).join(" | ") + ` · ${getGRNASize()} ${t("bp")}` : "—";
      $("sum-pro").textContent = state.promoter ? `${getVal('promoter')} · ${getPromoterSize()} ${t("bp")}` : "—";
      $("sum-ed").textContent = state.ed ? `${getMainName('ed')} · ${getEDSize()} ${t("bp")}` : "—";
      $("sum-dcas").textContent = state.dcas ? `${getVal('dcas')} · ${getDcasSize()} ${t("bp")}` : "—";
      $("sum-m").textContent = getMarkerSize() ? `${getMainName('markers')} · ${getMarkerSize()} ${t("bp")}` : "—";
      $("sum-ter").textContent = state.terminator ? `${getVal('terminator')} · ${getTerminatorSize()} ${t("bp")}` : "—";
      $("sum-total").textContent = `${getTotalSelectedSize()} ${t("bp")}`;
      ($("addToCartBtn") as HTMLButtonElement).disabled = !isRequiredComplete();
    }

    // --- Cart ---
    const cart: any[] = [];

    function buildCartItemData(): any {
      return {
        backbone: getVal('backbone'), backboneSizeBp: getBackboneSize(),
        gRNAs: state.gRNAs.map((g: any) => ({ type: g.type, name: g.name, sequence: g.sequence, target: g.target })),
        gRNAsSizeBp: getGRNASize(),
        promoter: getVal('promoter'), promoterSizeBp: getPromoterSize(),
        ed: baseED(getVal('ed')), edSizeBp: getEDSize(),
        dcas: getVal('dcas'), dcasSizeBp: getDcasSize(),
        markersFluorescent: [...state.markers.fluorescent],
        markersAntibiotic: [...state.markers.antibiotic],
        markersSizeBp: getMarkerSize(),
        terminator: getVal('terminator'), terminatorSizeBp: getTerminatorSize(),
        totalSizeBp: getTotalSelectedSize()
      };
    }

    function renderCart() {
      const list = $("cartList");
      if (!cart.length) {
        list.innerHTML = `<div class="muted" style="margin-top:10px">${t("cartEmpty")}</div>`;
        ($("submitOrderBtn") as HTMLButtonElement).disabled = true;
        return;
      }
      list.innerHTML = cart.map((c: any, idx: number) => `<div class="cart-item"><div class="title">${t("configNum")} #${cart.length - idx}</div><div class="meta"><b>B</b>: ${esc(c.backbone)} · ${c.backboneSizeBp} bp<br><b>gRNAs</b>: ${c.gRNAs.length} · ${c.gRNAsSizeBp} bp<br><b>Pro</b>: ${esc(c.promoter)} · ${c.promoterSizeBp} bp<br><b>ED</b>: ${esc(c.ed)} · ${c.edSizeBp} bp<br><b>dCas9</b>: ${esc(c.dcas)} · ${c.dcasSizeBp} bp<br><b>M</b>: ${esc([...c.markersFluorescent, ...c.markersAntibiotic].join(', ') || '—')} · ${c.markersSizeBp} bp<br><b>Ter</b>: ${esc(c.terminator)} · ${c.terminatorSizeBp} bp<br><b>${t("totalSize")}</b>: ${c.totalSizeBp} ${t("bp")}</div></div>`).join("");
      ($("submitOrderBtn") as HTMLButtonElement).disabled = false;
    }

    function addToCart() {
      cart.unshift(buildCartItemData());
      renderCart();
      showToast(t("toastCart"));
    }

    function render() { renderSummary(); renderPlasmidRing(); }

    // --- Apply language ---
    function applyLanguage() {
      root.querySelector('html')?.setAttribute('lang', currentLang);
      const ids = ["brandTitle","navBuilder","navMap","navCart","heroTitle","heroText","rulesTitle","rulesText","buildTitle","buildText","plasmidMapTitle","plasmidMapText","legBb","legGrna","legPro","legEd","legDcas","legM","legTer","configTitle","configText","sumKb","sumKg","sumKp","sumKe","sumKd","sumKm","sumKt","sumKtotal","cartTitle","cartText"];
      ids.forEach(id => { const el = $(id); if (el) el.innerHTML = t(id); });
      $("addToCartBtn").textContent = t("addToCart");
      $("resetBtn").textContent = t("reset");
      $("tagBb").textContent = t("moduleBackbone");
      $("subBb").textContent = t("moduleBackboneSub");
      $("subGrna").textContent = t("moduleGrnaSub");
      $("subPro").textContent = t("moduleProSub");
      $("subEd").textContent = t("moduleEdSub");
      $("subDcas").textContent = t("moduleDcasSub");
      $("subM").textContent = t("moduleMSub");
      $("subTer").textContent = t("moduleTerSub");
      $("submitOrderBtn").textContent = t("submitOrder");
      $("notesLabel").textContent = t("notes");
      ($("notesInput") as HTMLTextAreaElement).placeholder = t("notesPlaceholder");
      $("backLink").textContent = t("backToProjects");
      render(); renderCart();
    }

    // Wire events
    const openers: Record<string, () => void> = { bb: openBackbonePicker, gRNA: openGRNAPicker, pro: openPromoterPicker, ed: openEDPicker, dcas: openDcasPicker, m: openMarkersPicker, ter: openTerminatorPicker };
    ["bb","gRNA","pro","ed","dcas","m","ter"].forEach(k => {
      $(`btn-${k}`)?.addEventListener("click", openers[k]);
      $(`ring-${k}`)?.addEventListener("click", openers[k]);
      $(`hit-${k}`)?.addEventListener("click", openers[k]);
    });

    $("addToCartBtn").addEventListener("click", () => {
      if (!isRequiredComplete()) { showToast(t("toastNeedAll")); return; }
      addToCart();
    });

    $("resetBtn").addEventListener("click", () => {
      state.backbone = null; state.backboneCustom = ""; state.gRNAs = [];
      state.promoter = null; state.promoterCustom = "";
      state.ed = null; state.edCustom = "";
      state.dcas = null; state.dcasCustom = "";
      state.markers.fluorescent = []; state.markers.antibiotic = [];
      state.terminator = null; state.terminatorCustom = "";
      gDraft = { type: "SpCas9-gRNA", name: "", sequence: "", target: "" };
      render(); showToast(t("toastReset"));
    });

    // Submit order
    let isSubmitting = false;
    $("submitOrderBtn").addEventListener("click", async () => {
      if (!cart.length || isSubmitting) return;
      isSubmitting = true;
      const btn = $("submitOrderBtn") as HTMLButtonElement;
      btn.disabled = true; btn.textContent = t("submitting");
      const notes = ($("notesInput") as HTMLTextAreaElement).value.trim();
      try {
        const orderId = await submitFn(cart, notes, currentLang);
        showToast(`${t("orderSubmitted")} ${orderId}`);
        cart.length = 0;
        ($("notesInput") as HTMLTextAreaElement).value = "";
        renderCart();
      } catch (e: any) {
        console.error(e);
        showToast(e.message || "Error");
      } finally {
        isSubmitting = false;
        btn.disabled = !cart.length;
        btn.textContent = t("submitOrder");
      }
    });

    applyLanguage();

    // Return a callback so the site's language store can push changes in
    return (lang: string) => {
      if (lang !== currentLang) {
        currentLang = lang;
        applyLanguage();
      }
    };
  }
</script>

{#if !ready}
  <div class="pb-loading">
    <p>Loading...</p>
  </div>
{:else}
  <div class="pb-root" bind:this={container}>
    <div class="pb-toolbar">
      <div class="pb-toolbar-inner">
        <a class="pb-back" href="/projects">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
          <span id="backLink">Back to projects</span>
        </a>
        <div class="pb-toolbar-nav">
          <button type="button" on:click={() => scrollTo('builder')} id="navBuilder">Builder</button>
          <button type="button" on:click={() => scrollTo('plasmid')} id="navMap">Plasmid map</button>
          <button type="button" on:click={() => scrollTo('cart')} id="navCart">Cart</button>
        </div>
      </div>
    </div>

    <div class="pb-container hero">
      <div class="hero-grid">
        <div class="hero-card">
          <h1 id="heroTitle">Design your own expression plasmid</h1>
          <p class="sub" id="heroText"></p>
        </div>
        <div class="hero-card">
          <h2 id="rulesTitle" style="margin:0 0 6px;font-size:16px;">Quick rules</h2>
          <p class="muted" id="rulesText" style="margin:0"></p>
        </div>
      </div>
    </div>

    <div id="builder" class="pb-container builder">
      <div class="builder-grid">
        <div class="card">
          <h2 id="buildTitle">Build modules</h2>
          <div class="muted" id="buildText"></div>
          <div class="module-grid">
            <button class="module-btn mod-bb" id="btn-bb" type="button">
              <div class="module-top"><span class="module-abbr">B</span><span class="tag" id="tagBb">Backbone</span></div>
              <div class="module-sub" id="subBb">(backbone type)</div>
              <div class="value dim" id="val-bb">Not selected</div>
            </button>
            <button class="module-btn mod-gRNA" id="btn-gRNA" type="button">
              <div class="module-top"><span class="module-abbr">gRNAs</span><span class="tag">B → A</span></div>
              <div class="module-sub" id="subGrna">(guide RNAs)</div>
              <div class="value dim" id="val-gRNA">No gRNAs added</div>
            </button>
            <button class="module-btn mod-pro" id="btn-pro" type="button">
              <div class="module-top"><span class="module-abbr">Pro</span><span class="tag">A → I</span></div>
              <div class="module-sub" id="subPro">(eukaryotic promoter type)</div>
              <div class="value dim" id="val-pro">Not selected</div>
            </button>
            <button class="module-btn mod-ed" id="btn-ed" type="button">
              <div class="module-top"><span class="module-abbr">ED</span><span class="tag">I → II</span></div>
              <div class="module-sub" id="subEd">(effector domain)</div>
              <div class="value dim" id="val-ed">Not selected</div>
            </button>
            <button class="module-btn mod-dcas" id="btn-dcas" type="button">
              <div class="module-top"><span class="module-abbr">dCas9</span><span class="tag">II → III</span></div>
              <div class="module-sub" id="subDcas">(dCas9 type)</div>
              <div class="value dim" id="val-dcas">Not selected</div>
            </button>
            <button class="module-btn mod-m" id="btn-m" type="button">
              <div class="module-top"><span class="module-abbr">M</span><span class="tag">III → IV</span></div>
              <div class="module-sub" id="subM">(selection markers)</div>
              <div class="value dim" id="val-m">Optional</div>
            </button>
            <button class="module-btn mod-ter" id="btn-ter" type="button">
              <div class="module-top"><span class="module-abbr">Ter</span><span class="tag">IV → Z</span></div>
              <div class="module-sub" id="subTer">(transcription terminator)</div>
              <div class="value dim" id="val-ter">Not selected</div>
            </button>
          </div>

          <div id="plasmid" class="plasmid-wrap">
            <div class="plasmid-box">
              <div class="plasmid-header">
                <div style="font-weight:850" id="plasmidMapTitle">Plasmid map</div>
                <div class="muted" id="plasmidMapText"></div>
              </div>
              <div class="plasmid-stage" id="plasmidStage">
                <div class="ring-label bb" id="ring-bb"></div>
                <div class="ring-label gRNA" id="ring-gRNA"></div>
                <div class="ring-label pro" id="ring-pro"></div>
                <div class="ring-label ed" id="ring-ed"></div>
                <div class="ring-label dcas" id="ring-dcas"></div>
                <div class="ring-label m" id="ring-m"></div>
                <div class="ring-label ter" id="ring-ter"></div>
                <svg class="plasmid-svg" id="plasmidSvg" viewBox="0 0 620 620" role="img" aria-label="Plasmid map">
                  <defs>
                    <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#000" flood-opacity="0.35"/>
                    </filter>
                  </defs>
                  <rect x="10" y="10" width="600" height="600" rx="22" fill="rgba(255,255,255,.02)" stroke="rgba(255,255,255,.08)"/>
                  <circle cx="310" cy="310" r="150" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="20"/>
                  <g filter="url(#softShadow)">
                    <path id="arc-bb" d="" fill="none" stroke="var(--bb)" stroke-width="20" stroke-linecap="round"/>
                    <path id="arc-gRNA" d="" fill="none" stroke="var(--gRNA)" stroke-width="20" stroke-linecap="round"/>
                    <path id="arc-pro" d="" fill="none" stroke="var(--pro)" stroke-width="20" stroke-linecap="round"/>
                    <path id="arc-ed" d="" fill="none" stroke="var(--ed)" stroke-width="20" stroke-linecap="round"/>
                    <path id="arc-dcas" d="" fill="none" stroke="var(--dcas)" stroke-width="20" stroke-linecap="round"/>
                    <path id="arc-m" d="" fill="none" stroke="var(--mark)" stroke-width="20" stroke-linecap="round"/>
                    <path id="arc-ter" d="" fill="none" stroke="var(--ter)" stroke-width="20" stroke-linecap="round"/>
                  </g>
                  <circle cx="310" cy="310" r="98" fill="rgba(15,26,51,.84)" stroke="rgba(255,255,255,.10)"/>
                  <text id="centerTitle" x="310" y="300" text-anchor="middle" font-size="18" fill="rgba(255,255,255,.94)" font-weight="800">Expression plasmid</text>
                  <text id="centerSize" x="310" y="326" text-anchor="middle" font-size="14" fill="rgba(255,255,255,.82)" font-weight="700">0 bp</text>
                  <g opacity="0">
                    <path id="hit-bb" d="" fill="none" stroke="#fff" stroke-width="34" stroke-linecap="round" style="cursor:pointer"/>
                    <path id="hit-gRNA" d="" fill="none" stroke="#fff" stroke-width="34" stroke-linecap="round" style="cursor:pointer"/>
                    <path id="hit-pro" d="" fill="none" stroke="#fff" stroke-width="34" stroke-linecap="round" style="cursor:pointer"/>
                    <path id="hit-ed" d="" fill="none" stroke="#fff" stroke-width="34" stroke-linecap="round" style="cursor:pointer"/>
                    <path id="hit-dcas" d="" fill="none" stroke="#fff" stroke-width="34" stroke-linecap="round" style="cursor:pointer"/>
                    <path id="hit-m" d="" fill="none" stroke="#fff" stroke-width="34" stroke-linecap="round" style="cursor:pointer"/>
                    <path id="hit-ter" d="" fill="none" stroke="#fff" stroke-width="34" stroke-linecap="round" style="cursor:pointer"/>
                  </g>
                </svg>
              </div>
              <div class="legend">
                <div class="leg"><span class="sw"></span><span id="legBb">Backbone</span></div>
                <div class="leg"><span class="sw gRNA"></span><span id="legGrna">gRNAs</span></div>
                <div class="leg"><span class="sw pro"></span><span id="legPro">Promoter</span></div>
                <div class="leg"><span class="sw ed"></span><span id="legEd">Effector</span></div>
                <div class="leg"><span class="sw dcas"></span><span id="legDcas">dCas9</span></div>
                <div class="leg"><span class="sw mark"></span><span id="legM">Markers</span></div>
                <div class="leg"><span class="sw ter"></span><span id="legTer">Terminator</span></div>
              </div>
            </div>
          </div>
        </div>

        <div class="summary">
          <div class="card">
            <h2 id="configTitle">Current configuration</h2>
            <div class="muted" id="configText"></div>
            <div class="kv">
              <div class="item"><div class="k" id="sumKb">Backbone (B)</div><div class="v" id="sum-bb">—</div></div>
              <div class="item"><div class="k" id="sumKg">gRNAs</div><div class="v" id="sum-gRNA">—</div></div>
              <div class="item"><div class="k" id="sumKp">Eukaryotic promoter type (Pro)</div><div class="v" id="sum-pro">—</div></div>
              <div class="item"><div class="k" id="sumKe">Effector domain (ED)</div><div class="v" id="sum-ed">—</div></div>
              <div class="item"><div class="k" id="sumKd">dCas9</div><div class="v" id="sum-dcas">—</div></div>
              <div class="item"><div class="k" id="sumKm">Selection markers (M)</div><div class="v" id="sum-m">—</div></div>
              <div class="item"><div class="k" id="sumKt">Transcription terminator (Ter)</div><div class="v" id="sum-ter">—</div></div>
              <div class="item"><div class="k" id="sumKtotal">Total plasmid size</div><div class="v" id="sum-total">0 bp</div></div>
            </div>
            <div style="margin-top:12px;display:grid;gap:10px">
              <button class="btn" id="addToCartBtn" type="button" disabled>Add to cart</button>
              <button class="btn secondary" id="resetBtn" type="button">Reset</button>
            </div>
          </div>

          <div id="cart" class="card">
            <h2 id="cartTitle">Cart</h2>
            <div class="muted" id="cartText">Saved configurations.</div>
            <div class="cart" id="cartList"></div>
            <div style="margin-top:12px">
              <label class="muted" id="notesLabel" for="notesInput" style="display:block;margin-bottom:6px">Notes (optional)</label>
              <textarea class="input" id="notesInput" rows="3" style="width:100%;resize:vertical"></textarea>
            </div>
            <div style="margin-top:12px">
              <button class="btn" id="submitOrderBtn" type="button" disabled>Submit order</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-back" id="modalBack" aria-hidden="true">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div class="modal-h">
          <h3 id="modalTitle">Select</h3>
          <button class="x" id="modalClose" aria-label="Close">×</button>
        </div>
        <div class="modal-b" id="modalBody"></div>
      </div>
    </div>

    <div class="toast" id="toast"></div>
  </div>
{/if}

<style>
  .pb-loading {
    display: flex; align-items: center; justify-content: center;
    min-height: 60vh; color: #032130; font-family: sans-serif;
  }

  .pb-root {
    --bb: #355070;
    --gRNA: #3a86ff;
    --pro: #2fbf71;
    --ed: #ff8c42;
    --dcas: #9b5de5;
    --mark: #e63946;
    --ter: #00b894;
    --panel: rgba(255,255,255,.04);
    --panel-border: rgba(255,255,255,.12);

    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    padding-top: 6rem;
  }

  /* --- Toolbar --- */
  .pb-root :global(.pb-toolbar) {
    background: #032130;
    border-radius: .5rem;
    margin: 0 1rem 1rem;
    padding: .75rem 1.25rem;
  }
  .pb-root :global(.pb-toolbar-inner) {
    display: flex; align-items: center; justify-content: space-between; gap: 1rem;
    max-width: 1280px; margin: 0 auto; flex-wrap: wrap;
  }
  .pb-root :global(.pb-back) {
    display: flex; align-items: center; gap: .375rem;
    color: rgba(255,255,255,.8); font-size: .8125rem; font-weight: 600;
    transition: color .2s;
  }
  .pb-root :global(.pb-back:hover) { color: white; }
  .pb-root :global(.pb-toolbar-nav) { display: flex; gap: .5rem; }
  .pb-root :global(.pb-toolbar-nav button) {
    padding: .375rem .75rem; border-radius: .25rem; border: none; background: transparent;
    color: rgba(255,255,255,.7); font-size: .8125rem; font-weight: 600;
    cursor: pointer; transition: background .15s, color .15s;
  }
  .pb-root :global(.pb-toolbar-nav button:hover) { background: rgba(255,255,255,.1); color: white; }

  /* --- Container --- */
  .pb-root :global(.pb-container) { max-width: 1280px; margin: 0 auto; padding: 0 1rem; }

  /* --- Dark content area --- */
  .pb-root :global(.hero) { padding: 0 0 1rem; }
  .pb-root :global(.hero-grid) { display: grid; grid-template-columns: 1.2fr .8fr; gap: 1rem; }
  @media (max-width: 980px) { .pb-root :global(.hero-grid) { grid-template-columns: 1fr; } }

  .pb-root :global(.hero-card), .pb-root :global(.card) {
    border: 1px solid rgba(3,33,48,.12);
    background: white;
    border-radius: .5rem; padding: 1.25rem;
    box-shadow: 0 2px 12px rgba(0,0,0,.06);
    position: relative; overflow: hidden;
  }
  .pb-root :global(.hero-card) {
    background: #032130; color: white;
    border-color: transparent;
  }
  .pb-root :global(h1) { margin: 0; font-size: 1.75rem; line-height: 1.2; letter-spacing: -.02em; color: white; }
  .pb-root :global(.sub) { margin: .5rem 0 0; color: rgba(255,255,255,.72); max-width: 82ch; font-size: .875rem; line-height: 1.6; }

  .pb-root :global(.builder) { padding: 0 0 2rem; }
  .pb-root :global(#builder), .pb-root :global(#plasmid), .pb-root :global(#cart) { scroll-margin-top: 7rem; }
  .pb-root :global(.builder-grid) { display: grid; grid-template-columns: 1.18fr .82fr; gap: 1rem; align-items: start; }
  @media (max-width: 980px) { .pb-root :global(.builder-grid) { grid-template-columns: 1fr; } }

  .pb-root :global(.card h2) { margin: 0 0 .5rem; font-size: 1rem; color: #032130; }
  .pb-root :global(.muted) { color: #6b7280; font-size: .8125rem; line-height: 1.5; }

  /* --- Module buttons --- */
  .pb-root :global(.module-grid) { display: grid; grid-template-columns: repeat(4,1fr); gap: .625rem; margin-top: .75rem; }
  @media (max-width: 980px) { .pb-root :global(.module-grid) { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 620px) { .pb-root :global(.module-grid) { grid-template-columns: 1fr; } }

  .pb-root :global(.module-btn) { display: flex; flex-direction: column; gap: .5rem; padding: .75rem; border-radius: .5rem; border: 1px solid rgba(255,255,255,.12); cursor: pointer; min-height: 6.5rem; transition: transform .08s ease, filter .12s ease; color: #fff; text-align: left; }
  .pb-root :global(.module-btn:hover) { filter: brightness(1.06); }
  .pb-root :global(.module-btn:active) { transform: scale(.99); }
  .pb-root :global(.module-top) { display: flex; justify-content: space-between; align-items: center; gap: .625rem; }
  .pb-root :global(.module-abbr) { font-weight: 850; color: #fff; }
  .pb-root :global(.module-sub) { font-size: .75rem; color: rgba(255,255,255,.8); line-height: 1.35; min-height: 1.875rem; }
  .pb-root :global(.tag) { font-size: .75rem; padding: .375rem .5rem; border-radius: 999px; color: #fff; border: 1px solid rgba(255,255,255,.20); background: rgba(0,0,0,.12); }
  .pb-root :global(.value) { font-size: .8125rem; color: rgba(255,255,255,.95); overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
  .pb-root :global(.value.dim) { color: rgba(255,255,255,.78); }

  .pb-root :global(.mod-bb) { background: linear-gradient(180deg, color-mix(in srgb, var(--bb) 38%, transparent), color-mix(in srgb, var(--bb) 20%, transparent)); border-color: color-mix(in srgb, var(--bb) 62%, white 12%); }
  .pb-root :global(.mod-gRNA) { background: linear-gradient(180deg, color-mix(in srgb, var(--gRNA) 38%, transparent), color-mix(in srgb, var(--gRNA) 20%, transparent)); border-color: color-mix(in srgb, var(--gRNA) 62%, white 12%); }
  .pb-root :global(.mod-pro) { background: linear-gradient(180deg, color-mix(in srgb, var(--pro) 38%, transparent), color-mix(in srgb, var(--pro) 20%, transparent)); border-color: color-mix(in srgb, var(--pro) 62%, white 12%); }
  .pb-root :global(.mod-ed) { background: linear-gradient(180deg, color-mix(in srgb, var(--ed) 38%, transparent), color-mix(in srgb, var(--ed) 20%, transparent)); border-color: color-mix(in srgb, var(--ed) 62%, white 12%); }
  .pb-root :global(.mod-dcas) { background: linear-gradient(180deg, color-mix(in srgb, var(--dcas) 38%, transparent), color-mix(in srgb, var(--dcas) 20%, transparent)); border-color: color-mix(in srgb, var(--dcas) 62%, white 12%); }
  .pb-root :global(.mod-m) { background: linear-gradient(180deg, color-mix(in srgb, var(--mark) 34%, transparent), color-mix(in srgb, var(--mark) 18%, transparent)); border-color: color-mix(in srgb, var(--mark) 62%, white 12%); }
  .pb-root :global(.mod-ter) { background: linear-gradient(180deg, color-mix(in srgb, var(--ter) 38%, transparent), color-mix(in srgb, var(--ter) 20%, transparent)); border-color: color-mix(in srgb, var(--ter) 62%, white 12%); }

  /* --- Plasmid ring (dark panel) --- */
  .pb-root :global(.plasmid-wrap) { display: grid; gap: .75rem; margin-top: .625rem; }
  .pb-root :global(.plasmid-box) {
    position: relative; border-radius: .75rem;
    border: 1px solid rgba(3,33,48,.08);
    background: #0b1220;
    padding: .875rem; min-height: 740px; overflow: hidden;
  }
  .pb-root :global(.plasmid-header) { display: flex; justify-content: space-between; align-items: center; gap: .625rem; margin-bottom: .625rem; color: rgba(255,255,255,.9); }
  .pb-root :global(.plasmid-header .muted) { color: rgba(255,255,255,.6); }
  .pb-root :global(.plasmid-stage) { position: relative; width: 100%; min-height: 650px; }
  .pb-root :global(.plasmid-svg) { width: 100%; height: auto; display: block; }

  .pb-root :global(.ring-label) { position: absolute; padding: .625rem .75rem; border-radius: .5rem; color: #fff; font-size: .75rem; line-height: 1.35; font-weight: 700; cursor: pointer; max-width: 10.625rem; border: 1px solid rgba(255,255,255,.2); box-shadow: 0 .625rem 1.875rem rgba(0,0,0,.18); transition: transform .12s ease, box-shadow .12s ease, filter .12s ease; user-select: none; }
  .pb-root :global(.ring-label:hover) { transform: scale(1.05); box-shadow: 0 0 0 2px rgba(255,255,255,.08), 0 .75rem 2rem rgba(0,0,0,.28); filter: brightness(1.08); }
  .pb-root :global(.ring-label .small) { display: block; font-size: .6875rem; font-weight: 600; opacity: .94; margin-top: .1875rem; }
  .pb-root :global(.ring-label.bb) { background: linear-gradient(180deg, color-mix(in srgb, var(--bb) 44%, transparent), color-mix(in srgb, var(--bb) 24%, transparent)); border-color: color-mix(in srgb, var(--bb) 56%, white 20%); }
  .pb-root :global(.ring-label.gRNA) { background: linear-gradient(180deg, color-mix(in srgb, var(--gRNA) 44%, transparent), color-mix(in srgb, var(--gRNA) 24%, transparent)); border-color: color-mix(in srgb, var(--gRNA) 56%, white 20%); }
  .pb-root :global(.ring-label.pro) { background: linear-gradient(180deg, color-mix(in srgb, var(--pro) 44%, transparent), color-mix(in srgb, var(--pro) 24%, transparent)); border-color: color-mix(in srgb, var(--pro) 56%, white 20%); }
  .pb-root :global(.ring-label.ed) { background: linear-gradient(180deg, color-mix(in srgb, var(--ed) 44%, transparent), color-mix(in srgb, var(--ed) 24%, transparent)); border-color: color-mix(in srgb, var(--ed) 56%, white 20%); }
  .pb-root :global(.ring-label.dcas) { background: linear-gradient(180deg, color-mix(in srgb, var(--dcas) 44%, transparent), color-mix(in srgb, var(--dcas) 24%, transparent)); border-color: color-mix(in srgb, var(--dcas) 56%, white 20%); }
  .pb-root :global(.ring-label.m) { background: linear-gradient(180deg, color-mix(in srgb, var(--mark) 40%, transparent), color-mix(in srgb, var(--mark) 22%, transparent)); border-color: color-mix(in srgb, var(--mark) 56%, white 20%); }
  .pb-root :global(.ring-label.ter) { background: linear-gradient(180deg, color-mix(in srgb, var(--ter) 44%, transparent), color-mix(in srgb, var(--ter) 24%, transparent)); border-color: color-mix(in srgb, var(--ter) 56%, white 20%); }

  /* --- Legend --- */
  .pb-root :global(.legend) { display: flex; gap: .625rem; flex-wrap: wrap; margin-top: .875rem; }
  .pb-root :global(.leg) { display: flex; align-items: center; gap: .5rem; font-size: .75rem; color: rgba(255,255,255,.78); padding: .4375rem .5625rem; border-radius: 999px; border: 1px solid rgba(255,255,255,.10); background: rgba(255,255,255,.03); }
  .pb-root :global(.sw) { width: .625rem; height: .625rem; border-radius: .1875rem; background: var(--bb); }
  .pb-root :global(.sw.gRNA) { background: var(--gRNA); }
  .pb-root :global(.sw.pro) { background: var(--pro); }
  .pb-root :global(.sw.ed) { background: var(--ed); }
  .pb-root :global(.sw.dcas) { background: var(--dcas); }
  .pb-root :global(.sw.mark) { background: var(--mark); }
  .pb-root :global(.sw.ter) { background: var(--ter); }

  /* --- Summary panel --- */
  .pb-root :global(.summary) { display: flex; flex-direction: column; gap: .75rem; position: sticky; top: 6rem; }
  @media (max-width: 980px) { .pb-root :global(.summary) { position: relative; top: auto; } }

  .pb-root :global(.kv) { display: grid; gap: .625rem; margin-top: .625rem; }
  .pb-root :global(.kv .item) { border: 1px solid rgba(3,33,48,.08); background: #f8f9fa; border-radius: .375rem; padding: .75rem; }
  .pb-root :global(.k) { font-size: .75rem; color: #6b7280; }
  .pb-root :global(.v) { font-size: .8125rem; margin-top: .25rem; color: #1f2937; }

  /* --- Action buttons --- */
  .pb-root :global(.btn) {
    width: 100%; padding: .75rem .875rem; border-radius: .25rem;
    border: none; background: #0A415C; color: #fff;
    font-weight: 700; cursor: pointer; transition: background .15s ease;
  }
  .pb-root :global(.btn:hover) { background: #063044; }
  .pb-root :global(.btn:disabled) { cursor: not-allowed; opacity: .45; background: #9ca3af; }
  .pb-root :global(.btn.secondary) { background: transparent; border: 1px solid #d1d5db; color: #374151; }
  .pb-root :global(.btn.secondary:hover) { background: #f3f4f6; }

  /* --- Modal --- */
  .pb-root :global(.modal-back) { position: fixed; inset: 0; background: rgba(0,0,0,.5); display: none; align-items: center; justify-content: center; padding: 1rem; z-index: 50; }
  .pb-root :global(.modal) { width: min(920px, 100%); border-radius: .5rem; border: 1px solid #e5e7eb; background: #032130; box-shadow: 0 1.875rem 7.5rem rgba(0,0,0,.3); overflow: hidden; color: #fff; }
  .pb-root :global(.modal-h) { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1rem .75rem; border-bottom: 1px solid rgba(255,255,255,.1); }
  .pb-root :global(.modal-h h3) { margin: 0; font-size: .9375rem; }
  .pb-root :global(.x) { width: 2.375rem; height: 2.375rem; border-radius: .25rem; border: 1px solid rgba(255,255,255,.15); background: rgba(255,255,255,.05); cursor: pointer; color: #fff; font-size: 1.125rem; }
  .pb-root :global(.modal-b) { padding: .875rem 1rem 1rem; max-height: 70vh; overflow-y: auto; }

  .pb-root :global(.section-title) { margin: .875rem 0 .5rem; font-size: .75rem; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.75); }
  .pb-root :global(.opt-grid) { display: grid; grid-template-columns: repeat(2,1fr); gap: .625rem; }
  @media (max-width: 620px) { .pb-root :global(.opt-grid) { grid-template-columns: 1fr; } }

  .pb-root :global(.opt) { padding: .75rem; border-radius: .375rem; border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.04); cursor: pointer; text-align: left; color: #fff; transition: background .12s ease, transform .08s ease, border-color .12s ease; }
  .pb-root :global(.opt:hover) { background: rgba(255,255,255,.07); }
  .pb-root :global(.opt:active) { transform: scale(.995); }
  .pb-root :global(.opt.active) { background: rgba(255,255,255,.12); border-color: rgba(255,255,255,.42); box-shadow: 0 0 0 1px rgba(255,255,255,.08) inset; }
  .pb-root :global(.opt .t) { font-weight: 800; font-size: .8125rem; color: #fff; }
  .pb-root :global(.opt .d) { margin-top: .375rem; font-size: .75rem; color: rgba(255,255,255,.78); line-height: 1.4; }

  .pb-root :global(.form-row) { display: flex; gap: .625rem; flex-wrap: wrap; margin-top: .75rem; }
  .pb-root :global(.input) { flex: 1; min-width: 13.75rem; padding: .625rem .75rem; border-radius: .25rem; border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.04); color: #fff; outline: none; font-family: inherit; font-size: .8125rem; }
  .pb-root :global(.note) { margin-top: .625rem; font-size: .75rem; color: rgba(255,255,255,.76); }

  /* --- gRNA list --- */
  .pb-root :global(.list) { margin-top: .75rem; border: 1px solid rgba(255,255,255,.10); border-radius: .375rem; overflow: hidden; }
  .pb-root :global(.list .li) { display: flex; align-items: center; justify-content: space-between; gap: .625rem; padding: .625rem .75rem; border-top: 1px solid rgba(255,255,255,.10); background: rgba(255,255,255,.02); }
  .pb-root :global(.list .li:first-child) { border-top: none; }
  .pb-root :global(.li-left) { display: flex; flex-direction: column; gap: .1875rem; min-width: 0; }
  .pb-root :global(.li-left .l1) { font-size: .8125rem; font-weight: 800; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .pb-root :global(.li-left .l2) { font-size: .75rem; color: rgba(255,255,255,.75); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  .pb-root :global(.mini-btn) { padding: .5rem .625rem; border-radius: .25rem; border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.04); color: #fff; cursor: pointer; font-size: .75rem; flex: 0 0 auto; }
  .pb-root :global(.mini-btn:hover) { background: rgba(255,255,255,.07); }

  /* --- Cart --- */
  .pb-root :global(.cart) { margin-top: .625rem; display: grid; gap: .625rem; }
  .pb-root :global(.cart-item) { border: 1px solid rgba(3,33,48,.08); border-radius: .375rem; padding: .75rem; background: #f8f9fa; }
  .pb-root :global(.cart-item .title) { font-size: .8125rem; font-weight: 800; color: #1f2937; }
  .pb-root :global(.cart-item .meta) { margin-top: .375rem; font-size: .75rem; color: #4b5563; line-height: 1.5; }

  /* --- Toast --- */
  .pb-root :global(.toast) { position: fixed; left: 50%; bottom: 1.375rem; transform: translateX(-50%); background: #032130; border: 1px solid rgba(255,255,255,.14); padding: .625rem .875rem; border-radius: .375rem; box-shadow: 0 1.25rem 5rem rgba(0,0,0,.3); color: #fff; font-size: .8125rem; display: none; z-index: 60; }

  @media (max-width: 760px) {
    .pb-root :global(.plasmid-box) { min-height: 760px; }
    .pb-root :global(.plasmid-stage) { min-height: 660px; }
    .pb-root :global(.ring-label) { max-width: 8.75rem; font-size: .6875rem; }
  }

  @media (max-width: 620px) {
    .pb-root :global(.pb-toolbar-nav) { display: none; }
  }
</style>
