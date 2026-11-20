<svelte:options customElement={{ tag: 'pb-submit', shadow: 'none' }} />

<script lang="ts">
  import { goto } from '$app/navigation';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { language } from '$lib/stores/language';

  /** The CMS default messages are English; show them in Croatian on Croatian pages. */
  const HR_MESSAGES: Record<string, string> = {
    'Form submitted successfully!': 'Poruka je uspješno poslana!',
    'There was an error submitting the form. Please try again later.': 'Slanje poruke nije uspjelo. Pokušajte ponovno kasnije.'
  };

  function localized(message: string) {
    return $language === 'hr' ? HR_MESSAGES[message] || message : message;
  }

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

      // Firebase and Luxon are loaded when a form is sent, so pages with a form do not download them up front.
      const save = (async () => {
        const [{ addDoc, collection }, { db }, { DateTime }] = await Promise.all([
          import('firebase/firestore'),
          import('$lib/utils/firebase'),
          import('luxon')
        ]);

        return addDoc(collection(db, 'forms', form, 'form-responses'), {
          createdOn: DateTime.now().toUTC().toISO(),
          ...data
        });
      })();

      try {
        await alertWrapper(save, localized(success), localized(error));
      } catch {
        // The error is already shown and announced; keep what was typed so it can be sent again.
        loading = false;
        return;
      }

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

<button class="button" type="submit" bind:this={button} {id} class:loading aria-disabled={loading}>
  {label}
</button>
