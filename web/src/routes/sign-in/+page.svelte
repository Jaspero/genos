<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Dialog from '$lib/Dialog.svelte';
  import Recaptcha from '$lib/Recaptcha.svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { auth } from '$lib/utils/firebase';
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
  import '@jaspero/web-components/dist/input.wc';
  import '@jaspero/web-components/dist/input.css';
  import { meta } from '$lib/meta/meta.store';
  import GoogleButton from '$lib/GoogleButton.svelte';

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

  async function submit() {
    const { searchParams } = $page.url;

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
        (e) => {
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

      goto(
        searchParams.has('forward')
          ? decodeURIComponent(searchParams.get('forward') as string)
          : '/my-account'
      );
    } catch {
      password = '';
    }

    loading = false;
  }

  async function loginGoogle() {
    const { searchParams } = $page.url;

    loading = true;

    await alertWrapper(
      signInWithPopup(auth, new GoogleAuthProvider()),
      'Login successful',
      (e) => {
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

    setTimeout(() => {
      goto(
        searchParams.has('forward')
          ? decodeURIComponent(searchParams.get('forward') as string)
          : '/my-account'
      );
    }, 1000);
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

    const { searchParams } = $page.url;
    goto(
      searchParams.has('forward') ? decodeURIComponent(searchParams.get('forward') as string) : '/'
    );
  }

  onMount(() => {
    recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container-id', {
      size: 'invisible'
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
          <jp-input
            label="Verification Code"
            value={codeInput}
            required
            on:value={(e) => (codeInput = e.detail.value)}
          ></jp-input>

          <button type="submit" class="auth-btn" class:loading={confirmLoader}>Confirm</button>

          <div class="auth-footer-link">
            <span>Sign in with a different account?</span>
            <button type="button" on:click={back}>Back to sign in</button>
          </div>
        </form>
      {:else}
        <form on:submit|preventDefault={submit}>
          <div class="auth-fields">
            <jp-input
              label="Email"
              type="email"
              value={email}
              required
              autocomplete="email"
              on:value={(e) => (email = e.detail.value)}
            ></jp-input>
            <jp-input
              label="Password"
              {type}
              value={password}
              required
              autocomplete="current-password"
              on:value={(e) => (password = e.detail.value)}
            ></jp-input>
            <div class="auth-toggle-vis">
              <button type="button" on:click={toggleVisible}>
                {type === 'password' ? 'Show password' : 'Hide password'}
              </button>
            </div>
          </div>

          <button class="auth-btn" type="submit" class:loading>Sign In</button>

          <div class="auth-divider"><span>or</span></div>

          <GoogleButton label="Sign in with Google" onClick={loginGoogle} />

          <div class="auth-footer-link">
            <button type="button" on:click={() => (rDialog = true)}>Forgot your password?</button>
          </div>

          <div class="auth-footer-link">
            <span>Don't have an account?</span>
            <a href="/sign-up">Sign up</a>
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
    <jp-input
      label="Email"
      type="email"
      value={rEmail}
      required
      autocomplete="email"
      on:value={(e) => (rEmail = e.detail.value)}
    ></jp-input>

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
    padding: 6rem 1.5rem 3rem;
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
    height: 2rem;
    margin-bottom: 1rem;
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
      padding: 5rem 1rem 2rem;
    }
    .auth-body {
      padding: 1.5rem;
    }
  }
</style>
