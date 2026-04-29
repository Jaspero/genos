import{r as Ue,R as Ae}from"../chunks/Recaptcha.Hk5H0IiH.js";import"../chunks/disclose-version.Bg9kRutz.js";import{c as Ce,p as Pe,t as ze,f as Ne,s as r,e as a,a as ie,j as n,m as s,i as e,q as G,b as Ee,d as qe,r as i,g as Ie}from"../chunks/custom-element.YfTZRdDm.js";import{a as Se}from"../chunks/css.C4s6Pmy9.js";import{r as u,s as B}from"../chunks/attributes.BLb7X-Of.js";import{t as je}from"../chunks/class.Cp0VSjM4.js";import{r as Re}from"../chunks/misc.CIjl-xZq.js";import{b as d}from"../chunks/input.DU7lTnRt.js";import{p as $e}from"../chunks/event-modifiers.CKPgqgF5.js";import{i as Fe}from"../chunks/lifecycle.DDiEpaHd.js";import{s as Ge,a as Be}from"../chunks/store.J_5aMNQx.js";import{g as se}from"../chunks/entry.Bu7w1ZB9.js";import{p as Me}from"../chunks/stores.DWAJUjGe.js";import{a as oe,n as le}from"../chunks/alert-wrapper.C5AFN0wj.js";import{z as We,G as De,j as o,a as de,d as me,b as Le,m as ue,D as Ve,E as He,n as w}from"../chunks/firebase.CGP3-KIw.js";const Oe=!1;async function Te(){await Ue()}const ct=Object.freeze(Object.defineProperty({__proto__:null,load:Te,ssr:Oe},Symbol.toStringTag,{value:"Module"}));var Je=ze('<div class="auth-page svelte-iy4kmt"><div id="recaptcha-container-id"></div> <div class="auth-card svelte-iy4kmt"><div class="auth-header svelte-iy4kmt"><img src="/brand/genos-logo-white.svg" alt="Genos" class="auth-logo svelte-iy4kmt"> <h1 class="svelte-iy4kmt">Sign Up</h1> <p class="svelte-iy4kmt">Create your Genos account</p></div> <div class="auth-body svelte-iy4kmt"><form><button type="button" class="google-auth-btn svelte-iy4kmt"><svg viewBox="0 0 48 48" class="h-4 w-4" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path></svg> <span>Sign up with Google</span></button> <div class="auth-divider svelte-iy4kmt"><span>or sign up with email</span></div> <p class="auth-profile-hint svelte-iy4kmt">Google sign-up redirects you to complete the remaining profile details after authentication.</p> <div class="auth-fields svelte-iy4kmt"><label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpFirstName">First Name <input id="signUpFirstName" type="text" required autocomplete="given-name" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpLastName">Last Name <input id="signUpLastName" type="text" required autocomplete="family-name" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpEmail">Email <input id="signUpEmail" type="email" required autocomplete="email" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpRecoveryEmail">Recovery Email <input id="signUpRecoveryEmail" type="email" required autocomplete="email" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpInstitution">Institution <input id="signUpInstitution" type="text" required autocomplete="organization" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpPosition">Position in Institution <input id="signUpPosition" type="text" required autocomplete="organization-title" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpInstitutionAddress">Institution Address <textarea id="signUpInstitutionAddress" required rows="3" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></textarea></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpPassword">Password <input id="signUpPassword" required autocomplete="new-password" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signUpPasswordConfirm">Confirm Password <input id="signUpPasswordConfirm" required autocomplete="new-password" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <div class="auth-toggle-vis svelte-iy4kmt"><button type="button" class="svelte-iy4kmt"> </button></div></div> <button class="auth-btn svelte-iy4kmt" type="submit">Sign up</button> <div class="auth-footer-link svelte-iy4kmt"><span>Already have an account?</span> <a class="svelte-iy4kmt">Sign in</a></div></form></div></div></div> <!>',1);const Ke={hash:"svelte-iy4kmt",code:`
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
`};function Qe(M,pe){Pe(pe,!1),Se(M,Ke);const ce=Ge(),fe=()=>Be(Me,"$page",ce);let p=s(""),v=s(""),k=s(""),c=s(""),f=s(""),b=s(""),y=s(""),h=s(""),x=s(""),m=s(!1),W=s(),g=s("password");function D(){return[e(c).trim(),e(f).trim()].filter(Boolean).join(" ").trim()}function ge(){return!e(c).trim()||!e(f).trim()||!e(b).trim()||!e(y).trim()||!e(h).trim()||!e(x).trim()?(le({title:"Error",message:"Please fill in all required profile fields.",state:"error"}),!1):!0}function ve(t){return{email:t.trim(),name:D(),firstName:e(c).trim(),lastName:e(f).trim(),recoveryEmail:e(b).trim(),institution:e(y).trim(),position:e(h).trim(),institutionAddress:e(x).trim(),updatedAt:w()}}function L(){const t=fe().url.searchParams.get("forward");if(!t)return"/my-account";try{const l=decodeURIComponent(t);return l.startsWith("/")&&!l.startsWith("//")?l:"/my-account"}catch{return"/my-account"}}function be(){n(g,e(g)==="password"?"text":"password")}async function ye(){if(e(v)!==e(k))return le({title:"Error",message:"Passwords do not match!",state:"error"});if(!ge())return;if(n(p,e(p).trim()),n(m,!0),!await oe(Ve(o,e(p),e(v)),"Sign up successful","",()=>n(m,!1))){n(m,!1);return}if(o.currentUser){const l=D();l&&await He(o.currentUser,{displayName:l}),await ue(de(me,"customers",o.currentUser.uid),{...ve(e(p)),createdAt:w()},{merge:!0})}n(m,!1),xe()}async function he(){if(n(m,!0),await oe(We(o,new De),"Sign up successful","",()=>n(m,!1))&&o.currentUser){const l=de(me,"customers",o.currentUser.uid);if(!(await Le(l)).exists()){const ae=(o.currentUser.displayName||"").trim().split(/\s+/).filter(Boolean);await ue(l,{email:o.currentUser.email||"",name:o.currentUser.displayName||"",firstName:ae[0]||"",lastName:ae.slice(1).join(" "),recoveryEmail:"",institution:"",position:"",institutionAddress:"",createdAt:w(),updatedAt:w()},{merge:!0})}}n(m,!1),se("/my-account/settings?completeProfile=1")}function xe(){se(L())}Fe();var V=Je(),_=Ne(V),H=r(a(_),2),O=r(a(H),2),U=a(O),T=a(U),A=r(T,6),C=a(A),J=r(a(C));u(J),i(C);var P=r(C,2),K=r(a(P));u(K),i(P);var z=r(P,2),Q=r(a(z));u(Q),i(z);var N=r(z,2),X=r(a(N));u(X),i(N);var E=r(N,2),Y=r(a(E));u(Y),i(E);var q=r(E,2),Z=r(a(q));u(Z),i(q);var I=r(q,2),ee=r(a(I));Re(ee),i(I);var S=r(I,2),j=r(a(S));u(j),i(S);var R=r(S,2),$=r(a(R));u($),i(R);var te=r(R,2),F=a(te),we=a(F);i(F),i(te),i(A);var re=r(A,2),ne=r(re,2),ke=r(a(ne),2);ie(()=>B(ke,"href",`/sign-in?forward=${encodeURIComponent(L())}`)),i(ne),i(U),i(O),i(H),i(_);var _e=r(_,2);Ae(_e,{get verify(){return e(W)},set verify(t){n(W,t)},$$legacy:!0}),ie(()=>{B(j,"type",e(g)),B($,"type",e(g)),Ie(we,e(g)==="password"?"Show password":"Hide password"),je(re,"loading",e(m))}),G("click",T,he),d(J,()=>e(c),t=>n(c,t)),d(K,()=>e(f),t=>n(f,t)),d(Q,()=>e(p),t=>n(p,t)),d(X,()=>e(b),t=>n(b,t)),d(Y,()=>e(y),t=>n(y,t)),d(Z,()=>e(h),t=>n(h,t)),d(ee,()=>e(x),t=>n(x,t)),d(j,()=>e(v),t=>n(v,t)),d($,()=>e(k),t=>n(k,t)),G("click",F,be),G("submit",U,$e(ye)),Ee(M,V),qe()}Ce(Qe,{},[],[],!0);export{Qe as component,ct as universal};
