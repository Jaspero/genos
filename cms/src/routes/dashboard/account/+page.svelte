<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Card from '$lib/Card.svelte';
  import Dialog from '$lib/Dialog.svelte';
  import Field from '$lib/Field.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { auth, authenticated, user } from '$lib/utils/firebase';
  import { renderAlert } from '@jaspero/web-components/dist/render-alert.js';
  import {
    PhoneAuthProvider,
    PhoneMultiFactorGenerator,
    RecaptchaVerifier,
    multiFactor,
    sendEmailVerification,
    updatePassword,
    type User
  } from 'firebase/auth';
  import { onMount } from 'svelte';

  let passwordDialog = false;

  const newPass = {
    password: '',
    passwordConfirm: ''
  };
  let showPassword = false;

  let recaptchaVerifier: RecaptchaVerifier;
  let openRemoveMfaDialog = false;
  let verificationId: string;
  let phoneCode: string;
  let phoneNumber: string;
  let disableBtn = false;
  let openMfaComponent = false;
  let connectLoader = false;
  let confirmLoader = false;
  let disableLoader = false;
  let passwordLoader = false;
  let userEnrolled = false;
  let enrolledFactors: any;
  let getMethods = true;

  $: disableBtn = !phoneNumber;

  $: if (auth && getMethods) {
    getEnrolledMfaMethods();
    userEnrolled = enrolledFactors.length > 0;
  }

  function getEnrolledMfaMethods() {
    enrolledFactors = multiFactor(auth.currentUser as User).enrolledFactors;
    getMethods = false;
    return;
  }

  async function changePassword() {
    if (newPass.password !== newPass.passwordConfirm) {
      renderAlert({
        title: 'Error',
        state: 'error',
        message: `Provided passwords don't match.`
      });
      return;
    }

    passwordLoader = true;

    try {
      await alertWrapper(
        updatePassword(auth.currentUser as User, newPass.password),
        'Password changed successfully',
        'Error',
        () => {
          console.log('Error');
          passwordLoader = false;
        }
      );

      passwordLoader = false;
      passwordDialog = false;
    } catch (e) {
      console.error(e);
    }
  }

  async function disableMfa(event: MouseEvent) {
    event.preventDefault();

    disableLoader = true;

    const user = auth.currentUser as User;

    if (user) {
      await alertWrapper(
        multiFactor(user).unenroll(enrolledFactors[0]),
        '2FA disabled successfully',
        'Error',
        () => {
          console.log('error');
          disableLoader = false;
        }
      );
      userEnrolled = false;
      openRemoveMfaDialog = false;
      disableLoader = false;
    }
  }

  async function openMfa() {
    connectLoader = true;

    const session = await multiFactor($authenticated as User).getSession();

    const phoneInfoOptions = {
      phoneNumber,
      session
    };

    const phoneAuthProvider = new PhoneAuthProvider(auth);

    await alertWrapper(
      phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier),
      'Verification code sent successfully',
      'Error',
      async (error) => {
        if (error.code === 'auth/unverified-email') {
          await alertWrapper(
            sendEmailVerification($authenticated as User, {
              url: `${location.origin}/verify-email`
            }),
            'We sent an email verification link to your email address. Please verify your email before enabling MFA.',
            'Error',
            () => {
              connectLoader = false;
            }
          );
        }

        connectLoader = false;
      }
    ).then((res) => {
      verificationId = res;
    });
    openMfaComponent = true;
    connectLoader = false;
  }

  async function verifyPhone() {
    confirmLoader = true;
    const cred = PhoneAuthProvider.credential(verificationId, phoneCode);
    const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);

    await alertWrapper(
      multiFactor($authenticated as User).enroll(multiFactorAssertion, phoneNumber),
      '2FA enabled successfully',
      'Error',
      () => (confirmLoader = false)
    );

    openMfaComponent = false;
    userEnrolled = true;
    getMethods = true;
    confirmLoader = false;
  }

  onMount(() => {
    recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container-id', {
      size: 'invisible'
    });
  });
</script>

{#if $user}
  <Grid>
    <GridCol span="12" spanlg="6">
      <Card>
        <svelte:fragment slot="title">Account security</svelte:fragment>

        <p class="mb-4">Time to improve account security by changing your password?</p>

        <Button variant="outlined" color="secondary" on:click={() => (passwordDialog = true)}
          >Change your password
        </Button>
      </Card>
    </GridCol>

    <GridCol span="12" spanlg="6">
      <Card>
        <svelte:fragment slot="title">Connect 2FA</svelte:fragment>
        {#if userEnrolled}
          <p>2FA is <b>enabled</b>, it is recommended to keep this feature enabled.</p>
          <div class="mt-3">
            <Button variant="filled" color="warn" on:click={() => (openRemoveMfaDialog = true)}>
              Disable 2FA
            </Button>
          </div>
        {:else}
          <Field label="Phone Number" placeholder="+123456789123" bind:value={phoneNumber} />
          <div class="mb-4"></div>
          <p>2FA is <b>disabled</b>, it is recommended to enable this feature.</p>
          <div class="mb-4"></div>
          <Button
            variant="filled"
            color="primary"
            disabled={disableBtn}
            on:click={openMfa}
            loading={connectLoader}
          >
            Connect 2FA
          </Button>
        {/if}
      </Card>
    </GridCol>
  </Grid>
{/if}

<div id="recaptcha-container-id"></div>

<Dialog bind:open={openMfaComponent} fixed>
  <form on:submit|preventDefault={verifyPhone}>
    <p class="mb-4">We have sent you a 6-digit verification code to your phone number.</p>
    <Field label="2FA Verification Code:" bind:value={phoneCode} />
    <div id="confirm-button">
      <Button variant="filled" color="primary" type="submit" loading={confirmLoader}>
        Confirm
      </Button>
    </div>
  </form>
</Dialog>

<Dialog bind:open={openRemoveMfaDialog}>
  <slot slot="title">Are you sure you want to disable your 2FA?</slot>

  <div>Removing 2FA will make your account less secure.</div>

  <slot slot="actions">
    <Button on:click={disableMfa} variant="filled" color="warn" loading={disableLoader}>
      Confirm
    </Button>
  </slot>
</Dialog>

<Dialog bind:open={passwordDialog}>
  <slot slot="title">Editing password</slot>

  <form class="flex flex-col gap-4" id="password_form" on:submit|preventDefault={changePassword}>
    {#if showPassword}
      <Field required label="Password" type="text" bind:value={newPass.password} />
    {:else}
      <Field required label="Password" type="password" bind:value={newPass.password} />
    {/if}
    {#if showPassword}
      <Field required label="Repeat password" type="text" bind:value={newPass.passwordConfirm} />
    {:else}
      <Field
        required
        label="Repeat password"
        type="password"
        bind:value={newPass.passwordConfirm}
      />
    {/if}
    <div>
      <Button type="button" color="secondary" on:click={() => (showPassword = !showPassword)}
        >{showPassword ? 'Hide' : 'Show'} password
      </Button>
    </div>
  </form>

  <slot slot="actions">
    <Button
      variant="filled"
      color="secondary"
      type="submit"
      form="password_form"
      loading={passwordLoader}>Save</Button
    >
  </slot>
</Dialog>

<svelte:head>
  <title>Account - Shop CMS</title>
</svelte:head>

<style>
  #confirm-button {
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
</style>
