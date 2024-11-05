<script lang="ts">
  import { renderAlert } from '@jaspero/web-components/dist/render-alert';
  import { httpsCallable } from 'firebase/functions';
  import { onDestroy } from 'svelte';
  import Button from '../Button.svelte';
  import Dialog from '../Dialog.svelte';
  import FormModule from '../FormModule.svelte';
  import { alertWrapper } from '../utils/alert-wrapper';
  import { functions } from '../utils/firebase';
  import { sendSampleEmail } from './send-sample-email.store';

  const items = [
    {
      component: 'jp-chips',
      field: '/emails',
      options: {
        label: 'Emails',
        required: true
      }
    },
    {
      component: 'jp-code-editor',
      field: '/context',
      options: {
        label: 'Context',
        mode: 'json'
      }
    }
  ];

  let templateId: string;
  let open = false;
  let value: {
    emails: string[];
    context: string;
  };
  let loading = false;

  $: if ($sendSampleEmail) {
    openDialog($sendSampleEmail.id);
  } else {
    open = false;
  }

  async function openDialog(id: string) {
    templateId = id;
    value = {
      emails: [],
      context: '{}'
    };
    open = true;
  }

  async function send() {
    let { emails, context } = value;

    if (!emails.length) {
      renderAlert({ title: 'Error', message: 'Please enter at least one email', state: 'error' });
      return;
    }

    try {
      context = JSON.parse(context);
    } catch (e: any) {
      renderAlert({ title: 'Error', message: 'Context is not valid JSON', state: 'error' });
      return;
    }

    loading = true;

    await alertWrapper(
      httpsCallable(
        functions,
        'sendSampleEmail'
      )({
        templateId,
        emails,
        context
      }),
      'Sample email sent',
      '',
      () => (loading = false)
    );

    loading = false;
  }

  onDestroy(() => {
    if (open) {
      sendSampleEmail.set(null);
    }
  });
</script>

<Dialog bind:open onClose={() => sendSampleEmail.set(null)}>
  <svelte:fragment slot="title">Send Sample Email</svelte:fragment>

  <form id="send" on:submit|preventDefault={send}>
    <FormModule {items} bind:value />
  </form>

  <slot slot="actions">
    <Button variant="filled" color="primary" type="submit" form="send" {loading}>Send</Button>
  </slot>
</Dialog>
