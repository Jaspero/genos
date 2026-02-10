import"../chunks/disclose-version.Bg9kRutz.js";import{c as de,p as he,o as V,v as Je,j as Oe,d as be,t as x,f as ae,s as c,k as g,m as K,a as $,b as _,l as I,$ as Be,x as Z,e as H,r as S,y as fe,ag as Ve,g as ne}from"../chunks/custom-element.DQtPqtwV.js";import{s as Qe}from"../chunks/slot.BkgQLmME.js";import{a as ye}from"../chunks/css.osYD52Gu.js";import{i as we}from"../chunks/lifecycle.By80OOUV.js";import{s as me,a as R}from"../chunks/store.iOtDhSer.js";import{c as Re}from"../chunks/cart-state.D66Ex9__.js";import{i as E}from"../chunks/if.BrBjDjp-.js";import{h as Se}from"../chunks/html.Dn7-qKOW.js";import{a as w}from"../chunks/attributes.DQACxfmV.js";import{p as Me}from"../chunks/stores.B0uQfzi0.js";import{C as ve}from"../chunks/config.const.D0DIsJfW.js";import{m as We,M as ee}from"../chunks/meta.store.Q6Z8Tcx4.js";import{b as Xe,a as Ze,d as et,u as tt}from"../chunks/firebase.ByBy7bFy.js";import{z as Pe,H as He,q as Ne,K as G,S as Fe,Q as Ue,_ as le,a as J,t as q,Z as O,g as L,Y as te,o as De,T as M,W as Q,h as Ke,j as ce,N as nt,s as _e,I as at,l as xe}from"../chunks/index.CRqRBLuz.js";import{o as Ae}from"../chunks/index-client.cakr4NJt.js";import{e as ke,i as je}from"../chunks/each.CBDd4fNw.js";import{t as B}from"../chunks/class.DzKL41hs.js";import{t as $e,a as qe}from"../chunks/index.DUavQ0dq.js";import{g as Le}from"../chunks/entry.DpD4jmoC.js";import{l as ue}from"../chunks/language.CzC4Du2W.js";function rt(a){return a?a.includes("<script")?a:`<script type="application/ld+json">${a}<\/script>`:""}var ot=x('<meta name="author">'),st=x('<meta name="description">'),it=x('<meta name="keywords">'),lt=x('<meta property="og:type">'),ct=x('<meta property="og:description"> <meta property="twitter:description">',1),dt=x('<meta name="robots" content="noindex, nofollow">'),mt=x('<meta property="article:author">'),pt=x('<meta property="article:published_time">'),gt=x('<meta property="article:modified_time">'),vt=x('<meta property="article:section">'),ft=x('<meta property="article:tag">'),ut=x('<meta property="profile:first_name">'),ht=x('<meta property="profile:last_name">'),bt=x('<meta property="profile:username">'),yt=x('<meta property="og:url"> <meta property="twitter:url"> <meta property="twitter:card" content="summary_large_image"> <meta property="og:title"> <meta property="twitter:title"> <meta property="og:image"> <meta property="twitter:image"> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>',1);function Ce(a,t){he(t,!1);const n=me(),e=()=>R(We,"$meta",n),o=()=>R(Me,"$page",n),v=K(),u=K(),b=K(),l=K(),h=K(),p=K();V(()=>(e(),ee),()=>{I(v,e().title?e().title+ee:ee.replace(" | ","").replace(" - ",""))}),V(()=>o(),()=>{I(u,ve.websiteUrl+o().url.pathname)}),V(()=>(e(),ee),()=>{var f;I(b,(((f=e().og)==null?void 0:f.title)||e().title)+ee)}),V(()=>e(),()=>{var f;I(l,((f=e().og)==null?void 0:f.description)||e().description)}),V(()=>(e(),ve),()=>{var f;I(h,((f=e().og)==null?void 0:f.image)||ve.fallbackSocialImage)}),V(()=>e(),()=>{I(p,rt(e().structured))}),Je(),we(),Oe(f=>{var T=yt(),i=ae(T),m=c(i,2),d=c(m,4),y=c(d,2),j=c(y,2),k=c(j,2),F=c(k,2);E(F,()=>e().author,r=>{var s=ot();$(()=>w(s,"content",e().author)),_(r,s)});var W=c(F,2);E(W,()=>e().description,r=>{var s=st();$(()=>w(s,"content",e().description)),_(r,s)});var C=c(W,2);E(C,()=>e().keywords,r=>{var s=it();$(()=>w(s,"content",e().keywords)),_(r,s)});var X=c(C,2);E(X,()=>{var r;return(r=e().og)==null?void 0:r.type},r=>{var s=lt();$(()=>{var U;return w(s,"content",(U=e().og)==null?void 0:U.type)}),_(r,s)});var re=c(X,2);E(re,()=>g(l),r=>{var s=ct(),U=ae(s),ge=c(U,2);$(()=>{w(U,"content",g(l)),w(ge,"content",g(l))}),_(r,s)});var oe=c(re,2);E(oe,()=>e().noIndex,r=>{var s=dt();_(r,s)});var se=c(oe,2);E(se,()=>{var r;return(r=e().og)==null?void 0:r.articleAuthor},r=>{var s=mt();$(()=>w(s,"content",e().og.articleAuthor)),_(r,s)});var P=c(se,2);E(P,()=>{var r;return(r=e().og)==null?void 0:r.articlePublishedTime},r=>{var s=pt();$(()=>w(s,"content",e().og.articlePublishedTime)),_(r,s)});var z=c(P,2);E(z,()=>{var r;return(r=e().og)==null?void 0:r.articleModifiedTime},r=>{var s=gt();$(()=>w(s,"content",e().og.articleModifiedTime)),_(r,s)});var N=c(z,2);E(N,()=>{var r;return(r=e().og)==null?void 0:r.articleSection},r=>{var s=vt();$(()=>w(s,"content",e().og.articleSection)),_(r,s)});var D=c(N,2);E(D,()=>{var r;return(r=e().og)==null?void 0:r.articleTag},r=>{var s=ft();$(()=>w(s,"content",e().og.articleTag)),_(r,s)});var Y=c(D,2);E(Y,()=>{var r;return(r=e().og)==null?void 0:r.profileFirstName},r=>{var s=ut();$(()=>w(s,"content",e().og.profileFirstName)),_(r,s)});var A=c(Y,2);E(A,()=>{var r;return(r=e().og)==null?void 0:r.profileLastName},r=>{var s=ht();$(()=>w(s,"content",e().og.profileLastName)),_(r,s)});var ie=c(A,2);E(ie,()=>{var r;return(r=e().og)==null?void 0:r.profileUsername},r=>{var s=bt();$(()=>w(s,"content",e().og.profileUsername)),_(r,s)});var pe=c(ie,2);Se(pe,()=>g(p)),$(()=>{Be.title=g(v),w(i,"content",g(u)),w(m,"content",g(u)),w(d,"content",g(b)),w(y,"content",g(b)),w(j,"content",g(h)),w(k,"content",g(h))}),_(f,T)}),be()}de(Ce,{},[],[],!0);const wt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>';function _t(a){Ue(a,"svelte-ft09v",".jp-alert.svelte-ft09v{position:fixed;bottom:10px;right:50%;transform:translateX(50%);margin:1rem 0;background-color:white;box-shadow:0 3px 15px 6px rgba(0, 0, 0, 0.2);border-radius:0.5rem;z-index:100}.jp-alert-error.svelte-ft09v{border-left:4px solid var(--danger-color)}.jp-alert-success.svelte-ft09v{border-left:4px solid var(--success-color)}.jp-alert-container.svelte-ft09v{display:flex;flex-direction:column;gap:0.5rem;padding:1rem;max-width:40rem}.jp-alert-container-header.svelte-ft09v{display:flex;align-items:center;justify-content:space-between;gap:1rem}.jp-alert-container-header-inner.svelte-ft09v{display:flex}.jp-alert-container-header-icon.svelte-ft09v{font-size:1.5rem;margin-right:0.5rem}.jp-alert-container-header-title.svelte-ft09v{flex:1 1 0;font-size:1.5rem;font-weight:bold;margin:0}.jp-alert-container-header-close.svelte-ft09v{width:1.5rem;height:1.5rem}.jp-alert-container-message.svelte-ft09v{font-size:0.875rem;margin:0}@media(max-width: 600px){.jp-alert.svelte-ft09v{right:1rem;left:1rem;transform:unset}}")}function xt(a){let t;return{c(){t=ce("✅")},m(n,e){O(n,t,e)},d(n){n&&J(t)}}}function kt(a){let t;return{c(){t=ce("⚠️")},m(n,e){O(n,t,e)},d(n){n&&J(t)}}}function Te(a){let t;return{c(){t=M("h2"),q(t,"class","jp-alert-container-header-title svelte-ft09v")},m(n,e){O(n,t,e),t.innerHTML=a[0]},p(n,e){e&1&&(t.innerHTML=n[0])},d(n){n&&J(t)}}}function ze(a){let t;return{c(){t=M("p"),q(t,"class","jp-alert-container-message svelte-ft09v")},m(n,e){O(n,t,e),t.innerHTML=a[1]},p(n,e){e&2&&(t.innerHTML=n[1])},d(n){n&&J(t)}}}function jt(a){let t,n,e,o,v,u,b,l,h,p,f,T;function i(k,F){if(k[2]==="error")return kt;if(k[2]==="success")return xt}let m=i(a),d=m&&m(a),y=a[0]&&Te(a),j=a[1]&&ze(a);return{c(){t=M("div"),n=M("div"),e=M("div"),o=M("div"),v=M("div"),d&&d.c(),u=Q(),y&&y.c(),b=Q(),l=M("button"),h=Q(),j&&j.c(),q(v,"class","jp-alert-container-header-icon svelte-ft09v"),q(o,"class","jp-alert-container-header-inner svelte-ft09v"),q(l,"type","button"),q(l,"class","jp-alert-container-header-close svelte-ft09v"),q(e,"class","jp-alert-container-header svelte-ft09v"),q(n,"class","jp-alert-container svelte-ft09v"),q(t,"class",p="jp-alert jp-alert-"+a[2]+" svelte-ft09v")},m(k,F){O(k,t,F),L(t,n),L(n,e),L(e,o),L(o,v),d&&d.m(v,null),L(o,u),y&&y.m(o,null),L(e,b),L(e,l),l.innerHTML=wt,L(n,h),j&&j.m(n,null),f||(T=te(l,"click",De(a[4])),f=!0)},p(k,[F]){m!==(m=i(k))&&(d&&d.d(1),d=m&&m(k),d&&(d.c(),d.m(v,null))),k[0]?y?y.p(k,F):(y=Te(k),y.c(),y.m(o,null)):y&&(y.d(1),y=null),k[1]?j?j.p(k,F):(j=ze(k),j.c(),j.m(n,null)):j&&(j.d(1),j=null),F&4&&p!==(p="jp-alert jp-alert-"+k[2]+" svelte-ft09v")&&q(t,"class",p)},i:le,o:le,d(k){k&&J(t),d&&d.d(),y&&y.d(),j&&j.d(),f=!1,T()}}}function $t(a,t,n){let{title:e=""}=t,{message:o=""}=t,{state:v="error"}=t;const u=Ke(),b=()=>u("close");return a.$$set=l=>{"title"in l&&n(0,e=l.title),"message"in l&&n(1,o=l.message),"state"in l&&n(2,v=l.state)},[e,o,v,u,b]}class qt extends He{constructor(t){super(),Ne(this,t,$t,jt,Fe,{title:0,message:1,state:2},_t)}get title(){return this.$$.ctx[0]}set title(t){this.$$set({title:t}),G()}get message(){return this.$$.ctx[1]}set message(t){this.$$set({message:t}),G()}get state(){return this.$$.ctx[2]}set state(t){this.$$set({state:t}),G()}}try{customElements.define("jp-alert",Pe(qt,{title:{},message:{},state:{}},[],[],!1))}catch{}function Lt(a){function t(){a.dispatchEvent(new CustomEvent("click_outside",a))}function n(o){a&&!a.contains(o.target)&&!o.defaultPrevented&&t()}function e(o){o.key==="Escape"&&t()}return window.addEventListener("keydown",e,!0),document.addEventListener("click",n,!0),{destroy(){document.removeEventListener("click",n,!0),window.removeEventListener("keydown",e,!0)}}}function Tt(a){Ue(a,"svelte-1g8qqml",".jp-confirm-overlay.svelte-1g8qqml{z-index:10;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.2)}.jp-confirm-dialog.svelte-1g8qqml{background-color:var(--background-primary);border-radius:0.25rem;max-width:20rem}.jp-confirm-dialog-header.svelte-1g8qqml{padding:1rem}.jp-confirm-dialog-header-title.svelte-1g8qqml{font-size:1.5rem}.jp-confirm-dialog-content.svelte-1g8qqml{padding:2rem 1rem}.jp-confirm-dialog-content-border-top.svelte-1g8qqml{border-top:1px solid var(--border-primary)}.jp-confirm-dialog-actions.svelte-1g8qqml{display:flex;justify-content:space-between;border-top:1px solid var(--border-primary);padding:1rem}.jp-confirm-reject-button.svelte-1g8qqml,.jp-confirm-accept-button.svelte-1g8qqml{position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:4rem;padding:0 1rem;border-radius:0.25rem;height:36px;border:none;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;background:none;color:inherit;font-family:inherit;font-size:0.875rem;line-height:1.5;text-transform:uppercase;overflow:hidden}.jp-confirm-reject-button.svelte-1g8qqml{color:var(--danger-color);border:1px solid var(--danger-color)}.jp-confirm-accept-button.svelte-1g8qqml{background-color:var(--primary-color);color:var(--text-on-primary)}")}function Ee(a){let t,n;return{c(){t=M("div"),n=M("h1"),q(n,"class","jp-confirm-dialog-header-title svelte-1g8qqml"),q(t,"class","jp-confirm-dialog-header svelte-1g8qqml")},m(e,o){O(e,t,o),L(t,n),n.innerHTML=a[0]},p(e,o){o&1&&(n.innerHTML=e[0])},d(e){e&&J(t)}}}function Ie(a){let t;return{c(){t=M("p"),q(t,"class","jp-confirm-dialog-content svelte-1g8qqml"),xe(t,"jp-confirm-dialog-content-border-top",a[0])},m(n,e){O(n,t,e),t.innerHTML=a[1]},p(n,e){e&2&&(t.innerHTML=n[1]),e&1&&xe(t,"jp-confirm-dialog-content-border-top",n[0])},d(n){n&&J(t)}}}function zt(a){let t,n,e,o,v,u,b,l,h,p,f,T,i=a[0]&&Ee(a),m=a[1]&&Ie(a);return{c(){t=M("div"),n=M("div"),i&&i.c(),e=Q(),m&&m.c(),o=Q(),v=M("div"),u=M("button"),b=ce(a[2]),l=Q(),h=M("button"),p=ce(a[3]),q(u,"type","button"),q(u,"class","jp-confirm-reject-button svelte-1g8qqml"),q(h,"type","button"),q(h,"class","jp-confirm-accept-button svelte-1g8qqml"),q(v,"class","jp-confirm-dialog-actions svelte-1g8qqml"),q(n,"class","jp-confirm-dialog svelte-1g8qqml"),q(t,"class","jp-confirm-overlay svelte-1g8qqml")},m(d,y){O(d,t,y),L(t,n),i&&i.m(n,null),L(n,e),m&&m.m(n,null),L(n,o),L(n,v),L(v,u),L(u,b),L(v,l),L(v,h),L(h,p),f||(T=[te(window,"keydown",De(a[6])),te(u,"click",a[7]),te(h,"click",a[8]),at(Lt.call(null,n)),te(n,"click_outside",a[9])],f=!0)},p(d,[y]){d[0]?i?i.p(d,y):(i=Ee(d),i.c(),i.m(n,e)):i&&(i.d(1),i=null),d[1]?m?m.p(d,y):(m=Ie(d),m.c(),m.m(n,o)):m&&(m.d(1),m=null),y&4&&_e(b,d[2]),y&8&&_e(p,d[3])},i:le,o:le,d(d){d&&J(t),i&&i.d(),m&&m.d(),f=!1,nt(T)}}}function Et(a,t,n){let{title:e=""}=t,{message:o=""}=t,{reject:v=""}=t,{accept:u=""}=t,{closable:b=!1}=t;const l=Ke(),h=i=>i.key==="Escape"&&b&&l("close"),p=()=>l("confirmation",{confirmed:!1}),f=()=>l("confirmation",{confirmed:!0}),T=()=>{b&&l("close")};return a.$$set=i=>{"title"in i&&n(0,e=i.title),"message"in i&&n(1,o=i.message),"reject"in i&&n(2,v=i.reject),"accept"in i&&n(3,u=i.accept),"closable"in i&&n(4,b=i.closable)},[e,o,v,u,b,l,h,p,f,T]}class It extends He{constructor(t){super(),Ne(this,t,Et,zt,Fe,{title:0,message:1,reject:2,accept:3,closable:4},Tt)}get title(){return this.$$.ctx[0]}set title(t){this.$$set({title:t}),G()}get message(){return this.$$.ctx[1]}set message(t){this.$$set({message:t}),G()}get reject(){return this.$$.ctx[2]}set reject(t){this.$$set({reject:t}),G()}get accept(){return this.$$.ctx[3]}set accept(t){this.$$set({accept:t}),G()}get closable(){return this.$$.ctx[4]}set closable(t){this.$$set({closable:t}),G()}}try{customElements.define("jp-confirm",Pe(It,{title:{},message:{},reject:{},accept:{},closable:{type:"Boolean"}},[],[],!1))}catch{}var St=x('<a class="svelte-2qgyet"> </a>'),Mt=x('<a class="svelte-2qgyet"> </a>'),Pt=x('<button class="overlay"></button> <div class="menu svelte-2qgyet"><div class="menu-links svelte-2qgyet"><a class="svelte-2qgyet"> </a> <!></div> <div class="socials svelte-2qgyet"><a href="https://x.com/gglycoscience?lang=hr" target="_blank" rel="noreferrer noopener" class="svelte-2qgyet"><img src="/icons/x.svg" alt=""></a> <a href="https://www.linkedin.com/company/genos-ltd/posts/?feedView=all" target="_blank" rel="noreferrer noopener" class="svelte-2qgyet"><img src="/icons/linkedin.svg" alt=""></a></div></div>',1),Ht=x('<header class="navigation svelte-2qgyet"><nav class="svelte-2qgyet"><a class="svelte-2qgyet"><img class="logo svelte-2qgyet" src="/brand/genos-logo-white.svg" alt="genos logo"></a> <div class="links svelte-2qgyet"></div> <div class="flex gap-8"><button class="language-toggle svelte-2qgyet"><span class="svelte-2qgyet">EN</span> <span class="svelte-2qgyet">HR</span></button> <button class="menu-toggle svelte-2qgyet"><img src="/icons/menu.svg" alt=""></button></div></nav></header> <!>',1);const Nt={hash:"svelte-2qgyet",code:`
    .navigation.svelte-2qgyet {
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

        nav:where(.svelte-2qgyet) {
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

            .logo:where(.svelte-2qgyet) {
                height: 3rem;
                @media (max-width: 1100px) {
                    height: 2rem;
                }
            }

            .links:where(.svelte-2qgyet) {
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
                a:where(.svelte-2qgyet) {
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

    .language-toggle.svelte-2qgyet {
        display: flex;
        border: 1px solid white;
        border-radius: 999px;
        padding: .25rem;
        @media (max-width: 1000px) {
            padding: .125rem;
        }

        span:where(.svelte-2qgyet) {
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

    .menu-toggle.svelte-2qgyet {
        @media (min-width: 731px) {
            display: none;
        }
    }

    .menu.svelte-2qgyet {
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

        .menu-links:where(.svelte-2qgyet) {
            display: flex;
            flex-direction: column;
            flex: 1 1 0;

            a:where(.svelte-2qgyet) {
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

    .socials.svelte-2qgyet {
        display: flex;
        gap: 1rem;
        padding: 1rem;
    }
`};function Ye(a,t){he(t,!1),ye(a,Nt);const n=me(),e=()=>R(Me,"$page",n),o=()=>R(ue,"$language",n);let v=K(0),u=0,b=K(!0),l=K(!1),h=K(!1),p=[{hr:{label:"O nama",link:"/o-nama"},en:{label:"About",link:"/about"}},{hr:{label:"Projekti",link:"/projekti"},en:{label:"Projects",link:"/projects"}},{hr:{label:"Publikacije",link:"/publikacije"},en:{label:"Publications",link:"/publications"}},{hr:{label:"Usluge",link:"/usluge"},en:{label:"Services",link:"/services"}},{hr:{label:"Korisni linkovi",link:"/korisni-linkovi"},en:{label:"Resources",link:"/resources"}},{hr:{label:"Tim",link:"/tim"},en:{label:"Team",link:"/team"}},{hr:{label:"Novosti",link:"/novosti"},en:{label:"News",link:"/news"}},{hr:{label:"Kontakt",link:"/kontakt"},en:{label:"Contact",link:"/contact"}}];function f(){const P=window.scrollY;P>96&&P>u?I(b,!1):I(b,!0),u=P,I(v,P)}function T(P){P.key==="Escape"&&I(l,!1)}function i(){g(h)||(I(h,!0),setTimeout(()=>{I(h,!1)},500),ue.update(P=>{const z=P==="en"?"hr":"en";if(typeof window>"u")return z;localStorage.setItem("language",z);const N={"/":"/pocetna","/pocetna":"/","/about":"/o-nama","/o-nama":"/about","/projects":"/projekti","/projekti":"/projects","/publications":"/publikacije","/publikacije":"/publications","/services":"/usluge","/usluge":"/services","/resources":"/korisni-linkovi","/korisni-linkovi":"/resources","/news":"/novosti","/novosti":"/news","/team":"/tim","/tim":"/team","/contact":"/kontakt","/kontakt":"/contact"},D=window.location.pathname,Y=N[D]||(z==="en"?"/":"/pocetna");return Y!==D&&Le(Y),z}))}Ae(()=>(f(),window.addEventListener("scroll",f),window.addEventListener("keydown",T),window.location.pathname==="/"&&localStorage.getItem("language")==="hr"&&Le("/pocetna"),()=>{window.removeEventListener("scroll",f),window.removeEventListener("keydown",T)})),we();var m=Ht(),d=ae(m);const y=Ve(()=>g(v)>96||e().url.pathname.includes("/posts/"));$(()=>B(d,"scrolled",g(y)));var j=H(d),k=H(j),F=c(k,2);ke(F,5,()=>p,je,(P,z)=>{var N=St(),D=H(N);S(N),$(()=>{w(N,"href",o()==="en"?g(z).en.link:g(z).hr.link),B(N,"active",(o()==="en"?g(z).en.link:g(z).hr.link)===e().url.pathname),ne(D,o()==="en"?g(z).en.label:g(z).hr.label)}),_(P,N)}),S(F);var W=c(F,2),C=H(W),X=H(C),re=c(X,2);S(C);var oe=c(C,2);S(W),S(j),S(d);var se=c(d,2);E(se,()=>g(l),P=>{var z=Pt(),N=ae(z),D=c(N,2),Y=H(D),A=H(Y),ie=H(A);S(A);var pe=c(A,2);ke(pe,1,()=>p,je,(r,s)=>{var U=Mt(),ge=H(U);S(U),$(()=>{w(U,"href",o()==="en"?g(s).en.link:g(s).hr.link),B(U,"active",(o()==="en"?g(s).en.link:g(s).hr.link)===e().url.pathname),ne(ge,o()==="en"?g(s).en.label:g(s).hr.label)}),Z("click",U,()=>I(l,!1)),_(r,U)}),S(Y),fe(2),S(D),$(()=>{w(A,"href",o()==="en"?"/":"/pocetna"),B(A,"active",(o()==="en"?"/":"/pocetna")===e().url.pathname),ne(ie,o()==="en"?"Home":"Početna")}),$e(3,N,()=>qe),Z("click",N,()=>I(l,!1)),Z("click",A,()=>I(l,!1)),$e(3,D,()=>qe,()=>({y:-1e3})),_(P,z)}),$(()=>{B(d,"inactive",!g(b)),w(k,"href",o()==="en"?"/":"/pocetna"),C.disabled=g(h),B(X,"active",o()==="en"),B(re,"active",o()==="hr")}),Z("click",C,()=>{i()}),Z("click",oe,()=>I(l,!g(l))),_(a,m),be()}de(Ye,{},[],[],!0);var Ft=x('<a href="/conflict-of-interest.pdf" target="_blank" class="svelte-ddg00p">Conflict of interest</a>'),Ut=x('<a href="/sukob-interesa.pdf" target="_blank" class="svelte-ddg00p">Sukob interesa</a>'),Dt=x('<footer class="spacer svelte-ddg00p"><div><img src="/brand/genos-logo-white.svg" alt="genos logo" class="footer-logo svelte-ddg00p"></div> <h2 class="footer-title svelte-ddg00p"><!></h2> <div class="flex-1"></div> <div class="subfooter svelte-ddg00p"><div class="subfooter-social svelte-ddg00p"><a href="https://www.linkedin.com/company/genos-ltd" target="_blank" class="svelte-ddg00p"><img src="/icons/linkedin-w.svg" alt="linkedin"></a> <a href="https://x.com/gglycoscience" target="_blank" class="svelte-ddg00p"><img src="/icons/x-w.svg" alt="x"></a></div> <div class="subfooter-legal svelte-ddg00p"><a href="/privacy-policy.pdf" target="_blank" class="svelte-ddg00p"> </a> <a href="/gep.pdf" target="_blank" class="svelte-ddg00p"> </a> <!></div> <div class="subfooter-contact svelte-ddg00p"><a href="mailto:info@genos.hr" class="svelte-ddg00p">info@genos.hr</a> <span>© 2025 Genos Glyco</span></div></div> <img class="footer-bg svelte-ddg00p" src="/images/footer.jpg" alt=""></footer>');const Kt={hash:"svelte-ddg00p",code:`
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
`};function Ge(a){ye(a,Kt);const t=me(),n=()=>R(ue,"$language",t);var e=Dt(),o=c(H(e),2),v=H(o);Se(v,()=>n()==="en"?'If you want to know more, collaborate, or use our services, <a class="footer-cta" href="/contact">get in touch</a> with us to discuss your ideas.':'Ako želite saznati više, surađivati ili koristiti naše usluge, <a class="footer-cta" href="/kontakt">kontaktirajte nas</a> kako bismo razgovarali o vašim idejama.'),S(o);var u=c(o,4),b=c(H(u),2),l=H(b),h=H(l);S(l);var p=c(l,2),f=H(p);S(p);var T=c(p,2);E(T,()=>n()==="en",i=>{var m=Ft();_(i,m)},i=>{var m=Ut();_(i,m)}),S(b),fe(2),S(u),fe(2),S(e),$(()=>{ne(h,n()==="en"?"Privacy policy":"Pravila privatnosti"),ne(f,n()==="en"?"Gender Equality Plan":"Plan za ravnopravnost spolova")}),_(a,e)}de(Ge,{},[],[],!0);var At=x('<!> <div class="bg svelte-s1366u"></div> <!> <!> <!>',1);const Ct={hash:"svelte-s1366u",code:`
  .bg.svelte-s1366u {
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-image: url(/images/texture.svg);
  }
`};function Yt(a,t){he(t,!1),ye(a,Ct);const n=me(),e=()=>R(tt,"$user",n);Ae(async()=>{const h=e();let p;const f=localStorage.getItem("cart");if(f&&(p=JSON.parse(f)),h&&h.cartItems&&(p&&p.cartUpdate?p.cartUpdate<h.cartUpdate&&(p={cartItems:h.cartItems}):p={cartItems:h.cartItems}),p&&p.cartItems){const T=await Promise.all(p.cartItems.map(async i=>{const m=await Xe(Ze(et,"products",i.id));return m.exists()?{...m.data(),id:i.id,selectedVariant:i.selectedVariant}:null}));Re.set(T)}}),we();var o=At(),v=ae(o);Ye(v,{});var u=c(v,4);Qe(u,t,"default",{});var b=c(u,2);Ce(b,{});var l=c(b,2);Ge(l),_(a,o),be()}de(Yt,{},["default"],[],!0);export{Yt as component};
