import"../chunks/disclose-version.Bg9kRutz.js";import{c as b,p as w,l as I,f as n,a as p,b as q,m as y,n as L,k as s,e as c,t as d,g as l,r as f,s as O,d as S}from"../chunks/custom-element.Be9JRDZa.js";import{e as k,i as z}from"../chunks/each.qxHcxVfD.js";import{i as M}from"../chunks/lifecycle.Cqhf0dYa.js";import{s as j,a as A}from"../chunks/store.DrC5Bpkl.js";import{m as B}from"../chunks/meta.store.ZQREEzaj.js";import{g as C,q as E,l as F,w as G,c as H,d as J,u as K}from"../chunks/firebase.CUWN7pwu.js";import{o as N}from"../chunks/index-client.DfkwVSc5.js";var P=S("<p> </p> <p> </p>",1);function Q(u,_){w(_,!1);const g=j(),v=()=>A(K,"$user",g);B.set({title:"Orders",noIndex:!0});const h=5;let r=L([]);N(async()=>{const e=await C(E(H(J,"orders"),G("customer","==",v().id),F(h)));y(r,e.docs.map(t=>({id:t.id,...t.data()})))}),M();var o=I(),x=n(o);k(x,1,()=>s(r),z,(e,t)=>{var i=P(),a=n(i),$=c(a);d(()=>l($,`Date: ${new Date(s(t).createdOn).toLocaleDateString()??""}`)),f(a);var m=O(a,2),D=c(m);f(m),d(()=>l(D,`Invoice ID: ${s(t).invoiceId??""}`)),p(e,i)}),p(u,o),q()}b(Q,{},[],[],!0);export{Q as component};