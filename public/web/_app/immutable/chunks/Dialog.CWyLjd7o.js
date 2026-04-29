import"./disclose-version.Bg9kRutz.js";import{u as j,E as I,a5 as J,aF as F,aM as K,c as Q,p as R,l as T,n as U,k as V,q as _,aN as X,f as L,b as g,d as Y,x as i,t as x,s as y,e as M,a as S,r as W}from"./custom-element.YfTZRdDm.js";import{i as k}from"./if.CwLBsSbn.js";import{s as Z}from"./slot.C0m2FR_Z.js";import{a as $}from"./css.C4s6Pmy9.js";import{s as D}from"./attributes.BLb7X-Of.js";import{t as b}from"./class.Cp0VSjM4.js";import{t as q,f as z}from"./index.DXHYUd01.js";import{i as ee}from"./lifecycle.DDiEpaHd.js";import{p as d}from"./props.v80mbUAc.js";import{c as te}from"./index-client.D2r47I3f.js";function ne(r,t,n){j(()=>{var o=I(()=>t(r,n==null?void 0:n())||{});if(n&&(o!=null&&o.update)){var s=!1,c={};J(()=>{var a=n();F(a),s&&K(c,a)&&(c=a,o.update(a))}),s=!0}if(o!=null&&o.destroy)return()=>o.destroy()})}function oe(r){function t(){r.dispatchEvent(new CustomEvent("click_outside",r))}function n(s){r&&!r.contains(s.target)&&!s.defaultPrevented&&t()}function o(s){s.key==="Escape"&&t()}return window.addEventListener("keydown",o,!0),document.addEventListener("mousedown",n,!0),{destroy(){document.removeEventListener("mousedown",n,!0),window.removeEventListener("keydown",o,!0)}}}var se=x('<div class="blurred-bg svelte-8gb86w"></div>'),re=x('<img class="svelte-8gb86w">'),ae=x('<!> <div class="dialog svelte-8gb86w"><!> <div class="dialog-content svelte-8gb86w"><!></div> <button type="button" class="dialog-close svelte-8gb86w"><span class="material-symbols-outlined">close</span></button></div>',1);const le={hash:"svelte-8gb86w",code:`
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
`};function ie(r,t){R(t,!1),$(r,le);let n=d(t,"showing",12,!1),o=d(t,"showClose",12,!0),s=d(t,"src",12,""),c=d(t,"alt",12,""),a=d(t,"fullScreen",12,!1),v=d(t,"contentfull",12,!1),w=d(t,"removeMinW",12,!1),h=d(t,"buttonOutside",12,!1);const N=te();function p(){n(!1),N("closed")}function P(e){e.key==="Escape"&&o()&&p()}T(()=>F(n()),()=>{n()?document.documentElement.classList.add("scroll-disabled"):document.documentElement.classList.remove("scroll-disabled")}),U(),ee();var E=V();_("keydown",X,P);var A=L(E);return k(A,n,e=>{var C=ae(),O=L(C);k(O,()=>!a(),f=>{var u=se();q(3,u,()=>z,()=>({duration:200})),g(f,u)});var l=y(O,2),B=M(l);k(B,s,f=>{var u=re();S(()=>{D(u,"src",s()),D(u,"alt",c())}),g(f,u)});var m=y(B,2),G=M(m);Z(G,t,"default",{}),W(m);var H=y(m,2);W(l),S(()=>{b(l,"fullscreen",a()),b(l,"min-w-0",w()),b(l,"button-outside",h()),b(m,"contentfull",v())}),_("click",H,p),q(3,l,()=>z,()=>({duration:200})),ne(l,f=>oe(f)),j(()=>_("click_outside",l,p)),g(e,C)}),g(r,E),Y({get showing(){return n()},set showing(e){n(e),i()},get showClose(){return o()},set showClose(e){o(e),i()},get src(){return s()},set src(e){s(e),i()},get alt(){return c()},set alt(e){c(e),i()},get fullScreen(){return a()},set fullScreen(e){a(e),i()},get contentfull(){return v()},set contentfull(e){v(e),i()},get removeMinW(){return w()},set removeMinW(e){w(e),i()},get buttonOutside(){return h()},set buttonOutside(e){h(e),i()}})}Q(ie,{showing:{type:"Boolean"},showClose:{type:"Boolean"},src:{},alt:{},fullScreen:{type:"Boolean"},contentfull:{type:"Boolean"},removeMinW:{type:"Boolean"},buttonOutside:{type:"Boolean"}},["default"],[],!0);export{ie as D,ne as a};
