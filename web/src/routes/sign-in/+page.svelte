<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Dialog from '$lib/Dialog.svelte';
  import Recaptcha from '$lib/Recaptcha.svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { auth, authenticated } from '$lib/utils/firebase';
  import {
    GoogleAuthProvider,
    PhoneAuthProvider,
    PhoneMultiFactorGenerator,
    RecaptchaVerifier,
    getMultiFactorResolver,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup
  } from 'firebase/auth';
  import { onMount } from 'svelte';
  import { meta } from '$lib/meta/meta.store';

  meta.set({
    title: 'Sign In'
  });

  let email = '';
  let password = '';
  let loading = false;
  let type: 'password' | 'text' = 'password';
  let recaptchaVerify: () => Promise<string>;

  let rEmail = '';
  let rLoading = false;
  let rDialog = false;

  let recaptchaVerifier: any;
  let showCodeInput = false;
  let confirmLoader = false;
  let codeInput: string;
  let resolver: any;
  let verId: string;

  function getForwardPath() {
    const forward = $page.url.searchParams.get('forward');

    if (!forward) {
      return '/my-account';
    }

    try {
      const decoded = decodeURIComponent(forward);
      return decoded.startsWith('/') && !decoded.startsWith('//') ? decoded : '/my-account';
    } catch {
      return '/my-account';
    }
  }

  async function submit() {
    email = email.trim();

    if (loading) {
      return;
    }

    loading = true;

    try {
      await recaptchaVerify();

      await alertWrapper(
        signInWithEmailAndPassword(auth, email, password),
        'Login successful',
        (e: any) => {
          if (e.code == 'auth/multi-factor-auth-required') {
            resolver = getMultiFactorResolver(auth, e);
            if (resolver.hints) {
              const phoneInfoOptions = {
                multiFactorHint: resolver.hints[0],
                session: resolver.session
              };
              const phoneAuthProvider = new PhoneAuthProvider(auth);

              phoneAuthProvider
                .verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier)
                .then((verificationId) => {
                  verId = verificationId;
                  showCodeInput = true;
                  loading = false;
                })
                .catch((error) => {
                  console.log('second error', error);
                });

              return '';
            }
          }

          return '';
        },
        () => (loading = false)
      );

      goto(getForwardPath());
    } catch {
      password = '';
    }

    loading = false;
  }

  async function loginGoogle() {
    loading = true;

    await alertWrapper(
      signInWithPopup(auth, new GoogleAuthProvider()),
      'Login successful',
      (e: any) => {
        if (e.code == 'auth/multi-factor-auth-required') {
          resolver = getMultiFactorResolver(auth, e);
          if (resolver.hints) {
            const phoneInfoOptions = {
              multiFactorHint: resolver.hints[0],
              session: resolver.session
            };
            const phoneAuthProvider = new PhoneAuthProvider(auth);
            phoneAuthProvider
              .verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier)
              .then((verificationId) => {
                verId = verificationId;
                showCodeInput = true;
                loading = false;
              })
              .catch((error) => {
                console.log('second error', error);
              });
          }
        }
      },
      () => (loading = false)
    );

    if (!showCodeInput) {
      setTimeout(() => goto(getForwardPath()), 1000);
    }
  }

  async function resetPassword() {
    rEmail = rEmail.trim().toLowerCase();

    if (!rEmail) {
      return;
    }

    rLoading = true;

    try {
      await recaptchaVerify();

      await alertWrapper(
        sendPasswordResetEmail(auth, rEmail, { url: `${location.origin}/reset-password` }),
        'A password reset link has been sent to your email.'
      );

      rDialog = false;
    } catch (e) {
      console.error(e);
    }

    rLoading = false;
  }

  function toggleVisible() {
    type = type === 'password' ? 'text' : 'password';
  }

  function back() {
    showCodeInput = false;
    codeInput = '';
  }

  async function confirm() {
    confirmLoader = true;
    const cred = PhoneAuthProvider.credential(verId, codeInput);

    const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);

    await alertWrapper(
      resolver.resolveSignIn(multiFactorAssertion),
      'Login successful',
      '',
      () => (confirmLoader = false)
    );

    goto(getForwardPath());
  }

  onMount(() => {
    recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container-id', {
      size: 'invisible'
    });

    const unsub = authenticated.subscribe((authUser) => {
      if (authUser === null) return;
      try { unsub(); } catch {}
      if (authUser) goto(getForwardPath());
    });
  });
</script>

