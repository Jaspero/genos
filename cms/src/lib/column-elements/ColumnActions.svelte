<svelte:options customElement={{ tag: 'column-actions', shadow: 'none' }} />

<script lang="ts">
  import { page } from '$app/stores';
  import { random } from '@jaspero/utils';
  import { collection as col, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
  import { listAll, ref as storageRef, uploadString } from 'firebase/storage';
  import { onMount } from 'svelte';
  import DropdownButton from '../DropdownButton.svelte';
  import DropdownMenuButton from '../DropdownMenuButton.svelte';
  import { fromStorage } from '../page-builder/utils/from-storage';
  import { alertWrapper } from '../utils/alert-wrapper';
  import { confirmation } from '../utils/confirmation';
  import { db, storage } from '../utils/firebase';

  export let id: string;
  export let collection: string = $page.params.collection;
  export let prefix: string = $page.params.collection;
  export let actions = 'edit,duplicate,delete';
  export let duplicateSubCollections: string | null = null;
  export let duplicateStorage: string | null = null;

  let links: ColumnActionsConfigLink[];
  let buttons: ColumnActionsConfigButton[];

  $: shownActions = actions.split(',');
  $: link = prefix ? [prefix, id].join('/') : id;

  async function deleteItem() {
    confirmation(async ({ confirmed }) => {
      if (!confirmed) {
        return;
      }

      await alertWrapper(
        deleteDoc(doc(db, collection, id)).then(() => {
          const asyncTableEl = document.querySelector('jp-async-table') as any;

          asyncTableEl.removeRow(id);
        }),
        `Item deleted successfully`
      );
    });
  }

  async function duplicate() {
    const subCollections = (duplicateSubCollections && duplicateSubCollections.split(',')) || [];
    const storageDuplicates = (duplicateStorage && duplicateStorage.split(',')) || [];

    const [ref, contentRefs, storageRefs] = await Promise.all([
      getDoc(doc(db, collection, id)),
      subCollections.length
        ? Promise.all(subCollections.map((sub) => getDocs(col(db, collection, id, sub))))
        : Promise.resolve([]),
      storageDuplicates.length
        ? Promise.all(
            storageDuplicates.map(async (sub) => {
              const { items } = await listAll(storageRef(storage, sub));
              const final = await Promise.all(items.map(async (item) => ({
                path: item.fullPath,
                content: await fromStorage(item.fullPath)
              })));

              return final;
            })
          )
        : Promise.resolve([])
    ]);

    const newId = id.split('-')[0] + '-' + random.string(24);
    const toExec: Promise<any>[] = [setDoc(doc(db, collection, newId), ref.data())];

    if (contentRefs.length) {
      contentRefs.forEach((ref, index) =>
        ref.docs.forEach((d) =>
          toExec.push(setDoc(doc(db, collection, newId, subCollections[index], d.id), d.data()))
        )
      );
    }

    if (storageRefs.length) {
      storageRefs.forEach((ref) =>
        ref.forEach((d) =>
          toExec.push(
            uploadString(storageRef(storage, d.path.replace(id, newId)), d.content)
          )
        )
      );
    }

    await alertWrapper(
      Promise.all(toExec).then(() => {
        const asyncTableEl = document.querySelector('jp-async-table') as any;

        asyncTableEl.addRow({
          id: newId,
          ...ref.data()
        });
      }),
      `Item duplicated successfully`
    );
  }

  onMount(() => {
    if (window.columnActions?.[id]) {
      links = window.columnActions[id].links || [];
      buttons = window.columnActions[id].buttons || [];
    }
  });
</script>

<DropdownButton variant="icon">
  {#each links as link}
    <DropdownMenuButton href={link.href}>
      <span class="material-symbols-outlined">{link.icon || 'link'}</span>
      {link.label}
    </DropdownMenuButton>
  {/each}
  {#each buttons as button}
    <DropdownMenuButton on:click={() => button.action(id)}>
      {#if button.icon}
        <span class="material-symbols-outlined">{button.icon || 'link'}</span>
      {/if}
      {button.label}
    </DropdownMenuButton>
  {/each}
  {#each shownActions as action}
    {#if action === 'edit'}
      <DropdownMenuButton href={link}>
        <span class="material-symbols-outlined">edit</span>
        Edit
      </DropdownMenuButton>
    {:else if action === 'duplicate'}
      <DropdownMenuButton on:click={duplicate}>
        <span class="material-symbols-outlined">content_copy</span>
        Duplicate
      </DropdownMenuButton>
    {:else if action === 'delete'}
      <DropdownMenuButton on:click={deleteItem}>
        <span class="material-symbols-outlined">delete</span>
        Delete
      </DropdownMenuButton>
    {/if}
  {/each}
</DropdownButton>
