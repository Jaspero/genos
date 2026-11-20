# WCAG 2.1 AA: genos.hr (branch `a11y-wcag21aa`)

Done on 2026-11-20. "Before" is the live site (genos.hr, deploy of 8d117c0b) and a local production build of main;
"after" is a local production build of this branch (`npm run build:prod` with the full-release build config, served
with clean URLs and Brotli like Firebase Hosting).

Screenshots (not committed): `screenshots/<area>-<desktop|mobile>-<before|after>.png`, and the same pairs side by
side in `compare/<area>-<desktop|mobile>.png`.

## Results

**axe-core 4** (wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa), 1366 px and 390 px:

- Before: color-contrast on every page (9 to 21 nodes), list (services), target-size (services, contact on
  phones), frame-title (news).
- After: **0 violations** on 23 pages in both languages: home/pocetna, services/usluge, publications/publikacije,
  projects/projekti, team/tim, news/novosti, contact/kontakt, about/o-nama, resources/korisni-linkovi, a news post,
  sign-in, sign-up, reset-password, 404, and the plasmid builder. Also 0 in these states: mobile menu open (EN, HR),
  team member dialog open, all service quick links and chart dropdowns open, project details open, news list tab,
  contact form with an invalid e-mail, the reset-password dialog, and each of the 7 plasmid builder dialogs.
  The plasmid builder needs a signed-in user, so it was tested on a local build with the sign-in redirect switched
  off (build only, never committed).
- Text on photos (axe "needs review"), measured from the real pixels behind the text (text hidden, screenshot,
  5th percentile per text box) on 12 page types at 1366 and 390 px: all pass. Lowest: language switch on the bright
  /contact photo 4.6:1, page title "Team" on its photo 3.5:1 (large text, needs 3:1), footer 4.6:1.

**Lighthouse 12**, median of 3 (performance / accessibility / best practices / SEO):

| Page | Live before, mobile | Local after, mobile | Live before, desktop | Local after, desktop |
| --- | --- | --- | --- | --- |
| /home | 48/95/100/100 | 84/100/100/100 | 71/95/100/100 | 98/100/100/100 |
| /usluge | 59/87/100/100 | 84/100/100/100 | 71/91/100/100 | 98/100/100/100 |
| /kontakt | 55/91/100/100 | 83/100/100/100 | 82/95/100/100 | 97/100/100/100 |

Main built and measured locally in the same way: 49/48/52 mobile, 60/60/73 desktop. Performance went up because of
the layout-shift fix (CLS 1.2 to 0) and the intro photo now being in the HTML (mobile LCP 10.9 s to 4.4 s locally).

**Layout shift** (PerformanceObserver, page load): /home 1.10 to 0.001 (desktop) and 0.48 to 0.009 (phone);
/news 0.63 to 0.001 and 0.84 to 0; /contact 0.26 to 0.001 and 1.17 to 0; news post 0.44 to 0.001.

**Keyboard, reflow, text spacing** (Playwright):

- First Tab shows "Skip to content" / "Preskoči na sadržaj"; Enter moves focus to `<main>`.
- Every link, button and field shows a 2 px outline: #0a415c on light backgrounds, white on photos, the header and
  the footer. The header no longer slides away while focus is in it.
- Mobile menu: the button has aria-expanded; opening moves focus to the first link; Tab stays in the menu; Escape
  or "Close"/"Zatvori" closes it and returns focus to the menu button.
- Team member dialog, plasmid builder dialogs and the reset-password dialog: focus moves in, Tab stays inside,
  Escape closes, focus returns to the button that opened them.
- Language switch (EN/HR) is two links with hreflang and aria-current; it works by keyboard and goes to the other
  language version of the same page.
- At 320 px and at 683 px (1366 px at 200 % zoom), with and without WCAG 1.4.12 text spacing: no horizontal
  scrolling on 13 page types after fix 22.

## Issues and fixes

Visual impact is described against the live site.

