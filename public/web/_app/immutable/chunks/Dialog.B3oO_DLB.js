import"./disclose-version.Bg9kRutz.js";import{h as N,u as U,i as V,aF as Z,aH as X,Z as Y,aO as $,P as tt,aP as et,aQ as nt,aR as st,aS as at,q as rt,aG as F,c as it,p as ot,o as lt,v as ct,n as dt,x as M,f as R,b as L,d as ft,z as p,aT as ut,t as P,s as A,e as W,a as D,r as j}from"./custom-element.CVpG6SXP.js";import{i as q}from"./if.JQHAtFvm.js";import{s as vt}from"./slot.Cn9z5fi9.js";import{a as mt}from"./css.LBB8QDOA.js";import{a as G}from"./attributes.Cu3nlHM4.js";import{t as T}from"./class.B8fFovZD.js";import{i as gt}from"./lifecycle.C0LKuuzC.js";import{p as _}from"./props.BJbN4VyR.js";import{c as bt}from"./index-client.CgHv8mrz.js";function wt(e,t,n){N(()=>{var s=U(()=>t(e,n==null?void 0:n())||{});if(n&&(s!=null&&s.update)){var r=!1,o={};V(()=>{var i=n();Z(i),r&&X(o,i)&&(o=i,s.update(i))}),r=!0}if(s!=null&&s.destroy)return()=>s.destroy()})}const ht=requestAnimationFrame,pt=()=>performance.now(),y={tick:e=>ht(e),now:()=>pt(),tasks:new Set};function J(e){y.tasks.forEach(t=>{t.c(e)||(y.tasks.delete(t),t.f())}),y.tasks.size!==0&&y.tick(J)}function _t(e){let t;return y.tasks.size===0&&y.tick(J),{promise:new Promise(n=>{y.tasks.add(t={c:e,f:n})}),abort(){y.tasks.delete(t)}}}function B(e,t){e.dispatchEvent(new CustomEvent(t))}function yt(e){const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function I(e){const t={},n=e.split(";");for(const s of n){const[r,o]=s.split(":");if(!r||o===void 0)break;const i=yt(r.trim());t[i]=o.trim()}return t}const kt=e=>e;function H(e,t,n,s){var r=(e&st)!==0,o="both",i,v=t.inert,l,d;function c(){return i??(i=n()(t,(s==null?void 0:s())??{},{direction:o}))}var m={is_global:r,in(){t.inert=v,B(t,"introstart"),l=z(t,c(),d,1,()=>{B(t,"introend"),l==null||l.abort(),l=i=void 0})},out(a){t.inert=!0,B(t,"outrostart"),d=z(t,c(),l,0,()=>{B(t,"outroend"),a==null||a()})},stop:()=>{l==null||l.abort(),d==null||d.abort()}},g=Y;if((g.transitions??(g.transitions=[])).push(m),$){var b=r;if(!b){for(var f=g.parent;f&&f.f&tt;)for(;(f=f.parent)&&!(f.f&et););b=!f||(f.f&nt)!==0}b&&N(()=>{U(()=>m.in())})}}function z(e,t,n,s,r){var o=s===1;if(at(t)){var i,v=!1;return rt(()=>{if(!v){var h=t({direction:o?"in":"out"});i=z(e,h,n,s,r)}}),{abort:()=>{v=!0,i==null||i.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(n==null||n.deactivate(),!(t!=null&&t.duration))return r(),{abort:F,deactivate:F,reset:F,t:()=>s};const{delay:l=0,css:d,tick:c,easing:m=kt}=t;var g=[];if(o&&n===void 0&&(c&&c(0,1),d)){var b=I(d(0,1));g.push(b,b)}var f=()=>1-s,a=e.animate(g,{duration:l});return a.onfinish=()=>{var h=(n==null?void 0:n.t())??1-s;n==null||n.abort();var E=s-h,u=t.duration*Math.abs(E),C=[];if(u>0){if(d)for(var k=Math.ceil(u/16.666666666666668),S=0;S<=k;S+=1){var O=h+E*m(S/k),x=d(O,1-O);C.push(I(x))}f=()=>{var w=a.currentTime;return h+E*m(w/u)},c&&_t(()=>{if(a.playState!=="running")return!1;var w=f();return c(w,1-w),!0})}a=e.animate(C,{duration:u,fill:"forwards"}),a.onfinish=()=>{f=()=>s,c==null||c(s,1-s),r()}},{abort:()=>{a&&(a.cancel(),a.effect=null)},deactivate:()=>{r=F},reset:()=>{s===0&&(c==null||c(1,0))},t:()=>f()}}function xt(e){function t(){e.dispatchEvent(new CustomEvent("click_outside",e))}function n(r){e&&!e.contains(r.target)&&!r.defaultPrevented&&t()}function s(r){r.key==="Escape"&&t()}return window.addEventListener("keydown",s,!0),document.addEventListener("mousedown",n,!0),{destroy(){document.removeEventListener("mousedown",n,!0),window.removeEventListener("keydown",s,!0)}}}const Et=e=>e;function Ct(e){const t=e-1;return t*t*t+1}function K(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function Q(e,{delay:t=0,duration:n=400,easing:s=Et}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:o=>`opacity: ${o*r}`}}function jt(e,{delay:t=0,duration:n=400,easing:s=Ct,x:r=0,y:o=0,opacity:i=0}={}){const v=getComputedStyle(e),l=+v.opacity,d=v.transform==="none"?"":v.transform,c=l*(1-i),[m,g]=K(r),[b,f]=K(o);return{delay:t,duration:n,easing:s,css:(a,h)=>`
			transform: ${d} translate(${(1-a)*m}${g}, ${(1-a)*b}${f});
			opacity: ${l-c*h}`}}var St=P('<div class="blurred-bg svelte-8gb86w"></div>'),Ot=P('<img class="svelte-8gb86w">'),Ft=P('<!> <div class="dialog svelte-8gb86w"><!> <div class="dialog-content svelte-8gb86w"><!></div> <button type="button" class="dialog-close svelte-8gb86w"><span class="material-symbols-outlined">close</span></button></div>',1);const Lt={hash:"svelte-8gb86w",code:`
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
`};function Tt(e,t){ot(t,!1),mt(e,Lt);let n=_(t,"showing",12,!1),s=_(t,"showClose",12,!0),r=_(t,"src",12,""),o=_(t,"alt",12,""),i=_(t,"fullScreen",12,!1),v=_(t,"contentfull",12,!1),l=_(t,"removeMinW",12,!1),d=_(t,"buttonOutside",12,!1);const c=bt();function m(){n(!1),c("closed")}function g(a){a.key==="Escape"&&s()&&m()}lt(()=>Z(n()),()=>{n()?document.documentElement.classList.add("scroll-disabled"):document.documentElement.classList.remove("scroll-disabled")}),ct(),gt();var b=dt();M("keydown",ut,g);var f=R(b);return q(f,n,a=>{var h=Ft(),E=R(h);q(E,()=>!i(),x=>{var w=St();H(3,w,()=>Q,()=>({duration:200})),L(x,w)});var u=A(E,2),C=W(u);q(C,r,x=>{var w=Ot();D(()=>{G(w,"src",r()),G(w,"alt",o())}),L(x,w)});var k=A(C,2),S=W(k);vt(S,t,"default",{}),j(k);var O=A(k,2);j(u),D(()=>{T(u,"fullscreen",i()),T(u,"min-w-0",l()),T(u,"button-outside",d()),T(k,"contentfull",v())}),M("click",O,m),H(3,u,()=>Q,()=>({duration:200})),wt(u,x=>xt(x)),N(()=>M("click_outside",u,m)),L(a,h)}),L(e,b),ft({get showing(){return n()},set showing(a){n(a),p()},get showClose(){return s()},set showClose(a){s(a),p()},get src(){return r()},set src(a){r(a),p()},get alt(){return o()},set alt(a){o(a),p()},get fullScreen(){return i()},set fullScreen(a){i(a),p()},get contentfull(){return v()},set contentfull(a){v(a),p()},get removeMinW(){return l()},set removeMinW(a){l(a),p()},get buttonOutside(){return d()},set buttonOutside(a){d(a),p()}})}it(Tt,{showing:{type:"Boolean"},showClose:{type:"Boolean"},src:{},alt:{},fullScreen:{type:"Boolean"},contentfull:{type:"Boolean"},removeMinW:{type:"Boolean"},buttonOutside:{type:"Boolean"}},["default"],[],!0);export{Tt as D,wt as a,jt as f,H as t};
