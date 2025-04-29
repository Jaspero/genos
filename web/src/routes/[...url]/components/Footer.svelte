<svelte:options customElement={{ tag: 'pb-footer', shadow: 'none' }} />

<script lang="ts">
  const year = new Date().getFullYear();
</script>

<div class="footer">
  <div class="grid grid-large">
    <div class="col-span-12 footer-top">
      <img src="/brand/genos-logo-white.svg" alt="">
      <div class="footer-top-links">
        <a href="">
          Borongajska cesta 83h, 10000 Zagreb
        </a>
        <a href="">
          +385 1 647 1181
        </a>
        <a href="">
          +385 1 647 1182
        </a>
        <div>
          Fax: <a href="">+385 1 647 1169</a>
        </div>
        <a href="">
          info@genos.hr
        </a>
      </div>
    </div>
    <div class="col-span-12 footer-bottom">
      <div class="footer-bottom-links">
        <div class="footer-bottom-links-container">
          <a href="">
            Privacy Policy
          </a>
          <a href="">
            Gender Equality Plan
          </a>
        </div>
        <div class="footer-bottom-links-container">
          <div>
            © {year} Genos Glyco
          </div>
          <a href="https://jaspero.co/" target="_blank" rel="noreferrer noopener">
            By Jaspero
          </a>
        </div>
      </div>
    </div>
  </div>
</div>