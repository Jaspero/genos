import"../chunks/disclose-version.Bg9kRutz.js";import{c as U,p as C,j as _,m as y,i as e,k,f as $,t as q,s as z,e as n,a as h,b as p,d as G,r as t,g as u}from"../chunks/custom-element.ClMSU3hd.js";import{i as j}from"../chunks/if.BBqdro37.js";import{h as I}from"../chunks/html.CVuNOvSn.js";import{a as J}from"../chunks/css.D2vJRDJj.js";import{s as K}from"../chunks/attributes.Cy0qgvKV.js";import{i as Q}from"../chunks/lifecycle.Buqu_Q2D.js";import{s as R,a as A}from"../chunks/store.DCjruZua.js";import{o as V}from"../chunks/index-client.DeluEL2F.js";import{p as W}from"../chunks/stores.0VBwnbsg.js";import{m as X}from"../chunks/meta.store.CGteVmBv.js";import{g as Y,q as Z,w as rr,c as er,d as nr}from"../chunks/firebase.BenqiYs2.js";import{l as tr}from"../chunks/language.Dqnibdh2.js";const ar=!1,ir=!1,$r=Object.freeze(Object.defineProperty({__proto__:null,prerender:ir,ssr:ar},Symbol.toStringTag,{value:"Module"}));var sr=q('<div class="grid grid-small"><div class="gc-12 single-article spacer svelte-hw02tv" style="text-align: center; padding: 4rem;"><p> </p></div></div>'),or=q('<div class="grid grid-small"><div class="gc-12 single-article spacer svelte-hw02tv" style="text-align: center; padding: 4rem;"><h2> </h2> <a> </a></div></div>'),lr=q('<div class="grid grid-small"><div class="gc-12 single-article spacer svelte-hw02tv"><h2 class="single-article-title svelte-hw02tv"> </h2> <p class="single-article-description svelte-hw02tv"> </p> <div class="single-article-content"><p><!></p></div></div></div>');const mr={hash:"svelte-hw02tv",code:`\r
    .single-article.svelte-hw02tv {\r
        padding: 6.5rem;\r
    }\r
    /* (empty) .single-article-title {\r
    }*/\r
    .single-article-description.svelte-hw02tv {\r
        margin-top: .5rem;\r
    }\r
    /* (unused) .single-article-image {\r
        margin-top: 1rem;\r
        border-radius: 1rem;\r
    }*/\r
\r
    .single-article-content h1 {\r
        margin: 2em 0 0.75em;\r
        font-size: 2rem;\r
        font-family: var(--ff-2);\r
        font-weight: normal;\r
    }\r
    .single-article-content h2 {\r
        margin: 2em 0 0.75em;\r
        font-size: 1.75rem;\r
        font-weight: normal;\r
    }\r
\r
    .single-article-content h3 {\r
        margin: 2em 0 0.75em;\r
        font-size: 1.5rem;\r
        font-weight: normal;\r
    }\r
\r
    .single-article-content ul {\r
        margin: 1rem 0;\r
    }\r
\r
    .single-article-content li {\r
        margin: 0.5rem;\r
    }\r
\r
    .single-article-content p {\r
        margin: 1em 0;\r
        font-size: 1rem;\r
    }\r
\r
    .single-article-content hr {\r
        border-top: 2px dashed var(--fg-3);\r
        border-bottom: none;\r
        border-right: none;\r
        border-left: none;\r
        margin: 2rem 0;\r
        width: 100%;\r
    }\r
\r
    .single-article-content img {\r
        width: calc(100% + 4rem);\r
        max-width: calc(100% + 4rem);\r
        border-radius: 1.5rem;\r
        margin: 2rem -2rem;\r
        color: transparent;\r
        height: auto;\r
    }\r
\r
    .single-article-content blockquote {\r
        margin: 2rem 0;\r
        padding: 0 1rem;\r
        border-left: 2px solid var(--fg-3);\r
    }\r
\r
    .single-article-content figure {\r
        margin: 2rem 0;\r
    }\r
\r
    .single-article-content figure img {\r
        margin: 0 -2rem;\r
    }\r
\r
    .single-article-content figcaption {\r
        margin: 0.5rem 0;\r
        text-align: center;\r
        font-size: 0.875rem;\r
    }\r
`};function cr(F,B){C(B,!1),J(F,mr);const M=R(),D=()=>A(W,"$page",M),g=()=>A(tr,"$language",M);let a=y(null),w=y(!0),N=y(!1);function b(s,r,o){return o==="hr"?s[r+"Hr"]||s[r]||"":s[r+"En"]||s[r]||""}V(async()=>{var l,i,d,m,c;const s=D().params.id,r=await Y(Z(er(nr,"blog-articles"),rr("url","==",s)));if(r.empty){_(N,!0),_(w,!1);return}const o=r.docs[0];_(a,{id:o.id,...o.data()}),X.set({title:((l=e(a).meta)==null?void 0:l.title)||e(a).title,description:((i=e(a).meta)==null?void 0:i.description)||e(a).description,keywords:((d=e(a).meta)==null?void 0:d.keywords)||"",structured:((m=e(a).meta)==null?void 0:m.structured)||"",og:((c=e(a).meta)==null?void 0:c.og)||{}}),_(w,!1)}),Q();var O=k(),E=$(O);j(E,()=>e(w),s=>{var r=sr(),o=n(r),l=n(o),i=n(l);t(l),t(o),t(r),h(()=>u(i,g()==="en"?"Loading...":"Učitavanje...")),p(s,r)},s=>{var r=k(),o=$(r);j(o,()=>e(N),l=>{var i=or(),d=n(i),m=n(d),c=n(m);t(m);var v=z(m,2),f=n(v);t(v),t(d),t(i),h(()=>{u(c,g()==="en"?"Article not found":"Članak nije pronađen"),K(v,"href",g()==="en"?"/news":"/novosti"),u(f,g()==="en"?"Back to News":"Povratak na Novosti")}),p(l,i)},l=>{var i=k(),d=$(i);j(d,()=>e(a),m=>{var c=lr(),v=n(c),f=n(v),H=n(f);h(()=>u(H,b(e(a),"title",g()))),t(f);var x=z(f,2),L=n(x);h(()=>u(L,b(e(a),"description",g()))),t(x);var P=z(x,2),S=n(P),T=n(S);I(T,()=>b(e(a),"content",g())),t(S),t(P),t(v),t(c),p(m,c)},null,!0),p(l,i)},!0),p(s,r)}),p(F,O),G()}U(cr,{},[],[],!0);export{cr as component,$r as universal};
