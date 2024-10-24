<script lang="ts">
  import Dialog from '$lib/Dialog.svelte';
  import { auth } from '$lib/utils/firebase';
  import {
    deleteUser,
    updateEmail,
    updatePassword
  } from 'firebase/auth';
  import { goto } from '$app/navigation';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { meta } from '$lib/meta/meta.store';
  import '@jaspero/web-components/dist/input.wc';
  import '@jaspero/web-components/dist/input.css';
  import { renderAlert } from '@jaspero/web-components/dist/render-alert';
  import { FirebaseError } from 'firebase/app';
  import { signOut } from 'firebase/auth';

  meta.set({
    title: 'Settings',
    noIndex: true
  })

  let newPassword = '';
  let repeatPassword = '';
  let email = '';
  let deleteDialog = false;

  async function changePassword() {

    if (newPassword !== repeatPassword) {
      renderAlert({
        state: 'error',
        title: 'Error',
        message: `The provided passwords don't match.`
      });

      return;
    }

    await alertWrapper(
      updatePassword(auth.currentUser!, newPassword),
      'Password updated successfully.',
      '',
      async (error) => {

        if (error instanceof FirebaseError) {

          if (error.code === 'auth/requires-recent-login') {
            await signOut(auth);
            renderAlert(`This action requires recent login. Please sign in again.`);
            goto('/sign-in');
          }
        }
      }
    );

    newPassword = '';
    repeatPassword = '';
  }

  async function changeEmail() {
    
    email = email.trim();

    if (!email) {
      return;
    }

    await alertWrapper(
      updateEmail(auth.currentUser!, email),
      'Email updated successfully.',
      '',
      async (error) => {

        if (error instanceof FirebaseError) {

          if (error.code === 'auth/requires-recent-login') {
            await signOut(auth);
            renderAlert(`This action requires recent login. Please sign in again.`);
            goto('/sign-in');
          }
        }
      }
    );

    email = '';
  }

  const confirmDelete = async () => {
    try {
      if (auth.currentUser) {
        await alertWrapper(deleteUser(auth.currentUser), 'Account deleted successfully.', '', async (error) => {
          if (error instanceof FirebaseError) {
            if (error.code === 'auth/requires-recent-login') {
              await signOut(auth);
              renderAlert(`This action requires recent login. Please sign in again.`);
              goto('/sign-in');
            }
          }
        });
      }
    } catch (error) {
      await goto('/sign-in');
    }
  };
</script>

<main class="flex flex-col gap-4 max-w-[400px]">
  <div class="shadow rounded p-4 w-full">
    <h3 class="mb-2 text-l font-bold">Change Password</h3>
  
    <form class="flex flex-col gap-2" on:submit|preventDefault={changePassword}>
  
      <jp-input label="New Password" type="password" value={newPassword} required on:value={e => newPassword = e.detail.value} />
      <jp-input label="Repeat Password" type="password" value={repeatPassword} required on:value={e => repeatPassword = e.detail.value} />
  
      <div>
        <button type="submit" class="button">Change Password</button>
      </div>
    </form>
  </div>
  <div class="shadow rounded p-4 w-full">
    <h3 class="mb-2 text-l font-bold">Change Email</h3>

    <form class="flex flex-col gap-2" on:submit|preventDefault={changeEmail}>
  
      <jp-input label="New Email" type="email" value={email} required on:value={e => email = e.detail.value} />
  
      <div>
        <button type="submit" class="button">Change Email</button>
      </div>
    </form>
  </div>
  <div class="shadow rounded p-4 w-full">
    <h3 class="mb-2 text-l font-bold text-red-400">Delete Account</h3>
    <p>In case you want to remove your account and any information associated with it from our system. You can do so here.</p>
    <p>Be careful this action is irreversible and all of your personal information will be removed.</p>
    <button type="button" class="button mt-2" on:click={() => deleteDialog = true}>Delete Account</button>
  </div>
</main>

<Dialog bind:showing={deleteDialog}>
  <div class="w-full text-center">
    <h1>Delete account</h1>
    <p>This action will delete your account permanently, are you sure you want to continue?</p>
  </div>
  <div class="flex w-full justify-center">
    <button type="button" class="bg-red-700 p-4 text-white rounded-lg mr-[10px]" on:click={confirmDelete}
      >Yes, delete my account</button
    >
    <button type="button" class="bg-black text-white rounded-lg p-4" on:click={() => deleteDialog = false}>Cancel</button>
  </div>
</Dialog>
