import"./disclose-version.Bg9kRutz.js";import{h as q,u as H,i as I,aB as J,aJ as N,c as Q,p as R,o as T,v as U,n as V,x as _,aK as X,f as L,b as g,d as Y,z as l,t as x,s as y,e as M,a as S,r as W}from"./custom-element.DQtPqtwV.js";import{i as k}from"./if.BrBjDjp-.js";import{s as Z}from"./slot.BkgQLmME.js";import{a as $}from"./css.osYD52Gu.js";import{a as z}from"./attributes.DQACxfmV.js";import{t as b}from"./class.DzKL41hs.js";import{t as D,f as j}from"./index.DUavQ0dq.js";import{i as ee}from"./lifecycle.By80OOUV.js";import{p as d}from"./props.DpOBpuVa.js";import{c as te}from"./index-client.cakr4NJt.js";function ne(r,t,n){q(()=>{var o=H(()=>t(r,n==null?void 0:n())||{});if(n&&(o!=null&&o.update)){var s=!1,c={};I(()=>{var a=n();J(a),s&&N(c,a)&&(c=a,o.update(a))}),s=!0}if(o!=null&&o.destroy)return()=>o.destroy()})}function oe(r){function t(){r.dispatchEvent(new CustomEvent("click_outside",r))}function n(s){r&&!r.contains(s.target)&&!s.defaultPrevented&&t()}function o(s){s.key==="Escape"&&t()}return window.addEventListener("keydown",o,!0),document.addEventListener("mousedown",n,!0),{destroy(){document.removeEventListener("mousedown",n,!0),window.removeEventListener("keydown",o,!0)}}}var se=x('<div class="blurred-bg svelte-8gb86w"></div>'),re=x('<img class="svelte-8gb86w">'),ae=x('<!> <div class="dialog svelte-8gb86w"><!> <div class="dialog-content svelte-8gb86w"><!></div> <button type="button" class="dialog-close svelte-8gb86w"><span class="material-symbols-outlined">close</span></button></div>',1);const ie={hash:"svelte-8gb86w",code:`
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
`};function le(r,t){R(t,!1),$(r,ie);let n=d(t,"showing",12,!1),o=d(t,"showClose",12,!0),s=d(t,"src",12,""),c=d(t,"alt",12,""),a=d(t,"fullScreen",12,!1),v=d(t,"contentfull",12,!1),w=d(t,"removeMinW",12,!1),h=d(t,"buttonOutside",12,!1);const K=te();function p(){n(!1),K("closed")}function P(e){e.key==="Escape"&&o()&&p()}T(()=>J(n()),()=>{n()?document.documentElement.classList.add("scroll-disabled"):document.documentElement.classList.remove("scroll-disabled")}),U(),ee();var E=V();_("keydown",X,P);var A=L(E);return k(A,n,e=>{var B=ae(),C=L(B);k(C,()=>!a(),f=>{var u=se();D(3,u,()=>j,()=>({duration:200})),g(f,u)});var i=y(C,2),O=M(i);k(O,s,f=>{var u=re();S(()=>{z(u,"src",s()),z(u,"alt",c())}),g(f,u)});var m=y(O,2),F=M(m);Z(F,t,"default",{}),W(m);var G=y(m,2);W(i),S(()=>{b(i,"fullscreen",a()),b(i,"min-w-0",w()),b(i,"button-outside",h()),b(m,"contentfull",v())}),_("click",G,p),D(3,i,()=>j,()=>({duration:200})),ne(i,f=>oe(f)),q(()=>_("click_outside",i,p)),g(e,B)}),g(r,E),Y({get showing(){return n()},set showing(e){n(e),l()},get showClose(){return o()},set showClose(e){o(e),l()},get src(){return s()},set src(e){s(e),l()},get alt(){return c()},set alt(e){c(e),l()},get fullScreen(){return a()},set fullScreen(e){a(e),l()},get contentfull(){return v()},set contentfull(e){v(e),l()},get removeMinW(){return w()},set removeMinW(e){w(e),l()},get buttonOutside(){return h()},set buttonOutside(e){h(e),l()}})}Q(le,{showing:{type:"Boolean"},showClose:{type:"Boolean"},src:{},alt:{},fullScreen:{type:"Boolean"},contentfull:{type:"Boolean"},removeMinW:{type:"Boolean"},buttonOutside:{type:"Boolean"}},["default"],[],!0);export{le as D,ne as a};
