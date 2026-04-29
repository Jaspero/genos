import"../chunks/disclose-version.Bg9kRutz.js";import{c as me,p as he,l as W,n as Re,h as Je,d as be,t as x,f as oe,s as c,i as g,m as A,a as $,b as _,j as E,$ as Oe,q as te,e as H,r as I,w as ue,v as Be,g as re}from"../chunks/custom-element.YfTZRdDm.js";import{s as Ve}from"../chunks/slot.C0m2FR_Z.js";import{a as ye}from"../chunks/css.C4s6Pmy9.js";import{i as we}from"../chunks/lifecycle.DDiEpaHd.js";import{s as pe,a as X}from"../chunks/store.J_5aMNQx.js";import{c as We}from"../chunks/cart-state.CyIgytb1.js";import{i as S}from"../chunks/if.CwLBsSbn.js";import{h as Ie}from"../chunks/html.Cd-tYx33.js";import{s as w}from"../chunks/attributes.BLb7X-Of.js";import{p as Me}from"../chunks/stores.DWAJUjGe.js";import{C as ve}from"../chunks/config.const.D0DIsJfW.js";import{m as Qe,M as ne}from"../chunks/meta.store.CkT33Ptq.js";import{b as Xe,a as Ze,d as et,u as tt}from"../chunks/firebase.CGP3-KIw.js";import{z as Pe,H as He,q as Ne,K as Y,S as Fe,Q as Ue,_ as ce,a as G,t as q,Z as R,g as L,Y as ae,o as De,T as M,W as Q,h as Ke,j as de,N as nt,s as _e,I as at,l as xe}from"../chunks/index.CRqRBLuz.js";import{o as Ae}from"../chunks/index-client.D2r47I3f.js";import{e as ke,i as je}from"../chunks/each.CDth55hk.js";import{t as O}from"../chunks/class.Cp0VSjM4.js";import{t as $e,a as qe}from"../chunks/index.DXHYUd01.js";import{g as Le}from"../chunks/entry.Bu7w1ZB9.js";import{l as fe}from"../chunks/language.CFxWNxD_.js";function rt(a){return a?a.includes("<script")?a:`<script type="application/ld+json">${a}<\/script>`:""}var ot=x('<meta name="author">'),st=x('<meta name="description">'),it=x('<meta name="keywords">'),lt=x('<meta property="og:type">'),ct=x('<meta property="og:description"> <meta property="twitter:description">',1),dt=x('<meta name="robots" content="noindex, nofollow">'),mt=x('<meta property="article:author">'),pt=x('<meta property="article:published_time">'),gt=x('<meta property="article:modified_time">'),vt=x('<meta property="article:section">'),ut=x('<meta property="article:tag">'),ft=x('<meta property="profile:first_name">'),ht=x('<meta property="profile:last_name">'),bt=x('<meta property="profile:username">'),yt=x('<meta property="og:url"> <meta property="twitter:url"> <meta property="twitter:card" content="summary_large_image"> <meta property="og:title"> <meta property="twitter:title"> <meta property="og:image"> <meta property="twitter:image"> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>',1);function Ce(a,t){he(t,!1);const n=pe(),e=()=>X(Qe,"$meta",n),o=()=>X(Me,"$page",n),v=A(),f=A(),b=A(),l=A(),h=A(),p=A();W(()=>(e(),ne),()=>{E(v,e().title?e().title+ne:ne.replace(" | ","").replace(" - ",""))}),W(()=>o(),()=>{E(f,ve.websiteUrl+o().url.pathname)}),W(()=>(e(),ne),()=>{var u;E(b,(((u=e().og)==null?void 0:u.title)||e().title)+ne)}),W(()=>e(),()=>{var u;E(l,((u=e().og)==null?void 0:u.description)||e().description)}),W(()=>(e(),ve),()=>{var u;E(h,((u=e().og)==null?void 0:u.image)||ve.fallbackSocialImage)}),W(()=>e(),()=>{E(p,rt(e().structured))}),Re(),we(),Je(u=>{var T=yt(),i=oe(T),m=c(i,2),d=c(m,4),y=c(d,2),j=c(y,2),k=c(j,2),U=c(k,2);S(U,()=>e().author,r=>{var s=ot();$(()=>w(s,"content",e().author)),_(r,s)});var Z=c(U,2);S(Z,()=>e().description,r=>{var s=st();$(()=>w(s,"content",e().description)),_(r,s)});var C=c(Z,2);S(C,()=>e().keywords,r=>{var s=it();$(()=>w(s,"content",e().keywords)),_(r,s)});var ee=c(C,2);S(ee,()=>{var r;return(r=e().og)==null?void 0:r.type},r=>{var s=lt();$(()=>{var D;return w(s,"content",(D=e().og)==null?void 0:D.type)}),_(r,s)});var se=c(ee,2);S(se,()=>g(l),r=>{var s=ct(),D=oe(s),ge=c(D,2);$(()=>{w(D,"content",g(l)),w(ge,"content",g(l))}),_(r,s)});var ie=c(se,2);S(ie,()=>e().noIndex,r=>{var s=dt();_(r,s)});var le=c(ie,2);S(le,()=>{var r;return(r=e().og)==null?void 0:r.articleAuthor},r=>{var s=mt();$(()=>w(s,"content",e().og.articleAuthor)),_(r,s)});var P=c(le,2);S(P,()=>{var r;return(r=e().og)==null?void 0:r.articlePublishedTime},r=>{var s=pt();$(()=>w(s,"content",e().og.articlePublishedTime)),_(r,s)});var z=c(P,2);S(z,()=>{var r;return(r=e().og)==null?void 0:r.articleModifiedTime},r=>{var s=gt();$(()=>w(s,"content",e().og.articleModifiedTime)),_(r,s)});var N=c(z,2);S(N,()=>{var r;return(r=e().og)==null?void 0:r.articleSection},r=>{var s=vt();$(()=>w(s,"content",e().og.articleSection)),_(r,s)});var F=c(N,2);S(F,()=>{var r;return(r=e().og)==null?void 0:r.articleTag},r=>{var s=ut();$(()=>w(s,"content",e().og.articleTag)),_(r,s)});var B=c(F,2);S(B,()=>{var r;return(r=e().og)==null?void 0:r.profileFirstName},r=>{var s=ft();$(()=>w(s,"content",e().og.profileFirstName)),_(r,s)});var K=c(B,2);S(K,()=>{var r;return(r=e().og)==null?void 0:r.profileLastName},r=>{var s=ht();$(()=>w(s,"content",e().og.profileLastName)),_(r,s)});var J=c(K,2);S(J,()=>{var r;return(r=e().og)==null?void 0:r.profileUsername},r=>{var s=bt();$(()=>w(s,"content",e().og.profileUsername)),_(r,s)});var V=c(J,2);Ie(V,()=>g(p)),$(()=>{Oe.title=g(v),w(i,"content",g(f)),w(m,"content",g(f)),w(d,"content",g(b)),w(y,"content",g(b)),w(j,"content",g(h)),w(k,"content",g(h))}),_(u,T)}),be()}me(Ce,{},[],[],!0);const wt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>';function _t(a){Ue(a,"svelte-ft09v",".jp-alert.svelte-ft09v{position:fixed;bottom:10px;right:50%;transform:translateX(50%);margin:1rem 0;background-color:white;box-shadow:0 3px 15px 6px rgba(0, 0, 0, 0.2);border-radius:0.5rem;z-index:100}.jp-alert-error.svelte-ft09v{border-left:4px solid var(--danger-color)}.jp-alert-success.svelte-ft09v{border-left:4px solid var(--success-color)}.jp-alert-container.svelte-ft09v{display:flex;flex-direction:column;gap:0.5rem;padding:1rem;max-width:40rem}.jp-alert-container-header.svelte-ft09v{display:flex;align-items:center;justify-content:space-between;gap:1rem}.jp-alert-container-header-inner.svelte-ft09v{display:flex}.jp-alert-container-header-icon.svelte-ft09v{font-size:1.5rem;margin-right:0.5rem}.jp-alert-container-header-title.svelte-ft09v{flex:1 1 0;font-size:1.5rem;font-weight:bold;margin:0}.jp-alert-container-header-close.svelte-ft09v{width:1.5rem;height:1.5rem}.jp-alert-container-message.svelte-ft09v{font-size:0.875rem;margin:0}@media(max-width: 600px){.jp-alert.svelte-ft09v{right:1rem;left:1rem;transform:unset}}")}function xt(a){let t;return{c(){t=de("✅")},m(n,e){R(n,t,e)},d(n){n&&G(t)}}}function kt(a){let t;return{c(){t=de("⚠️")},m(n,e){R(n,t,e)},d(n){n&&G(t)}}}function Te(a){let t;return{c(){t=M("h2"),q(t,"class","jp-alert-container-header-title svelte-ft09v")},m(n,e){R(n,t,e),t.innerHTML=a[0]},p(n,e){e&1&&(t.innerHTML=n[0])},d(n){n&&G(t)}}}function ze(a){let t;return{c(){t=M("p"),q(t,"class","jp-alert-container-message svelte-ft09v")},m(n,e){R(n,t,e),t.innerHTML=a[1]},p(n,e){e&2&&(t.innerHTML=n[1])},d(n){n&&G(t)}}}function jt(a){let t,n,e,o,v,f,b,l,h,p,u,T;function i(k,U){if(k[2]==="error")return kt;if(k[2]==="success")return xt}let m=i(a),d=m&&m(a),y=a[0]&&Te(a),j=a[1]&&ze(a);return{c(){t=M("div"),n=M("div"),e=M("div"),o=M("div"),v=M("div"),d&&d.c(),f=Q(),y&&y.c(),b=Q(),l=M("button"),h=Q(),j&&j.c(),q(v,"class","jp-alert-container-header-icon svelte-ft09v"),q(o,"class","jp-alert-container-header-inner svelte-ft09v"),q(l,"type","button"),q(l,"class","jp-alert-container-header-close svelte-ft09v"),q(e,"class","jp-alert-container-header svelte-ft09v"),q(n,"class","jp-alert-container svelte-ft09v"),q(t,"class",p="jp-alert jp-alert-"+a[2]+" svelte-ft09v")},m(k,U){R(k,t,U),L(t,n),L(n,e),L(e,o),L(o,v),d&&d.m(v,null),L(o,f),y&&y.m(o,null),L(e,b),L(e,l),l.innerHTML=wt,L(n,h),j&&j.m(n,null),u||(T=ae(l,"click",De(a[4])),u=!0)},p(k,[U]){m!==(m=i(k))&&(d&&d.d(1),d=m&&m(k),d&&(d.c(),d.m(v,null))),k[0]?y?y.p(k,U):(y=Te(k),y.c(),y.m(o,null)):y&&(y.d(1),y=null),k[1]?j?j.p(k,U):(j=ze(k),j.c(),j.m(n,null)):j&&(j.d(1),j=null),U&4&&p!==(p="jp-alert jp-alert-"+k[2]+" svelte-ft09v")&&q(t,"class",p)},i:ce,o:ce,d(k){k&&G(t),d&&d.d(),y&&y.d(),j&&j.d(),u=!1,T()}}}function $t(a,t,n){let{title:e=""}=t,{message:o=""}=t,{state:v="error"}=t;const f=Ke(),b=()=>f("close");return a.$$set=l=>{"title"in l&&n(0,e=l.title),"message"in l&&n(1,o=l.message),"state"in l&&n(2,v=l.state)},[e,o,v,f,b]}class qt extends He{constructor(t){super(),Ne(this,t,$t,jt,Fe,{title:0,message:1,state:2},_t)}get title(){return this.$$.ctx[0]}set title(t){this.$$set({title:t}),Y()}get message(){return this.$$.ctx[1]}set message(t){this.$$set({message:t}),Y()}get state(){return this.$$.ctx[2]}set state(t){this.$$set({state:t}),Y()}}try{customElements.define("jp-alert",Pe(qt,{title:{},message:{},state:{}},[],[],!1))}catch{}function Lt(a){function t(){a.dispatchEvent(new CustomEvent("click_outside",a))}function n(o){a&&!a.contains(o.target)&&!o.defaultPrevented&&t()}function e(o){o.key==="Escape"&&t()}return window.addEventListener("keydown",e,!0),document.addEventListener("click",n,!0),{destroy(){document.removeEventListener("click",n,!0),window.removeEventListener("keydown",e,!0)}}}function Tt(a){Ue(a,"svelte-1g8qqml",".jp-confirm-overlay.svelte-1g8qqml{z-index:10;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.2)}.jp-confirm-dialog.svelte-1g8qqml{background-color:var(--background-primary);border-radius:0.25rem;max-width:20rem}.jp-confirm-dialog-header.svelte-1g8qqml{padding:1rem}.jp-confirm-dialog-header-title.svelte-1g8qqml{font-size:1.5rem}.jp-confirm-dialog-content.svelte-1g8qqml{padding:2rem 1rem}.jp-confirm-dialog-content-border-top.svelte-1g8qqml{border-top:1px solid var(--border-primary)}.jp-confirm-dialog-actions.svelte-1g8qqml{display:flex;justify-content:space-between;border-top:1px solid var(--border-primary);padding:1rem}.jp-confirm-reject-button.svelte-1g8qqml,.jp-confirm-accept-button.svelte-1g8qqml{position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:4rem;padding:0 1rem;border-radius:0.25rem;height:36px;border:none;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;background:none;color:inherit;font-family:inherit;font-size:0.875rem;line-height:1.5;text-transform:uppercase;overflow:hidden}.jp-confirm-reject-button.svelte-1g8qqml{color:var(--danger-color);border:1px solid var(--danger-color)}.jp-confirm-accept-button.svelte-1g8qqml{background-color:var(--primary-color);color:var(--text-on-primary)}")}function Se(a){let t,n;return{c(){t=M("div"),n=M("h1"),q(n,"class","jp-confirm-dialog-header-title svelte-1g8qqml"),q(t,"class","jp-confirm-dialog-header svelte-1g8qqml")},m(e,o){R(e,t,o),L(t,n),n.innerHTML=a[0]},p(e,o){o&1&&(n.innerHTML=e[0])},d(e){e&&G(t)}}}function Ee(a){let t;return{c(){t=M("p"),q(t,"class","jp-confirm-dialog-content svelte-1g8qqml"),xe(t,"jp-confirm-dialog-content-border-top",a[0])},m(n,e){R(n,t,e),t.innerHTML=a[1]},p(n,e){e&2&&(t.innerHTML=n[1]),e&1&&xe(t,"jp-confirm-dialog-content-border-top",n[0])},d(n){n&&G(t)}}}function zt(a){let t,n,e,o,v,f,b,l,h,p,u,T,i=a[0]&&Se(a),m=a[1]&&Ee(a);return{c(){t=M("div"),n=M("div"),i&&i.c(),e=Q(),m&&m.c(),o=Q(),v=M("div"),f=M("button"),b=de(a[2]),l=Q(),h=M("button"),p=de(a[3]),q(f,"type","button"),q(f,"class","jp-confirm-reject-button svelte-1g8qqml"),q(h,"type","button"),q(h,"class","jp-confirm-accept-button svelte-1g8qqml"),q(v,"class","jp-confirm-dialog-actions svelte-1g8qqml"),q(n,"class","jp-confirm-dialog svelte-1g8qqml"),q(t,"class","jp-confirm-overlay svelte-1g8qqml")},m(d,y){R(d,t,y),L(t,n),i&&i.m(n,null),L(n,e),m&&m.m(n,null),L(n,o),L(n,v),L(v,f),L(f,b),L(v,l),L(v,h),L(h,p),u||(T=[ae(window,"keydown",De(a[6])),ae(f,"click",a[7]),ae(h,"click",a[8]),at(Lt.call(null,n)),ae(n,"click_outside",a[9])],u=!0)},p(d,[y]){d[0]?i?i.p(d,y):(i=Se(d),i.c(),i.m(n,e)):i&&(i.d(1),i=null),d[1]?m?m.p(d,y):(m=Ee(d),m.c(),m.m(n,o)):m&&(m.d(1),m=null),y&4&&_e(b,d[2]),y&8&&_e(p,d[3])},i:ce,o:ce,d(d){d&&G(t),i&&i.d(),m&&m.d(),u=!1,nt(T)}}}function St(a,t,n){let{title:e=""}=t,{message:o=""}=t,{reject:v=""}=t,{accept:f=""}=t,{closable:b=!1}=t;const l=Ke(),h=i=>i.key==="Escape"&&b&&l("close"),p=()=>l("confirmation",{confirmed:!1}),u=()=>l("confirmation",{confirmed:!0}),T=()=>{b&&l("close")};return a.$$set=i=>{"title"in i&&n(0,e=i.title),"message"in i&&n(1,o=i.message),"reject"in i&&n(2,v=i.reject),"accept"in i&&n(3,f=i.accept),"closable"in i&&n(4,b=i.closable)},[e,o,v,f,b,l,h,p,u,T]}class Et extends He{constructor(t){super(),Ne(this,t,St,zt,Fe,{title:0,message:1,reject:2,accept:3,closable:4},Tt)}get title(){return this.$$.ctx[0]}set title(t){this.$$set({title:t}),Y()}get message(){return this.$$.ctx[1]}set message(t){this.$$set({message:t}),Y()}get reject(){return this.$$.ctx[2]}set reject(t){this.$$set({reject:t}),Y()}get accept(){return this.$$.ctx[3]}set accept(t){this.$$set({accept:t}),Y()}get closable(){return this.$$.ctx[4]}set closable(t){this.$$set({closable:t}),Y()}}try{customElements.define("jp-confirm",Pe(Et,{title:{},message:{},reject:{},accept:{},closable:{type:"Boolean"}},[],[],!1))}catch{}var It=x('<a class="svelte-2qgyet"> </a>'),Mt=x('<a class="svelte-2qgyet"> </a>'),Pt=x('<button class="overlay"></button> <div class="menu svelte-2qgyet"><div class="menu-links svelte-2qgyet"><a class="svelte-2qgyet"> </a> <!></div> <div class="socials svelte-2qgyet"><a href="https://x.com/gglycoscience?lang=hr" target="_blank" rel="noreferrer noopener" class="svelte-2qgyet"><img src="/icons/x.svg" alt=""></a> <a href="https://www.linkedin.com/company/genos-ltd/posts/?feedView=all" target="_blank" rel="noreferrer noopener" class="svelte-2qgyet"><img src="/icons/linkedin.svg" alt=""></a></div></div>',1),Ht=x('<header class="navigation svelte-2qgyet"><nav class="svelte-2qgyet"><a class="svelte-2qgyet"><img class="logo svelte-2qgyet" src="/brand/genos-logo-white.svg" alt="genos logo"></a> <div class="links svelte-2qgyet"></div> <div class="flex gap-8"><button class="language-toggle svelte-2qgyet"><span class="svelte-2qgyet">EN</span> <span class="svelte-2qgyet">HR</span></button> <button class="menu-toggle svelte-2qgyet"><img src="/icons/menu.svg" alt=""></button></div></nav></header> <!>',1);const Nt={hash:"svelte-2qgyet",code:`
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
`};function Ye(a,t){he(t,!1),ye(a,Nt);const n=pe(),e=()=>X(Me,"$page",n),o=()=>X(fe,"$language",n);let v=A(0),f=0,b=A(!0),l=A(!1),h=A(!1),p=[{hr:{label:"O nama",link:"/o-nama"},en:{label:"About",link:"/about"}},{hr:{label:"Projekti",link:"/projekti"},en:{label:"Projects",link:"/projects"}},{hr:{label:"Publikacije",link:"/publikacije"},en:{label:"Publications",link:"/publications"}},{hr:{label:"Usluge",link:"/usluge"},en:{label:"Services",link:"/services"}},{hr:{label:"Korisni linkovi",link:"/korisni-linkovi"},en:{label:"Resources",link:"/resources"}},{hr:{label:"Tim",link:"/tim"},en:{label:"Team",link:"/team"}},{hr:{label:"Novosti",link:"/novosti"},en:{label:"News",link:"/news"}},{hr:{label:"Kontakt",link:"/kontakt"},en:{label:"Contact",link:"/contact"}}];function u(){const P=window.scrollY;P>96&&P>f?E(b,!1):E(b,!0),f=P,E(v,P)}function T(P){P.key==="Escape"&&E(l,!1)}function i(){g(h)||(E(h,!0),setTimeout(()=>{E(h,!1)},500),fe.update(P=>{const z=P==="en"?"hr":"en";if(typeof window>"u")return z;localStorage.setItem("language",z);const N={"/":"/pocetna","/pocetna":"/","/about":"/o-nama","/o-nama":"/about","/projects":"/projekti","/projekti":"/projects","/publications":"/publikacije","/publikacije":"/publications","/services":"/usluge","/usluge":"/services","/resources":"/korisni-linkovi","/korisni-linkovi":"/resources","/news":"/novosti","/novosti":"/news","/team":"/tim","/tim":"/team","/contact":"/kontakt","/kontakt":"/contact"},F=window.location.pathname,K=["/tools","/my-account","/sign-in","/sign-up","/reset-password","/checkout"].some(V=>F===V||F.startsWith(`${V}/`)),J=N[F]||(K?F:z==="en"?"/":"/pocetna");return J!==F&&Le(J),z}))}Ae(()=>(u(),window.addEventListener("scroll",u),window.addEventListener("keydown",T),window.location.pathname==="/"&&localStorage.getItem("language")==="hr"&&Le("/pocetna"),()=>{window.removeEventListener("scroll",u),window.removeEventListener("keydown",T)})),we();var m=Ht(),d=oe(m);const y=Be(()=>g(v)>96||e().url.pathname.includes("/posts/")||e().url.pathname.includes("/tools/")||e().url.pathname.includes("/my-account")||e().url.pathname.includes("/sign-in")||e().url.pathname.includes("/sign-up")||e().url.pathname.includes("/reset-password"));$(()=>O(d,"scrolled",g(y)));var j=H(d),k=H(j),U=c(k,2);ke(U,5,()=>p,je,(P,z)=>{var N=It(),F=H(N);I(N),$(()=>{w(N,"href",o()==="en"?g(z).en.link:g(z).hr.link),O(N,"active",(o()==="en"?g(z).en.link:g(z).hr.link)===e().url.pathname),re(F,o()==="en"?g(z).en.label:g(z).hr.label)}),_(P,N)}),I(U);var Z=c(U,2),C=H(Z),ee=H(C),se=c(ee,2);I(C);var ie=c(C,2);I(Z),I(j),I(d);var le=c(d,2);S(le,()=>g(l),P=>{var z=Pt(),N=oe(z),F=c(N,2),B=H(F),K=H(B),J=H(K);I(K);var V=c(K,2);ke(V,1,()=>p,je,(r,s)=>{var D=Mt(),ge=H(D);I(D),$(()=>{w(D,"href",o()==="en"?g(s).en.link:g(s).hr.link),O(D,"active",(o()==="en"?g(s).en.link:g(s).hr.link)===e().url.pathname),re(ge,o()==="en"?g(s).en.label:g(s).hr.label)}),te("click",D,()=>E(l,!1)),_(r,D)}),I(B),ue(2),I(F),$(()=>{w(K,"href",o()==="en"?"/":"/pocetna"),O(K,"active",(o()==="en"?"/":"/pocetna")===e().url.pathname),re(J,o()==="en"?"Home":"Početna")}),$e(3,N,()=>qe),te("click",N,()=>E(l,!1)),te("click",K,()=>E(l,!1)),$e(3,F,()=>qe,()=>({y:-1e3})),_(P,z)}),$(()=>{O(d,"inactive",!g(b)),w(k,"href",o()==="en"?"/":"/pocetna"),C.disabled=g(h),O(ee,"active",o()==="en"),O(se,"active",o()==="hr")}),te("click",C,()=>{i()}),te("click",ie,()=>E(l,!g(l))),_(a,m),be()}me(Ye,{},[],[],!0);var Ft=x('<a href="/conflict-of-interest.pdf" target="_blank" class="svelte-ddg00p">Conflict of interest</a>'),Ut=x('<a href="/sukob-interesa.pdf" target="_blank" class="svelte-ddg00p">Sukob interesa</a>'),Dt=x('<footer class="spacer svelte-ddg00p"><div><img src="/brand/genos-logo-white.svg" alt="genos logo" class="footer-logo svelte-ddg00p"></div> <h2 class="footer-title svelte-ddg00p"><!></h2> <div class="flex-1"></div> <div class="subfooter svelte-ddg00p"><div class="subfooter-social svelte-ddg00p"><a href="https://www.linkedin.com/company/genos-ltd" target="_blank" class="svelte-ddg00p"><img src="/icons/linkedin-w.svg" alt="linkedin"></a> <a href="https://x.com/gglycoscience" target="_blank" class="svelte-ddg00p"><img src="/icons/x-w.svg" alt="x"></a></div> <div class="subfooter-legal svelte-ddg00p"><a href="/privacy-policy.pdf" target="_blank" class="svelte-ddg00p"> </a> <a href="/gep.pdf" target="_blank" class="svelte-ddg00p"> </a> <!></div> <div class="subfooter-contact svelte-ddg00p"><a href="mailto:info@genos.hr" class="svelte-ddg00p">info@genos.hr</a> <span>© 2025 Genos Glyco</span></div></div> <img class="footer-bg svelte-ddg00p" src="/images/footer.jpg" alt=""></footer>');const Kt={hash:"svelte-ddg00p",code:`
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
`};function Ge(a){ye(a,Kt);const t=pe(),n=()=>X(fe,"$language",t);var e=Dt(),o=c(H(e),2),v=H(o);Ie(v,()=>n()==="en"?'If you want to know more, collaborate, or use our services, <a class="footer-cta" href="/contact">get in touch</a> with us to discuss your ideas.':'Ako želite saznati više, surađivati ili koristiti naše usluge, <a class="footer-cta" href="/kontakt">kontaktirajte nas</a> kako bismo razgovarali o vašim idejama.'),I(o);var f=c(o,4),b=c(H(f),2),l=H(b),h=H(l);I(l);var p=c(l,2),u=H(p);I(p);var T=c(p,2);S(T,()=>n()==="en",i=>{var m=Ft();_(i,m)},i=>{var m=Ut();_(i,m)}),I(b),ue(2),I(f),ue(2),I(e),$(()=>{re(h,n()==="en"?"Privacy policy":"Pravila privatnosti"),re(u,n()==="en"?"Gender Equality Plan":"Plan za ravnopravnost spolova")}),_(a,e)}me(Ge,{},[],[],!0);var At=x('<!> <div class="bg svelte-s1366u"></div> <!> <!> <!>',1);const Ct={hash:"svelte-s1366u",code:`
  .bg.svelte-s1366u {
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-image: url(/images/texture.svg);
  }
`};function Yt(a,t){he(t,!1),ye(a,Ct);const n=pe(),e=()=>X(tt,"$user",n);Ae(async()=>{const h=e();let p;const u=localStorage.getItem("cart");if(u&&(p=JSON.parse(u)),h&&h.cartItems&&(p&&p.cartUpdate?p.cartUpdate<h.cartUpdate&&(p={cartItems:h.cartItems}):p={cartItems:h.cartItems}),p&&p.cartItems){const T=await Promise.all(p.cartItems.map(async i=>{const m=await Xe(Ze(et,"products",i.id));return m.exists()?{...m.data(),id:i.id,selectedVariant:i.selectedVariant}:null}));We.set(T)}}),we();var o=At(),v=oe(o);Ye(v,{});var f=c(v,4);Ve(f,t,"default",{});var b=c(f,2);Ce(b,{});var l=c(b,2);Ge(l),_(a,o),be()}me(Yt,{},["default"],[],!0);export{Yt as component};
