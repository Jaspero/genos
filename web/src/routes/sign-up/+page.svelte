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
    const { searchParams } = $page.url;
    goto(
      searchParams.has('forward') ? decodeURIComponent(searchParams.get('forward') as string) : '/'
    );
  }
</script>

<div class="w-[500px] mx-auto p-12 flex justify-center items-center">
  <div id="recaptcha-container-id"></div>

  <form on:submit|preventDefault={signUp} class="w-full shadow-xl p-8 rounded">
    <h2 class="text-lg font-bold mb-4">Sign up</h2>

    <div class="flex flex-col gap-2">
      <GoogleButton onClick={signupGoogle} label="Sign up with Google" />

      <p>Or sign up with email instead</p>

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
        autocomplete="new-password"
        on:value={(e) => (password = e.detail.value)}
      ></jp-input>
      <jp-input
        label="Confirm Password"
        {type}
        value={passwordConfirm}
        required
        autocomplete="repeat-password"
        on:value={(e) => (passwordConfirm = e.detail.value)}
      ></jp-input>
      <div class="mt-[-0.5rem]">
        <button type="button" class="underline" on:click={toggleVisible}
          >{type === 'password' ? 'Show password' : 'Hide password'}</button
        >
      </div>
    </div>

    <div class="mt-4">
      <button class="button" type="submit" class:loading>Sign up</button>
    </div>
  </form>
</div>

<Recaptcha bind:verify={recaptchaVerify} />
