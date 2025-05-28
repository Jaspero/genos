import"../chunks/disclose-version.Bg9kRutz.js";import{c as de,p as he,o as V,v as Je,j as Oe,d as be,t as _,f as ae,k as p,a as $,b as x,s as d,m as K,l as T,$ as Be,x as Z,e as H,r as E,y as fe,ag as Ve,g as ne}from"../chunks/custom-element.DQtPqtwV.js";import{s as Qe}from"../chunks/slot.BkgQLmME.js";import{a as we}from"../chunks/css.osYD52Gu.js";import{i as ke}from"../chunks/lifecycle.By80OOUV.js";import{s as me,a as R}from"../chunks/store.iOtDhSer.js";import{c as Re}from"../chunks/cart-state.D66Ex9__.js";import{i as P}from"../chunks/if.BrBjDjp-.js";import{h as Se}from"../chunks/html.Dn7-qKOW.js";import{a as k}from"../chunks/attributes.Ip4Mnoum.js";import{p as Me}from"../chunks/stores.D0nb5q9X.js";import{C as ge}from"../chunks/config.const.CA_UTROv.js";import{m as We,M as ee}from"../chunks/meta.store.M4SqyN1h.js";import{b as Xe,a as Ze,d as et,u as tt}from"../chunks/firebase.ByBy7bFy.js";import{z as Pe,H as He,q as Ne,K as G,S as Fe,Q as Ue,_ as le,a as J,t as q,Z as O,g as L,Y as te,o as De,T as I,W as Q,h as Ke,j as ce,N as nt,s as ye,I as at,l as xe}from"../chunks/index.CRqRBLuz.js";import{o as Ae}from"../chunks/index-client.cakr4NJt.js";import{e as _e,i as je}from"../chunks/each.CBDd4fNw.js";import{t as B}from"../chunks/class.DzKL41hs.js";import{t as $e,a as qe}from"../chunks/index.DUavQ0dq.js";import{g as Le}from"../chunks/entry.DVj4g2N4.js";import{l as ue}from"../chunks/language.CzC4Du2W.js";function ot(a){return a?a.includes("<script")?a:`<script type="application/ld+json">${a}<\/script>`:""}var rt=_('<meta name="author">'),st=_('<meta name="description">'),it=_('<meta name="keywords">'),lt=_('<meta property="og:type">'),ct=_('<meta property="og:description"> <meta property="twitter:description">',1),dt=_('<meta name="robots" content="noindex, nofollow">'),mt=_('<meta property="article:author">'),pt=_('<meta property="article:published_time">'),vt=_('<meta property="article:modified_time">'),gt=_('<meta property="article:section">'),ft=_('<meta property="article:tag">'),ut=_('<meta property="profile:first_name">'),ht=_('<meta property="profile:last_name">'),bt=_('<meta property="profile:username">'),wt=_('<meta property="og:url"> <meta property="twitter:url"> <meta property="twitter:card" content="summary_large_image"> <meta property="og:title"> <meta property="twitter:title"> <meta property="og:image"> <meta property="twitter:image"> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>',1);function Ye(a,t){he(t,!1);const n=me(),e=()=>R(We,"$meta",n),r=()=>R(Me,"$page",n),v=K(),u=K(),b=K(),i=K(),h=K(),g=K();V(()=>(e(),ee),()=>{T(v,e().title?e().title+ee:ee.replace(" | ","").replace(" - ",""))}),V(()=>r(),()=>{T(u,ge.websiteUrl+r().url.pathname)}),V(()=>(e(),ee),()=>{var f;T(b,(((f=e().og)==null?void 0:f.title)||e().title)+ee)}),V(()=>e(),()=>{var f;T(i,((f=e().og)==null?void 0:f.description)||e().description)}),V(()=>(e(),ge),()=>{var f;T(h,((f=e().og)==null?void 0:f.image)||ge.fallbackSocialImage)}),V(()=>e(),()=>{T(g,ot(e().structured))}),Je(),ke(),Oe(f=>{var S=wt(),l=ae(S),m=d(l,2),c=d(m,4),w=d(c,2),j=d(w,2),y=d(j,2),F=d(y,2);P(F,()=>e().author,o=>{var s=rt();$(()=>k(s,"content",e().author)),x(o,s)});var W=d(F,2);P(W,()=>e().description,o=>{var s=st();$(()=>k(s,"content",e().description)),x(o,s)});var Y=d(W,2);P(Y,()=>e().keywords,o=>{var s=it();$(()=>k(s,"content",e().keywords)),x(o,s)});var X=d(Y,2);P(X,()=>{var o;return(o=e().og)==null?void 0:o.type},o=>{var s=lt();$(()=>{var U;return k(s,"content",(U=e().og)==null?void 0:U.type)}),x(o,s)});var oe=d(X,2);P(oe,()=>p(i),o=>{var s=ct(),U=ae(s),ve=d(U,2);$(()=>{k(U,"content",p(i)),k(ve,"content",p(i))}),x(o,s)});var re=d(oe,2);P(re,()=>e().noIndex,o=>{var s=dt();x(o,s)});var se=d(re,2);P(se,()=>{var o;return(o=e().og)==null?void 0:o.articleAuthor},o=>{var s=mt();$(()=>k(s,"content",e().og.articleAuthor)),x(o,s)});var M=d(se,2);P(M,()=>{var o;return(o=e().og)==null?void 0:o.articlePublishedTime},o=>{var s=pt();$(()=>k(s,"content",e().og.articlePublishedTime)),x(o,s)});var z=d(M,2);P(z,()=>{var o;return(o=e().og)==null?void 0:o.articleModifiedTime},o=>{var s=vt();$(()=>k(s,"content",e().og.articleModifiedTime)),x(o,s)});var N=d(z,2);P(N,()=>{var o;return(o=e().og)==null?void 0:o.articleSection},o=>{var s=gt();$(()=>k(s,"content",e().og.articleSection)),x(o,s)});var D=d(N,2);P(D,()=>{var o;return(o=e().og)==null?void 0:o.articleTag},o=>{var s=ft();$(()=>k(s,"content",e().og.articleTag)),x(o,s)});var C=d(D,2);P(C,()=>{var o;return(o=e().og)==null?void 0:o.profileFirstName},o=>{var s=ut();$(()=>k(s,"content",e().og.profileFirstName)),x(o,s)});var A=d(C,2);P(A,()=>{var o;return(o=e().og)==null?void 0:o.profileLastName},o=>{var s=ht();$(()=>k(s,"content",e().og.profileLastName)),x(o,s)});var ie=d(A,2);P(ie,()=>{var o;return(o=e().og)==null?void 0:o.profileUsername},o=>{var s=bt();$(()=>k(s,"content",e().og.profileUsername)),x(o,s)});var pe=d(ie,2);Se(pe,()=>p(g)),$(()=>{Be.title=p(v),k(l,"content",p(u)),k(m,"content",p(u)),k(c,"content",p(b)),k(w,"content",p(b)),k(j,"content",p(h)),k(y,"content",p(h))}),x(f,S)}),be()}de(Ye,{},[],[],!0);const kt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>';function yt(a){Ue(a,"svelte-ft09v",".jp-alert.svelte-ft09v{position:fixed;bottom:10px;right:50%;transform:translateX(50%);margin:1rem 0;background-color:white;box-shadow:0 3px 15px 6px rgba(0, 0, 0, 0.2);border-radius:0.5rem;z-index:100}.jp-alert-error.svelte-ft09v{border-left:4px solid var(--danger-color)}.jp-alert-success.svelte-ft09v{border-left:4px solid var(--success-color)}.jp-alert-container.svelte-ft09v{display:flex;flex-direction:column;gap:0.5rem;padding:1rem;max-width:40rem}.jp-alert-container-header.svelte-ft09v{display:flex;align-items:center;justify-content:space-between;gap:1rem}.jp-alert-container-header-inner.svelte-ft09v{display:flex}.jp-alert-container-header-icon.svelte-ft09v{font-size:1.5rem;margin-right:0.5rem}.jp-alert-container-header-title.svelte-ft09v{flex:1 1 0;font-size:1.5rem;font-weight:bold;margin:0}.jp-alert-container-header-close.svelte-ft09v{width:1.5rem;height:1.5rem}.jp-alert-container-message.svelte-ft09v{font-size:0.875rem;margin:0}@media(max-width: 600px){.jp-alert.svelte-ft09v{right:1rem;left:1rem;transform:unset}}")}function xt(a){let t;return{c(){t=ce("✅")},m(n,e){O(n,t,e)},d(n){n&&J(t)}}}function _t(a){let t;return{c(){t=ce("⚠️")},m(n,e){O(n,t,e)},d(n){n&&J(t)}}}function ze(a){let t;return{c(){t=I("h2"),q(t,"class","jp-alert-container-header-title svelte-ft09v")},m(n,e){O(n,t,e),t.innerHTML=a[0]},p(n,e){e&1&&(t.innerHTML=n[0])},d(n){n&&J(t)}}}function Te(a){let t;return{c(){t=I("p"),q(t,"class","jp-alert-container-message svelte-ft09v")},m(n,e){O(n,t,e),t.innerHTML=a[1]},p(n,e){e&2&&(t.innerHTML=n[1])},d(n){n&&J(t)}}}function jt(a){let t,n,e,r,v,u,b,i,h,g,f,S;function l(y,F){if(y[2]==="error")return _t;if(y[2]==="success")return xt}let m=l(a),c=m&&m(a),w=a[0]&&ze(a),j=a[1]&&Te(a);return{c(){t=I("div"),n=I("div"),e=I("div"),r=I("div"),v=I("div"),c&&c.c(),u=Q(),w&&w.c(),b=Q(),i=I("button"),h=Q(),j&&j.c(),q(v,"class","jp-alert-container-header-icon svelte-ft09v"),q(r,"class","jp-alert-container-header-inner svelte-ft09v"),q(i,"type","button"),q(i,"class","jp-alert-container-header-close svelte-ft09v"),q(e,"class","jp-alert-container-header svelte-ft09v"),q(n,"class","jp-alert-container svelte-ft09v"),q(t,"class",g="jp-alert jp-alert-"+a[2]+" svelte-ft09v")},m(y,F){O(y,t,F),L(t,n),L(n,e),L(e,r),L(r,v),c&&c.m(v,null),L(r,u),w&&w.m(r,null),L(e,b),L(e,i),i.innerHTML=kt,L(n,h),j&&j.m(n,null),f||(S=te(i,"click",De(a[4])),f=!0)},p(y,[F]){m!==(m=l(y))&&(c&&c.d(1),c=m&&m(y),c&&(c.c(),c.m(v,null))),y[0]?w?w.p(y,F):(w=ze(y),w.c(),w.m(r,null)):w&&(w.d(1),w=null),y[1]?j?j.p(y,F):(j=Te(y),j.c(),j.m(n,null)):j&&(j.d(1),j=null),F&4&&g!==(g="jp-alert jp-alert-"+y[2]+" svelte-ft09v")&&q(t,"class",g)},i:le,o:le,d(y){y&&J(t),c&&c.d(),w&&w.d(),j&&j.d(),f=!1,S()}}}function $t(a,t,n){let{title:e=""}=t,{message:r=""}=t,{state:v="error"}=t;const u=Ke(),b=()=>u("close");return a.$$set=i=>{"title"in i&&n(0,e=i.title),"message"in i&&n(1,r=i.message),"state"in i&&n(2,v=i.state)},[e,r,v,u,b]}class qt extends He{constructor(t){super(),Ne(this,t,$t,jt,Fe,{title:0,message:1,state:2},yt)}get title(){return this.$$.ctx[0]}set title(t){this.$$set({title:t}),G()}get message(){return this.$$.ctx[1]}set message(t){this.$$set({message:t}),G()}get state(){return this.$$.ctx[2]}set state(t){this.$$set({state:t}),G()}}try{customElements.define("jp-alert",Pe(qt,{title:{},message:{},state:{}},[],[],!1))}catch{}function Lt(a){function t(){a.dispatchEvent(new CustomEvent("click_outside",a))}function n(r){a&&!a.contains(r.target)&&!r.defaultPrevented&&t()}function e(r){r.key==="Escape"&&t()}return window.addEventListener("keydown",e,!0),document.addEventListener("click",n,!0),{destroy(){document.removeEventListener("click",n,!0),window.removeEventListener("keydown",e,!0)}}}function zt(a){Ue(a,"svelte-1g8qqml",".jp-confirm-overlay.svelte-1g8qqml{z-index:10;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.2)}.jp-confirm-dialog.svelte-1g8qqml{background-color:var(--background-primary);border-radius:0.25rem;max-width:20rem}.jp-confirm-dialog-header.svelte-1g8qqml{padding:1rem}.jp-confirm-dialog-header-title.svelte-1g8qqml{font-size:1.5rem}.jp-confirm-dialog-content.svelte-1g8qqml{padding:2rem 1rem}.jp-confirm-dialog-content-border-top.svelte-1g8qqml{border-top:1px solid var(--border-primary)}.jp-confirm-dialog-actions.svelte-1g8qqml{display:flex;justify-content:space-between;border-top:1px solid var(--border-primary);padding:1rem}.jp-confirm-reject-button.svelte-1g8qqml,.jp-confirm-accept-button.svelte-1g8qqml{position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:4rem;padding:0 1rem;border-radius:0.25rem;height:36px;border:none;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;background:none;color:inherit;font-family:inherit;font-size:0.875rem;line-height:1.5;text-transform:uppercase;overflow:hidden}.jp-confirm-reject-button.svelte-1g8qqml{color:var(--danger-color);border:1px solid var(--danger-color)}.jp-confirm-accept-button.svelte-1g8qqml{background-color:var(--primary-color);color:var(--text-on-primary)}")}function Ee(a){let t,n;return{c(){t=I("div"),n=I("h1"),q(n,"class","jp-confirm-dialog-header-title svelte-1g8qqml"),q(t,"class","jp-confirm-dialog-header svelte-1g8qqml")},m(e,r){O(e,t,r),L(t,n),n.innerHTML=a[0]},p(e,r){r&1&&(n.innerHTML=e[0])},d(e){e&&J(t)}}}function Ie(a){let t;return{c(){t=I("p"),q(t,"class","jp-confirm-dialog-content svelte-1g8qqml"),xe(t,"jp-confirm-dialog-content-border-top",a[0])},m(n,e){O(n,t,e),t.innerHTML=a[1]},p(n,e){e&2&&(t.innerHTML=n[1]),e&1&&xe(t,"jp-confirm-dialog-content-border-top",n[0])},d(n){n&&J(t)}}}function Tt(a){let t,n,e,r,v,u,b,i,h,g,f,S,l=a[0]&&Ee(a),m=a[1]&&Ie(a);return{c(){t=I("div"),n=I("div"),l&&l.c(),e=Q(),m&&m.c(),r=Q(),v=I("div"),u=I("button"),b=ce(a[2]),i=Q(),h=I("button"),g=ce(a[3]),q(u,"type","button"),q(u,"class","jp-confirm-reject-button svelte-1g8qqml"),q(h,"type","button"),q(h,"class","jp-confirm-accept-button svelte-1g8qqml"),q(v,"class","jp-confirm-dialog-actions svelte-1g8qqml"),q(n,"class","jp-confirm-dialog svelte-1g8qqml"),q(t,"class","jp-confirm-overlay svelte-1g8qqml")},m(c,w){O(c,t,w),L(t,n),l&&l.m(n,null),L(n,e),m&&m.m(n,null),L(n,r),L(n,v),L(v,u),L(u,b),L(v,i),L(v,h),L(h,g),f||(S=[te(window,"keydown",De(a[6])),te(u,"click",a[7]),te(h,"click",a[8]),at(Lt.call(null,n)),te(n,"click_outside",a[9])],f=!0)},p(c,[w]){c[0]?l?l.p(c,w):(l=Ee(c),l.c(),l.m(n,e)):l&&(l.d(1),l=null),c[1]?m?m.p(c,w):(m=Ie(c),m.c(),m.m(n,r)):m&&(m.d(1),m=null),w&4&&ye(b,c[2]),w&8&&ye(g,c[3])},i:le,o:le,d(c){c&&J(t),l&&l.d(),m&&m.d(),f=!1,nt(S)}}}function Et(a,t,n){let{title:e=""}=t,{message:r=""}=t,{reject:v=""}=t,{accept:u=""}=t,{closable:b=!1}=t;const i=Ke(),h=l=>l.key==="Escape"&&b&&i("close"),g=()=>i("confirmation",{confirmed:!1}),f=()=>i("confirmation",{confirmed:!0}),S=()=>{b&&i("close")};return a.$$set=l=>{"title"in l&&n(0,e=l.title),"message"in l&&n(1,r=l.message),"reject"in l&&n(2,v=l.reject),"accept"in l&&n(3,u=l.accept),"closable"in l&&n(4,b=l.closable)},[e,r,v,u,b,i,h,g,f,S]}class It extends He{constructor(t){super(),Ne(this,t,Et,Tt,Fe,{title:0,message:1,reject:2,accept:3,closable:4},zt)}get title(){return this.$$.ctx[0]}set title(t){this.$$set({title:t}),G()}get message(){return this.$$.ctx[1]}set message(t){this.$$set({message:t}),G()}get reject(){return this.$$.ctx[2]}set reject(t){this.$$set({reject:t}),G()}get accept(){return this.$$.ctx[3]}set accept(t){this.$$set({accept:t}),G()}get closable(){return this.$$.ctx[4]}set closable(t){this.$$set({closable:t}),G()}}try{customElements.define("jp-confirm",Pe(It,{title:{},message:{},reject:{},accept:{},closable:{type:"Boolean"}},[],[],!1))}catch{}var St=_('<a class="svelte-1kmwoty"> </a>'),Mt=_('<a class="svelte-1kmwoty"> </a>'),Pt=_('<button class="overlay"></button> <div class="menu svelte-1kmwoty"><div class="menu-links svelte-1kmwoty"><a class="svelte-1kmwoty"> </a> <!></div> <div class="filler"></div> <div class="socials"><a href="https://x.com/gglycoscience?lang=hr" target="_blank" rel="noreferrer noopener" class="svelte-1kmwoty"><img src="/socials/x.svg" alt=""></a> <a href="https://www.linkedin.com/company/genos-ltd/posts/?feedView=all" target="_blank" rel="noreferrer noopener" class="svelte-1kmwoty"><img src="/socials/linkedin.svg" alt=""></a></div></div>',1),Ht=_('<header class="navigation svelte-1kmwoty"><nav class="svelte-1kmwoty"><a class="svelte-1kmwoty"><img class="logo svelte-1kmwoty" src="/brand/genos-logo-white.svg" alt="genos logo"></a> <div class="links svelte-1kmwoty"></div> <div class="flex gap-8"><button class="language-toggle svelte-1kmwoty"><span class="svelte-1kmwoty">EN</span> <span class="svelte-1kmwoty">HR</span></button> <button class="menu-toggle svelte-1kmwoty"><img src="/icons/menu.svg" alt=""></button></div></nav></header> <!>',1);const Nt={hash:"svelte-1kmwoty",code:`
    .navigation.svelte-1kmwoty {
        z-index: 11;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        transition: .25s;

        &.inactive {
            transform: translateY(-100%);
        }

        &.scrolled {
            background-color: #032130;
        }

        nav:where(.svelte-1kmwoty) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 87.5rem;
            margin: 0 auto;
            padding: 2rem 3rem;
            gap: 1rem;
            @media (max-width: 1100px) {
                padding: 2rem;
            }

            .logo:where(.svelte-1kmwoty) {
                height: 3rem;
                @media (max-width: 1100px) {
                    height: 2rem;
                }
            }

            .links:where(.svelte-1kmwoty) {
                display: flex;
                gap: 1.5rem;
                color: white;

                @media (max-width: 1100px) {
                    gap: 1rem;
                }
                @media (max-width: 1000px) {
                    font-size: .875rem;
                }
                @media (max-width: 730px) {
                    display: none;
                }
                a:where(.svelte-1kmwoty) {
                    font-weight: 600;
                    opacity: .8;
                    transition: .25s;
                    /* (empty) &.contact {
                    }*/
                    &:hover {
                        opacity: 1;
                    }
                    &.active {
                        opacity: 1;
                        text-decoration: underline;
                        text-underline-offset: .75rem;
                        text-decoration-thickness: .125rem;
                        text-decoration-color: #FFD500;
                    }
                }
            }
        }
    }

    .language-toggle.svelte-1kmwoty {
        display: flex;
        border: 1px solid white;
        border-radius: 999px;
        padding: .25rem;
        @media (max-width: 1000px) {
            padding: .125rem;
        }

        span:where(.svelte-1kmwoty) {
            border-radius: 999px;
            padding: .125rem .5rem;
            font-size: .75rem;
            font-weight: bold;
            color: rgba(255,255,255,.8);
            &.active {
                color: #032130;
                background-color: white;
            }
        }
    }

    .menu-toggle.svelte-1kmwoty {
        @media (min-width: 731px) {
            display: none;
        }
    }

    .menu.svelte-1kmwoty {
        z-index: 11;
        position: fixed;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        max-width: 16rem;
        padding: .5rem 0;
        background-color: white;

        .menu-links:where(.svelte-1kmwoty) {
            display: flex;
            flex-direction: column;

            a:where(.svelte-1kmwoty) {
                padding: .75rem 1rem;
                font-weight: bold;
                opacity: .75;
                transition: .25s;

                &:hover, &.active {
                    background-color: rgba(0,0,0,.08);
                    opacity: 1;
                }
            }
        }
    }