| # | Issue | WCAG | Fix | Visual impact |
| --- | --- | --- | --- | --- |
| 1 | Croatian pages (/usluge, /tim, ...) had `<html lang="en">`. The language came from localStorage, so a first visit to /usluge showed the English header, footer and blocks. | 3.1.1, 3.1.2 | The page decides the language (`src/lib/i18n/routes.ts` maps the 9 EN/HR page pairs). `hooks.server.ts` writes `lang="hr"` into the prerendered HTML; client navigation updates it. Pages without a language version (sign-in, account) are `en`; plasmid builder, posts and 404 follow the visitor's choice. Header and footer carry their own `lang`. hreflang alternates (en, hr, x-default) on every page pair. | None |
| 2 | og:url and twitter:url pointed at genos-ec52a.web.app | (SEO) | `CONFIG.websiteUrl` is https://genos.hr | None |
| 3 | "© 2025" hard-coded in the footer | | Current year | 2026 |
| 4 | Layout shift ~1.1: every non-block component was compiled as a custom element, so its CSS was injected by JavaScript and the prerendered header and footer were unstyled until the app started; then the page blocks appeared and pushed the footer down | (performance) | Only the `pb-*` blocks are compiled as custom elements (`dynamicCompileOptions` in svelte.config.js), so header and footer CSS is in the stylesheet. The CMS block area and the post page reserve one screen of height (every CMS page is taller than that once drawn, so the final layout is unchanged). | None. A post shorter than the screen would end with extra space above the footer; current posts are longer. |
| 5 | Footer call to action: in the prerendered HTML of Croatian pages it was English (and depended on JS) | 3.1.2 | Rendered in the page language at build time | None |
| 6 | Header links and the language switch: white, 80 % opacity, over bright intro photos (/tim, /kontakt) down to 3.2:1 | 1.4.3 | Links and the inactive language label are full white; the transparent header has a light shade at the top, `rgba(3,33,48,.5)` fading to transparent | Top 112 px of every intro photo slightly darker; header links white instead of light grey. `compare/header-hero-*` |
| 7 | Footer: links at 80 % opacity over the photo, 3.4 to 4.3:1 | 1.4.3 | Links full white (hover underlines); a gradient `rgba(3,33,48,.3)` to transparent over the bottom 45 % of the photo | Bottom of the footer photo slightly darker, links white. `compare/footer-*` |
| 8 | "Global Leaders" text over the lab photo: 3.8:1 on phones | 1.4.3 | 20 % `#032130` shade over the photo | Photo slightly darker. `compare/leaders-*` |
| 9 | Photos sat at z-index -1 outside their box, so contrast tools saw white text on the light page | 1.4.3 | `isolation: isolate` and a `#0a415c` fallback colour on intro, leaders, footer and 404 boxes (only seen if a photo fails to load) | None |
| 10 | Contact form: both fields labelled "Label" (CMS placeholder text); e-mail without autocomplete; field border #c4d8ce 1.4:1; placeholder ~2.5:1 | 2.4.6, 3.3.2, 1.3.5, 1.4.11, 1.4.3 | At build time (stored CMS content unchanged) "Label" before a field named email/message becomes "Email"/"Message" (E-pošta/Poruka), e-mail fields get `autocomplete="email"`. Field border **#7b8f86** (3.4:1), placeholder #6b7280 | Real labels; darker field borders and placeholder. `compare/contact-form-*` |
| 11 | Form results were only a visual toast (not announced); success/error texts were English on Croatian pages; after a failed send the button stayed "loading" | 4.1.3, 3.1.2 | Every alert is also put into a live region (`src/lib/utils/announce.ts`); Croatian texts for the CMS default messages; a failed send keeps the form usable | None |
| 12 | Mobile menu: no aria-expanded, focus stayed behind the menu, Escape did not return focus, the overlay was an unnamed focusable button, social icons had empty alt (unnamed links) | 4.1.2, 2.4.3, 2.1.1, 2.4.4 | Menu is a modal dialog with focus handling; overlay not focusable; icons named "Genos on X / LinkedIn (opens in a new tab)"; new "Close"/"Zatvori" button | One "Close" button at the bottom of the menu. `compare/mobile-menu-mobile` |
| 13 | Language switch was a single button with "EN HR" and no state | 4.1.2, 2.4.4 | Two links (EN, HR) with hreflang, aria-current and hidden full names | None |
| 14 | No skip link, no `<main>`; nested `<main>` in account settings | 2.4.1, 1.3.1 | Skip link (shown on focus; handles `<base href="/">`), `<main id="main">` in the layout, the inner one is a div | Skip link visible only on keyboard focus. `compare/skip-link-*` |
| 15 | No visible focus on most controls (inputs used `outline-none`); service chart dropdowns are invisible checkboxes | 2.4.7 | Global `:focus-visible` outline; on the dropdowns the outline is drawn on the visible header | Keyboard only. `compare/focus-header-*` |
| 16 | Team member dialog: no dialog role or name, focus not moved, no Escape, close button unnamed | 4.1.2, 2.4.3, 2.1.2 | role="dialog", aria-modal, labelled by the name; focus to "Close", Tab trapped, Escape, focus back to the person | None |
| 17 | Services: quick-link toggles and project "More details" without expanded state; three `<ul>` with text directly inside; 7 result charts with empty alt | 4.1.2, 1.3.1, 1.1.1 | aria-expanded/aria-controls; the lists nest correctly (same look); charts named "Chart: Analysis of ..." / "Grafikon: Analiza ..." | None |
| 18 | Small targets: GENBird PDF links 18 px, phone numbers on /kontakt 22.5 px, services quick sub-links 18 px | 2.5.8 | 24 px minimum height | GENBird list lines and quick sub-links 6 px further apart; phone numbers 1.5 px. `compare/services-*`, `compare/contact-phones-*` |
| 19 | Partner logo strips had alt "projects" and "sniversities"; About photos had alt "glycanage kit"; news images repeated the title | 1.1.1 | Logo strips list the names shown; About and news images are decorative (alt="") | None |
| 20 | LinkedIn feed iframe without title; news filter buttons without state; "Load more" could be empty | 4.1.2 | iframe title; aria-pressed; fallback label | None |
| 21 | Plasmid builder: dialog without name, close "×" unnamed, focus not moved/returned, option buttons showed the selection by colour only, 10 fields labelled only by placeholder, field borders 1.6:1, toasts not announced, SVG ring with unnamed role="button" paths inside role="img" | 4.1.2, 2.4.3, 1.4.1, 3.3.2, 1.4.11, 4.1.3 | Dialog labelled by its title with focus handling; "Close"; aria-pressed on options; visible labels above the fields; borders white 40 %; toasts announced; the SVG click areas are hidden from assistive tech (the module labels next to the ring do the same and work by keyboard, now also with Space) | Small labels above the text fields in the dialogs; slightly brighter field borders |
| 22 | A publication title with a long unbroken word scrolled sideways at 320 px with text spacing | 1.4.10, 1.4.12 | `overflow-wrap: anywhere` on publication cards | None |
| 23 | Sign-in/up: links #1486ad 4.2:1, "or" #9ca3af 2.5:1, field borders slate-300 1.5:1; account pages used gray-400 text | 1.4.3, 1.4.11 | Links **#127a9e**, "or" #6b7280, borders slate-500, gray-500 text | Links a shade darker, field borders darker. `compare/sign-in-*` |
| 24 | Page titles: English contact page titled "Kontakt" (CMS), 404 and sign-up and plasmid builder titled "Home" | 2.4.2 | "Contact" on the English page (build-time, only when the stored title is "Kontakt"); titles for 404 (translated), Sign Up, Plasmid builder / Izrada plazmida | None |
| 25 | News post: title was an h2, no h1 | 1.3.1 | h1 with the same size | None |
| 26 | Intro photo was added by JavaScript (late LCP) | (performance) | The photo is in the prerendered HTML with fetchpriority="high"; the pb-intro block reuses it | None |
| 27 | No reduced-motion handling | 2.3.3 (AAA, good practice) | CSS transitions/animations shortened under prefers-reduced-motion | None |

## Not changed

- The Swiper library still loads (deferred), but no current page has a slider, so nothing moves on its own.
- The LinkedIn feed is a third-party iframe (SociableKit); its inside is outside this site's control.
- Some news post titles are stored in Croatian only and are used for the browser tab title on the English
  view of the post (CMS content).
- Shared styles (`shared/`) were not touched, so the CMS does not need a redeploy; all overrides are in
  `web/src/lib/styles/a11y.css`.
