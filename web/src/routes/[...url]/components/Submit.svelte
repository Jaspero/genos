<svelte:options customElement={{ tag: 'pb-submit', shadow: 'none' }} />

<script lang="ts">
  import { addDoc, collection } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase';
  import { goto } from '$app/navigation';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { DateTime } from 'luxon';

  export let id: string | null = null;
  export let label: string;
  export let form: string;
  export let redirect = '';
  export let success: string;
  export let error: string;

  let button: HTMLButtonElement;
  let connected = false;
  let loading = false;

  $: if (!connected && button) {
    bindForm();
  }

  function bindForm() {
    connected = true;

    const formEl = button?.closest('form') as HTMLFormElement;

    formEl.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (loading) {
        return;
      }

      loading = true;

      const formData = new FormData(formEl);
      const data = Object.fromEntries(formData);

      await alertWrapper(
        addDoc(collection(db, 'forms', form, 'form-responses'), {
          createdOn: DateTime.now().toUTC().toISO(),
          ...data
        }),
        success,
        error
      );

      if (redirect) {
        if (redirect.startsWith('http')) {
          window.open(redirect, '_self');
        } else {
          goto(redirect);
        }
      }

      formEl.reset();

      loading = false;
    });
  }
</script>

<button class="button" type="submit" bind:this={button} {id} class:loading>
  {label}
  <div class="spin-wrapper">
    <span class="spinner"></span>
  </div>
</button>