`};function Ce(a,t){he(t,!1),we(a,Nt);const n=me(),e=()=>R(Me,"$page",n),r=()=>R(ue,"$language",n);let v=K(0),u=0,b=K(!0),i=K(!1),h=K(!1),g=[{hr:{label:"O nama",link:"/o-nama"},en:{label:"About",link:"/about"}},{hr:{label:"Projekti",link:"/projekti"},en:{label:"Projects",link:"/projects"}},{hr:{label:"Publikacije",link:"/publikacije"},en:{label:"Publications",link:"/publications"}},{hr:{label:"Usluge",link:"/usluge"},en:{label:"Services",link:"/services"}},{hr:{label:"Korisni linkovi",link:"/korisni-linkovi"},en:{label:"Resources",link:"/resources"}},{hr:{label:"Tim",link:"/tim"},en:{label:"Team",link:"/team"}},{hr:{label:"Novosti",link:"/novosti"},en:{label:"News",link:"/news"}},{hr:{label:"Kontakt",link:"/kontakt"},en:{label:"Contact",link:"/contact"}}];function f(){const M=window.scrollY;M>96&&M>u?T(b,!1):T(b,!0),u=M,T(v,M)}function S(M){M.key==="Escape"&&T(i,!1)}function l(){p(h)||(T(h,!0),setTimeout(()=>{T(h,!1)},500),ue.update(M=>{const z=M==="en"?"hr":"en";if(typeof window>"u")return z;localStorage.setItem("language",z);const N={"/":"/pocetna","/pocetna":"/","/about":"/o-nama","/o-nama":"/about","/projects":"/projekti","/projekti":"/projects","/publications":"/publikacije","/publikacije":"/publications","/services":"/usluge","/usluge":"/services","/resources":"/korisni-linkovi","/korisni-linkovi":"/resources","/news":"/novosti","/novosti":"/news","/team":"/tim","/tim":"/team","/contact":"/kontakt","/kontakt":"/contact","/glikomika":"/glycomics","/glycomics":"/glikomika","/epigenetika":"/epigenetics","/epigenetics":"/epigenetika","/dnk-i-forenzika":"/dna-and-forensics","/dna-and-forensics":"/dnk-i-forenzika"},D=window.location.pathname,C=N[D]||(z==="en"?"/":"/pocetna");return C!==D&&Le(C),z}))}Ae(()=>(f(),window.addEventListener("scroll",f),window.addEventListener("keydown",S),window.location.pathname==="/"&&localStorage.getItem("language")==="hr"&&Le("/pocetna"),()=>{window.removeEventListener("scroll",f),window.removeEventListener("keydown",S)})),ke();var m=Ht(),c=ae(m);const w=Ve(()=>p(v)>96||e().url.pathname.includes("/posts/"));$(()=>B(c,"scrolled",p(w)));var j=H(c),y=H(j),F=d(y,2);_e(F,5,()=>g,je,(M,z)=>{var N=St(),D=H(N);E(N),$(()=>{k(N,"href",r()==="en"?p(z).en.link:p(z).hr.link),B(N,"active",(r()==="en"?p(z).en.link:p(z).hr.link)===e().url.pathname),ne(D,r()==="en"?p(z).en.label:p(z).hr.label)}),x(M,N)}),E(F);var W=d(F,2),Y=H(W),X=H(Y),oe=d(X,2);E(Y);var re=d(Y,2);E(W),E(j),E(c);var se=d(c,2);P(se,()=>p(i),M=>{var z=Pt(),N=ae(z),D=d(N,2),C=H(D),A=H(C),ie=H(A);E(A);var pe=d(A,2);_e(pe,1,()=>g,je,(o,s)=>{var U=Mt(),ve=H(U);E(U),$(()=>{k(U,"href",r()==="en"?p(s).en.link:p(s).hr.link),B(U,"active",(r()==="en"?p(s).en.link:p(s).hr.link)===e().url.pathname),ne(ve,r()==="en"?p(s).en.label:p(s).hr.label)}),Z("click",U,()=>T(i,!1)),x(o,U)}),E(C),fe(4),E(D),$(()=>{k(A,"href",r()==="en"?"/":"/pocetna"),B(A,"active",(r()==="en"?"/":"/pocetna")===e().url.pathname),ne(ie,r()==="en"?"Home":"Početna")}),$e(3,N,()=>qe),Z("click",N,()=>T(i,!1)),Z("click",A,()=>T(i,!1)),$e(3,D,()=>qe,()=>({y:-1e3})),x(M,z)}),$(()=>{B(c,"inactive",!p(b)),k(y,"href",r()==="en"?"/":"/pocetna"),Y.disabled=p(h),B(X,"active",r()==="en"),B(oe,"active",r()==="hr")}),Z("click",Y,()=>{l()}),Z("click",re,()=>T(i,!p(i))),x(a,m),be()}de(Ce,{},[],[],!0);var Ft=_('<footer class="spacer svelte-ddg00p"><div><img src="/brand/genos-logo-white.svg" alt="genos logo" class="footer-logo svelte-ddg00p"></div> <h2 class="footer-title svelte-ddg00p"><!></h2> <div class="flex-1"></div> <div class="subfooter svelte-ddg00p"><div class="subfooter-social svelte-ddg00p"><a href="https://www.linkedin.com/company/genos-ltd" target="_blank" class="svelte-ddg00p"><img src="/icons/linkedin.svg" alt="linkedin"></a> <a href="https://x.com/gglycoscience" target="_blank" class="svelte-ddg00p"><img src="/icons/x.svg" alt="x"></a></div> <div class="subfooter-legal svelte-ddg00p"><a href="/privacy-policy.pdf" target="_blank" class="svelte-ddg00p"> </a> <a href="/gep.pdf" target="_blank" class="svelte-ddg00p"> </a></div> <div class="subfooter-contact svelte-ddg00p"><a href="mailto:info@genos.hr" class="svelte-ddg00p">info@genos.hr</a> <span>© 2025 Genos Glyco</span></div></div> <img class="footer-bg svelte-ddg00p" src="/images/footer.jpg" alt=""></footer>');const Ut={hash:"svelte-ddg00p",code:`
    footer.svelte-ddg00p {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 29rem;
        padding: 3.5rem 3.5rem 2rem;
        gap: 3rem;
        @media (max-width: 600px) {
            gap: 1rem;
            padding: 1.5rem;
        }
    }

    .footer-logo.svelte-ddg00p {
        height: 3rem;
    }

    .footer-title.svelte-ddg00p {
        max-width: 44ch;
        color: white;
    }

    .subfooter.svelte-ddg00p {
        display: flex;
        gap: 2rem;
        border-top: 1px solid rgba(255,255,255,.4);
        padding-top: 2rem;
        font-weight: 600;
        color: white;
        @media (max-width: 600px) {
            flex-direction: column;
            padding-top: 1.5rem;
            gap: 1rem;
        }
    }

    .subfooter.svelte-ddg00p a:where(.svelte-ddg00p) {
        opacity: .8;
        transition: .25s;
    }

    .subfooter.svelte-ddg00p a:where(.svelte-ddg00p):hover {
        opacity: 1;
    }

    .subfooter-social.svelte-ddg00p {
        display: flex;
        gap: .5rem;
    }

    .subfooter-legal.svelte-ddg00p {
        flex: 1 1 0;
    }

    .subfooter-legal.svelte-ddg00p, .subfooter-contact.svelte-ddg00p {
        display: flex;
        gap: 1.5rem;
    }

    .footer-bg.svelte-ddg00p {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: .5rem;
        -o-object-fit: cover;
           object-fit: cover;
    }
