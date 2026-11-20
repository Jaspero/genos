import"./disclose-version.Bg9kRutz.js";import{p as D,i as A,m as E,t as j,g as i,r as a,b as y,c as F,aJ as m,a1 as J,d as n,s as w,a as M,e as x}from"./custom-element.mhvlARxE.js";import{e as C,i as G}from"./each.SlJ2YNLW.js";import{a as H}from"./5.CbxZYquf.js";import{s as P}from"./attributes.DB9NLSEX.js";import{i as I}from"./lifecycle.CIyOmXY_.js";import{p as g}from"./props.CBGsWOaF.js";import{g as K,q as L,l as N,o as O,c as Q}from"./index.esm.CL0ue_pC.js";import{o as R}from"./index-client.CO84qTDc.js";import{d as S}from"./firebase.Dz8Y6U0A.js";var T=j('<div class="news-card svelte-a5afwo"><div class="news-bg-img svelte-a5afwo"></div> <div class="card news-content svelte-a5afwo"><h3 class="h3 svelte-a5afwo"> </h3> <p class="p svelte-a5afwo"> </p> <div class="svelte-a5afwo"><a class="btn-pink"> </a></div></div></div>'),U=j('<div class="card container news-card-container svelte-a5afwo"></div>');const V={hash:"svelte-a5afwo",code:`
  .news-card-container.svelte-a5afwo {
    gap: 20px;
    padding-top: 70px !important;
    justify-content: center;
    @media (max-width: 1100px) {
      gap: 20px;
    }
    @media (max-width: 900px) {
      flex-direction: column;
    }

    .news-card:where(.svelte-a5afwo) {
      max-width: 900px;
      border: 1px solid #000;
      border-radius: 6px;
      display: flex;
      max-height: 550px;
      flex-direction: column;
      .news-bg-img:where(.svelte-a5afwo) {
        height: 230px;
      }
      h3:where(.svelte-a5afwo) {
        color: var(--text-primary);
      }
    }
    .news-content:where(.svelte-a5afwo) {
      display: flex;
      padding: 20px;
      flex-direction: column;
      gap: 10px;
      h3:where(.svelte-a5afwo) {
        margin-top: 0;
        margin-bottom: 10px;
      }
      .p:where(.svelte-a5afwo) {
        font-size: 20px;
        line-height: 26px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
    .news-content > div:where(.svelte-a5afwo) {
      display: flex;
      justify-content: flex-end;
    }
  }
`};function W(b,s){D(s,!1),H(b,V);let l=g(s,"collectionPrefx",12),o=g(s,"singlearticlelink",12),r=g(s,"linklabel",12),h=E([]);R(async()=>{const{docs:e}=await K(L(Q(S,"blog-articles"+(l()||"")),O("publicationDate","desc"),N(3)));A(h,e.map(t=>t.data()))}),I();var c=U();return C(c,5,()=>i(h),G,(e,t)=>{var d=T(),u=n(d),k=w(u,2),p=n(k),q=n(p);a(p);var f=w(p,2),z=n(f);a(f);var _=w(f,2),v=n(_),B=n(v);a(v),a(_),a(k),a(d),M(()=>{P(u,"style",`background-image: url(${i(t).image??""}); background-repeat: no-repeat;
      background-size: cover;
      background-position: center;`),x(q,i(t).title),x(z,i(t).description),P(v,"href",`${o()??""}/${i(t).url??""}`),x(B,r())}),y(e,d)}),a(c),y(b,c),F({get collectionPrefx(){return l()},set collectionPrefx(e){l(e),m()},get singlearticlelink(){return o()},set singlearticlelink(e){o(e),m()},get linklabel(){return r()},set linklabel(e){r(e),m()}})}customElements.define("pb-featured-blog-articles",J(W,{collectionPrefx:{},singlearticlelink:{},linklabel:{}},[],[],!1));export{W as default};
