<script lang="ts">
  import { httpsCallable } from 'firebase/functions';
  import Button from '../Button.svelte';
  import Dialog from '../Dialog.svelte';
  import Field from '../Field.svelte';
  import { alertWrapper } from '../utils/alert-wrapper';
  import { functions } from '../utils/firebase';
  import { changeEmail } from './change-email.store';

  let id: string;
  let email: string;
  let collection: string | undefined;
  let open = false;
  let loading = false;

  $: if ($changeEmail) {
    email = '';
    collection = $changeEmail.collection;
    id = $changeEmail.id;
    open = true;
  } else {
    open = false;
  }

  async function save() {
    await alertWrapper(
      httpsCallable(
        functions,
        'updateUser'
      )({
        id,
        data: { email, collection }
      }),
      'Email updated successfully',
      undefined,
      () => {
        loading = false;
      }
    );

		loading = false;
		open = false;
  }
</script>

<Dialog bind:open onClose={() => changeEmail.set(null)}>
  <svelte:fragment slot="title">Change Email</svelte:fragment>

  <form id="change-email" on:submit|preventDefault={save}>
    <Field required label="New Email" type="email" bind:value={email} />
  </form>

  <slot slot="actions">
    <Button variant="filled" color="primary" type="submit" form="change-email" {loading}>
      Save
    </Button>
  </slot>
</Dialog>
