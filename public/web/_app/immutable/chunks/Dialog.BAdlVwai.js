import"./disclose-version.Bg9kRutz.js";import{h as N,u as H,i as X,aj as J,al as Y,Q as Z,aO as $,ao as tt,aP as et,aQ as nt,aR as st,aS as at,q as rt,ak as L,c as ot,p as it,o as lt,v as ct,n as dt,x as M,f as W,b as T,d as ft,z as p,aT as ut,t as R,s as A,e as P,a as j,r as D}from"./custom-element.BA3kAs82.js";import{i as q}from"./if.D1qQ5yWV.js";import{s as vt}from"./slot.DBjgUlkK.js";import{a as mt}from"./css.BoFqUIVp.js";import{a as I}from"./attributes.BP-pkpGu.js";import{t as B}from"./class.BK6m44dy.js";import{i as gt}from"./lifecycle.N0aafeFz.js";import{p as _}from"./props.Xk-YzMbx.js";import{c as bt}from"./index-client.DC-y6gSa.js";function wt(e,t,n){N(()=>{var s=H(()=>t(e,n==null?void 0:n())||{});if(n&&(s!=null&&s.update)){var r=!1,i={};X(()=>{var o=n();J(o),r&&Y(i,o)&&(i=o,s.update(o))}),r=!0}if(s!=null&&s.destroy)return()=>s.destroy()})}const ht=requestAnimationFrame,pt=()=>performance.now(),y={tick:e=>ht(e),now:()=>pt(),tasks:new Set};function V(e){y.tasks.forEach(t=>{t.c(e)||(y.tasks.delete(t),t.f())}),y.tasks.size!==0&&y.tick(V)}function _t(e){let t;return y.tasks.size===0&&y.tick(V),{promise:new Promise(n=>{y.tasks.add(t={c:e,f:n})}),abort(){y.tasks.delete(t)}}}function F(e,t){e.dispatchEvent(new CustomEvent(t))}function yt(e){const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function Q(e){const t={},n=e.split(";");for(const s of n){const[r,i]=s.split(":");if(!r||i===void 0)break;const o=yt(r.trim());t[o]=i.trim()}return t}const kt=e=>e;function G(e,t,n,s){var r=(e&st)!==0,i="both",o,v=t.inert,l,d;function c(){return o??(o=n()(t,(s==null?void 0:s())??{},{direction:i}))}var m={is_global:r,in(){t.inert=v,F(t,"introstart"),l=z(t,c(),d,1,()=>{F(t,"introend"),l==null||l.abort(),l=o=void 0})},out(a){t.inert=!0,F(t,"outrostart"),d=z(t,c(),l,0,()=>{F(t,"outroend"),a==null||a()})},stop:()=>{l==null||l.abort(),d==null||d.abort()}},g=Z;if((g.transitions??(g.transitions=[])).push(m),$){var b=r;if(!b){for(var f=g.parent;f&&f.f&tt;)for(;(f=f.parent)&&!(f.f&et););b=!f||(f.f&nt)!==0}b&&N(()=>{H(()=>m.in())})}}function z(e,t,n,s,r){var i=s===1;if(at(t)){var o,v=!1;return rt(()=>{if(!v){var h=t({direction:i?"in":"out"});o=z(e,h,n,s,r)}}),{abort:()=>{v=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n==null||n.deactivate(),!(t!=null&&t.duration))return r(),{abort:L,deactivate:L,reset:L,t:()=>s};const{delay:l=0,css:d,tick:c,easing:m=kt}=t;var g=[];if(i&&n===void 0&&(c&&c(0,1),d)){var b=Q(d(0,1));g.push(b,b)}var f=()=>1-s,a=e.animate(g,{duration:l});return a.onfinish=()=>{var h=(n==null?void 0:n.t())??1-s;n==null||n.abort();var E=s-h,u=t.duration*Math.abs(E),C=[];if(u>0){if(d)for(var k=Math.ceil(u/16.666666666666668),S=0;S<=k;S+=1){var O=h+E*m(S/k),x=d(O,1-O);C.push(Q(x))}f=()=>{var w=a.currentTime;return h+E*m(w/u)},c&&_t(()=>{if(a.playState!=="running")return!1;var w=f();return c(w,1-w),!0})}a=e.animate(C,{duration:u,fill:"forwards"}),a.onfinish=()=>{f=()=>s,c==null||c(s,1-s),r()}},{abort:()=>{a&&(a.cancel(),a.effect=null)},deactivate:()=>{r=L},reset:()=>{s===0&&(c==null||c(1,0))},t:()=>f()}}function xt(e){function t(){e.dispatchEvent(new CustomEvent("click_outside",e))}function n(r){e&&!e.contains(r.target)&&!r.defaultPrevented&&t()}function s(r){r.key==="Escape"&&t()}return window.addEventListener("keydown",s,!0),document.addEventListener("mousedown",n,!0),{destroy(){document.removeEventListener("mousedown",n,!0),window.removeEventListener("keydown",s,!0)}}}const Et=e=>e;function Ct(e){const t=e-1;return t*t*t+1}function K(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function U(e,{delay:t=0,duration:n=400,easing:s=Et}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:i=>`opacity: ${i*r}`}}function Dt(e,{delay:t=0,duration:n=400,easing:s=Ct,x:r=0,y:i=0,opacity:o=0}={}){const v=getComputedStyle(e),l=+v.opacity,d=v.transform==="none"?"":v.transform,c=l*(1-o),[m,g]=K(r),[b,f]=K(i);return{delay:t,duration:n,easing:s,css:(a,h)=>`
			transform: ${d} translate(${(1-a)*m}${g}, ${(1-a)*b}${f});
			opacity: ${l-c*h}`}}var St=R('<div class="blurred-bg svelte-8gb86w"></div>'),Ot=R('<img class="svelte-8gb86w">'),Lt=R('<!> <div class="dialog svelte-8gb86w"><!> <div class="dialog-content svelte-8gb86w"><!></div> <button type="button" class="dialog-close svelte-8gb86w"><span class="material-symbols-outlined">close</span></button></div>',1);const Tt={hash:"svelte-8gb86w",code:`
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
`};function Bt(e,t){it(t,!1),mt(e,Tt);let n=_(t,"showing",12,!1),s=_(t,"showClose",12,!0),r=_(t,"src",12,""),i=_(t,"alt",12,""),o=_(t,"fullScreen",12,!1),v=_(t,"contentfull",12,!1),l=_(t,"removeMinW",12,!1),d=_(t,"buttonOutside",12,!1);const c=bt();function m(){n(!1),c("closed")}function g(a){a.key==="Escape"&&s()&&m()}lt(()=>J(n()),()=>{n()?document.documentElement.classList.add("scroll-disabled"):document.documentElement.classList.remove("scroll-disabled")}),ct(),gt();var b=dt();M("keydown",ut,g);var f=W(b);return q(f,n,a=>{var h=Lt(),E=W(h);q(E,()=>!o(),x=>{var w=St();G(3,w,()=>U,()=>({duration:200})),T(x,w)});var u=A(E,2),C=P(u);q(C,r,x=>{var w=Ot();j(()=>{I(w,"src",r()),I(w,"alt",i())}),T(x,w)});var k=A(C,2),S=P(k);vt(S,t,"default",{}),D(k);var O=A(k,2);D(u),j(()=>{B(u,"fullscreen",o()),B(u,"min-w-0",l()),B(u,"button-outside",d()),B(k,"contentfull",v())}),M("click",O,m),G(3,u,()=>U,()=>({duration:200})),wt(u,x=>xt(x)),N(()=>M("click_outside",u,m)),T(a,h)}),T(e,b),ft({get showing(){return n()},set showing(a){n(a),p()},get showClose(){return s()},set showClose(a){s(a),p()},get src(){return r()},set src(a){r(a),p()},get alt(){return i()},set alt(a){i(a),p()},get fullScreen(){return o()},set fullScreen(a){o(a),p()},get contentfull(){return v()},set contentfull(a){v(a),p()},get removeMinW(){return l()},set removeMinW(a){l(a),p()},get buttonOutside(){return d()},set buttonOutside(a){d(a),p()}})}ot(Bt,{showing:{type:"Boolean"},showClose:{type:"Boolean"},src:{},alt:{},fullScreen:{type:"Boolean"},contentfull:{type:"Boolean"},removeMinW:{type:"Boolean"},buttonOutside:{type:"Boolean"}},["default"],[],!0);export{Bt as D,wt as a,Dt as f,G as t};
