<script lang="ts">
  import { renderAlert } from '@jaspero/web-components/dist/render-alert';
  import { httpsCallable } from 'firebase/functions';
  import { onDestroy } from 'svelte';
  import Button from '../Button.svelte';
  import Dialog from '../Dialog.svelte';
  import Field from '../Field.svelte';
  import { alertWrapper } from '../utils/alert-wrapper';
  import { functions } from '../utils/firebase';
  import { changePassword } from './change-password.store';

  let password: string;
  let repeatPassword: string;
  let id: string;
  let collection: string | undefined;
  let open = false;
  let loading = false;
  let passwordType: 'password' | 'text' = 'password';

  $: if ($changePassword) {
    id = $changePassword.id;
    collection = $changePassword.collection;
    password = '';
    repeatPassword = '';
    open = true;
  } else {
    open = false;
  }

  async function save() {
    if (password !== repeatPassword) {
      renderAlert({
        title: "Provided passwords don't match",
        state: 'error'
      });
      return;
    }

    loading = true;

    await alertWrapper(
      httpsCallable(
        functions,
        'updateUser'
      )({
        id,
        data: { password, collection }
      }),
      'Password updated successfully',
      undefined,
      () => {
        loading = false;
      }
    );

    loading = false;
    open = false;
    changePassword.set(null);
  }

  onDestroy(() => {
    if ($changePassword) {
      changePassword.set(null);
    }
  });
</script>

<Dialog bind:open onClose={() => changePassword.set(null)}>
  <svelte:fragment slot="title">Change Password</svelte:fragment>

  <form id="change-password" on:submit|preventDefault={save}>
    <Field required label="New Password" type={passwordType} bind:value={password} />
    <Field required label="Repeat Password" type={passwordType} bind:value={repeatPassword} />

    <div class="mt-1">
      <Button
        variant="ghost"
        on:click={() => (passwordType = passwordType === 'password' ? 'text' : 'password')}
      >
        Show / Hide Password
      </Button>
    </div>
  </form>

  <slot slot="actions">
    <Button variant="filled" color="primary" type="submit" form="change-password" {loading}>
      Save
    </Button>
  </slot>
</Dialog>
