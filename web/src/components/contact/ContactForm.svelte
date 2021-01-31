<script>
  import {firebase} from '../../config/firebase';

  let name = '';
  let email = '';
  let message = '';
  let notification;

  async function send() {
    try {
      const fb = await firebase();

      await fb.firestore()
        .collection('contacts')
        .doc()
        .set({
          createdOn: Date.now(),
          name,
          email,
          message
        });

        notification = {
          type: 'success',
          text: 'Vaš zahtjev je poslan uspješno. Hvala vam.'
        }
    } catch (e) {
      console.error(e);
      notification = {
        type: 'error',
        text: 'Dogodio se ne očekivani problem sa slanjem vašeg zahtjeva, molimo pokušajte kasnije.'
      }
    }
  }
</script>

<form on:submit|preventDefault={send}>
  <label>
    <p>Your name</p>
    <input name="name" required bind:value={name}>
  </label>
  <label>
    <p>Your email</p>
    <input name="email" type="email" required bind:value={email}>
  </label>
  <label>
    <p>Your message</p>
    <textarea name="message" required bind:value={message}></textarea>
  </label>
  <button class="gg-button" type="submit">Send</button>
</form>

{#if notification}
  <div class="notification-container">
    <div class="notification-inner">
      <p class="notification-text">{notification.text}</p>
      <button class="notification-{notification.type}" on:click={() => notification = null}>Zatvori</button>
    </div>
  </div>
{/if}

<style>
  label {
    display: block;
    margin-bottom: 1em;
  }
  label p {
    font-size:12px;
  }
  label input,
  label textarea {
    display: block;
    width: 100%;
    max-width: 400px;
    padding: 10px;
    border: 1px solid #ccc;
    font-size: inherit;
    font-family: inherit;
  }
</style>
