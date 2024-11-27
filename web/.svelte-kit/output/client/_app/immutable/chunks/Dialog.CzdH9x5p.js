import"./disclose-version.Bg9kRutz.js";import{h as N,u as Q,i as J,aF as U,aH as V,aO as X,P as Y,aP as $,aQ as ee,Z as te,aR as ne,q as ae,aG as L,aS as se,c as re,p as ie,o as oe,v as le,l as de,x as M,f as R,a as T,b as ce,aT as fe,z as p,s as A,e as W,t as D,r as j,d as P}from"./custom-element.Be9JRDZa.js";import{i as q}from"./if.DHrsNizm.js";import{s as ue}from"./slot.BNbXFTyQ.js";import{a as ve}from"./css.BsuxAb-5.js";import{a as G}from"./attributes.Cqk6Ie6U.js";import{t as B}from"./class.huurhb9Z.js";import{i as me}from"./lifecycle.Cqhf0dYa.js";import{p as _}from"./props.BcZkuvB_.js";import{c as ge}from"./index-client.DfkwVSc5.js";function be(a,e,t){N(()=>{var n=Q(()=>e(a,t==null?void 0:t())||{});if(t&&(n!=null&&n.update)){var r=!1,o={};J(()=>{var i=t();U(i),r&&V(o,i)&&(o=i,n.update(i))}),r=!0}if(n!=null&&n.destroy)return()=>n.destroy()})}const we=requestAnimationFrame,he=()=>performance.now(),y={tick:a=>we(a),now:()=>he(),tasks:new Set};function Z(a){y.tasks.forEach(e=>{e.c(a)||(y.tasks.delete(e),e.f())}),y.tasks.size!==0&&y.tick(Z)}function pe(a){let e;return y.tasks.size===0&&y.tick(Z),{promise:new Promise(t=>{y.tasks.add(e={c:a,f:t})}),abort(){y.tasks.delete(e)}}}function F(a,e){a.dispatchEvent(new CustomEvent(e))}function _e(a){const e=a.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function I(a){const e={},t=a.split(";");for(const n of t){const[r,o]=n.split(":");if(!r||o===void 0)break;const i=_e(r.trim());e[i]=o.trim()}return e}const ye=a=>a;function H(a,e,t,n){var r=(a&se)!==0,o="both",i,w=e.inert,l,c;function d(){return i??(i=t()(e,(n==null?void 0:n())??{},{direction:o}))}var m={is_global:r,in(){e.inert=w,F(e,"introstart"),l=z(e,d(),c,1,()=>{F(e,"introend"),l==null||l.abort(),l=i=void 0})},out(s){e.inert=!0,F(e,"outrostart"),c=z(e,d(),l,0,()=>{F(e,"outroend"),s==null||s()})},stop:()=>{l==null||l.abort(),c==null||c.abort()}},g=te;if((g.transitions??(g.transitions=[])).push(m),X){var b=r;if(!b){for(var f=g.parent;f&&f.f&Y;)for(;(f=f.parent)&&!(f.f&$););b=!f||(f.f&ee)!==0}b&&N(()=>{Q(()=>m.in())})}}function z(a,e,t,n,r){var o=n===1;if(ne(e)){var i,w=!1;return ae(()=>{if(!w){var h=e({direction:o?"in":"out"});i=z(a,h,t,n,r)}}),{abort:()=>{w=!0,i==null||i.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration))return r(),{abort:L,deactivate:L,reset:L,t:()=>n};const{delay:l=0,css:c,tick:d,easing:m=ye}=e;var g=[];if(o&&t===void 0&&(d&&d(0,1),c)){var b=I(c(0,1));g.push(b,b)}var f=()=>1-n,s=a.animate(g,{duration:l});return s.onfinish=()=>{var h=(t==null?void 0:t.t())??1-n;t==null||t.abort();var x=n-h,u=e.duration*Math.abs(x),C=[];if(u>0){if(c)for(var k=Math.ceil(u/16.666666666666668),O=0;O<=k;O+=1){var S=h+x*m(O/k),E=c(S,1-S);C.push(I(E))}f=()=>{var v=s.currentTime;return h+x*m(v/u)},d&&pe(()=>{if(s.playState!=="running")return!1;var v=f();return d(v,1-v),!0})}s=a.animate(C,{duration:u,fill:"forwards"}),s.onfinish=()=>{f=()=>n,d==null||d(n,1-n),r()}},{abort:()=>{s&&(s.cancel(),s.effect=null)},deactivate:()=>{r=L},reset:()=>{n===0&&(d==null||d(1,0))},t:()=>f()}}function ke(a){function e(){a.dispatchEvent(new CustomEvent("click_outside",a))}function t(r){a&&!a.contains(r.target)&&!r.defaultPrevented&&e()}function n(r){r.key==="Escape"&&e()}return window.addEventListener("keydown",n,!0),document.addEventListener("mousedown",t,!0),{destroy(){document.removeEventListener("mousedown",t,!0),window.removeEventListener("keydown",n,!0)}}}const Ee=a=>a;function K(a,{delay:e=0,duration:t=400,easing:n=Ee}={}){const r=+getComputedStyle(a).opacity;return{delay:e,duration:t,easing:n,css:o=>`opacity: ${o*r}`}}var xe=P('<div class="blurred-bg svelte-8gb86w"></div>'),Ce=P('<img class="svelte-8gb86w">'),Oe=P('<!> <div class="dialog svelte-8gb86w"><!> <div class="dialog-content svelte-8gb86w"><!></div> <button type="button" class="dialog-close svelte-8gb86w"><span class="material-symbols-outlined">close</span></button></div>',1);const Se={hash:"svelte-8gb86w",code:`
  .blurred-bg.svelte-8gb86w {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    -webkit-backdrop-filter: blur(3px);
            backdrop-filter: blur(3px);
  }

  .dialog.svelte-8gb86w {
    z-index: 10004;
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 600px;
    max-height: 90vh;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    overflow-y: auto;
  }
  .dialog-content.svelte-8gb86w {
    padding: 0;
  }

  .dialog-close.svelte-8gb86w {
    position: absolute;
    top: -1rem;
    right: -1rem;
    background-color: white;
    border: 1px solid red;
  }

  .fullscreen.svelte-8gb86w {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
    transform: translate(0);
  }

  .dialog-content.svelte-8gb86w {
    width: 100%;
    padding: 3rem;
    overflow-y: auto;
  }

  .dialog-close.svelte-8gb86w {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.25s;
  }
  .dialog-close.svelte-8gb86w:hover {
    background-color: rgba(0, 0, 0, 0.16);
  }

  .contentfull.svelte-8gb86w {
    width: 100%;
  }

  .min-w-0.svelte-8gb86w {
    min-width: unset;
  }
  @media (max-width: 600px) {
    .dialog-content.svelte-8gb86w {
      width: 100%;
      padding: 1.5rem;
    }
    .dialog.svelte-8gb86w {
      width: 80%;
      height: auto;
      max-height: 90%;
      min-width: unset;
    }
    img.svelte-8gb86w {
      display: none;
    }
  }
`};function Le(a,e){ie(e,!1),ve(a,Se);let t=_(e,"showing",12,!1),n=_(e,"showClose",12,!0),r=_(e,"src",12,""),o=_(e,"alt",12,""),i=_(e,"fullScreen",12,!1),w=_(e,"contentfull",12,!1),l=_(e,"removeMinW",12,!1),c=_(e,"buttonOutside",12,!1);const d=ge();function m(){t(!1),d("closed")}function g(s){s.key==="Escape"&&n()&&m()}oe(()=>U(t()),()=>{t()?document.documentElement.classList.add("scroll-disabled"):document.documentElement.classList.remove("scroll-disabled")}),le(),me();var b=de();M("keydown",fe,g);var f=R(b);return q(f,t,s=>{var h=Oe(),x=R(h);q(x,()=>!i(),E=>{var v=xe();H(3,v,()=>K,()=>({duration:200})),T(E,v)});var u=A(x,2),C=W(u);q(C,r,E=>{var v=Ce();D(()=>{G(v,"src",r()),G(v,"alt",o())}),T(E,v)});var k=A(C,2),O=W(k);ue(O,e,"default",{}),j(k);var S=A(k,2);j(u),D(()=>{B(u,"fullscreen",i()),B(u,"min-w-0",l()),B(u,"button-outside",c()),B(k,"contentfull",w())}),M("click",S,m),H(3,u,()=>K,()=>({duration:200})),be(u,E=>ke(E)),N(()=>M("click_outside",u,m)),T(s,h)}),T(a,b),ce({get showing(){return t()},set showing(s){t(s),p()},get showClose(){return n()},set showClose(s){n(s),p()},get src(){return r()},set src(s){r(s),p()},get alt(){return o()},set alt(s){o(s),p()},get fullScreen(){return i()},set fullScreen(s){i(s),p()},get contentfull(){return w()},set contentfull(s){w(s),p()},get removeMinW(){return l()},set removeMinW(s){l(s),p()},get buttonOutside(){return c()},set buttonOutside(s){c(s),p()}})}re(Le,{showing:{type:"Boolean"},showClose:{type:"Boolean"},src:{},alt:{},fullScreen:{type:"Boolean"},contentfull:{type:"Boolean"},removeMinW:{type:"Boolean"},buttonOutside:{type:"Boolean"}},["default"],[],!0);export{Le as D,be as a};
