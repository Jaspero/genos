import"../chunks/disclose-version.Bg9kRutz.js";import{c as H,p as J,f as U,t as K,x as i,a as A,b as L,d as N,s as r,e as o,k as a,m as s,y as F,r as l,n as g}from"../chunks/custom-element.Be9JRDZa.js";import{s as t}from"../chunks/attributes.Cqk6Ie6U.js";import{p as I}from"../chunks/input.CyofXo92.js";import{i as M}from"../chunks/lifecycle.Cqhf0dYa.js";import{D as Q}from"../chunks/Dialog.CzdH9x5p.js";import{e as u,i as V,F as j,s as E,j as X,k as Z}from"../chunks/firebase.CUWN7pwu.js";import{g as b}from"../chunks/entry.CVdcaSFl.js";import{a as q,n as w}from"../chunks/alert-wrapper.S6wC4nEz.js";import{m as ee}from"../chunks/meta.store.ZQREEzaj.js";var te=N('<div class="w-full text-center"><h1>Delete account</h1> <p>This action will delete your account permanently, are you sure you want to continue?</p></div> <div class="flex w-full justify-center"><button type="button" class="bg-red-700 p-4 text-white rounded-lg mr-[10px]">Yes, delete my account</button> <button type="button" class="bg-black text-white rounded-lg p-4">Cancel</button></div>',1),ae=N(`<main class="flex flex-col gap-4 max-w-[400px]"><div class="shadow rounded p-4 w-full"><h3 class="mb-2 text-l font-bold">Change Password</h3> <form class="flex flex-col gap-2"><jp-input></jp-input> <jp-input></jp-input> <div><button type="submit" class="button">Change Password</button></div></form></div> <div class="shadow rounded p-4 w-full"><h3 class="mb-2 text-l font-bold">Change Email</h3> <form class="flex flex-col gap-2"><jp-input></jp-input> <div><button type="submit" class="button">Change Email</button></div></form></div> <div class="shadow rounded p-4 w-full"><h3 class="mb-2 text-l font-bold text-red-400">Delete Account</h3> <p>In case you want to remove your account and any information associated with it from our
      system. You can do so here.</p> <p>Be careful this action is irreversible and all of your personal information will be removed.</p> <button type="button" class="button mt-2">Delete Account</button></div></main> <!>`,3);function se(Y,B){J(B,!1),ee.set({title:"Settings",noIndex:!0});let d=g(""),f=g(""),n=g(""),v=g(!1);async function O(){if(a(d)!==a(f)){w({state:"error",title:"Error",message:"The provided passwords don't match."});return}await q(X(u.currentUser,a(d)),"Password updated successfully.","",async e=>{e instanceof j&&e.code==="auth/requires-recent-login"&&(await E(u),w({title:"Error",message:"This action requires recent sign in. Please sign in again.",state:"error"}),b("/sign-in"))}),s(d,""),s(f,"")}async function R(){s(n,a(n).trim()),a(n)&&(await q(Z(u.currentUser,a(n)),"Email updated successfully.","",async e=>{e instanceof j&&e.code==="auth/requires-recent-login"&&(await E(u),w({title:"Error",message:"This action requires recent sign in. Please sign in again.",state:"error"}),b("/sign-in"))}),s(n,""))}const S=async()=>{try{u.currentUser&&await q(V(u.currentUser),"Account deleted successfully.","",async e=>{e instanceof j&&e.code==="auth/requires-recent-login"&&(await E(u),w({title:"Error",message:"This action requires recent sign in. Please sign in again.",state:"error"}),b("/sign-in"))})}catch{await b("/sign-in")}};M();var D=ae(),h=U(D),y=o(h),_=r(o(y),2),c=o(_);t(c,"label","New Password"),t(c,"type","password"),t(c,"required",!0);var p=r(c,2);t(p,"label","Repeat Password"),t(p,"type","password"),t(p,"required",!0),F(2),l(_),l(y);var x=r(y,2),P=r(o(x),2),m=o(P);t(m,"label","New Email"),t(m,"type","email"),t(m,"required",!0),F(2),l(P),l(x);var k=r(x,2),W=r(o(k),6);l(k),l(h);var z=r(h,2);Q(z,{get showing(){return a(v)},set showing(e){s(v,e)},children:(e,re)=>{var $=te(),C=r(U($),2),T=o(C),G=r(T,2);l(C),i("click",T,S),i("click",G,()=>s(v,!1)),A(e,$)},$$slots:{default:!0},$$legacy:!0}),K(()=>{t(c,"value",a(d)),t(p,"value",a(f)),t(m,"value",a(n))}),i("value",c,e=>s(d,e.detail.value)),i("value",p,e=>s(f,e.detail.value)),i("submit",_,I(O)),i("value",m,e=>s(n,e.detail.value)),i("submit",P,I(R)),i("click",W,()=>s(v,!0)),A(Y,D),L()}H(se,{},[],[],!0);export{se as component};