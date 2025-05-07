<svelte:options customElement={{ tag: 'pb-contact', shadow: 'none' }} />

<script lang="ts">
  import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
  import { writable } from 'svelte/store';
  import {db} from '$lib/utils/firebase';
  import {language} from '$lib/stores/language';

  let name = '';
  let email = '';
  let message = '';

  const submitted = writable(false);
  const error = writable('');

  async function handleSubmit() {
    error.set('');
    if (!name || !email || !message) {
      error.set('Please fill out all fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'contacts'), {
        name,
        email,
        message,
        createdAt: serverTimestamp()
      });
      submitted.set(true);
      name = '';
      email = '';
      message = '';
    } catch (err) {
      console.error('Error submitting form:', err);
      error.set('An error occurred while submitting your request.');
    }
  }
</script>

<div class="grid grid-small spacer">
  <div class="gc-12 contact-section">
    <div class="contact-section-left">
      <h2>{$language === 'en' ? 'Get in touch' : 'Kontaktirajte nas'}</h2>
    </div>
    <div class="contact-section-right">
      <form on:submit|preventDefault={handleSubmit} class="space-y-4">
        {#if $error}
          <p class="text-red-500">{$error}</p>
        {/if}
        <div>
          <label class="custom-field custom-field-small">
            <span class="custom-field-label">{$language === 'en' ? 'Your email address' : 'Vaša email adresa'}</span>
            <input type="email" placeholder="{$language === 'en' ? 'example' : 'primjer'}@email.com" class="custom-field-input" bind:value={email} required>
          </label>
        </div>
        <div>
          <label class="custom-field custom-field-large">
            <span class="custom-field-label">{$language === 'en' ? 'What is your request?' : 'Koji je vaš zahtjev?'}</span>
            <textarea placeholder="{$language === 'en' ? 'I\'m interested in' : 'Zanima me...'}" cols="30" rows="5" class="custom-field-input" required bind:value={message}></textarea>
          </label>
        </div>
        <button type="submit" class="button-filled">
          {$language === 'en' ? 'Submit request' : 'Pošalji zahtjev'}
        </button>
      </form>
    </div>
  </div>
  <div class="gc-12 contact-section spacer">
    <div class="contact-section-left">
      <h2>Contact info</h2>
    </div>
    <div class="contact-section-right">
      <div>
        <span class="span-label">Email:</span>
        <div class="contact-links">
          <a href="mailto:info@genos.hr">info@genos.hr</a>
        </div>
      </div>
      <div>
        <span class="span-label">{$language === 'en' ? 'Phone' : 'Telefon'}</span>
        <div class="contact-links">
          <a href="tel:+38516471181">+385 1 647 1181</a>
          <a href="tel:+38516471182">+385 1 647 1182</a>
        </div>
      </div>
      <div>
        <span class="span-label">Fax:</span>
        <div class="contact-links">
          <a href="+38516471169">+385 1 647 1169</a>
        </div>
      </div>
    </div>
  </div>
  <div class="gc-12 contact-section spacer">
    <div class="contact-section-left">
      <h2>{$language === 'en' ? 'Our locations' : 'Naše lokacije'}</h2>
    </div>
    <div class="contact-section-right">
      <div class="flex flex-col gap-2">
        <h3>Zagreb</h3>
        <p>Borongajska cesta 83h, 10000 Zagreb</p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.043093962708!2d16.0378828529667!3d45.81039533126865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47667878cfccc679%3A0xcd44853685675d18!2sBIOCentar!5e0!3m2!1sen!2shr!4v1746530710947!5m2!1sen!2shr" width="600" height="450" class="map-iframe" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="flex flex-col gap-2 mt-14">
        <h3>Osijek</h3>
        <p>Drniška 9, 31000 Osijek</p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d391.6209008573307!2d18.70494826164722!3d45.54262289695526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce6329d240dbd%3A0x3ba7ee8572ac6c1f!2sDrni%C5%A1ka%20ul.%209%2C%2031000%2C%20Osijek!5e0!3m2!1shr!2shr!4v1746531428409!5m2!1shr!2shr" width="600" height="450" class="map-iframe" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</div>