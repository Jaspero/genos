<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import FormModule from '$lib/FormModule.svelte';
  import { db } from '$lib/utils/firebase';
  import { deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore';

  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Button from '$lib/Button.svelte';
  import Card from '$lib/Card.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { confirmation } from '$lib/utils/confirmation';
  import { urlSegments } from '$lib/utils/url-segments';
  import { CONFIG } from '../consts/config.const';
  import { CommonEditFormPageData, CommonNewFormPageData } from './common-form-page';

  export let data: CommonNewFormPageData | CommonEditFormPageData;
  export let submit = async () => {
    saveLoading = true;

    let id = data.id;

    await formModule.render.save(id);

    if (data.preSubmit) {
      await data.preSubmit(id, data.value);
    }

    if (data instanceof CommonEditFormPageData) {
      if (data.preEdit) {
        await data.preEdit(id, data.value);
      }

      await alertWrapper(
        data.submit ? data.submit(data.snap.ref, data.value) : updateDoc(data.snap.ref, data.value),
        'Document updated successfully',
        undefined,
        () => (saveLoading = false)
      );
    } else {
      if (data.preCreate) {
        id = (await data.preCreate(id, data.value)) || id;
      }

      delete data.value.id;

      await alertWrapper(
        data.submit
          ? data.submit(data.collection, data.id, data.value)
          : setDoc(doc(db, data.collection, id), data.value),
        'Document created successfully',
        undefined,
        () => (saveLoading = false)
      );
    }

    if (data.postSubmit) {
      await data.postSubmit(id, data.value);
    }

    saveLoading = false;

    goto(back);
  };
  export let deleteItem = async () => {
    confirmation(async ({ confirmed }) => {
      if (!confirmed) {
        return;
      }

      await alertWrapper(deleteDoc(doc(db, data.collection, data.id)), `Item deleted successfully`);

      goto(back);
    });
  };

  $: segments = urlSegments($page.url.pathname);
  $: back = $page.url.pathname.split('/').slice(0, -1).join('/');

  let saveLoading = false;
  let formModule: FormModule;
</script>

<div class="save-menu">
  {#if data instanceof CommonEditFormPageData}
    <Button type="button" color="warn" on:click={deleteItem}>Delete</Button>
  {/if}
  <div class="flex-1"></div>
  <Button variant="ghost" href={back}>Cancel</Button>
  <Button type="submit" form="form" variant="filled" loading={saveLoading}>Save</Button>
</div>

<form id="form" class="relative pb-16" on:submit|preventDefault={submit}>
  <Grid>
    <GridCol span="12">
      <Card>
        <slot slot="title"
          >{data instanceof CommonEditFormPageData
            ? `Editing ${data.value[data.editKey]}`
            : `New ${data.singularName}`}</slot
        >

        <slot slot="subtitle">
          <Breadcrumbs
            {segments}
            title={data instanceof CommonEditFormPageData
              ? data.value[data.editKey]
              : `New ${data.singularName}`}
          />
        </slot>

        <div class="flex flex-col gap-6">
          {#if data.form.views}
            <FormModule
              bind:this={formModule}
              onValueChange={data.onValueChange}
              views={data.form.views}
              initialValue={data instanceof CommonNewFormPageData ? data.initialValue : null}
              bind:value={data.value}
            />
          {:else}
            <FormModule
              bind:this={formModule}
              onValueChange={data.onValueChange}
              initialValue={data instanceof CommonNewFormPageData ? data.initialValue : null}
              items={data.form}
              bind:value={data.value}
            />
          {/if}
        </div>
      </Card>
    </GridCol>
  </Grid>
</form>

<svelte:head>
  <title>{data.name} - {CONFIG.title}</title>
</svelte:head>
