import{r as k,R as z}from"../chunks/Recaptcha.Cza2iv08.js";import"../chunks/disclose-version.Bg9kRutz.js";import{c as C,p as I,t as M,f as O,s as n,e as d,l as p,m as g,k as e,a as A,x as w,aI as h,b as B,d as D,r as u,y as E}from"../chunks/custom-element.AREl8MZg.js";import{s}from"../chunks/attributes.JHywwXfg.js";import{t as T}from"../chunks/class.CANlI1U3.js";import{p as V}from"../chunks/input.ekSWdto4.js";import{i as W}from"../chunks/lifecycle.CcW39cT5.js";import{s as F,a as G}from"../chunks/store.BOoonA1d.js";import{g as y}from"../chunks/entry.Nz6GttpU.js";import{p as H}from"../chunks/stores.CpyvpCvB.js";import{n as J,a as K}from"../chunks/alert-wrapper.jV7Uth7N.js";import{v as L,r as N,e as P}from"../chunks/firebase.BeK3FlIm.js";import{o as Q}from"../chunks/index-client.Ddb_xwJg.js";import{m as U}from"../chunks/meta.store.BoiVVj5z.js";const X=!1;async function Z(){await k()}const ge=Object.freeze(Object.defineProperty({__proto__:null,load:Z,ssr:X},Symbol.toStringTag,{value:"Module"}));var ee=M(`<div class="w-[500px] mx-auto p-12 flex justify-center items-center"><div id="recaptcha-container-id"></div> <form class="w-full shadow-xl p-8 rounded"><h2 class="text-lg font-bold mb-4">Reset Password</h2> <div class="flex flex-col gap-2"><jp-input></jp-input> <jp-input></jp-input></div> <div class="mt-4"><button type="submit" class="button">Submit</button></div> <p class="mt-8 mb-2">You don't need to change your password?</p> <a class="underline" href="/sign-in">Back to sign in</a></form></div> <!>`,3);function ae(x,j){I(j,!1);const R=F(),$=()=>G(H,"$page",R);U.set({title:"Reset Password",noIndex:!0});const a=g({password:"",repeatPassword:""});let o=g(!1),l,m=g();Q(()=>{const{searchParams:t}=$().url;l=t.get("oobCode"),l||y("/login")});async function q(){if(e(a).password!==e(a).repeatPassword)return J({title:"Error",message:"Passwords do not match!",state:"error"});p(o,!0);try{await e(m)()}catch{p(o,!1);return}await K(L(P,l).then(()=>N(P,l,e(a).password)),"Password reset successful. You can now sign in.","Your reset code is invalid or expired. Please visit the login page and request password reset again.",()=>p(o,!1)),p(o,!1),y("/my-account")}W();var _=ee(),c=O(_),f=n(d(c),2),v=n(d(f),2),r=d(v);s(r,"label","Password"),s(r,"required",!0),s(r,"type","password");var i=n(r,2);s(i,"label","Repeat Password"),s(i,"required",!0),s(i,"type","password"),u(v);var b=n(v,2),S=d(b);u(b),E(4),u(f),u(c);var Y=n(c,2);z(Y,{get verify(){return e(m)},set verify(t){p(m,t)},$$legacy:!0}),A(()=>{s(r,"value",e(a).password),s(i,"value",e(a).repeatPassword),T(S,"loading",e(o))}),w("value",r,t=>h(a,e(a).password=t.detail.value)),w("value",i,t=>h(a,e(a).repeatPassword=t.detail.value)),w("submit",f,V(q)),B(x,_),D()}C(ae,{},[],[],!0);export{ae as component,ge as universal};