<div class="auth-page">
  <div id="recaptcha-container-id"></div>

  <div class="auth-card">
    <div class="auth-header">
      <img src="/brand/genos-logo-white.svg" alt="Genos" class="auth-logo" />
      <h1>{showCodeInput ? 'Verification' : 'Sign In'}</h1>
      <p>{showCodeInput ? 'Enter the code we sent to your phone' : 'Sign in to your Genos account'}</p>
    </div>

    <div class="auth-body">
      {#if showCodeInput}
        <form on:submit|preventDefault={confirm}>
          <p class="auth-hint">
            We have sent you a 6-digit verification code to: <b>{resolver?.hints?.[0]?.phoneNumber}</b>
          </p>
          <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="verificationCode">
            Verification Code
            <input id="verificationCode" type="text" bind:value={codeInput} required class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]" />
          </label>

          <button type="submit" class="auth-btn" class:loading={confirmLoader}>Confirm</button>

          <div class="auth-footer-link">
            <span>Sign in with a different account?</span>
            <button type="button" on:click={back}>Back to sign in</button>
          </div>
        </form>
      {:else}
        <form on:submit|preventDefault={submit}>
          <div class="auth-fields">
            <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signInEmail">
              Email
              <input id="signInEmail" type="email" bind:value={email} required autocomplete="email" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]" />
            </label>
            <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="signInPassword">
              Password
              <input id="signInPassword" {type} bind:value={password} required autocomplete="current-password" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]" />
            </label>
            <div class="auth-toggle-vis">
              <button type="button" on:click={toggleVisible}>
                {type === 'password' ? 'Show password' : 'Hide password'}
              </button>
            </div>
          </div>

          <button class="auth-btn" type="submit" class:loading={loading}>Sign In</button>

          <div class="auth-divider"><span>or</span></div>

          <button type="button" class="google-auth-btn" on:click={loginGoogle}>
            <svg viewBox="0 0 48 48" class="h-4 w-4" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <span>Sign in with Google</span>
          </button>

          <div class="auth-footer-link">
            <button type="button" on:click={() => (rDialog = true)}>Forgot your password?</button>
          </div>

          <div class="auth-footer-link">
            <span>Don't have an account?</span>
            <a href={`/sign-up?forward=${encodeURIComponent(getForwardPath())}`}>Sign up</a>
          </div>
        </form>
      {/if}
    </div>
  </div>
</div>

<Dialog bind:showing={rDialog}>
  <h3 class="text-xl md:text-lg mb-4">Reset your password</h3>

  <p class="text-lg md:text-base mb-4">
    Enter your email address and we'll send you a link to reset it.
  </p>

  <form on:submit|preventDefault={resetPassword}>
    <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="resetEmail">
      Email
      <input id="resetEmail" type="email" bind:value={rEmail} required autocomplete="email" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]" />
    </label>

    <div class="mt-4">
      <button type="submit" class="button" class:loading={rLoading}>Reset password</button>
    </div>
  </form>
</Dialog>

<Recaptcha bind:verify={recaptchaVerify} />

<style>
  .auth-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 10rem);
    padding: 8rem 1.5rem 3rem;
  }

  .auth-card {
    width: 100%;
    max-width: 28rem;
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0, 0, 0, .12);
  }

  .auth-header {
    background: #032130;
    padding: 2rem 2rem 1.5rem;
    text-align: center;
    color: white;
  }

  .auth-logo {
    display: block;
    margin: 0 auto 1rem;
    height: 2rem;
  }

  .auth-header h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }

  .auth-header p {
    margin: .5rem 0 0;
    font-size: .875rem;
    opacity: .75;
    color: white;
  }

  .auth-body {
    background: white;
    padding: 2rem;
  }

  .auth-fields {
    display: flex;
    flex-direction: column;
    gap: .75rem;
  }

  .auth-toggle-vis {
    margin-top: -.25rem;
  }

  .auth-toggle-vis button {
    font-size: .8125rem;
    color: #1486ad;
    text-decoration: underline;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }

  .auth-btn {
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

  .auth-btn:hover {
    background: #063044;
  }

  .auth-divider {
    display: flex;
    align-items: center;
    gap: .75rem;
    margin: 1.25rem 0;
    color: #9ca3af;
    font-size: .8125rem;
  }

  .auth-divider::before,
  .auth-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e5e7eb;
  }

  .google-auth-btn {
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

  .google-auth-btn:hover {
    background: #f8fafc;
  }

  .auth-hint {
    margin: 0 0 1rem;
    font-size: .875rem;
    color: #4b5563;
    line-height: 1.5;
  }

  .auth-footer-link {
    margin-top: 1.25rem;
    text-align: center;
    font-size: .8125rem;
    color: #6b7280;
  }

  .auth-footer-link button,
  .auth-footer-link a {
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
    .auth-page {
      padding: 6.5rem 1rem 2rem;
    }
    .auth-body {
      padding: 1.5rem;
    }
  }
</style>
