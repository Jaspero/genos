import"../chunks/disclose-version.Bg9kRutz.js";import{c as de,p as ve,o as N,v as Le,j as Te,b as fe,f as O,s as g,t as L,a as x,k as M,$ as Ie,d as q,n as F,m as U}from"../chunks/custom-element.Be9JRDZa.js";import{s as Me}from"../chunks/slot.BNbXFTyQ.js";import{i as ge}from"../chunks/lifecycle.Cqhf0dYa.js";import{s as ue,a as G}from"../chunks/store.DrC5Bpkl.js";import{c as Ee}from"../chunks/cart-state.pE4zWL7D.js";import{i as T}from"../chunks/if.DHrsNizm.js";import{h as Se}from"../chunks/html.CRmJumZG.js";import{a as h}from"../chunks/attributes.Cqk6Ie6U.js";import{p as ze}from"../chunks/stores.DitzhFom.js";import{C as B}from"../chunks/config.const.CA_UTROv.js";import{m as He,M as A}from"../chunks/meta.store.ZQREEzaj.js";import{b as Ne,a as Fe,d as Ue,u as De}from"../chunks/firebase.CUWN7pwu.js";import{z as he,H as _e,q as je,K as S,S as be,Q as ye,T as w,W as D,t as _,Z as z,g as y,Y as C,o as $e,_ as J,a as H,h as xe,j as K,I as Pe,s as se,N as Ae,l as ie}from"../chunks/index.DNKoaJak.js";import{o as Ce}from"../chunks/index-client.DfkwVSc5.js";function Je(o){return o?o.includes("<script")?o:`<script type="application/ld+json">${o}<\/script>`:""}var Ke=q('<meta name="author">'),Be=q('<meta name="description">'),Oe=q('<meta name="keywords">'),Ge=q('<meta property="og:type">'),Qe=q('<meta property="og:description"> <meta property="twitter:description">',1),Ve=q('<meta name="robots" content="noindex, nofollow">'),We=q('<meta property="article:author">'),Xe=q('<meta property="article:published_time">'),Ye=q('<meta property="article:modified_time">'),Ze=q('<meta property="article:section">'),Re=q('<meta property="article:tag">'),et=q('<meta property="profile:first_name">'),tt=q('<meta property="profile:last_name">'),rt=q('<meta property="profile:username">'),at=q('<meta property="og:url"> <meta property="twitter:url"> <meta property="twitter:card" content="summary_large_image"> <meta property="og:title"> <meta property="twitter:title"> <meta property="og:image"> <meta property="twitter:image"> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>',1);function we(o,e){ve(e,!1);const r=ue(),t=()=>G(He,"$meta",r),c=()=>G(ze,"$page",r),m=F(),u=F(),f=F(),s=F(),b=F(),k=F();N(()=>(t(),A),()=>{U(m,t().title?t().title+A:A.replace(" | ","").replace(" - ",""))}),N(()=>c(),()=>{U(u,B.websiteUrl+c().url.pathname)}),N(()=>(t(),A),()=>{var p;U(f,(((p=t().og)==null?void 0:p.title)||t().title)+A)}),N(()=>t(),()=>{var p;U(s,((p=t().og)==null?void 0:p.description)||t().description)}),N(()=>(t(),B),()=>{var p;U(b,((p=t().og)==null?void 0:p.image)||B.fallbackSocialImage)}),N(()=>t(),()=>{U(k,Je(t().structured))}),Le(),ge(),Te(p=>{var I=at(),i=O(I),d=g(i,2),l=g(d,4),v=g(l,2),$=g(v,2),j=g($,2),E=g(j,2);T(E,()=>t().author,a=>{var n=Ke();L(()=>h(n,"content",t().author)),x(a,n)});var Q=g(E,2);T(Q,()=>t().description,a=>{var n=Be();L(()=>h(n,"content",t().description)),x(a,n)});var V=g(Q,2);T(V,()=>t().keywords,a=>{var n=Oe();L(()=>h(n,"content",t().keywords)),x(a,n)});var W=g(V,2);T(W,()=>{var a;return(a=t().og)==null?void 0:a.type},a=>{var n=Ge();L(()=>{var P;return h(n,"content",(P=t().og)==null?void 0:P.type)}),x(a,n)});var X=g(W,2);T(X,()=>M(s),a=>{var n=Qe(),P=O(n),ke=g(P,2);L(()=>{h(P,"content",M(s)),h(ke,"content",M(s))}),x(a,n)});var Y=g(X,2);T(Y,()=>t().noIndex,a=>{var n=Ve();x(a,n)});var Z=g(Y,2);T(Z,()=>{var a;return(a=t().og)==null?void 0:a.articleAuthor},a=>{var n=We();L(()=>h(n,"content",t().og.articleAuthor)),x(a,n)});var R=g(Z,2);T(R,()=>{var a;return(a=t().og)==null?void 0:a.articlePublishedTime},a=>{var n=Xe();L(()=>h(n,"content",t().og.articlePublishedTime)),x(a,n)});var ee=g(R,2);T(ee,()=>{var a;return(a=t().og)==null?void 0:a.articleModifiedTime},a=>{var n=Ye();L(()=>h(n,"content",t().og.articleModifiedTime)),x(a,n)});var te=g(ee,2);T(te,()=>{var a;return(a=t().og)==null?void 0:a.articleSection},a=>{var n=Ze();L(()=>h(n,"content",t().og.articleSection)),x(a,n)});var re=g(te,2);T(re,()=>{var a;return(a=t().og)==null?void 0:a.articleTag},a=>{var n=Re();L(()=>h(n,"content",t().og.articleTag)),x(a,n)});var ae=g(re,2);T(ae,()=>{var a;return(a=t().og)==null?void 0:a.profileFirstName},a=>{var n=et();L(()=>h(n,"content",t().og.profileFirstName)),x(a,n)});var oe=g(ae,2);T(oe,()=>{var a;return(a=t().og)==null?void 0:a.profileLastName},a=>{var n=tt();L(()=>h(n,"content",t().og.profileLastName)),x(a,n)});var ne=g(oe,2);T(ne,()=>{var a;return(a=t().og)==null?void 0:a.profileUsername},a=>{var n=rt();L(()=>h(n,"content",t().og.profileUsername)),x(a,n)});var qe=g(ne,2);Se(qe,()=>M(k),!1,!1),L(()=>{Ie.title=M(m),h(i,"content",M(u)),h(d,"content",M(u)),h(l,"content",M(f)),h(v,"content",M(f)),h($,"content",M(b)),h(j,"content",M(b))}),x(p,I)}),fe()}de(we,{},[],[],!0);const ot='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>';function nt(o){ye(o,"svelte-ft09v",".jp-alert.svelte-ft09v{position:fixed;bottom:10px;right:50%;transform:translateX(50%);margin:1rem 0;background-color:white;box-shadow:0 3px 15px 6px rgba(0, 0, 0, 0.2);border-radius:0.5rem;z-index:100}.jp-alert-error.svelte-ft09v{border-left:4px solid var(--danger-color)}.jp-alert-success.svelte-ft09v{border-left:4px solid var(--success-color)}.jp-alert-container.svelte-ft09v{display:flex;flex-direction:column;gap:0.5rem;padding:1rem;max-width:40rem}.jp-alert-container-header.svelte-ft09v{display:flex;align-items:center;justify-content:space-between;gap:1rem}.jp-alert-container-header-inner.svelte-ft09v{display:flex}.jp-alert-container-header-icon.svelte-ft09v{font-size:1.5rem;margin-right:0.5rem}.jp-alert-container-header-title.svelte-ft09v{flex:1 1 0;font-size:1.5rem;font-weight:bold;margin:0}.jp-alert-container-header-close.svelte-ft09v{width:1.5rem;height:1.5rem}.jp-alert-container-message.svelte-ft09v{font-size:0.875rem;margin:0}@media(max-width: 600px){.jp-alert.svelte-ft09v{right:1rem;left:1rem;transform:unset}}")}function st(o){let e;return{c(){e=K("✅")},m(r,t){z(r,e,t)},d(r){r&&H(e)}}}function it(o){let e;return{c(){e=K("⚠️")},m(r,t){z(r,e,t)},d(r){r&&H(e)}}}function ce(o){let e;return{c(){e=w("h2"),_(e,"class","jp-alert-container-header-title svelte-ft09v")},m(r,t){z(r,e,t),e.innerHTML=o[0]},p(r,t){t&1&&(e.innerHTML=r[0])},d(r){r&&H(e)}}}function le(o){let e;return{c(){e=w("p"),_(e,"class","jp-alert-container-message svelte-ft09v")},m(r,t){z(r,e,t),e.innerHTML=o[1]},p(r,t){t&2&&(e.innerHTML=r[1])},d(r){r&&H(e)}}}function ct(o){let e,r,t,c,m,u,f,s,b,k,p,I;function i(j,E){if(j[2]==="error")return it;if(j[2]==="success")return st}let d=i(o),l=d&&d(o),v=o[0]&&ce(o),$=o[1]&&le(o);return{c(){e=w("div"),r=w("div"),t=w("div"),c=w("div"),m=w("div"),l&&l.c(),u=D(),v&&v.c(),f=D(),s=w("button"),b=D(),$&&$.c(),_(m,"class","jp-alert-container-header-icon svelte-ft09v"),_(c,"class","jp-alert-container-header-inner svelte-ft09v"),_(s,"type","button"),_(s,"class","jp-alert-container-header-close svelte-ft09v"),_(t,"class","jp-alert-container-header svelte-ft09v"),_(r,"class","jp-alert-container svelte-ft09v"),_(e,"class",k="jp-alert jp-alert-"+o[2]+" svelte-ft09v")},m(j,E){z(j,e,E),y(e,r),y(r,t),y(t,c),y(c,m),l&&l.m(m,null),y(c,u),v&&v.m(c,null),y(t,f),y(t,s),s.innerHTML=ot,y(r,b),$&&$.m(r,null),p||(I=C(s,"click",$e(o[4])),p=!0)},p(j,[E]){d!==(d=i(j))&&(l&&l.d(1),l=d&&d(j),l&&(l.c(),l.m(m,null))),j[0]?v?v.p(j,E):(v=ce(j),v.c(),v.m(c,null)):v&&(v.d(1),v=null),j[1]?$?$.p(j,E):($=le(j),$.c(),$.m(r,null)):$&&($.d(1),$=null),E&4&&k!==(k="jp-alert jp-alert-"+j[2]+" svelte-ft09v")&&_(e,"class",k)},i:J,o:J,d(j){j&&H(e),l&&l.d(),v&&v.d(),$&&$.d(),p=!1,I()}}}function lt(o,e,r){let{title:t=""}=e,{message:c=""}=e,{state:m="error"}=e;const u=xe(),f=()=>u("close");return o.$$set=s=>{"title"in s&&r(0,t=s.title),"message"in s&&r(1,c=s.message),"state"in s&&r(2,m=s.state)},[t,c,m,u,f]}class mt extends _e{constructor(e){super(),je(this,e,lt,ct,be,{title:0,message:1,state:2},nt)}get title(){return this.$$.ctx[0]}set title(e){this.$$set({title:e}),S()}get message(){return this.$$.ctx[1]}set message(e){this.$$set({message:e}),S()}get state(){return this.$$.ctx[2]}set state(e){this.$$set({state:e}),S()}}try{customElements.define("jp-alert",he(mt,{title:{},message:{},state:{}},[],[],!1))}catch{}function pt(o){function e(){o.dispatchEvent(new CustomEvent("click_outside",o))}function r(c){o&&!o.contains(c.target)&&!c.defaultPrevented&&e()}function t(c){c.key==="Escape"&&e()}return window.addEventListener("keydown",t,!0),document.addEventListener("click",r,!0),{destroy(){document.removeEventListener("click",r,!0),window.removeEventListener("keydown",t,!0)}}}function dt(o){ye(o,"svelte-1g8qqml",".jp-confirm-overlay.svelte-1g8qqml{z-index:10;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.2)}.jp-confirm-dialog.svelte-1g8qqml{background-color:var(--background-primary);border-radius:0.25rem;max-width:20rem}.jp-confirm-dialog-header.svelte-1g8qqml{padding:1rem}.jp-confirm-dialog-header-title.svelte-1g8qqml{font-size:1.5rem}.jp-confirm-dialog-content.svelte-1g8qqml{padding:2rem 1rem}.jp-confirm-dialog-content-border-top.svelte-1g8qqml{border-top:1px solid var(--border-primary)}.jp-confirm-dialog-actions.svelte-1g8qqml{display:flex;justify-content:space-between;border-top:1px solid var(--border-primary);padding:1rem}.jp-confirm-reject-button.svelte-1g8qqml,.jp-confirm-accept-button.svelte-1g8qqml{position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:4rem;padding:0 1rem;border-radius:0.25rem;height:36px;border:none;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;background:none;color:inherit;font-family:inherit;font-size:0.875rem;line-height:1.5;text-transform:uppercase;overflow:hidden}.jp-confirm-reject-button.svelte-1g8qqml{color:var(--danger-color);border:1px solid var(--danger-color)}.jp-confirm-accept-button.svelte-1g8qqml{background-color:var(--primary-color);color:var(--text-on-primary)}")}function me(o){let e,r;return{c(){e=w("div"),r=w("h1"),_(r,"class","jp-confirm-dialog-header-title svelte-1g8qqml"),_(e,"class","jp-confirm-dialog-header svelte-1g8qqml")},m(t,c){z(t,e,c),y(e,r),r.innerHTML=o[0]},p(t,c){c&1&&(r.innerHTML=t[0])},d(t){t&&H(e)}}}function pe(o){let e;return{c(){e=w("p"),_(e,"class","jp-confirm-dialog-content svelte-1g8qqml"),ie(e,"jp-confirm-dialog-content-border-top",o[0])},m(r,t){z(r,e,t),e.innerHTML=o[1]},p(r,t){t&2&&(e.innerHTML=r[1]),t&1&&ie(e,"jp-confirm-dialog-content-border-top",r[0])},d(r){r&&H(e)}}}function vt(o){let e,r,t,c,m,u,f,s,b,k,p,I,i=o[0]&&me(o),d=o[1]&&pe(o);return{c(){e=w("div"),r=w("div"),i&&i.c(),t=D(),d&&d.c(),c=D(),m=w("div"),u=w("button"),f=K(o[2]),s=D(),b=w("button"),k=K(o[3]),_(u,"type","button"),_(u,"class","jp-confirm-reject-button svelte-1g8qqml"),_(b,"type","button"),_(b,"class","jp-confirm-accept-button svelte-1g8qqml"),_(m,"class","jp-confirm-dialog-actions svelte-1g8qqml"),_(r,"class","jp-confirm-dialog svelte-1g8qqml"),_(e,"class","jp-confirm-overlay svelte-1g8qqml")},m(l,v){z(l,e,v),y(e,r),i&&i.m(r,null),y(r,t),d&&d.m(r,null),y(r,c),y(r,m),y(m,u),y(u,f),y(m,s),y(m,b),y(b,k),p||(I=[C(window,"keydown",$e(o[6])),C(u,"click",o[7]),C(b,"click",o[8]),Pe(pt.call(null,r)),C(r,"click_outside",o[9])],p=!0)},p(l,[v]){l[0]?i?i.p(l,v):(i=me(l),i.c(),i.m(r,t)):i&&(i.d(1),i=null),l[1]?d?d.p(l,v):(d=pe(l),d.c(),d.m(r,c)):d&&(d.d(1),d=null),v&4&&se(f,l[2]),v&8&&se(k,l[3])},i:J,o:J,d(l){l&&H(e),i&&i.d(),d&&d.d(),p=!1,Ae(I)}}}function ft(o,e,r){let{title:t=""}=e,{message:c=""}=e,{reject:m=""}=e,{accept:u=""}=e,{closable:f=!1}=e;const s=xe(),b=i=>i.key==="Escape"&&f&&s("close"),k=()=>s("confirmation",{confirmed:!1}),p=()=>s("confirmation",{confirmed:!0}),I=()=>{f&&s("close")};return o.$$set=i=>{"title"in i&&r(0,t=i.title),"message"in i&&r(1,c=i.message),"reject"in i&&r(2,m=i.reject),"accept"in i&&r(3,u=i.accept),"closable"in i&&r(4,f=i.closable)},[t,c,m,u,f,s,b,k,p,I]}class gt extends _e{constructor(e){super(),je(this,e,ft,vt,be,{title:0,message:1,reject:2,accept:3,closable:4},dt)}get title(){return this.$$.ctx[0]}set title(e){this.$$set({title:e}),S()}get message(){return this.$$.ctx[1]}set message(e){this.$$set({message:e}),S()}get reject(){return this.$$.ctx[2]}set reject(e){this.$$set({reject:e}),S()}get accept(){return this.$$.ctx[3]}set accept(e){this.$$set({accept:e}),S()}get closable(){return this.$$.ctx[4]}set closable(e){this.$$set({closable:e}),S()}}try{customElements.define("jp-confirm",he(gt,{title:{},message:{},reject:{},accept:{},closable:{type:"Boolean"}},[],[],!1))}catch{}var ut=q("<!> <!>",1);function ht(o,e){ve(e,!1);const r=ue(),t=()=>G(De,"$user",r);Ce(async()=>{const f=t();let s;const b=localStorage.getItem("cart");if(b&&(s=JSON.parse(b)),f&&f.cartItems&&(s&&s.cartUpdate?s.cartUpdate<f.cartUpdate&&(s={cartItems:f.cartItems}):s={cartItems:f.cartItems}),s&&s.cartItems){const k=await Promise.all(s.cartItems.map(async p=>{const I=await Ne(Fe(Ue,"products",p.id));return I.exists()?{...I.data(),id:p.id,selectedVariant:p.selectedVariant}:null}));Ee.set(k)}}),ge();var c=ut(),m=O(c);Me(m,e,"default",{});var u=g(m,2);we(u,{}),x(o,c),fe()}de(ht,{},["default"],[],!0);export{ht as component};