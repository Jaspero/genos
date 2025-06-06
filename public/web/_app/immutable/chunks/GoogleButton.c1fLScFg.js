import"./disclose-version.Bg9kRutz.js";import{c as g,p as u,t as h,s as p,e as i,a as k,x as f,b as w,d as x,z as b,r as o,g as y}from"./custom-element.DQtPqtwV.js";import{a as z}from"./css.osYD52Gu.js";import{p as d}from"./props.DpOBpuVa.js";var C=h('<button class="gsi-material-button svelte-1k92smm" type="button"><div class="gsi-material-button-state svelte-1k92smm"></div> <div class="gsi-material-button-content-wrapper svelte-1k92smm"><div class="gsi-material-button-icon svelte-1k92smm"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg></div> <span class="gsi-material-button-contents svelte-1k92smm"> </span></div></button>');const _={hash:"svelte-1k92smm",code:`
  .gsi-material-button.svelte-1k92smm {
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
    background-color: WHITE;
    background-image: none;
    border: 1px solid #747775;
    border-radius: 4px;
    box-sizing: border-box;
    color: #1f1f1f;
    cursor: pointer;
    font-family: 'Roboto', arial, sans-serif;
    font-size: 14px;
    height: 40px;
    letter-spacing: 0.25px;
    outline: none;
    overflow: hidden;
    padding: 0 12px;
    position: relative;
    text-align: center;
    transition:
      background-color 0.218s,
      border-color 0.218s,
      box-shadow 0.218s;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
    max-width: 400px;
    min-width: -moz-min-content;
    min-width: min-content;
  }

  .gsi-material-button.svelte-1k92smm .gsi-material-button-icon:where(.svelte-1k92smm) {
    height: 20px;
    margin-right: 12px;
    min-width: 20px;
    width: 20px;
  }

  .gsi-material-button.svelte-1k92smm .gsi-material-button-content-wrapper:where(.svelte-1k92smm) {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100%;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }

  .gsi-material-button.svelte-1k92smm .gsi-material-button-contents:where(.svelte-1k92smm) {
    flex-grow: 1;
    font-family: 'Roboto', arial, sans-serif;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
  }

  .gsi-material-button.svelte-1k92smm .gsi-material-button-state:where(.svelte-1k92smm) {
    transition: opacity 0.218s;
    bottom: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .gsi-material-button.svelte-1k92smm:disabled {
    cursor: default;
    background-color: #ffffff61;
    border-color: #1f1f1f1f;
  }

  .gsi-material-button.svelte-1k92smm:disabled .gsi-material-button-contents:where(.svelte-1k92smm) {
    opacity: 38%;
  }

  .gsi-material-button.svelte-1k92smm:disabled .gsi-material-button-icon:where(.svelte-1k92smm) {
    opacity: 38%;
  }

  .gsi-material-button.svelte-1k92smm:not(:where(.svelte-1k92smm):disabled):active .gsi-material-button-state:where(.svelte-1k92smm),
  .gsi-material-button.svelte-1k92smm:not(:where(.svelte-1k92smm):disabled):focus .gsi-material-button-state:where(.svelte-1k92smm) {
    background-color: #303030;
    opacity: 12%;
  }

  .gsi-material-button.svelte-1k92smm:not(:where(.svelte-1k92smm):disabled):hover {
    box-shadow:
      0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15);
  }

  .gsi-material-button.svelte-1k92smm:not(:where(.svelte-1k92smm):disabled):hover .gsi-material-button-state:where(.svelte-1k92smm) {
    background-color: #303030;
    opacity: 8%;
  }
`};function M(l,n){u(n,!1),z(l,_);let s=d(n,"label",12),a=d(n,"onClick",12);var e=C(),r=p(i(e),2),m=p(i(r),2),v=i(m);return o(m),o(r),o(e),k(()=>y(v,s())),f("click",e,function(...t){var c;(c=a())==null||c.apply(this,t)}),w(l,e),x({get label(){return s()},set label(t){s(t),b()},get onClick(){return a()},set onClick(t){a(t),b()}})}g(M,{label:{},onClick:{}},[],[],!0);export{M as G};
