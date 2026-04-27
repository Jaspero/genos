<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { auth } from '$lib/utils/firebase';
  import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithPopup
  } from 'firebase/auth';
  import Recaptcha from '$lib/Recaptcha.svelte';
  import GoogleButton from '$lib/GoogleButton.svelte';
  import '@jaspero/web-components/dist/input.wc';
  import '@jaspero/web-components/dist/input.css';
  import { renderAlert } from '@jaspero/web-components/dist/render-alert';

  let email = '';
  let password = '';
  let passwordConfirm = '';
  let loading = false;
  let recaptchaVerify: () => Promise<string>;
  let type = 'password';

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

  function updateEmail(e: CustomEvent<{ value: string }>) {
    email = e.detail.value;
  }

  function updatePassword(e: CustomEvent<{ value: string }>) {
    password = e.detail.value;
  }

  function updatePasswordConfirm(e: CustomEvent<{ value: string }>) {
    passwordConfirm = e.detail.value;
  }

  function toggleVisible() {
    type = type === 'password' ? 'text' : 'password';
  }

  async function signUp() {
    if (password !== passwordConfirm) {
      return renderAlert({ title: 'Error', message: 'Passwords do not match!', state: 'error' });
    }

    email = email.trim();

    loading = true;

    await alertWrapper(
      createUserWithEmailAndPassword(auth, email, password),
      'Sign up successful',
      '',
      () => (loading = false)
    );

    loading = false;
    navigate();
  }

  async function signupGoogle() {
    loading = true;

    await alertWrapper(
      signInWithPopup(auth, new GoogleAuthProvider()),
      'Sign up successful',
      '',
      () => (loading = false)
    );

    loading = false;

    navigate();
  }

  function navigate() {
    goto(getForwardPath());
  }
</script>

<div class="auth-page">
  <div id="recaptcha-container-id"></div>

  <div class="auth-card">
    <div class="auth-header">
      <img src="/brand/genos-logo-white.svg" alt="Genos" class="auth-logo" />
      <h1>Sign Up</h1>
      <p>Create your Genos account</p>
    </div>

    <div class="auth-body">
      <form on:submit|preventDefault={signUp}>
        <GoogleButton onClick={signupGoogle} label="Sign up with Google" />

        <div class="auth-divider"><span>or sign up with email</span></div>

        <div class="auth-fields">
          <jp-input
            label="Email"
            type="email"
            value={email}
            required
            autocomplete="email"
            on:value={updateEmail}
          ></jp-input>
          <jp-input
            label="Password"
            {type}
            value={password}
            required
            autocomplete="new-password"
            on:value={updatePassword}
          ></jp-input>
          <jp-input
            label="Confirm Password"
            {type}
            value={passwordConfirm}
            required
            autocomplete="repeat-password"
            on:value={updatePasswordConfirm}
          ></jp-input>
          <div class="auth-toggle-vis">
            <button type="button" on:click={toggleVisible}>
              {type === 'password' ? 'Show password' : 'Hide password'}
            </button>
          </div>
        </div>

        <button class="auth-btn" type="submit" class:loading>Sign up</button>

        <div class="auth-footer-link">
          <span>Already have an account?</span>
          <a href={`/sign-in?forward=${encodeURIComponent(getForwardPath())}`}>Sign in</a>
        </div>
      </form>
    </div>
  </div>
</div>

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

  .auth-footer-link {
    margin-top: 1.25rem;
    text-align: center;
    font-size: .8125rem;
    color: #6b7280;
  }

  .auth-footer-link a {
    color: #1486ad;
    font-weight: 600;
    text-decoration: underline;
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
