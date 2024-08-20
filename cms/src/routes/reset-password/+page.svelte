<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Button from '$lib/Button.svelte';
  import Field from '$lib/Field.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import SectionTitle from '$lib/SectionTitle.svelte';
  import { CONFIG } from '$lib/consts/config.const';
  import { onMount } from 'svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { confirmPasswordReset } from 'firebase/auth';
  import { auth } from '$lib/utils/firebase';
  import { renderAlert } from '@jaspero/web-components/dist/render-alert.js';

  let password = '';
  let repeatPassword = '';
  let loading = false;
  let oobCode: string;

  onMount(async () => {
    const { searchParams } = $page.url;

    if (searchParams.has('oobCode')) {
      oobCode = searchParams.get('oobCode') as string;
    } else {
      goto('/dashboard');
      return;
    }
  });

  async function changePassword() {
    if (password !== repeatPassword) {
      renderAlert({
        state: 'error',
        title: 'Error',
        message: `The provided passwords don't match.`
      });
      return;
    }

    if (loading) {
      return;
    }

    loading = true;

    await alertWrapper(
      confirmPasswordReset(auth, oobCode, password),
      'Password changed successfully. You can now log in.',
      'There was a problem changing your password. Please try again.',
      () => {
        loading = false;
      }
    );

    loading = false;
    goto('/');
  }
</script>

<div class="flex items-center">
  <div class="flex flex-1">
    <Grid>
      <GridCol span="2" />

      <GridCol span="12" spanxl="8">
        <div class="flex flex-col gap-4">
          <SectionTitle>Reset password</SectionTitle>
          <p>Please provide a new password.</p>
          <form class="flex flex-col gap-4 border-b pb-8" on:submit|preventDefault={changePassword}>
            <Field required label="Password" type="password" minlength={6} bind:value={password} />
            <Field required label="Repeat Password" type="password" bind:value={repeatPassword} />
            <div>
              <Button variant="filled" color="secondary" type="submit" {loading}>Submit</Button>
            </div>
          </form>
        </div>
      </GridCol>

      <GridCol span="2" />
    </Grid>
  </div>

  <img
    src="/images/reset-password.png"
    alt="Reset password"
    class="hidden lg:block h-screen max-w-md object-cover"
  />
</div>

<svelte:head>
  <title>Reset Password - {CONFIG.title}</title>
</svelte:head>
