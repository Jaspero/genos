import{r as je,R as _e}from"../chunks/Recaptcha.Hk5H0IiH.js";import"../chunks/disclose-version.Bg9kRutz.js";import{c as xe,p as ke,t as L,f as re,s,e as a,a as P,j as t,m as d,i as e,q as y,b as E,d as Pe,r as o,g as S}from"../chunks/custom-element.YfTZRdDm.js";import{i as Ce}from"../chunks/if.CwLBsSbn.js";import{a as Ae}from"../chunks/css.C4s6Pmy9.js";import{r as R,s as ae}from"../chunks/attributes.BLb7X-Of.js";import{t as J}from"../chunks/class.Cp0VSjM4.js";import{b as F}from"../chunks/input.DU7lTnRt.js";import{p as K}from"../chunks/event-modifiers.CKPgqgF5.js";import{i as ze}from"../chunks/lifecycle.DDiEpaHd.js";import{s as Ie,a as $e}from"../chunks/store.J_5aMNQx.js";import{g as M}from"../chunks/entry.Bu7w1ZB9.js";import{p as Ee}from"../chunks/stores.DWAJUjGe.js";import{D as Se}from"../chunks/Dialog.CWyLjd7o.js";import{a as G}from"../chunks/alert-wrapper.C5AFN0wj.js";import{R as Re,j as h,e as Fe,y as oe,P as Q,z as Me,G as Ge,A as Le,B as Ve,C as We}from"../chunks/firebase.CGP3-KIw.js";import{o as Be}from"../chunks/index-client.D2r47I3f.js";import{m as De}from"../chunks/meta.store.CkT33Ptq.js";const He=!1;async function Oe(){await je()}const ft=Object.freeze(Object.defineProperty({__proto__:null,load:Oe,ssr:He},Symbol.toStringTag,{value:"Module"}));var Ne=L('<form><p class="auth-hint svelte-7sqpij">We have sent you a 6-digit verification code to: <b> </b></p> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="verificationCode">Verification Code <input id="verificationCode" type="text" required class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <button type="submit" class="auth-btn svelte-7sqpij">Confirm</button> <div class="auth-footer-link svelte-7sqpij"><span>Sign in with a different account?</span> <button type="button" class="svelte-7sqpij">Back to sign in</button></div></form>'),Te=L(`<form><div class="auth-fields svelte-7sqpij"><label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signInEmail">Email <input id="signInEmail" type="email" required autocomplete="email" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signInPassword">Password <input id="signInPassword" required autocomplete="current-password" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <div class="auth-toggle-vis svelte-7sqpij"><button type="button" class="svelte-7sqpij"> </button></div></div> <button class="auth-btn svelte-7sqpij" type="submit">Sign In</button> <div class="auth-divider svelte-7sqpij"><span>or</span></div> <button type="button" class="google-auth-btn svelte-7sqpij"><svg viewBox="0 0 48 48" class="h-4 w-4" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path></svg> <span>Sign in with Google</span></button> <div class="auth-footer-link svelte-7sqpij"><button type="button" class="svelte-7sqpij">Forgot your password?</button></div> <div class="auth-footer-link svelte-7sqpij"><span>Don't have an account?</span> <a class="svelte-7sqpij">Sign up</a></div></form>`),Ue=L(`<h3 class="text-xl md:text-lg mb-4">Reset your password</h3> <p class="text-lg md:text-base mb-4">Enter your email address and we'll send you a link to reset it.</p> <form><label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="resetEmail">Email <input id="resetEmail" type="email" required autocomplete="email" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></label> <div class="mt-4"><button type="submit" class="button">Reset password</button></div></form>`,1),Je=L('<div class="auth-page svelte-7sqpij"><div id="recaptcha-container-id"></div> <div class="auth-card svelte-7sqpij"><div class="auth-header svelte-7sqpij"><img src="/brand/genos-logo-white.svg" alt="Genos" class="auth-logo svelte-7sqpij"> <h1 class="svelte-7sqpij"> </h1> <p class="svelte-7sqpij"> </p></div> <div class="auth-body svelte-7sqpij"><!></div></div></div> <!> <!>',1);const Ke={hash:"svelte-7sqpij",code:`
  .auth-page.svelte-7sqpij {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 10rem);
    padding: 9rem 1.5rem 3rem;
  }

  .auth-card.svelte-7sqpij {
    width: 100%;
    max-width: 28rem;
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0, 0, 0, .12);
  }

  .auth-header.svelte-7sqpij {
    background: #032130;
    padding: 2rem 2rem 1.5rem;
    text-align: center;
    color: white;
  }

  .auth-logo.svelte-7sqpij {
    display: block;
    margin: 0 auto 1rem;
    height: 2rem;
  }

  .auth-header.svelte-7sqpij h1:where(.svelte-7sqpij) {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }

  .auth-header.svelte-7sqpij p:where(.svelte-7sqpij) {
    margin: .5rem 0 0;
    font-size: .875rem;
    opacity: .75;
    color: white;
  }

  .auth-body.svelte-7sqpij {
    background: white;
    padding: 2rem;
  }

  .auth-fields.svelte-7sqpij {
    display: flex;
    flex-direction: column;
    gap: .75rem;
  }

  .auth-toggle-vis.svelte-7sqpij {
    margin-top: -.25rem;
  }

  .auth-toggle-vis.svelte-7sqpij button:where(.svelte-7sqpij) {
    font-size: .8125rem;
    color: #1486ad;
    text-decoration: underline;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }

  .auth-btn.svelte-7sqpij {
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

  .auth-btn.svelte-7sqpij:hover {
    background: #063044;
  }

  .auth-divider.svelte-7sqpij {
    display: flex;
    align-items: center;
    gap: .75rem;
    margin: 1.25rem 0;
    color: #9ca3af;
    font-size: .8125rem;
  }

  .auth-divider.svelte-7sqpij::before,
  .auth-divider.svelte-7sqpij::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e5e7eb;
  }

  .google-auth-btn.svelte-7sqpij {
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

  .google-auth-btn.svelte-7sqpij:hover {
    background: #f8fafc;
  }

  .auth-hint.svelte-7sqpij {
    margin: 0 0 1rem;
    font-size: .875rem;
    color: #4b5563;
    line-height: 1.5;
  }

  .auth-footer-link.svelte-7sqpij {
    margin-top: 1.25rem;
    text-align: center;
    font-size: .8125rem;
    color: #6b7280;
  }

  .auth-footer-link.svelte-7sqpij button:where(.svelte-7sqpij),
  .auth-footer-link.svelte-7sqpij a:where(.svelte-7sqpij) {
    color: #1486ad;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    font-size: inherit;
  }

  @media (max-width: 600px) {
    .auth-page.svelte-7sqpij {
      padding: 7.25rem 1rem 2rem;
    }
    .auth-body.svelte-7sqpij {
      padding: 1.5rem;
    }
  }
`};function Qe(X,ie){ke(ie,!1),Ae(X,Ke);const le=Ie(),de=()=>$e(Ee,"$page",le);De.set({title:"Sign In"});let _=d(""),C=d(""),p=d(!1),A=d("password"),z=d(),q=d(""),V=d(!1),I=d(!1),W,g=d(!1),B=d(!1),$=d(),c=d(),D;function x(){const n=de().url.searchParams.get("forward");if(!n)return"/my-account";try{const r=decodeURIComponent(n);return r.startsWith("/")&&!r.startsWith("//")?r:"/my-account"}catch{return"/my-account"}}async function ce(){if(t(_,e(_).trim()),!e(p)){t(p,!0);try{await e(z)(),await G(Le(h,e(_),e(C)),"Login successful",n=>{if(n.code=="auth/multi-factor-auth-required"&&(t(c,oe(h,n)),e(c).hints)){const r={multiFactorHint:e(c).hints[0],session:e(c).session};return new Q(h).verifyPhoneNumber(r,W).then(i=>{D=i,t(g,!0),t(p,!1)}).catch(i=>{console.log("second error",i)}),""}return""},()=>t(p,!1)),M(x())}catch{t(C,"")}t(p,!1)}}async function ue(){t(p,!0),await G(Me(h,new Ge),"Login successful",n=>{if(n.code=="auth/multi-factor-auth-required"&&(t(c,oe(h,n)),e(c).hints)){const r={multiFactorHint:e(c).hints[0],session:e(c).session};new Q(h).verifyPhoneNumber(r,W).then(i=>{D=i,t(g,!0),t(p,!1)}).catch(i=>{console.log("second error",i)})}},()=>t(p,!1)),e(g)||setTimeout(()=>M(x()),1e3)}async function pe(){if(t(q,e(q).trim().toLowerCase()),!!e(q)){t(V,!0);try{await e(z)(),await G(We(h,e(q),{url:`${location.origin}/reset-password`}),"A password reset link has been sent to your email."),t(I,!1)}catch(n){console.error(n)}t(V,!1)}}function me(){t(A,e(A)==="password"?"text":"password")}function ve(){t(g,!1),t($,"")}async function fe(){t(B,!0);const n=Q.credential(D,e($)),r=Ve.assertion(n);await G(e(c).resolveSignIn(r),"Login successful","",()=>t(B,!1)),M(x())}Be(()=>{W=new Re(h,"recaptcha-container-id",{size:"invisible"});const n=Fe.subscribe(r=>{if(r!==null){try{n()}catch{}r&&M(x())}})}),ze();var Y=Je(),H=re(Y),Z=s(a(H),2),O=a(Z),N=s(a(O),2),he=a(N);o(N);var ee=s(N,2),ge=a(ee);o(ee),o(O);var te=s(O,2),be=a(te);Ce(be,()=>e(g),n=>{var r=Ne(),l=a(r),i=s(a(l)),v=a(i);o(i),o(l);var u=s(l,2),m=s(a(u));R(m),o(u);var b=s(u,2),f=s(b,2),T=s(a(f),2);o(f),o(r),P(()=>{var w,k,j;S(v,(j=(k=(w=e(c))==null?void 0:w.hints)==null?void 0:k[0])==null?void 0:j.phoneNumber),J(b,"loading",e(B))}),F(m,()=>e($),w=>t($,w)),y("click",T,ve),y("submit",r,K(fe)),E(n,r)},n=>{var r=Te(),l=a(r),i=a(l),v=s(a(i));R(v),o(i);var u=s(i,2),m=s(a(u));R(m),o(u);var b=s(u,2),f=a(b),T=a(f);o(f),o(b),o(l);var w=s(l,2),k=s(w,4),j=s(k,2),ye=a(j);o(j);var se=s(j,2),qe=s(a(se),2);P(()=>ae(qe,"href",`/sign-up?forward=${encodeURIComponent(x())}`)),o(se),o(r),P(()=>{ae(m,"type",e(A)),S(T,e(A)==="password"?"Show password":"Hide password"),J(w,"loading",e(p))}),F(v,()=>e(_),U=>t(_,U)),F(m,()=>e(C),U=>t(C,U)),y("click",f,me),y("click",k,ue),y("click",ye,()=>t(I,!0)),y("submit",r,K(ce)),E(n,r)}),o(te),o(Z),o(H);var ne=s(H,2);Se(ne,{get showing(){return e(I)},set showing(n){t(I,n)},children:(n,r)=>{var l=Ue(),i=s(re(l),4),v=a(i),u=s(a(v));R(u),o(v);var m=s(v,2),b=a(m);o(m),o(i),P(()=>J(b,"loading",e(V))),F(u,()=>e(q),f=>t(q,f)),y("submit",i,K(pe)),E(n,l)},$$slots:{default:!0},$$legacy:!0});var we=s(ne,2);_e(we,{get verify(){return e(z)},set verify(n){t(z,n)},$$legacy:!0}),P(()=>{S(he,e(g)?"Verification":"Sign In"),S(ge,e(g)?"Enter the code we sent to your phone":"Sign in to your Genos account")}),E(X,Y),Pe()}xe(Qe,{},[],[],!0);export{Qe as component,ft as universal};
