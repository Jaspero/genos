import"../chunks/disclose-version.Bg9kRutz.js";import{c as de,p as pe,o as ie,v as ce,t as f,a as c,b as ue,d as u,k as e,m as b,e as r,s as l,n as m,r as s,w as V,g as v,x as ve}from"../chunks/custom-element.Be9JRDZa.js";import{i as _}from"../chunks/if.DHrsNizm.js";import{e as _e}from"../chunks/each.qxHcxVfD.js";import{a as xe}from"../chunks/css.BsuxAb-5.js";import{s as fe}from"../chunks/class.huurhb9Z.js";import{b as W}from"../chunks/select.EXaEWE5E.js";import{i as be}from"../chunks/lifecycle.Cqhf0dYa.js";import{w as X,g as me,q as ge,c as he,d as we}from"../chunks/firebase.CUWN7pwu.js";import{o as ye}from"../chunks/index-client.DfkwVSc5.js";import{m as ke}from"../chunks/meta.store.ZQREEzaj.js";var Ce=u('<p class="text-base text-neutral-600 dark:text-neutral-200"> </p>'),Fe=u('<p class="text-base text-neutral-600 dark:text-neutral-200"><b>This coupon is:</b>Used</p>'),$e=u('<p class="text-base text-neutral-600 dark:text-neutral-200"><span class="tag-active bg-black text-white p-2 rounded-[16px]">Active</span></p>'),je=u('<p class="text-base text-neutral-600 dark:text-neutral-200"><span class="bg-[#980C0C7F] text-white p-2 rounded-[16px]">Inactive</span></p>'),Ae=u('<p class="text-base text-neutral-600 dark:text-neutral-200"><span class="bg-[#757575FF] text-white p-2 rounded-[16px]">Unused</span></p>'),De=u('<div><div class="flex flex-wrap h-full"><div class="flex flex-col flex-wrap justify-start flex-1 gap-4 p-6"><h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center w-full"> </h5> <div class="w-full flex justify-between"><p class="text-base text-neutral-600 dark:text-neutral-200"><b>Coupon code:</b> </p> <button class="svelte-op6oe7"><img src="/images/copy.svg" alt="" class="w-[25px]"></button></div> <p class="text-base text-neutral-600 dark:text-neutral-200"><b>Coupon type</b> </p> <!> <p class="text-base text-neutral-600 dark:text-neutral-200"><b>Coupon ends:</b> </p> <div class="flex flex-wrap items-end flex-1 gap-2"><!> <!> <!> <!></div></div> <div class="flex justify-center flex-col items-center gap-2 w-[30%] border-solid border-l-[1px] border-black"><div class="bg-[#4caf50] text-white p-4 rounded-full"> </div></div></div></div>'),Ie=u("<p>No items found.</p>"),Ue=u('<div class="flex-1"><div class="w-full flex items-center"><label for="usedFilter"><select id="usedFilter"><option>Show All</option><option>Used</option><option>Unused</option></select></label> <label for="activeFilter"><select id="activeFilter"><option>Show All</option><option>Active</option><option>Inactive</option></select></label></div> <div class="flex flex-wrap justify-start items-stretch gap-4"></div> <!></div>');const qe={hash:"svelte-op6oe7",code:`
  .used-card.svelte-op6oe7 {
    opacity: 0.7;
    text-decoration: line-through;
  }

  .used-card.svelte-op6oe7 button:where(.svelte-op6oe7) {
    cursor: not-allowed;
  }

  /* (unused) button[aria-pressed='true'] {
    background-color: #4caf50;
    color: white;
  }*/
`};function Ee(T,Y){pe(Y,!1),xe(T,qe);const P=m();ke.set({title:"Coupons",noIndex:!0});let x=m([]),p=m(null),i=m(null);ye(async()=>{try{const a=[];e(p)!==null&&a.push(X("used","==",e(p))),e(i)!==null&&a.push(X("active","==",e(i)));const t=await me(ge(he(we,"coupons"),...a));b(x,t.docs.map(n=>({id:n.id,...n.data()})))}catch(a){console.error("Error fetching collection:",a)}});const Z=a=>{const t=document.createElement("textarea");t.value=a,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)};ie(()=>(e(x),e(p),e(i)),()=>{b(P,e(x).filter(a=>{const t=e(p)===null||a.used===e(p),n=e(i)===null||a.active===e(i);return t&&n}))}),ce(),be();var g=Ue(),h=r(g),w=r(h),y=r(w);f(()=>{e(p),V(()=>{})});var k=r(y);k.value=(k.__value=null)==null?"":null;var C=l(k);C.value=(C.__value=!0)==null?"":!0;var M=l(C);M.value=(M.__value=!1)==null?"":!1,s(y),s(w);var N=l(w,2),F=r(N);f(()=>{e(i),V(()=>{})});var $=r(F);$.value=($.__value=null)==null?"":null;var j=l($);j.value=(j.__value=!0)==null?"":!0;var z=l(j);z.value=(z.__value=!1)==null?"":!1,s(F),s(N),s(h);var A=l(h,2);_e(A,5,()=>e(P),a=>a.id,(a,t)=>{var n=De(),B=r(n),D=r(B),I=r(D),te=r(I);s(I);var U=l(I,2),q=r(U),ae=l(r(q));s(q);var G=l(q,2);s(U);var E=l(U,2),le=l(r(E));s(E);var H=l(E,2);_(H,()=>e(t).description,d=>{var o=Ce(),ne=r(o);s(o),f(()=>v(ne,e(t).description)),c(d,o)});var S=l(H,2),se=l(r(S));s(S);var J=l(S,2),K=r(J);_(K,()=>e(t).used===!0,d=>{var o=Fe();c(d,o)});var L=l(K,2);_(L,()=>e(t).active===!0,d=>{var o=$e();c(d,o)});var O=l(L,2);_(O,()=>e(t).active===!1&&e(t).endDate==="",d=>{var o=je();c(d,o)});var re=l(O,2);_(re,()=>e(t).used===!1&&e(t).active===!1&&e(t).setEndDate===!0,d=>{var o=Ae();c(d,o)}),s(J),s(D);var Q=l(D,2),R=r(Q),oe=r(R);s(R),s(Q),s(B),s(n),f(()=>{fe(n,`${(e(t).used?"used-card":"coupon-card")??""} block rounded-lg bg-white w-[45%] xl:w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 svelte-op6oe7`),v(te,e(t).name),v(ae,` ${e(t).code??""}`),G.disabled=e(t).used,v(le,`: ${e(t).type??""}`),v(se,` ${e(t).endDate??""} at ${e(t).endTime??""}`),v(oe,`${e(t).percent??""}% off`)}),ve("click",G,()=>Z(e(t).code)),c(a,n)}),s(A);var ee=l(A,2);_(ee,()=>!e(x),a=>{var t=Ie();c(a,t)}),s(g),W(y,()=>e(p),a=>b(p,a)),W(F,()=>e(i),a=>b(i,a)),c(T,g),ue()}de(Ee,{},[],[],!0);export{Ee as component};