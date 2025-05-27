<svelte:options customElement={{ tag: 'pb-leaders', shadow: 'none' }} />

<script>
  import {language} from '$lib/stores/language';
</script>

<div class="grid grid-large">
  <div class="gc-12 leaders">
    <img src="/images/team.jpg" alt="">
    <h2>
      {
        $language === 'en'
          ? 'Global Leaders in Glycoscience'
          : 'Svjetski stručnjaci u glikoznanosti'
      }
    </h2>
    <p style="max-width: 44ch">
      {@html
        $language === 'en'
          ? 'With almost two decades of research and innovation behind us, our team of world-renowned scientists conducted over 80% of all glycan analyses globally.<br><br>From advanced analytical solutions for complex samples to groundbreaking biomarker discovery, we lead the way in robust and sensitive glycan analysis.'
          : 'S gotovo dva desetljeća istraživanja i inovacija iza nas, naš tim svjetski priznatih znanstvenika proveo je više od 80% svih analiza glikana na globalnoj razini.<br><br>Od naprednih analitičkih rješenja za složene uzorke do revolucionarnog otkrivanja biomarkera, predvodimo u robusnoj i osjetljivoj analizi glikana.'
      }
    </p>
    <div>
      <a class="button-filled-yellow" href="/{$language === 'en' ? 'team' : 'tim'}">{$language === 'en' ? 'Our team' : 'Naš tim'}</a>
    </div>
  </div>
</div>