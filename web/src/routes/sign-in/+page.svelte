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

<div class="w-[500px] mx-auto p-12 flex justify-center items-center">
  <div id="recaptcha-container-id"></div>

  {#if showCodeInput}
    <form on:submit|preventDefault={confirm} class="w-full shadow-xl p-8 rounded">
      <h2 class="text-lg font-bold mb-4">Verification Code</h2>

      <div class="flex flex-col gap-2">
        <p>
          We have sent you a 6-digit verification code to: <b>{resolver?.hints?.[0]?.phoneNumber}</b
          >
        </p>
        <jp-input
          label="Verification Code:"
          value={codeInput}
          required
          on:value={(e) => (codeInput = e.detail.value)}
        ></jp-input>
      </div>

      <div class="mt-4">
        <button type="submit" class="button">Confirm</button>
      </div>

      <p class="mt-8 mb-2">Sign in with a different account?</p>
      <button class="underline" type="button" on:click={back}>Back to sign in</button>
    </form>
  {:else}
    <form on:submit|preventDefault={submit} class="w-full shadow-xl p-8 rounded">
      <h2 class="text-lg font-bold mb-4">Sign In</h2>
      <div class="flex flex-col gap-2">
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
        <div class="mt-[-0.5rem]">
          <button type="button" class="underline" on:click={toggleVisible}
            >{type === 'password' ? 'Show password' : 'Hide password'}</button
          >
        </div>
      </div>

      <div class="flex flex-wrap gap-4 mt-4">
        <button class="button" type="submit" class:loading>Sign In</button>
        <GoogleButton label="Sign in with google" onClick={loginGoogle} />
      </div>

      <p class="mt-8 mb-2">Forgot your password?</p>
      <button class="underline" type="button" on:click={() => (rDialog = true)}
        >Reset Password</button
      >
    </form>
  {/if}
</div>

<Dialog bind:showing={rDialog}>
  <h3 class="text-xl md:text-lg mb-4">Forgotten your password?</h3>

  <p class="text-lg md:text-base mb-4">
    Enter your email address and we will send you a link to reset it.
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
