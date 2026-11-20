<script>
  import {language} from '$lib/stores/language';

  const year = new Date().getFullYear();
</script>

<footer class="spacer" lang={$language}>
  <div>
    <img src="/brand/genos-logo-white.svg" alt="Genos" class="footer-logo">
  </div>
  <h2 class="footer-title">
    {@html
      $language === 'en'
        ? 'If you want to know more, collaborate, or use our services, <a class="footer-cta" href="/contact">get in touch</a> with us to discuss your ideas.'
        : 'Ako želite saznati više, surađivati ili koristiti naše usluge, <a class="footer-cta" href="/kontakt">kontaktirajte nas</a> kako bismo razgovarali o vašim idejama.'
    }
  </h2>
  <div class="flex-1"></div>
  <div class="subfooter">
    <div class="subfooter-social">
      <a href="https://www.linkedin.com/company/genos-ltd" target="_blank" rel="noreferrer noopener">
        <img src="/icons/linkedin-w.svg" alt={$language === 'en' ? 'Genos on LinkedIn (opens in a new tab)' : 'Genos na LinkedInu (otvara se u novoj kartici)'}>
      </a>
      <a href="https://x.com/gglycoscience" target="_blank" rel="noreferrer noopener">
        <img src="/icons/x-w.svg" alt={$language === 'en' ? 'Genos on X (opens in a new tab)' : 'Genos na X-u (otvara se u novoj kartici)'}>
      </a>
    </div>
    <div class="subfooter-legal">
      <a href="/privacy-policy.pdf" target="_blank" aria-describedby="footer-pdf-note">
        {
          $language === 'en'
            ? 'Privacy policy'
            : 'Pravila privatnosti'
        }
      </a>
      <a href="/gep.pdf" target="_blank" aria-describedby="footer-pdf-note">
        {
          $language === 'en'
            ? 'Gender Equality Plan'
            : 'Plan za ravnopravnost spolova'
        }
      </a>
      {#if $language === 'en'}
        <a href="/conflict-of-interest.pdf" target="_blank" aria-describedby="footer-pdf-note">
          Conflict of interest
        </a>
      {:else}
        <a href="/sukob-interesa.pdf" target="_blank" aria-describedby="footer-pdf-note">
          Sukob interesa
        </a>
      {/if}
    </div>
    <div class="subfooter-contact">
      <a href="mailto:info@genos.hr">info@genos.hr</a>
      <span>© {year} Genos Glyco</span>
      <span>{$language === 'en' ? 'Made by' : 'Izradio'} <a href="https://jaspero.co">jaspero.co</a></span>
    </div>
  </div>
  <span id="footer-pdf-note" class="sr-only">{$language === 'en' ? 'PDF, opens in a new tab' : 'PDF, otvara se u novoj kartici'}</span>
  <img class="footer-bg" src="/images/footer.jpg" alt="">
</footer>

<style>
    footer {
        position: relative;
        /* Keeps the background photo and its shade inside the footer; the colour shows if the photo does not load. */
        isolation: isolate;
        border-radius: .5rem;
        background-color: #0A415C;
        display: flex;
        flex-direction: column;
        height: 29rem;
        padding: 3.5rem 3.5rem 2rem;
        gap: 3rem;
        @media (max-width: 600px) {
            gap: 1rem;
            padding: 1.5rem;
        }
    }

    .footer-logo {
        height: 3rem;
    }

    .footer-title {
        max-width: 44ch;
        color: white;
    }

    .subfooter {
        display: flex;
        gap: 2rem;
        border-top: 1px solid rgba(255,255,255,.4);
        padding-top: 2rem;
        font-weight: 600;
        color: white;
        @media (max-width: 600px) {
            flex-direction: column;
            padding-top: 1.5rem;
            gap: 1rem;
        }
    }

    .subfooter a {
        display: inline-flex;
        align-items: center;
        min-height: 24px;
        transition: .25s;
    }

    .subfooter a:hover {
        text-decoration: underline;
    }

    /* Darkens the bottom of the photo slightly so the small white text keeps 4.5:1. */
    footer::after {
        content: '';
        z-index: -1;
        position: absolute;
        inset: 0;
        border-radius: .5rem;
        background: linear-gradient(to top, rgba(3, 33, 48, .3), rgba(3, 33, 48, 0) 45%);
        pointer-events: none;
    }

    .subfooter-social {
        display: flex;
        gap: .5rem;
    }

    .subfooter-legal {
        flex: 1 1 0;
    }

    .subfooter-legal, .subfooter-contact {
        display: flex;
        gap: 1.5rem;
    }

    .subfooter-contact {
        flex-wrap: wrap;
        row-gap: .5rem;
    }

    .footer-bg {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: .5rem;
        object-fit: cover;
    }
</style>