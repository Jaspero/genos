<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import '@jaspero/web-components/dist/input.wc';
  import '@jaspero/web-components/dist/input.css';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { auth } from '$lib/utils/firebase';
  import { renderAlert } from '@jaspero/web-components/dist/render-alert';
  import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
  import { onMount } from 'svelte';
  import { meta } from '$lib/meta/meta.store';
  import Recaptcha from '$lib/Recaptcha.svelte';

  meta.set({
    title: 'Reset Password',
    noIndex: true
  });

  const form = {
    password: '',
    repeatPassword: ''
  };

  let loading = false;
  let code: string;
  let recaptchaVerify: () => Promise<string>;

  onMount(() => {
    const { searchParams } = $page.url;
    code = searchParams.get('oobCode') as string;

    if (!code) {
      goto('/login');
    }
  });

  async function submit() {
    if (form.password !== form.repeatPassword) {
      return renderAlert({ title: 'Error', message: 'Passwords do not match!', state: 'error' });
    }

    loading = true;

    try {
      await recaptchaVerify();
    } catch {
      loading = false;
      return;
    }

    await alertWrapper(
      verifyPasswordResetCode(auth, code).then(() =>
        confirmPasswordReset(auth, code, form.password)
      ),
      'Password reset successful. You can now sign in.',
      'Your reset code is invalid or expired. Please visit the login page and request password reset again.',
      () => (loading = false)
    );

    loading = false;

    goto('/my-account');
  }
</script>

<div class="w-[500px] mx-auto p-12 flex justify-center items-center">
  <div id="recaptcha-container-id"></div>

  <form on:submit|preventDefault={submit} class="w-full shadow-xl p-8 rounded">
    <h2 class="text-lg font-bold mb-4">Reset Password</h2>

    <div class="flex flex-col gap-2">
      <jp-input
        label="Password"
        required
        type="password"
        value={form.password}
        on:value={(e) => (form.password = e.detail.value)}
      ></jp-input>
      <jp-input
        label="Repeat Password"
        required
        type="password"
        value={form.repeatPassword}
        on:value={(e) => (form.repeatPassword = e.detail.value)}
      ></jp-input>
    </div>

    <div class="mt-4">
      <button type="submit" class="button" class:loading>Submit</button>
    </div>

    <p class="mt-8 mb-2">You don't need to change your password?</p>
    <a class="underline" href="/sign-in">Back to sign in</a>
  </form>
</div>

<Recaptcha bind:verify={recaptchaVerify} />
