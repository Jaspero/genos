<svelte:options customElement={{ tag: 'pb-leaders', shadow: 'none' }} />

<script>
  import {language} from '$lib/page-builder/stores/language';
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
          ? 'With decades of research and innovation behind us, our team of world-renowned scientists conducted over 80% of all glycan analyses globally.<br><br>From pioneering discoveries to advancing clinical applications, we’re at the forefront of unlocking the power of glycans to transform health.'
          : 'S desetljećima istraživanja i inovacija iza sebe, naš tim svjetski poznatih znanstvenika je proveo više od 80% svih analiza glikana na globalnoj razini.<br><br>Od pionirskih otkrića do napretka u kliničkoj primjeni, predvodimo u otkrivanju moći glikana za transformaciju zdravlja.'
      }
    </p>
    <div>
      <a class="button-filled-yellow" href="/{$language === 'en' ? 'team' : 'tim'}">{$language === 'en' ? 'Our team' : 'Naš tim'}</a>
    </div>
  </div>
</div>