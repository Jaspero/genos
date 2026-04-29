<script lang="ts">
  import Dialog from '$lib/Dialog.svelte';
  import { auth, db, user } from '$lib/utils/firebase';
  import { deleteUser, updateEmail, updatePassword } from 'firebase/auth';
  import { goto } from '$app/navigation';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { meta } from '$lib/meta/meta.store';
  import { renderAlert } from '@jaspero/web-components/dist/render-alert';
  import { FirebaseError } from 'firebase/app';
  import { signOut } from 'firebase/auth';
  import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
  import { page } from '$app/stores';

  meta.set({
    title: 'Settings',
    noIndex: true
  });

  let newPassword = '';
  let repeatPassword = '';
  let email = '';
  let firstName = '';
  let lastName = '';
  let recoveryEmail = '';
  let institution = '';
  let position = '';
  let institutionAddress = '';
  let deleteDialog = false;

  $: if ($user) {
    firstName = firstName || $user.firstName || '';
    lastName = lastName || $user.lastName || '';
    recoveryEmail = recoveryEmail || $user.recoveryEmail || '';
    institution = institution || $user.institution || '';
    position = position || $user.position || '';
    institutionAddress = institutionAddress || $user.institutionAddress || '';
  }

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
            renderAlert({
              title: 'Error',
              message: `This action requires recent sign in. Please sign in again.`,
              state: 'error'
            });
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

            renderAlert({
              title: 'Error',
              message: `This action requires recent sign in. Please sign in again.`,
              state: 'error'
            });
            goto('/sign-in');
          }
        }
      }
    );

    email = '';
  }

  async function updateProfileDetails() {
    if (!auth.currentUser) {
      return;
    }

    const profile = {
      email: auth.currentUser.email || $user?.email || '',
      name: [firstName.trim(), lastName.trim()].filter(Boolean).join(' ').trim(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      recoveryEmail: recoveryEmail.trim(),
      institution: institution.trim(),
      position: position.trim(),
      institutionAddress: institutionAddress.trim(),
      updatedAt: serverTimestamp()
    };

    await alertWrapper(
      setDoc(doc(db, 'customers', auth.currentUser.uid), profile, { merge: true }),
      'Profile updated successfully.',
      ''
    );

    user.set({
      id: auth.currentUser.uid,
      ...($user || {}),
      ...profile,
      updatedAt: undefined
    } as any);
  }

  const confirmDelete = async () => {
    try {
      if (auth.currentUser) {
        await alertWrapper(
          deleteUser(auth.currentUser),
          'Account deleted successfully.',
          '',
          async (error) => {
            if (error instanceof FirebaseError) {
              if (error.code === 'auth/requires-recent-login') {
                await signOut(auth);
                renderAlert({
                  title: 'Error',
                  message: `This action requires recent sign in. Please sign in again.`,
                  state: 'error'
                });
                goto('/sign-in');
              }
            }
          }
        );
      }
    } catch (error) {
      await goto('/sign-in');
    }
  };
</script>

<main class="mx-auto max-w-[760px] [display:grid] gap-4">
  {#if $page.url.searchParams.get('completeProfile')}
    <section class="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 shadow-sm">
      Please complete your profile details before submitting an order.
    </section>
  {/if}

  <section class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <h3 class="text-lg font-black text-[#032130]">Profile Details</h3>
    <p class="mt-1 text-sm text-slate-500">These details are used for quotations, order administration and MTA preparation.</p>

    <form class="mt-4 [display:grid] gap-3" on:submit|preventDefault={updateProfileDetails}>
      <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="profileFirstName">
        First Name
        <input id="profileFirstName" type="text" bind:value={firstName} required class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]" />
      </label>

      <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="profileLastName">
        Last Name
        <input id="profileLastName" type="text" bind:value={lastName} required class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]" />
      </label>

      <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="profileRecoveryEmail">
        Recovery Email
        <input id="profileRecoveryEmail" type="email" bind:value={recoveryEmail} required class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]" />
      </label>

      <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="profileInstitution">
        Institution
        <input id="profileInstitution" type="text" bind:value={institution} required class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]" />
      </label>

      <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="profilePosition">
        Position in Institution
        <input id="profilePosition" type="text" bind:value={position} required class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]" />
      </label>

      <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="profileInstitutionAddress">
        Institution Address
        <textarea id="profileInstitutionAddress" bind:value={institutionAddress} required rows="3" class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]"></textarea>
      </label>

      <div>
        <button type="submit" class="rounded-lg bg-[#0A415C] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#063044]">Save Profile Details</button>
      </div>
    </form>
  </section>

  <section class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <h3 class="text-lg font-black text-[#032130]">Change Password</h3>
    <p class="mt-1 text-sm text-slate-500">Update your account password.</p>

    <form class="mt-4 [display:grid] gap-3" on:submit|preventDefault={changePassword}>
      <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="newPassword">
        New Password
        <input id="newPassword" type="password" bind:value={newPassword} required class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]" />
      </label>

      <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="repeatPassword">
        Repeat Password
        <input id="repeatPassword" type="password" bind:value={repeatPassword} required class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]" />
      </label>

      <div>
        <button type="submit" class="rounded-lg bg-[#0A415C] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#063044]">Change Password</button>
      </div>
    </form>
  </section>

  <section class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <h3 class="text-lg font-black text-[#032130]">Change Email</h3>
    <p class="mt-1 text-sm text-slate-500">Set a new email address for this account.</p>

    <form class="mt-4 [display:grid] gap-3" on:submit|preventDefault={changeEmail}>
      <label class="[display:grid] gap-1.5 text-sm font-semibold text-slate-700" for="newEmail">
        New Email
        <input id="newEmail" type="email" bind:value={email} required class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-[#0A415C]" />
      </label>

      <div>
        <button type="submit" class="rounded-lg bg-[#0A415C] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#063044]">Change Email</button>
      </div>
    </form>
  </section>

  <section class="rounded-xl border border-red-200 bg-red-50/60 p-5 shadow-sm">
    <h3 class="text-lg font-black text-red-700">Delete Account</h3>
    <p class="mt-2 text-sm text-slate-700">
      In case you want to remove your account and any information associated with it from our
      system. You can do so here.
    </p>
    <p class="mt-2 text-sm text-slate-700">
      Be careful this action is irreversible and all of your personal information will be removed.
    </p>
    <button type="button" class="mt-3 rounded-lg bg-red-700 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-red-800" on:click={() => (deleteDialog = true)}>Delete Account</button>
  </section>
</main>

<Dialog bind:showing={deleteDialog}>
  <div class="w-full text-center">
    <h1>Delete account</h1>
    <p>This action will delete your account permanently, are you sure you want to continue?</p>
  </div>
  <div class="flex w-full justify-center">
    <button
      type="button"
      class="bg-red-700 p-4 text-white rounded-lg mr-[10px]"
      on:click={confirmDelete}>Yes, delete my account</button
    >
    <button
      type="button"
      class="bg-black text-white rounded-lg p-4"
      on:click={() => (deleteDialog = false)}>Cancel</button
    >
  </div>
</Dialog>
