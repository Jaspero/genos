import{R as o}from"./entry.CVdcaSFl.js";import{m as s,R as f,e as p}from"./firebase.CUWN7pwu.js";import"./disclose-version.Bg9kRutz.js";import{c as u,p as m,a as d,b as h,d as l,z as y}from"./custom-element.Be9JRDZa.js";import{i as v}from"./lifecycle.Cqhf0dYa.js";import{p as w}from"./props.BcZkuvB_.js";import{o as R,a as b}from"./index-client.DfkwVSc5.js";function V(i,e){throw new o(i,e.toString())}new TextEncoder;async function S(i="/"){const e=await new Promise(r=>{const t=s.subscribe(a=>{if(a!==null){try{t()}catch{}r(a)}})});return e&&V(301,i),e}var z=l('<div id="recaptcha"></div>');function _(i,e){m(e,!1);let r=w(e,"verify",12,null),t,a=!1;R(()=>{window.recaptchaVerify||(t=new f(p,"recaptcha",{size:"invisible"}),t.render(),r(()=>t.verify()),window.recaptchaVerify=r(),a=!0)}),b(()=>{a&&(t.clear(),delete window.recaptchaVerify)}),v();var c=z();return d(i,c),h({get verify(){return r()},set verify(n){r(n),y()}})}u(_,{verify:{}},[],[],!0);export{_ as R,S as r};