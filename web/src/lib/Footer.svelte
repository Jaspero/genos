<script>
  import {language} from '$lib/stores/language';
</script>

<footer class="spacer">
  <div>
    <img src="/brand/genos-logo-white.svg" alt="genos logo" class="footer-logo">
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
      <a href="https://www.linkedin.com/company/genos-ltd" target="_blank">
        <img src="/icons/linkedin-w.svg" alt="linkedin">
      </a>
      <a href="https://x.com/gglycoscience" target="_blank">
        <img src="/icons/x-w.svg" alt="x">
      </a>
    </div>
    <div class="subfooter-legal">
      <a href="/privacy-policy.pdf" target="_blank">
        {
          $language === 'en'
            ? 'Privacy policy'
            : 'Pravila privatnosti'
        }
      </a>
      <a href="/gep.pdf" target="_blank">
        {
          $language === 'en'
            ? 'Gender Equality Plan'
            : 'Plan za ravnopravnost spolova'
        }
      </a>
    </div>
    <div class="subfooter-contact">
      <a href="mailto:info@genos.hr">info@genos.hr</a>
      <span>© 2025 Genos Glyco</span>
    </div>
  </div>
  <img class="footer-bg" src="/images/footer.jpg" alt="">
</footer>

<style>
    footer {
        position: relative;
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
        opacity: .8;
        transition: .25s;
    }

    .subfooter a:hover {
        opacity: 1;
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