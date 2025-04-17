import{r as nt,R as lt}from"../chunks/Recaptcha.Cza2iv08.js";import"../chunks/disclose-version.Bg9kRutz.js";import{c as ut,p as ct,t as F,f as U,s as l,e as u,a as D,x as f,l as e,m as p,b as C,k as t,d as pt,r as c,g as B}from"../chunks/custom-element.AREl8MZg.js";import{i as dt}from"../chunks/if.LOaGCDQ9.js";import{s}from"../chunks/attributes.JHywwXfg.js";import{t as T}from"../chunks/class.CANlI1U3.js";import{p as M}from"../chunks/input.ekSWdto4.js";import{i as mt}from"../chunks/lifecycle.CcW39cT5.js";import{s as ft,a as vt}from"../chunks/store.BOoonA1d.js";import{g as O}from"../chunks/entry.Nz6GttpU.js";import{p as ht}from"../chunks/stores.CpyvpCvB.js";import{D as gt}from"../chunks/Dialog.sCkMhcQI.js";import{a as S}from"../chunks/alert-wrapper.jV7Uth7N.js";import{R as bt,e as g,t as J,P as W,x as wt,G as _t,y as yt,z as xt,A as Pt}from"../chunks/firebase.BeK3FlIm.js";import{o as jt}from"../chunks/index-client.Ddb_xwJg.js";import{m as It}from"../chunks/meta.store.BoiVVj5z.js";import{G as $t}from"../chunks/GoogleButton.Dn9ZHX0v.js";const At=!1;async function Rt(){await nt()}const Xt=Object.freeze(Object.defineProperty({__proto__:null,load:Rt,ssr:At},Symbol.toStringTag,{value:"Module"}));var kt=F('<form class="w-full shadow-xl p-8 rounded"><h2 class="text-lg font-bold mb-4">Verification Code</h2> <div class="flex flex-col gap-2"><p>We have sent you a 6-digit verification code to: <b> </b></p> <jp-input></jp-input></div> <div class="mt-4"><button type="submit" class="button">Confirm</button></div> <p class="mt-8 mb-2">Sign in with a different account?</p> <button class="underline" type="button">Back to sign in</button></form>',2),Ct=F('<form class="w-full shadow-xl p-8 rounded"><h2 class="text-lg font-bold mb-4">Sign In</h2> <div class="flex flex-col gap-2"><jp-input></jp-input> <jp-input></jp-input> <div class="mt-[-0.5rem]"><button type="button" class="underline"> </button></div></div> <div class="flex flex-wrap gap-4 mt-4"><button class="button" type="submit">Sign In</button> <!></div> <p class="mt-8 mb-2">Forgot your password?</p> <button class="underline" type="button">Reset Password</button></form>',2),St=F('<h3 class="text-xl md:text-lg mb-4">Forgotten your password?</h3> <p class="text-lg md:text-base mb-4">Enter your email address and we will send you a link to reset it.</p> <form><jp-input></jp-input> <div class="mt-4"><button type="submit" class="button">Reset password</button></div></form>',3),Ft=F('<div class="w-[500px] mx-auto p-12 flex justify-center items-center"><div id="recaptcha-container-id"></div> <!></div> <!> <!>',1);function qt(K,Q){ct(Q,!1);const X=ft(),q=()=>vt(ht,"$page",X);It.set({title:"Sign In"});let _=p(""),P=p(""),v=p(!1),j=p("password"),I=p(),w=p(""),E=p(!1),$=p(!1),G,A=p(!1),R=p(),d=p(),V;async function Y(){const{searchParams:o}=q().url;if(e(_,t(_).trim()),!t(v)){e(v,!0);try{await t(I)(),await S(yt(g,t(_),t(P)),"Login successful",r=>{if(r.code=="auth/multi-factor-auth-required"&&(e(d,J(g,r)),t(d).hints)){const i={multiFactorHint:t(d).hints[0],session:t(d).session};return new W(g).verifyPhoneNumber(i,G).then(a=>{V=a,e(A,!0),e(v,!1)}).catch(a=>{console.log("second error",a)}),""}return""},()=>e(v,!1)),O(o.has("forward")?decodeURIComponent(o.get("forward")):"/my-account")}catch{e(P,"")}e(v,!1)}}async function Z(){const{searchParams:o}=q().url;e(v,!0),await S(wt(g,new _t),"Login successful",r=>{if(r.code=="auth/multi-factor-auth-required"&&(e(d,J(g,r)),t(d).hints)){const i={multiFactorHint:t(d).hints[0],session:t(d).session};new W(g).verifyPhoneNumber(i,G).then(a=>{V=a,e(A,!0),e(v,!1)}).catch(a=>{console.log("second error",a)})}},()=>e(v,!1)),setTimeout(()=>{O(o.has("forward")?decodeURIComponent(o.get("forward")):"/my-account")},1e3)}async function tt(){if(e(w,t(w).trim().toLowerCase()),!!t(w)){e(E,!0);try{await t(I)(),await S(Pt(g,t(w),{url:`${location.origin}/reset-password`}),"A password reset link has been sent to your email."),e($,!1)}catch(o){console.error(o)}e(E,!1)}}function et(){e(j,t(j)==="password"?"text":"password")}function at(){e(A,!1),e(R,"")}async function ot(){const o=W.credential(V,t(R)),r=xt.assertion(o);await S(t(d).resolveSignIn(r),"Login successful","",()=>!1);const{searchParams:i}=q().url;O(i.has("forward")?decodeURIComponent(i.get("forward")):"/")}jt(()=>{G=new bt(g,"recaptcha-container-id",{size:"invisible"})}),mt();var H=Ft(),L=U(H),rt=l(u(L),2);dt(rt,()=>t(A),o=>{var r=kt(),i=l(u(r),2),n=u(i),a=l(u(n)),b=u(a);c(a),c(n);var m=l(n,2);s(m,"label","Verification Code:"),s(m,"required",!0),c(i);var y=l(i,6);c(r),D(()=>{var h,x,k;B(b,(k=(x=(h=t(d))==null?void 0:h.hints)==null?void 0:x[0])==null?void 0:k.phoneNumber),s(m,"value",t(R))}),f("value",m,h=>e(R,h.detail.value)),f("click",y,at),f("submit",r,M(ot)),C(o,r)},o=>{var r=Ct(),i=l(u(r),2),n=u(i);s(n,"label","Email"),s(n,"type","email"),s(n,"required",!0),s(n,"autocomplete","email");var a=l(n,2);s(a,"label","Password"),s(a,"required",!0),s(a,"autocomplete","current-password");var b=l(a,2),m=u(b),y=u(m);c(m),c(b),c(i);var h=l(i,2),x=u(h),k=l(x,2);$t(k,{label:"Sign in with google",onClick:Z}),c(h);var it=l(h,4);c(r),D(()=>{s(n,"value",t(_)),s(a,"type",t(j)),s(a,"value",t(P)),B(y,t(j)==="password"?"Show password":"Hide password"),T(x,"loading",t(v))}),f("value",n,z=>e(_,z.detail.value)),f("value",a,z=>e(P,z.detail.value)),f("click",m,et),f("click",it,()=>e($,!0)),f("submit",r,M(Y)),C(o,r)}),c(L);var N=l(L,2);gt(N,{get showing(){return t($)},set showing(o){e($,o)},children:(o,r)=>{var i=St(),n=l(U(i),4),a=u(n);s(a,"label","Email"),s(a,"type","email"),s(a,"required",!0),s(a,"autocomplete","email");var b=l(a,2),m=u(b);c(b),c(n),D(()=>{s(a,"value",t(w)),T(m,"loading",t(E))}),f("value",a,y=>e(w,y.detail.value)),f("submit",n,M(tt)),C(o,i)},$$slots:{default:!0},$$legacy:!0});var st=l(N,2);lt(st,{get verify(){return t(I)},set verify(o){e(I,o)},$$legacy:!0}),C(K,H),pt()}ut(qt,{},[],[],!0);export{qt as component,Xt as universal};
