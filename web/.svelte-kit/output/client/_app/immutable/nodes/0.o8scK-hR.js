import"../chunks/disclose-version.Bg9kRutz.js";import{c as de,p as ue,o as V,v as Ge,j as Je,d as he,t as _,f as ne,k as f,a as q,b as x,s as d,m as D,l as T,$ as Oe,x as X,e as H,r as E,y as ge,g as te}from"../chunks/custom-element.ByhzGb1h.js";import{s as Be}from"../chunks/slot.ClkUfcc6.js";import{a as be}from"../chunks/css.CXaI7eBR.js";import{i as we}from"../chunks/lifecycle.BR0ZKU9u.js";import{s as me,a as R}from"../chunks/store.B_sKLaNX.js";import{c as Ve}from"../chunks/cart-state.Cnj53tES.js";import{i as P}from"../chunks/if.vKngAeMe.js";import{h as Ee}from"../chunks/html.BpFOIylS.js";import{a as k}from"../chunks/attributes.BMgrQkzn.js";import{p as Ie}from"../chunks/stores.0OJjYvPJ.js";import{C as ve}from"../chunks/config.const.CA_UTROv.js";import{m as Qe,M as Z}from"../chunks/meta.store.D_MCNmTK.js";import{b as Re,a as We,d as Xe,u as Ze}from"../chunks/firebase.D-d3bDQg.js";import{z as Me,H as Se,q as Pe,K as C,S as He,Q as Ne,_ as le,a as G,t as $,Z as J,g as L,Y as ee,o as Fe,T as I,W as Q,h as Ue,j as ce,N as et,s as ke,I as tt,l as ye}from"../chunks/index.CRqRBLuz.js";import{o as De}from"../chunks/index-client.Biu3vJ0Y.js";import{e as xe,i as _e}from"../chunks/each.DMO57vYG.js";import{t as B}from"../chunks/class.C-8RiahO.js";import{t as je,f as $e}from"../chunks/index.DYGLkbmK.js";import{g as nt}from"../chunks/entry.DgIb9OM2.js";import{l as fe}from"../chunks/language.DikjnWXz.js";function at(o){return o?o.includes("<script")?o:`<script type="application/ld+json">${o}<\/script>`:""}var ot=_('<meta name="author">'),rt=_('<meta name="description">'),st=_('<meta name="keywords">'),it=_('<meta property="og:type">'),lt=_('<meta property="og:description"> <meta property="twitter:description">',1),ct=_('<meta name="robots" content="noindex, nofollow">'),dt=_('<meta property="article:author">'),mt=_('<meta property="article:published_time">'),pt=_('<meta property="article:modified_time">'),vt=_('<meta property="article:section">'),gt=_('<meta property="article:tag">'),ft=_('<meta property="profile:first_name">'),ut=_('<meta property="profile:last_name">'),ht=_('<meta property="profile:username">'),bt=_('<meta property="og:url"> <meta property="twitter:url"> <meta property="twitter:card" content="summary_large_image"> <meta property="og:title"> <meta property="twitter:title"> <meta property="og:image"> <meta property="twitter:image"> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>',1);function Ke(o,t){ue(t,!1);const n=me(),e=()=>R(Qe,"$meta",n),i=()=>R(Ie,"$page",n),p=D(),u=D(),b=D(),s=D(),h=D(),v=D();V(()=>(e(),Z),()=>{T(p,e().title?e().title+Z:Z.replace(" | ","").replace(" - ",""))}),V(()=>i(),()=>{T(u,ve.websiteUrl+i().url.pathname)}),V(()=>(e(),Z),()=>{var g;T(b,(((g=e().og)==null?void 0:g.title)||e().title)+Z)}),V(()=>e(),()=>{var g;T(s,((g=e().og)==null?void 0:g.description)||e().description)}),V(()=>(e(),ve),()=>{var g;T(h,((g=e().og)==null?void 0:g.image)||ve.fallbackSocialImage)}),V(()=>e(),()=>{T(v,at(e().structured))}),Ge(),we(),Je(g=>{var M=bt(),l=ne(M),m=d(l,2),c=d(m,4),w=d(c,2),j=d(w,2),y=d(j,2),F=d(y,2);P(F,()=>e().author,a=>{var r=ot();q(()=>k(r,"content",e().author)),x(a,r)});var A=d(F,2);P(A,()=>e().description,a=>{var r=rt();q(()=>k(r,"content",e().description)),x(a,r)});var W=d(A,2);P(W,()=>e().keywords,a=>{var r=st();q(()=>k(r,"content",e().keywords)),x(a,r)});var ae=d(W,2);P(ae,()=>{var a;return(a=e().og)==null?void 0:a.type},a=>{var r=it();q(()=>{var O;return k(r,"content",(O=e().og)==null?void 0:O.type)}),x(a,r)});var oe=d(ae,2);P(oe,()=>f(s),a=>{var r=lt(),O=ne(r),Ce=d(O,2);q(()=>{k(O,"content",f(s)),k(Ce,"content",f(s))}),x(a,r)});var re=d(oe,2);P(re,()=>e().noIndex,a=>{var r=ct();x(a,r)});var S=d(re,2);P(S,()=>{var a;return(a=e().og)==null?void 0:a.articleAuthor},a=>{var r=dt();q(()=>k(r,"content",e().og.articleAuthor)),x(a,r)});var z=d(S,2);P(z,()=>{var a;return(a=e().og)==null?void 0:a.articlePublishedTime},a=>{var r=mt();q(()=>k(r,"content",e().og.articlePublishedTime)),x(a,r)});var N=d(z,2);P(N,()=>{var a;return(a=e().og)==null?void 0:a.articleModifiedTime},a=>{var r=pt();q(()=>k(r,"content",e().og.articleModifiedTime)),x(a,r)});var U=d(N,2);P(U,()=>{var a;return(a=e().og)==null?void 0:a.articleSection},a=>{var r=vt();q(()=>k(r,"content",e().og.articleSection)),x(a,r)});var Y=d(U,2);P(Y,()=>{var a;return(a=e().og)==null?void 0:a.articleTag},a=>{var r=gt();q(()=>k(r,"content",e().og.articleTag)),x(a,r)});var K=d(Y,2);P(K,()=>{var a;return(a=e().og)==null?void 0:a.profileFirstName},a=>{var r=ft();q(()=>k(r,"content",e().og.profileFirstName)),x(a,r)});var se=d(K,2);P(se,()=>{var a;return(a=e().og)==null?void 0:a.profileLastName},a=>{var r=ut();q(()=>k(r,"content",e().og.profileLastName)),x(a,r)});var ie=d(se,2);P(ie,()=>{var a;return(a=e().og)==null?void 0:a.profileUsername},a=>{var r=ht();q(()=>k(r,"content",e().og.profileUsername)),x(a,r)});var pe=d(ie,2);Ee(pe,()=>f(v)),q(()=>{Oe.title=f(p),k(l,"content",f(u)),k(m,"content",f(u)),k(c,"content",f(b)),k(w,"content",f(b)),k(j,"content",f(h)),k(y,"content",f(h))}),x(g,M)}),he()}de(Ke,{},[],[],!0);const wt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>';function kt(o){Ne(o,"svelte-ft09v",".jp-alert.svelte-ft09v{position:fixed;bottom:10px;right:50%;transform:translateX(50%);margin:1rem 0;background-color:white;box-shadow:0 3px 15px 6px rgba(0, 0, 0, 0.2);border-radius:0.5rem;z-index:100}.jp-alert-error.svelte-ft09v{border-left:4px solid var(--danger-color)}.jp-alert-success.svelte-ft09v{border-left:4px solid var(--success-color)}.jp-alert-container.svelte-ft09v{display:flex;flex-direction:column;gap:0.5rem;padding:1rem;max-width:40rem}.jp-alert-container-header.svelte-ft09v{display:flex;align-items:center;justify-content:space-between;gap:1rem}.jp-alert-container-header-inner.svelte-ft09v{display:flex}.jp-alert-container-header-icon.svelte-ft09v{font-size:1.5rem;margin-right:0.5rem}.jp-alert-container-header-title.svelte-ft09v{flex:1 1 0;font-size:1.5rem;font-weight:bold;margin:0}.jp-alert-container-header-close.svelte-ft09v{width:1.5rem;height:1.5rem}.jp-alert-container-message.svelte-ft09v{font-size:0.875rem;margin:0}@media(max-width: 600px){.jp-alert.svelte-ft09v{right:1rem;left:1rem;transform:unset}}")}function yt(o){let t;return{c(){t=ce("✅")},m(n,e){J(n,t,e)},d(n){n&&G(t)}}}function xt(o){let t;return{c(){t=ce("⚠️")},m(n,e){J(n,t,e)},d(n){n&&G(t)}}}function qe(o){let t;return{c(){t=I("h2"),$(t,"class","jp-alert-container-header-title svelte-ft09v")},m(n,e){J(n,t,e),t.innerHTML=o[0]},p(n,e){e&1&&(t.innerHTML=n[0])},d(n){n&&G(t)}}}function Le(o){let t;return{c(){t=I("p"),$(t,"class","jp-alert-container-message svelte-ft09v")},m(n,e){J(n,t,e),t.innerHTML=o[1]},p(n,e){e&2&&(t.innerHTML=n[1])},d(n){n&&G(t)}}}function _t(o){let t,n,e,i,p,u,b,s,h,v,g,M;function l(y,F){if(y[2]==="error")return xt;if(y[2]==="success")return yt}let m=l(o),c=m&&m(o),w=o[0]&&qe(o),j=o[1]&&Le(o);return{c(){t=I("div"),n=I("div"),e=I("div"),i=I("div"),p=I("div"),c&&c.c(),u=Q(),w&&w.c(),b=Q(),s=I("button"),h=Q(),j&&j.c(),$(p,"class","jp-alert-container-header-icon svelte-ft09v"),$(i,"class","jp-alert-container-header-inner svelte-ft09v"),$(s,"type","button"),$(s,"class","jp-alert-container-header-close svelte-ft09v"),$(e,"class","jp-alert-container-header svelte-ft09v"),$(n,"class","jp-alert-container svelte-ft09v"),$(t,"class",v="jp-alert jp-alert-"+o[2]+" svelte-ft09v")},m(y,F){J(y,t,F),L(t,n),L(n,e),L(e,i),L(i,p),c&&c.m(p,null),L(i,u),w&&w.m(i,null),L(e,b),L(e,s),s.innerHTML=wt,L(n,h),j&&j.m(n,null),g||(M=ee(s,"click",Fe(o[4])),g=!0)},p(y,[F]){m!==(m=l(y))&&(c&&c.d(1),c=m&&m(y),c&&(c.c(),c.m(p,null))),y[0]?w?w.p(y,F):(w=qe(y),w.c(),w.m(i,null)):w&&(w.d(1),w=null),y[1]?j?j.p(y,F):(j=Le(y),j.c(),j.m(n,null)):j&&(j.d(1),j=null),F&4&&v!==(v="jp-alert jp-alert-"+y[2]+" svelte-ft09v")&&$(t,"class",v)},i:le,o:le,d(y){y&&G(t),c&&c.d(),w&&w.d(),j&&j.d(),g=!1,M()}}}function jt(o,t,n){let{title:e=""}=t,{message:i=""}=t,{state:p="error"}=t;const u=Ue(),b=()=>u("close");return o.$$set=s=>{"title"in s&&n(0,e=s.title),"message"in s&&n(1,i=s.message),"state"in s&&n(2,p=s.state)},[e,i,p,u,b]}class $t extends Se{constructor(t){super(),Pe(this,t,jt,_t,He,{title:0,message:1,state:2},kt)}get title(){return this.$$.ctx[0]}set title(t){this.$$set({title:t}),C()}get message(){return this.$$.ctx[1]}set message(t){this.$$set({message:t}),C()}get state(){return this.$$.ctx[2]}set state(t){this.$$set({state:t}),C()}}try{customElements.define("jp-alert",Me($t,{title:{},message:{},state:{}},[],[],!1))}catch{}function qt(o){function t(){o.dispatchEvent(new CustomEvent("click_outside",o))}function n(i){o&&!o.contains(i.target)&&!i.defaultPrevented&&t()}function e(i){i.key==="Escape"&&t()}return window.addEventListener("keydown",e,!0),document.addEventListener("click",n,!0),{destroy(){document.removeEventListener("click",n,!0),window.removeEventListener("keydown",e,!0)}}}function Lt(o){Ne(o,"svelte-1g8qqml",".jp-confirm-overlay.svelte-1g8qqml{z-index:10;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.2)}.jp-confirm-dialog.svelte-1g8qqml{background-color:var(--background-primary);border-radius:0.25rem;max-width:20rem}.jp-confirm-dialog-header.svelte-1g8qqml{padding:1rem}.jp-confirm-dialog-header-title.svelte-1g8qqml{font-size:1.5rem}.jp-confirm-dialog-content.svelte-1g8qqml{padding:2rem 1rem}.jp-confirm-dialog-content-border-top.svelte-1g8qqml{border-top:1px solid var(--border-primary)}.jp-confirm-dialog-actions.svelte-1g8qqml{display:flex;justify-content:space-between;border-top:1px solid var(--border-primary);padding:1rem}.jp-confirm-reject-button.svelte-1g8qqml,.jp-confirm-accept-button.svelte-1g8qqml{position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:4rem;padding:0 1rem;border-radius:0.25rem;height:36px;border:none;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;background:none;color:inherit;font-family:inherit;font-size:0.875rem;line-height:1.5;text-transform:uppercase;overflow:hidden}.jp-confirm-reject-button.svelte-1g8qqml{color:var(--danger-color);border:1px solid var(--danger-color)}.jp-confirm-accept-button.svelte-1g8qqml{background-color:var(--primary-color);color:var(--text-on-primary)}")}function ze(o){let t,n;return{c(){t=I("div"),n=I("h1"),$(n,"class","jp-confirm-dialog-header-title svelte-1g8qqml"),$(t,"class","jp-confirm-dialog-header svelte-1g8qqml")},m(e,i){J(e,t,i),L(t,n),n.innerHTML=o[0]},p(e,i){i&1&&(n.innerHTML=e[0])},d(e){e&&G(t)}}}function Te(o){let t;return{c(){t=I("p"),$(t,"class","jp-confirm-dialog-content svelte-1g8qqml"),ye(t,"jp-confirm-dialog-content-border-top",o[0])},m(n,e){J(n,t,e),t.innerHTML=o[1]},p(n,e){e&2&&(t.innerHTML=n[1]),e&1&&ye(t,"jp-confirm-dialog-content-border-top",n[0])},d(n){n&&G(t)}}}function zt(o){let t,n,e,i,p,u,b,s,h,v,g,M,l=o[0]&&ze(o),m=o[1]&&Te(o);return{c(){t=I("div"),n=I("div"),l&&l.c(),e=Q(),m&&m.c(),i=Q(),p=I("div"),u=I("button"),b=ce(o[2]),s=Q(),h=I("button"),v=ce(o[3]),$(u,"type","button"),$(u,"class","jp-confirm-reject-button svelte-1g8qqml"),$(h,"type","button"),$(h,"class","jp-confirm-accept-button svelte-1g8qqml"),$(p,"class","jp-confirm-dialog-actions svelte-1g8qqml"),$(n,"class","jp-confirm-dialog svelte-1g8qqml"),$(t,"class","jp-confirm-overlay svelte-1g8qqml")},m(c,w){J(c,t,w),L(t,n),l&&l.m(n,null),L(n,e),m&&m.m(n,null),L(n,i),L(n,p),L(p,u),L(u,b),L(p,s),L(p,h),L(h,v),g||(M=[ee(window,"keydown",Fe(o[6])),ee(u,"click",o[7]),ee(h,"click",o[8]),tt(qt.call(null,n)),ee(n,"click_outside",o[9])],g=!0)},p(c,[w]){c[0]?l?l.p(c,w):(l=ze(c),l.c(),l.m(n,e)):l&&(l.d(1),l=null),c[1]?m?m.p(c,w):(m=Te(c),m.c(),m.m(n,i)):m&&(m.d(1),m=null),w&4&&ke(b,c[2]),w&8&&ke(v,c[3])},i:le,o:le,d(c){c&&G(t),l&&l.d(),m&&m.d(),g=!1,et(M)}}}function Tt(o,t,n){let{title:e=""}=t,{message:i=""}=t,{reject:p=""}=t,{accept:u=""}=t,{closable:b=!1}=t;const s=Ue(),h=l=>l.key==="Escape"&&b&&s("close"),v=()=>s("confirmation",{confirmed:!1}),g=()=>s("confirmation",{confirmed:!0}),M=()=>{b&&s("close")};return o.$$set=l=>{"title"in l&&n(0,e=l.title),"message"in l&&n(1,i=l.message),"reject"in l&&n(2,p=l.reject),"accept"in l&&n(3,u=l.accept),"closable"in l&&n(4,b=l.closable)},[e,i,p,u,b,s,h,v,g,M]}class Et extends Se{constructor(t){super(),Pe(this,t,Tt,zt,He,{title:0,message:1,reject:2,accept:3,closable:4},Lt)}get title(){return this.$$.ctx[0]}set title(t){this.$$set({title:t}),C()}get message(){return this.$$.ctx[1]}set message(t){this.$$set({message:t}),C()}get reject(){return this.$$.ctx[2]}set reject(t){this.$$set({reject:t}),C()}get accept(){return this.$$.ctx[3]}set accept(t){this.$$set({accept:t}),C()}get closable(){return this.$$.ctx[4]}set closable(t){this.$$set({closable:t}),C()}}try{customElements.define("jp-confirm",Me(Et,{title:{},message:{},reject:{},accept:{},closable:{type:"Boolean"}},[],[],!1))}catch{}var It=_('<a class="svelte-1kmwoty"> </a>'),Mt=_('<a class="svelte-1kmwoty"> </a>'),St=_('<button class="overlay"></button> <div class="menu svelte-1kmwoty"><div class="menu-links svelte-1kmwoty"><a class="svelte-1kmwoty"> </a> <!></div> <div class="filler"></div> <div class="socials"><a href="https://x.com/gglycoscience?lang=hr" target="_blank" rel="noreferrer noopener" class="svelte-1kmwoty"><img src="/socials/x.svg" alt=""></a> <a href="https://www.linkedin.com/company/genos-ltd/posts/?feedView=all" target="_blank" rel="noreferrer noopener" class="svelte-1kmwoty"><img src="/socials/linkedin.svg" alt=""></a></div></div>',1),Pt=_('<header class="navigation svelte-1kmwoty"><nav class="svelte-1kmwoty"><a class="svelte-1kmwoty"><img class="logo svelte-1kmwoty" src="/brand/genos-logo-white.svg" alt="genos logo"></a> <div class="links svelte-1kmwoty"></div> <div class="flex gap-8"><button class="language-toggle svelte-1kmwoty"><span class="svelte-1kmwoty">EN</span> <span class="svelte-1kmwoty">HR</span></button> <button class="menu-toggle svelte-1kmwoty"><img src="/icons/menu.svg" alt=""></button></div></nav></header> <!>',1);const Ht={hash:"svelte-1kmwoty",code:`
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
`};function Ae(o,t){ue(t,!1),be(o,Ht);const n=me(),e=()=>R(fe,"$language",n),i=()=>R(Ie,"$page",n);let p=D(0),u=0,b=D(!0),s=D(!1),h=D(!1),v=[{hr:{label:"O nama",link:"/o-nama"},en:{label:"About",link:"/about"}},{hr:{label:"Projekti",link:"/projekti"},en:{label:"Projects",link:"/projects"}},{hr:{label:"Publikacije",link:"/publikacije"},en:{label:"Publications",link:"/publications"}},{hr:{label:"Usluge",link:"/usluge"},en:{label:"Services",link:"/services"}},{hr:{label:"Korisni linkovi",link:"/korisni-linkovi"},en:{label:"Resources",link:"/resources"}},{hr:{label:"Tim",link:"/tim"},en:{label:"Team",link:"/team"}},{hr:{label:"Novosti",link:"/novosti"},en:{label:"News",link:"/news"}},{hr:{label:"Kontakt",link:"/kontakt"},en:{label:"Contact",link:"/contact"}}];function g(){const S=window.scrollY;S>96&&S>u?T(b,!1):T(b,!0),u=S,T(p,S)}function M(S){S.key==="Escape"&&T(s,!1)}function l(){f(h)||(T(h,!0),setTimeout(()=>{T(h,!1)},500),fe.update(S=>{const z=S==="en"?"hr":"en";if(typeof window>"u")return z;localStorage.setItem("language",z);const N={"/":"/pocetna","/pocetna":"/","/about":"/o-nama","/o-nama":"/about","/projects":"/projekti","/projekti":"/projects","/publications":"/publikacije","/publikacije":"/publications","/services":"/usluge","/usluge":"/services","/resources":"/korisni-linkovi","/korisni-linkovi":"/resources","/news":"/novosti","/novosti":"/news","/team":"/tim","/tim":"/team","/contact":"/kontakt","/kontakt":"/contact","/glikomika":"/glycomics","/glycomics":"/glikomika","/epigenetika":"/epigenetics","/epigenetics":"/epigenetika","/dnk-i-forenzika":"/dna-and-forensics","/dna-and-forensics":"/dnk-i-forenzika"},U=window.location.pathname,Y=N[U]||(z==="en"?"/":"/pocetna");return Y!==U&&nt(Y),z}))}De(()=>(g(),window.addEventListener("scroll",g),window.addEventListener("keydown",M),()=>{window.removeEventListener("scroll",g),window.removeEventListener("keydown",M)})),we();var m=Pt(),c=ne(m),w=H(c),j=H(w),y=d(j,2);xe(y,5,()=>v,_e,(S,z)=>{var N=It(),U=H(N);E(N),q(()=>{k(N,"href",e()==="en"?f(z).en.link:f(z).hr.link),B(N,"active",(e()==="en"?f(z).en.link:f(z).hr.link)===i().url.pathname),te(U,e()==="en"?f(z).en.label:f(z).hr.label)}),x(S,N)}),E(y);var F=d(y,2),A=H(F),W=H(A),ae=d(W,2);E(A);var oe=d(A,2);E(F),E(w),E(c);var re=d(c,2);P(re,()=>f(s),S=>{var z=St(),N=ne(z),U=d(N,2),Y=H(U),K=H(Y),se=H(K);E(K);var ie=d(K,2);xe(ie,1,()=>v,_e,(pe,a)=>{var r=Mt(),O=H(r);E(r),q(()=>{k(r,"href",e()==="en"?f(a).en.link:f(a).hr.link),B(r,"active",(e()==="en"?f(a).en.link:f(a).hr.link)===i().url.pathname),te(O,e()==="en"?f(a).en.label:f(a).hr.label)}),X("click",r,()=>T(s,!1)),x(pe,r)}),E(Y),ge(4),E(U),q(()=>{k(K,"href",e()==="en"?"/":"/pocetna"),B(K,"active",(e()==="en"?"/":"/pocetna")===i().url.pathname),te(se,e()==="en"?"Home":"Početna")}),je(3,N,()=>$e),X("click",N,()=>T(s,!1)),X("click",K,()=>T(s,!1)),je(3,U,()=>$e,()=>({y:-1e3})),x(S,z)}),q(()=>{B(c,"scrolled",f(p)>96),B(c,"inactive",!f(b)),k(j,"href",e()==="en"?"/":"/pocetna"),A.disabled=f(h),B(W,"active",e()==="en"),B(ae,"active",e()==="hr")}),X("click",A,()=>{l()}),X("click",oe,()=>T(s,!f(s))),x(o,m),he()}de(Ae,{},[],[],!0);var Nt=_('<footer class="spacer svelte-ddg00p"><div><img src="/brand/genos-logo-white.svg" alt="genos logo" class="footer-logo svelte-ddg00p"></div> <h2 class="footer-title svelte-ddg00p"><!></h2> <div class="flex-1"></div> <div class="subfooter svelte-ddg00p"><div class="subfooter-social svelte-ddg00p"><a href="https://www.linkedin.com/company/genos-ltd" target="_blank" class="svelte-ddg00p"><img src="/icons/linkedin.svg" alt="linkedin"></a> <a href="https://x.com/gglycoscience" target="_blank" class="svelte-ddg00p"><img src="/icons/x.svg" alt="x"></a></div> <div class="subfooter-legal svelte-ddg00p"><a href="/privacy-policy.pdf" target="_blank" class="svelte-ddg00p"> </a> <a href="/gep.pdf" target="_blank" class="svelte-ddg00p"> </a></div> <div class="subfooter-contact svelte-ddg00p"><a href="mailto:info@genos.hr" class="svelte-ddg00p">info@genos.hr</a> <span>© 2025 Genos Glyco</span></div></div> <img class="footer-bg svelte-ddg00p" src="/images/footer.jpg" alt=""></footer>');const Ft={hash:"svelte-ddg00p",code:`
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
`};function Ye(o){be(o,Ft);const t=me(),n=()=>R(fe,"$language",t);var e=Nt(),i=d(H(e),2),p=H(i);Ee(p,()=>n()==="en"?'If you want to know more, collaborate, or use our services, <a class="footer-cta" href="/contact">get in touch</a> with us to discuss your ideas.':'Ako želite saznati više, surađivati ili koristiti naše usluge, <a class="footer-cta" href="/kontakt">kontaktirajte nas</a> kako bismo razgovarali o vašim idejama.'),E(i);var u=d(i,4),b=d(H(u),2),s=H(b),h=H(s);E(s);var v=d(s,2),g=H(v);E(v),E(b),ge(2),E(u),ge(2),E(e),q(()=>{te(h,n()==="en"?"Privacy policy":"Pravila privatnosti"),te(g,n()==="en"?"Gender Equality Plan":"Plan za ravnopravnost spolova")}),x(o,e)}de(Ye,{},[],[],!0);var Ut=_('<!> <div class="bg svelte-s1366u"></div> <!> <!> <!>',1);const Dt={hash:"svelte-s1366u",code:`
  .bg.svelte-s1366u {
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-image: url(/images/texture.svg);
  }
`};function Kt(o,t){ue(t,!1),be(o,Dt);const n=me(),e=()=>R(Ze,"$user",n);De(async()=>{const h=e();let v;const g=localStorage.getItem("cart");if(g&&(v=JSON.parse(g)),h&&h.cartItems&&(v&&v.cartUpdate?v.cartUpdate<h.cartUpdate&&(v={cartItems:h.cartItems}):v={cartItems:h.cartItems}),v&&v.cartItems){const M=await Promise.all(v.cartItems.map(async l=>{const m=await Re(We(Xe,"products",l.id));return m.exists()?{...m.data(),id:l.id,selectedVariant:l.selectedVariant}:null}));Ve.set(M)}}),we();var i=Ut(),p=ne(i);Ae(p,{});var u=d(p,4);Be(u,t,"default",{});var b=d(u,2);Ke(b,{});var s=d(b,2);Ye(s),x(o,i),he()}de(Kt,{},["default"],[],!0);export{Kt as component};
