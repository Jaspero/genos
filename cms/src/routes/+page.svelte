<script lang="ts">
  import Field from '$lib/Field.svelte';
  import SectionTitle from '$lib/SectionTitle.svelte';
  import Button from '$lib/Button.svelte';
  import Dialog from '$lib/Dialog.svelte';
  import { goto } from '$app/navigation';
  import {
    getMultiFactorResolver,
    GoogleAuthProvider,
    PhoneAuthProvider,
    PhoneMultiFactorGenerator,
    RecaptchaVerifier,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup
  } from 'firebase/auth';
  import { auth } from '$lib/utils/firebase';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { renderAlert } from '@jaspero/web-components/dist/render-alert.js';
  import { onMount } from 'svelte';
  import Loader from '$lib/Loader.svelte';
  import { CONFIG } from '../lib/consts/config.const';
  import GoogleButton from '../lib/GoogleButton.svelte';

  const redirectLink = '/dashboard';

  let loading = false;
  let email = '';
  let password = '';
  let resetLoading = false;
  let rEmail = '';
  let showPassword = false;
  let resetPasswordDialog: boolean = false;
  let recaptchaVerifier: any;
  let showCodeInput = false;
  let confirmLoader = false;
  let codeInput: string;
  let resolver: any;
  let verId: string;

  async function login() {
    loading = true;

    await alertWrapper(
      signInWithEmailAndPassword(auth, email, password),
      '',
      (e: any) => {
        if (e.code == 'auth/multi-factor-auth-required') {
          resolver = getMultiFactorResolver(auth, e);
          if (resolver.hints) {
            const phoneInfoOptions = {
              multiFactorHint: resolver.hints[0],
              session: resolver.session
            };
            const phoneAuthProvider = new PhoneAuthProvider(auth);
            return phoneAuthProvider
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
      goto(redirectLink);
    }, 500);
  }

  async function resetPassword() {
    rEmail = rEmail.trim().toLowerCase();

    if (!rEmail) {
      return;
    }

    resetLoading = true;

    sendPasswordResetEmail(auth, rEmail, { url: `${location.origin}/reset-password` }).finally(
      () => {
        renderAlert({
          state: 'success',
          title: 'Success',
          message: 'A password reset link has been sent to your email.'
        });

        rEmail = '';
        resetLoading = false;
        resetPasswordDialog = false;
      }
    );
  }

  async function logInGoogle() {
    await alertWrapper(signInWithPopup(auth, new GoogleAuthProvider()), '', (e: any) => {
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
            });
        }
      }
    });

    setTimeout(() => {
      goto(redirectLink);
    }, 500);
  }

  async function confirm() {
    confirmLoader = true;
    const cred = PhoneAuthProvider.credential(verId, codeInput);

    const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);

    await alertWrapper(
      resolver.resolveSignIn(multiFactorAssertion),
      '',
      '',
      () => (confirmLoader = false)
    );

    setTimeout(() => {
      goto(redirectLink);
    }, 1000);
  }

  function back() {
    showCodeInput = false;
    codeInput = '';
  }

  onMount(() => {
    recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container-id', {
      size: 'invisible'
    });
  });
</script>

<div id="recaptcha-container-id"></div>
<div class="flex items-center h-screen">
  <img
    src="/images/login-bg.png"
    alt="Login"
    class="hidden lg:block h-screen max-w-md object-cover"
  />

  <div class="flex flex-1 justify-center">
    {#if showCodeInput}
      <form on:submit|preventDefault={confirm}>
        <Button variant="outlined" color="warn" href="/" on:click={back}>Back to login</Button>
        <div class="mt-12 mb-24 w-full">
          We have sent you a 6-digit verification code to:
          <b>{resolver.hints[0].phoneNumber}</b>
        </div>
        <Field required label="2FA Verification Code:" type="text" bind:value={codeInput} />
        <div class="m-5"></div>
        <Button variant="filled" color="primary" type="submit">
          {#if confirmLoader}
            <Loader />
          {:else}
            Confirm and sign in
          {/if}
        </Button>
        <div style="margin-bottom: 340px;"></div>
      </form>
    {:else}
      <div class="flex flex-col gap-4 w-[400px] max-w-full">
        <SectionTitle>Log in</SectionTitle>
        <form class="flex flex-col gap-4 border-b pb-8" on:submit|preventDefault={login}>
          <Field required label="Email" type="email" bind:value={email} />
          {#if showPassword}
            <Field required label="Password" type="text" bind:value={password}>
              <button
                slot="hint"
                type="button"
                class="underline"
                on:click={() => (showPassword = !showPassword)}
              >
                Hide password
              </button>
            </Field>
          {:else}
            <Field required label="Password" type="password" bind:value={password}>
              <button
                slot="hint"
                type="button"
                class="underline"
                on:click={() => (showPassword = !showPassword)}
              >
                Show password
              </button>
            </Field>
          {/if}
          <div class="flex items-center gap-4">
            <Button variant="filled" color="secondary" type="submit" {loading}>Log in</Button>
            <GoogleButton label="Log in with Google" onClick={logInGoogle} />
          </div>
        </form>
        <div class="mt-4">
          <p class="mb-2">Forgot your password?</p>
          <button type="button" class="underline" on:click={() => (resetPasswordDialog = true)}
            >Reset password
          </button>
        </div>
      </div>
    {/if}
  </div>
</div>

<Dialog bind:open={resetPasswordDialog}>
  <slot slot="title">Forgotten your password?</slot>
  <form id="reset-password" on:submit|preventDefault={resetPassword}>
    <Field label="Email" type="email" placeholder="your@email.com" required bind:value={rEmail} />
  </form>

  <slot slot="actions">
    <Button
      variant="filled"
      color="secondary"
      type="submit"
      form="reset-password"
      loading={resetLoading}
      >Reset password
    </Button>
  </slot>
</Dialog>

<svelte:head>
  <title>Log in - {CONFIG.title}</title>
</svelte:head>
