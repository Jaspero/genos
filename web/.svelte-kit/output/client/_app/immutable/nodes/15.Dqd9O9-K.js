import{r as Pe,R as ze}from"../chunks/Recaptcha.DVanZEuy.js";import"../chunks/disclose-version.Bg9kRutz.js";import{c as Ie,p as Ne,t as Ee,f as qe,s as r,e as a,a as le,j as n,m as i,i as e,q as B,b as Se,d as je,r as s,g as Re}from"../chunks/custom-element.wWu55SxI.js";import{a as $e}from"../chunks/css.CRvP1F1T.js";import{r as m,s as D}from"../chunks/attributes.DL6hCz3k.js";import{t as Fe}from"../chunks/class.B9J0er_0.js";import{r as Ge}from"../chunks/misc.iI9nKUW9.js";import{b as o}from"../chunks/input.a_pMjiw3.js";import{p as Ve}from"../chunks/event-modifiers.CKPgqgF5.js";import{i as Be}from"../chunks/lifecycle.DdmnWoTO.js";import{s as De,a as Me}from"../chunks/store.-yepEP1V.js";import{g as de}from"../chunks/entry.CFKAwk6f.js";import{p as We}from"../chunks/stores.CRaM5wAX.js";import{a as me,n as ue}from"../chunks/alert-wrapper.CDblHjbf.js";import{z as Le,G as Te,j as l,a as pe,d as ce,b as He,m as fe,D as Oe,E as Je,n as k}from"../chunks/firebase.DAWrBD4B.js";const Ke=!1;async function Qe(){await Pe()}const vt=Object.freeze(Object.defineProperty({__proto__:null,load:Qe,ssr:Ke},Symbol.toStringTag,{value:"Module"}));var Xe=Ee('<div class="auth-page svelte-iy4kmt"><div id="recaptcha-container-id"></div> <div class="auth-card svelte-iy4kmt"><div class="auth-header svelte-iy4kmt"><img src="/brand/genos-logo-white.svg" alt="Genos" class="auth-logo svelte-iy4kmt"> <h1 class="svelte-iy4kmt">Sign Up</h1> <p class="svelte-iy4kmt">Create your Genos account</p></div> <div class="auth-body svelte-iy4kmt"><form><button type="button" class="google-auth-btn svelte-iy4kmt"><svg viewBox="0 0 48 48" class="h-4 w-4" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path></svg> <span>Sign up with Google</span></button> <div class="auth-divider svelte-iy4kmt"><span>or sign up with email</span></div> <p class="auth-profile-hint svelte-iy4kmt">Google sign-up redirects you to complete the remaining profile details after authentication.</p> <div class="auth-fields svelte-iy4kmt"><label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpFirstName">First Name <input id="signUpFirstName" type="text" required autocomplete="given-name" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpLastName">Last Name <input id="signUpLastName" type="text" required autocomplete="family-name" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpEmail">Email <input id="signUpEmail" type="email" required autocomplete="email" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpRecoveryEmail">Recovery Email <input id="signUpRecoveryEmail" type="email" required autocomplete="email" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpInstitution">Institution <input id="signUpInstitution" type="text" required autocomplete="organization" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpPosition">Position in Institution <input id="signUpPosition" type="text" required autocomplete="organization-title" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpInstitutionAddress">Institution Address <textarea id="signUpInstitutionAddress" required rows="3" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></textarea></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpVatId">VAT ID <input id="signUpVatId" type="text" required class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpPassword">Password <input id="signUpPassword" required autocomplete="new-password" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpPasswordConfirm">Confirm Password <input id="signUpPasswordConfirm" required autocomplete="new-password" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <div class="auth-toggle-vis svelte-iy4kmt"><button type="button" class="svelte-iy4kmt"> </button></div></div> <button class="auth-btn svelte-iy4kmt" type="submit">Sign up</button> <div class="auth-footer-link svelte-iy4kmt"><span>Already have an account?</span> <a class="svelte-iy4kmt">Sign in</a></div></form></div></div></div> <!>',1);const Ye={hash:"svelte-iy4kmt",code:`
  .auth-page.svelte-iy4kmt {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 10rem);
    padding: 9rem 1.5rem 3rem;
  }

  .auth-card.svelte-iy4kmt {
    width: 100%;
    max-width: 28rem;
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0, 0, 0, .12);
  }

  .auth-header.svelte-iy4kmt {
    background: #032130;
    padding: 2rem 2rem 1.5rem;
    text-align: center;
    color: white;
  }

  .auth-logo.svelte-iy4kmt {
    display: block;
    margin: 0 auto 1rem;
    height: 2rem;
  }

  .auth-header.svelte-iy4kmt h1:where(.svelte-iy4kmt) {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }

  .auth-header.svelte-iy4kmt p:where(.svelte-iy4kmt) {
    margin: .5rem 0 0;
    font-size: .875rem;
    opacity: .75;
    color: white;
  }

  .auth-body.svelte-iy4kmt {
    background: white;
    padding: 2rem;
  }

  .auth-fields.svelte-iy4kmt {
    display: flex;
    flex-direction: column;
    gap: .75rem;
  }

  .auth-toggle-vis.svelte-iy4kmt {
    margin-top: -.25rem;
  }

  .auth-toggle-vis.svelte-iy4kmt button:where(.svelte-iy4kmt) {
    font-size: .8125rem;
    color: #1486ad;
    text-decoration: underline;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }

  .auth-btn.svelte-iy4kmt {
    display: block;
    width: 100%;
    padding: .75rem 1rem;
    margin-top: 1.25rem;
    background: #0A415C;
    color: white;
    font-weight: 700;
    font-size: .9375rem;
    border: none;
    border-radius: .25rem;
    cursor: pointer;
    transition: background .2s;
  }

  .auth-btn.svelte-iy4kmt:hover {
    background: #063044;
  }

  .auth-divider.svelte-iy4kmt {
    display: flex;
    align-items: center;
    gap: .75rem;
    margin: 1.25rem 0;
    color: #9ca3af;
    font-size: .8125rem;
  }

  .auth-divider.svelte-iy4kmt::before,
  .auth-divider.svelte-iy4kmt::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e5e7eb;
  }

  .auth-profile-hint.svelte-iy4kmt {
    margin: -0.5rem 0 1rem;
    color: #64748b;
    font-size: 0.75rem;
    line-height: 1.5;
  }

  .google-auth-btn.svelte-iy4kmt {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    border: 1px solid #d1d5db;
    border-radius: .375rem;
    background: #fff;
    color: #111827;
    font-size: .875rem;
    font-weight: 600;
    padding: .7rem 1rem;
    transition: background .2s;
  }

  .google-auth-btn.svelte-iy4kmt:hover {
    background: #f8fafc;
  }

  .auth-footer-link.svelte-iy4kmt {
    margin-top: 1.25rem;
    text-align: center;
    font-size: .8125rem;
    color: #6b7280;
  }

  .auth-footer-link.svelte-iy4kmt a:where(.svelte-iy4kmt) {
    color: #1486ad;
    font-weight: 600;
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .auth-page.svelte-iy4kmt {
      padding: 7.25rem 1rem 2rem;
    }
    .auth-body.svelte-iy4kmt {
      padding: 1.5rem;
    }
  }
`};function Ze(M,ge){Ne(ge,!1),$e(M,Ye);const ve=De(),be=()=>Me(We,"$page",ve);let p=i(""),v=i(""),_=i(""),c=i(""),f=i(""),b=i(""),y=i(""),h=i(""),x=i(""),w=i(""),u=i(!1),W=i(),g=i("password");function L(){return[e(c).trim(),e(f).trim()].filter(Boolean).join(" ").trim()}function ye(){return!e(c).trim()||!e(f).trim()||!e(b).trim()||!e(y).trim()||!e(h).trim()||!e(x).trim()||!e(w).trim()?(ue({title:"Error",message:"Please fill in all required profile fields.",state:"error"}),!1):!0}function he(t){return{email:t.trim(),name:L(),firstName:e(c).trim(),lastName:e(f).trim(),recoveryEmail:e(b).trim(),institution:e(y).trim(),position:e(h).trim(),institutionAddress:e(x).trim(),vatId:e(w).trim(),updatedAt:k()}}function T(){const t=be().url.searchParams.get("forward");if(!t)return"/my-account";try{const d=decodeURIComponent(t);return d.startsWith("/")&&!d.startsWith("//")?d:"/my-account"}catch{return"/my-account"}}function xe(){n(g,e(g)==="password"?"text":"password")}async function we(){if(e(v)!==e(_))return ue({title:"Error",message:"Passwords do not match!",state:"error"});if(!ye())return;if(n(p,e(p).trim()),n(u,!0),!await me(Oe(l,e(p),e(v)),"Sign up successful","",()=>n(u,!1))){n(u,!1);return}if(l.currentUser){const d=L();d&&await Je(l.currentUser,{displayName:d}),await fe(pe(ce,"customers",l.currentUser.uid),{...he(e(p)),createdAt:k()},{merge:!0})}n(u,!1),_e()}async function ke(){if(n(u,!0),await me(Le(l,new Te),"Sign up successful","",()=>n(u,!1))&&l.currentUser){const d=pe(ce,"customers",l.currentUser.uid);if(!(await He(d)).exists()){const oe=(l.currentUser.displayName||"").trim().split(/\s+/).filter(Boolean);await fe(d,{email:l.currentUser.email||"",name:l.currentUser.displayName||"",firstName:oe[0]||"",lastName:oe.slice(1).join(" "),recoveryEmail:"",institution:"",position:"",institutionAddress:"",vatId:"",createdAt:k(),updatedAt:k()},{merge:!0})}}n(u,!1),de("/my-account/settings?completeProfile=1")}function _e(){de(T())}Be();var H=Xe(),U=qe(H),O=r(a(U),2),J=r(a(O),2),A=a(J),K=a(A),C=r(K,6),P=a(C),Q=r(a(P));m(Q),s(P);var z=r(P,2),X=r(a(z));m(X),s(z);var I=r(z,2),Y=r(a(I));m(Y),s(I);var N=r(I,2),Z=r(a(N));m(Z),s(N);var E=r(N,2),ee=r(a(E));m(ee),s(E);var q=r(E,2),te=r(a(q));m(te),s(q);var S=r(q,2),re=r(a(S));Ge(re),s(S);var j=r(S,2),ne=r(a(j));m(ne),s(j);var R=r(j,2),$=r(a(R));m($),s(R);var F=r(R,2),G=r(a(F));m(G),s(F);var ae=r(F,2),V=a(ae),Ue=a(V);s(V),s(ae),s(C);var se=r(C,2),ie=r(se,2),Ae=r(a(ie),2);le(()=>D(Ae,"href",`/sign-in?forward=${encodeURIComponent(T())}`)),s(ie),s(A),s(J),s(O),s(U);var Ce=r(U,2);ze(Ce,{get verify(){return e(W)},set verify(t){n(W,t)},$$legacy:!0}),le(()=>{D($,"type",e(g)),D(G,"type",e(g)),Re(Ue,e(g)==="password"?"Show password":"Hide password"),Fe(se,"loading",e(u))}),B("click",K,ke),o(Q,()=>e(c),t=>n(c,t)),o(X,()=>e(f),t=>n(f,t)),o(Y,()=>e(p),t=>n(p,t)),o(Z,()=>e(b),t=>n(b,t)),o(ee,()=>e(y),t=>n(y,t)),o(te,()=>e(h),t=>n(h,t)),o(re,()=>e(x),t=>n(x,t)),o(ne,()=>e(w),t=>n(w,t)),o($,()=>e(v),t=>n(v,t)),o(G,()=>e(_),t=>n(_,t)),B("click",V,xe),B("submit",A,Ve(we)),Se(M,H),je()}Ie(Ze,{},[],[],!0);export{Ze as component,vt as universal};
