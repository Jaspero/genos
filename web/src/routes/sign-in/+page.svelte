<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Button from '$lib/Button.svelte';
  import Dialog from '$lib/Dialog.svelte';
  import Field from '$lib/Field.svelte';
  import Recaptcha from '$lib/Recaptcha.svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { auth } from '$lib/utils/firebase';
  import { formatEmail } from '$lib/utils/format-emails';
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
    title: 'Sign In',
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

    email = formatEmail(email);

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
    <div>
      <Button href="/sign in" on:click={back}>Back to sign in</Button>
      <p>
        We have sent you a 6-digit verification code to: <!--<b>{resolver.hints[0].phoneNumber}</b>-->
      </p>

      <Field required label="MFA Verification Code:" type="text" bind:value={codeInput} />

      <Button loading={confirmLoader} on:click={confirm}>Confirm and sign in</Button>
    </div>
  {:else}
    <form on:submit|preventDefault={submit} class="w-full shadow-xl p-8 rounded">
      <h2 class="text-lg font-bold mb-4">Sign In</h2>
      <div class="flex flex-col gap-2">
        <jp-input label="Email" type="email" value={email} required autocomplete="email" on:value={e => email = e.detail.value} />
        <jp-input label="Password" {type} value={password} required autocomplete="current-password" on:value={e => password = e.detail.value} />
        <div class="mt-[-0.5rem]">
          <button type="button" class="underline" on:click={toggleVisible}>{type === 'password' ? 'Show password' : 'Hide password'}</button>
        </div>
      </div>

      <div class="flex flex-wrap gap-4 mt-4">
        <button class="button" type="button">Sign In</button>
        <GoogleButton label="Sign in with google" onClick={loginGoogle} />
      </div>

      <p class="mt-8 mb-2">Forgot your password?</p>
      <button class="underline" type="button" on:click={() => (rDialog = true)}>Reset Password</button>
    </form>
  {/if}
</div>

<Dialog bind:showing={rDialog}>
  <h3 class="text-3xl mb-4">Forgotten your password?</h3>

  <form on:submit|preventDefault={resetPassword}>
    <Field label="Email" type="email" placeholder="your@email.com" bind:value={rEmail} required />

    <div class="mt-4">
      <Button type="submit" loading={rLoading}>Reset password</Button>
    </div>
  </form>
</Dialog>

<Recaptcha bind:verify={recaptchaVerify} />
