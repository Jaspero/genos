<script>
  import {language} from '$lib/stores/language';
</script>

<div class="intro-container">
  <img src="/images/footer.jpg" alt="" class="intro-bg" />
  <div class="grid grid-large">
    <div class="gc-12">
      <h1>404</h1>
    </div>
  </div>
</div>
<div class="grid grid-large">
  <div class="gc-12">
    <h2 class="mb-2">{$language === 'en' ? 'Page not found' : 'Stranica nije pronađena'}</h2>


    <p class="mb-4">{$language === 'en' ? 'Sorry, the page you\'re looking for doesn\'t exist.' : 'Žao nam je, stranica koju tražite ne postoji.'}</p>
    <a href="/" class="underline text-blue-900">{$language === 'en' ? 'Go back home' : 'Povratak na početnu'}</a>
  </div>
</div>

<style>
    .intro-container {
        position: relative;
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: 25rem;
        border-radius: .5rem;
        overflow: hidden;
    }

    .intro-bg {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h1 {
        color: white;
    }
</style>