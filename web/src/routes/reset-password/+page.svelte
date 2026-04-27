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

<div class="auth-page">
  <div id="recaptcha-container-id"></div>

  <div class="auth-card">
    <div class="auth-header">
      <img src="/brand/genos-logo-white.svg" alt="Genos" class="auth-logo" />
      <h1>Reset Password</h1>
      <p>Choose a new password for your account</p>
    </div>

    <div class="auth-body">
      <form on:submit|preventDefault={submit}>
        <div class="auth-fields">
          <jp-input
            label="New Password"
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

        <button type="submit" class="auth-btn" class:loading>Reset Password</button>

        <div class="auth-footer-link">
          <span>Don't need to change your password?</span>
          <a href="/sign-in">Back to sign in</a>
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
