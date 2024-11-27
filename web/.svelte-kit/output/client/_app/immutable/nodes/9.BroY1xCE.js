import"../chunks/disclose-version.Bg9kRutz.js";import{c as Q,p as R,o as T,v as U,f as H,t as p,a as o,b as V,d as l,s,z as W,e as r,r as a,g as v}from"../chunks/custom-element.Be9JRDZa.js";import{i as d}from"../chunks/if.DHrsNizm.js";import{h as w}from"../chunks/html.CRmJumZG.js";import{a as X}from"../chunks/css.BsuxAb-5.js";import{a as g}from"../chunks/attributes.Cqk6Ie6U.js";import{i as Y}from"../chunks/lifecycle.Cqhf0dYa.js";import{p as Z}from"../chunks/props.BcZkuvB_.js";import{m as $}from"../chunks/meta.store.ZQREEzaj.js";import"../chunks/image-gallery.wc.igZ_jBv8.js";var tt=l('<div class="article-info"><p class="single-article-description svelte-138s1mw"> </p></div>'),et=l('<img class="author-img svelte-138s1mw"> <p class="author-name svelte-138s1mw"> </p>',1),rt=l('<p class="article-date svelte-138s1mw"> </p>'),at=l('<div><img class="article-img svelte-138s1mw"></div>'),it=l('<!> <section class="section single-article-section svelte-138s1mw"><div class="container-xs flex-col single-article-container svelte-138s1mw"><h2 class="h2 subtitle"> </h2> <!> <div class="author-content svelte-138s1mw"><!></div> <!> <div class="article-content svelte-138s1mw"><!> <div class="article-content svelte-138s1mw"><p class="article-text p svelte-138s1mw"><!></p></div></div></div></section> <!>',1);const nt={hash:"svelte-138s1mw",code:`\r
  .single-article-section.svelte-138s1mw {\r
    padding-top: 20px !important;\r
  }\r
  .single-article-container.svelte-138s1mw {\r
    text-align: center;\r
  }\r
\r
  .single-article-description.svelte-138s1mw {\r
    text-align: left;\r
    font-size: 19px;\r
    padding: 0 0 30px 0;\r
    color: #292929;\r
    font-weight: 300;\r
  }\r
  \r
  .article-img.svelte-138s1mw {\r
    max-height: 640px;\r
    -o-object-fit: cover;\r
       object-fit: cover;\r
    border: 1px solid #000;\r
    -o-object-position: center;\r
       object-position: center;\r
    width: 100%;\r
    border-radius: 10px;\r
    max-width: 100%;\r
  }\r
  .article-content.svelte-138s1mw {\r
    display: flex;\r
    flex-direction: column;\r
  }\r
  .article-text.svelte-138s1mw {\r
    text-align: left;\r
    padding: 50px 0 !important;\r
  }\r
\r
  .author-content.svelte-138s1mw {\r
    display: flex;\r
    align-items: center;\r
    gap: 10px;\r
    padding-bottom: 20px;\r
  }\r
  .author-name.svelte-138s1mw {\r
    font-size: 20px;\r
  }\r
  .author-img.svelte-138s1mw {\r
    width: 60px;\r
    height: 60px;\r
    border-radius: 50%;\r
    -o-object-fit: contain;\r
       object-fit: contain;\r
    -o-object-position: center;\r
       object-position: center;\r
  }\r
  .article-date.svelte-138s1mw {\r
    margin-right: auto;\r
    padding-bottom: 50px;\r
  }\r
`};function st(h,u){var B,C,E,F,G;R(u,!1),X(h,nt);let t=Z(u,"data",12);const{author:c,content:I,image:b,imageAlt:J}=t().article;$.set({title:((B=t().article.meta)==null?void 0:B.title)||t().article.title,description:((C=t().article.meta)==null?void 0:C.description)||t().article.description,keywords:((E=t().article.meta)==null?void 0:E.keywords)||"",structured:((F=t().article.meta)==null?void 0:F.structured)||"",og:((G=t().article.meta)==null?void 0:G.og)||{}}),T(()=>{},()=>{}),U(),Y();var j=it(),y=H(j);w(y,()=>t().header);var _=s(y,2),D=r(_),f=r(D),K=r(f);a(f);var k=s(f,2);d(k,()=>t().article.description,n=>{var e=tt(),i=r(e),m=r(i);a(i),a(e),p(()=>v(m,t().article.description)),o(n,e)});var x=s(k,2),M=r(x);d(M,()=>c,n=>{var e=et(),i=H(e),m=s(i,2),P=r(m);a(m),p(()=>{g(i,"src",c.image||"/images/dummy-img.jpg"),g(i,"alt",c.name),v(P,c.name)}),o(n,e)}),a(x);var z=s(x,2);d(z,()=>t().article.publicationDate,n=>{var e=rt(),i=r(e);p(()=>v(i,`Date: ${new Date(t().article.publicationDate).toLocaleDateString()??""}`)),a(e),o(n,e)});var A=s(z,2),L=r(A);d(L,()=>b,n=>{var e=at(),i=r(e);g(i,"src",b),g(i,"alt",J),a(e),o(n,e)});var S=s(L,2),q=r(S),N=r(q);w(N,()=>I),a(q),a(S),a(A),a(D),a(_);var O=s(_,2);return w(O,()=>t().footer),p(()=>v(K,t().article.title)),o(h,j),V({get data(){return t()},set data(n){t(n),W()}})}Q(st,{data:{}},[],[],!0);export{st as component};
