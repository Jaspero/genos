<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Button from '$lib/Button.svelte';
  import Field from '$lib/Field.svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { auth } from '$lib/utils/firebase';
  import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
  import { onMount } from 'svelte';

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
      // return notification.set({
      //   content: 'Passwords do not match!',
      //   type: 'error'
      // });
    }

    loading = true;

    try {
      await recaptchaVerify();
    } catch {
      loading = false;
      return;
    }

    await alertWrapper(
      verifyPasswordResetCode(auth, code),
      '',
      'Your reset code is invalid or expired. Please visit the login page and request password reset again.',
      () => (loading = false)
    );

    await alertWrapper(
      confirmPasswordReset(auth, code, form.password),
      'Password reset was successful. You are now signed in.',
      '',
      () => (loading = false)
    );

    goto('/dashboard');

    loading = false;
  }
</script>

<form on:submit|preventDefault={() => submit()}>
  <Field
    type="password"
    placeholder="Password"
    label="Password"
    bind:value={form.password}
    required
  />
  <Field
    label="Repeat Password"
    type="password"
    placeholder="Repeat Password"
    bind:value={form.repeatPassword}
    required
  />

  <div class="ta-center">
    {#if loading}
      Loading
    {:else}
      <Button type="submit">Reset</Button>
    {/if}
  </div>
</form>

<svelte:head>
  <title>Reset Password - Jaspero</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>
