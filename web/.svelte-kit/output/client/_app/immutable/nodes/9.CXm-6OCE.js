import"../chunks/disclose-version.Bg9kRutz.js";import{c as ie,p as oe,o as le,v as ce,t as c,f as x,s as i,e as r,k as y,m as T,a as f,x as U,l as v,b as l,d as pe,z as ve,r as n,g as h}from"../chunks/custom-element.ByhzGb1h.js";import{i as d}from"../chunks/if.vKngAeMe.js";import{h as j}from"../chunks/html.BpFOIylS.js";import{a as de}from"../chunks/css.CXaI7eBR.js";import{a as u}from"../chunks/attributes.BMgrQkzn.js";import{t as me}from"../chunks/class.C-8RiahO.js";import{t as W,f as X}from"../chunks/index.DYGLkbmK.js";import{i as ge}from"../chunks/lifecycle.BR0ZKU9u.js";import{p as fe}from"../chunks/props.-W8eUQAU.js";import{o as he}from"../chunks/index-client.Biu3vJ0Y.js";import{m as ue}from"../chunks/meta.store.D_MCNmTK.js";import"../chunks/image-gallery.wc.CZZbQSui.js";var we=c('<button class="overlay"></button> <div class="menu"><a href="/about">About</a> <a href="/projects">Projects</a> <a href="/publications">Publications</a> <a href="/services">Services</a> <a href="/resources">Resources</a> <a href="/news">News</a> <a href="/team">Our team</a> <a href="/contact">Contact us</a> <div class="filler"></div> <div class="socials"><a href="https://x.com/gglycoscience?lang=hr" target="_blank" rel="noreferrer noopener"><img src="/socials/x.svg" alt=""></a> <a href="https://www.linkedin.com/company/genos-ltd/posts/?feedView=all" target="_blank" rel="noreferrer noopener"><img src="/socials/linkedin.svg" alt=""></a></div></div>',1),_e=c('<div class="article-info"><p class="single-article-description svelte-138s1mw"> </p></div>'),be=c('<img class="author-img svelte-138s1mw"> <p class="author-name svelte-138s1mw"> </p>',1),ke=c('<p class="article-date svelte-138s1mw"> </p>'),xe=c('<div><img class="article-img svelte-138s1mw"></div>'),ye=c('<header class="navigation"><nav><a href="/"><img class="logo" src="/brand/genos-logo-white.svg" alt="genos logo"></a> <div class="links"><a class="links-link desktop" href="/about"><span class="line-thing"></span>About</a> <a class="links-link desktop" href="/projects"><span class="line-thing"></span>Projects</a> <a class="links-link desktop" href="/publications"><span class="line-thing"></span>Publications</a> <a class="links-link desktop" href="/services"><span class="line-thing"></span>Services</a> <a class="links-link desktop" href="/resources"><span class="line-thing"></span>Resources</a> <a class="links-link desktop" href="/news"><span class="line-thing"></span>News</a> <a class="links-link desktop" href="/team"><span class="line-thing"></span>Our team</a> <a class="links-link desktop contact" href="/contact">Contact us</a> <button class="links-link mobile"><span class="line-thing"></span>Menu</button></div></nav></header> <!> <!> <section class="section single-article-section svelte-138s1mw"><div class="container-xs flex-col single-article-container svelte-138s1mw"><h2 class="h2 subtitle"> </h2> <!> <div class="author-content svelte-138s1mw"><!></div> <!> <div class="article-content svelte-138s1mw"><!> <div class="article-content svelte-138s1mw"><p class="article-text p svelte-138s1mw"><!></p></div></div></div></section> <!>',1);const je={hash:"svelte-138s1mw",code:`\r
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
`};function Ee(E,S){var G,H,I,J,Q;oe(S,!1),de(E,je);let e=fe(S,"data",12),D=0,w=T(!0),p=T(!1);const{author:m,content:Z,image:L,imageAlt:$}=e().article;ue.set({title:((G=e().article.meta)==null?void 0:G.title)||e().article.title,description:((H=e().article.meta)==null?void 0:H.description)||e().article.description,keywords:((I=e().article.meta)==null?void 0:I.keywords)||"",structured:((J=e().article.meta)==null?void 0:J.structured)||"",og:((Q=e().article.meta)==null?void 0:Q.og)||{}});function P(){const t=window.scrollY;t>96&&t>D?v(w,!1):v(w,!0),D=t}function z(t){t.key==="Escape"&&v(p,!1)}he(()=>(window.addEventListener("scroll",P),window.addEventListener("keydown",z),()=>{window.removeEventListener("scroll",P),window.removeEventListener("keydown",z)})),le(()=>{},()=>{}),ce(),ge();var A=ye(),g=x(A),N=r(g),Y=i(r(N),2),ee=i(r(Y),16);n(Y),n(N),n(g);var C=i(g,2);d(C,()=>y(p),t=>{var a=we(),s=x(a),o=i(s,2);W(3,s,()=>X),U("click",s,()=>v(p,!1)),W(3,o,()=>X,()=>({y:-1e3})),l(t,a)});var M=i(C,2);j(M,()=>e().header);var _=i(M,2),O=r(_),b=r(O),te=r(b);n(b);var R=i(b,2);d(R,()=>e().article.description,t=>{var a=_e(),s=r(a),o=r(s);n(s),n(a),f(()=>h(o,e().article.description)),l(t,a)});var k=i(R,2),ae=r(k);d(ae,()=>m,t=>{var a=be(),s=x(a),o=i(s,2),ne=r(o);n(o),f(()=>{u(s,"src",m.image||"/images/dummy-img.jpg"),u(s,"alt",m.name),h(ne,m.name)}),l(t,a)}),n(k);var K=i(k,2);d(K,()=>e().article.publicationDate,t=>{var a=ke(),s=r(a);f(()=>h(s,`Date: ${new Date(e().article.publicationDate).toLocaleDateString()??""}`)),n(a),l(t,a)});var V=i(K,2),q=r(V);d(q,()=>L,t=>{var a=xe(),s=r(a);u(s,"src",L),u(s,"alt",$),n(a),l(t,a)});var B=i(q,2),F=r(B),se=r(F);j(se,()=>Z),n(F),n(B),n(V),n(O),n(_);var re=i(_,2);return j(re,()=>e().footer),f(()=>{me(g,"inactive",!y(w)),h(te,e().article.title)}),U("click",ee,()=>v(p,!y(p))),l(E,A),pe({get data(){return e()},set data(t){e(t),ve()}})}customElements.define("pb-navigation",ie(Ee,{data:{}},[],[],!1));export{Ee as component};
