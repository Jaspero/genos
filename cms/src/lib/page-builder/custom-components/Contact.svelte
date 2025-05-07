<svelte:options customElement={{ tag: 'pb-contact', shadow: 'none' }} />

<script lang="ts">
  import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
  import { writable } from 'svelte/store';
  import {db} from '$lib/utils/firebase';

  let email = '';
  let message = '';

  const submitted = writable(false);
  const error = writable('');

  async function handleSubmit() {
    error.set('');
    if (!email || !message) {
      error.set('Please fill out both fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'contacts'), {
        email,
        message,
        createdAt: serverTimestamp()
      });
      submitted.set(true);
      email = '';
      message = '';
    } catch (err) {
      console.error('Error submitting form:', err);
      error.set('An error occurred while submitting your request.');
    }
  }
</script>

{#if $submitted}
  <p class="text-green-600">Thank you! Your request has been sent.</p>
{:else}
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    {#if $error}
      <p class="text-red-500">{$error}</p>
    {/if}
    <div>
      <label for="email" class="block font-medium">Your email address</label>
      <input
        id="email"
        type="email"
        bind:value={email}
        required
        class="border p-2 w-full rounded"
      />
    </div>
    <div>
      <label for="message" class="block font-medium">What is the nature of your request?</label>
      <textarea
        id="message"
        bind:value={message}
        required
        rows="5"
        class="border p-2 w-full rounded"
      ></textarea>
    </div>
    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
      Submit
    </button>
  </form>
{/if}