`};function Ge(a){we(a,Ut);const t=me(),n=()=>R(ue,"$language",t);var e=Ft(),r=d(H(e),2),v=H(r);Se(v,()=>n()==="en"?'If you want to know more, collaborate, or use our services, <a class="footer-cta" href="/contact">get in touch</a> with us to discuss your ideas.':'Ako želite saznati više, surađivati ili koristiti naše usluge, <a class="footer-cta" href="/kontakt">kontaktirajte nas</a> kako bismo razgovarali o vašim idejama.'),E(r);var u=d(r,4),b=d(H(u),2),i=H(b),h=H(i);E(i);var g=d(i,2),f=H(g);E(g),E(b),fe(2),E(u),fe(2),E(e),$(()=>{ne(h,n()==="en"?"Privacy policy":"Pravila privatnosti"),ne(f,n()==="en"?"Gender Equality Plan":"Plan za ravnopravnost spolova")}),x(a,e)}de(Ge,{},[],[],!0);var Dt=_('<!> <div class="bg svelte-s1366u"></div> <!> <!> <!>',1);const Kt={hash:"svelte-s1366u",code:`
  .bg.svelte-s1366u {
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-image: url(/images/texture.svg);
  }
`};function At(a,t){he(t,!1),we(a,Kt);const n=me(),e=()=>R(tt,"$user",n);Ae(async()=>{const h=e();let g;const f=localStorage.getItem("cart");if(f&&(g=JSON.parse(f)),h&&h.cartItems&&(g&&g.cartUpdate?g.cartUpdate<h.cartUpdate&&(g={cartItems:h.cartItems}):g={cartItems:h.cartItems}),g&&g.cartItems){const S=await Promise.all(g.cartItems.map(async l=>{const m=await Xe(Ze(et,"products",l.id));return m.exists()?{...m.data(),id:l.id,selectedVariant:l.selectedVariant}:null}));Re.set(S)}}),ke();var r=Dt(),v=ae(r);Ce(v,{});var u=d(v,4);Qe(u,t,"default",{});var b=d(u,2);Ye(b,{});var i=d(b,2);Ge(i),x(a,r),be()}de(At,{},["default"],[],!0);export{At as component};
