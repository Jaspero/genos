<script>
  import ContactForm from '../../components/contact/ContactForm.svelte';
</script>

<section class="gg-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">Contact us</h4>
    </div>
  </div>
</section>

<!--Services-->
<section class="p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">Send us a message</h4>
    </div>
    <div class="col-6 col-s-12 flex fd-col m-b-m">
      <a class="link" href="https://www.google.com/maps/place/Genos+DNA+laboratorij+d.o.o./@45.819438,16.020512,15z/data=!4m2!3m1!1s0x0:0xe1b9f7b230482795?ved=2ahUKEwiAydKcq87eAhWkK8AKHXWvCWsQ_BIwCnoECAYQCA" target="_blank" rel="noopener">Borongajska cesta 83h, 10000 Zagreb</a>
      <div class="p-y-xs">
        <a class="link" href="tel:+38516471181">+385 1 647 1181</a><br>
        <a class="link" href="tel:+38516471182">+385 1 647 1182</a><br>
        <a class="link" href="tel:+38516471169">Fax: +385 1 647 1169</a>
      </div>
      <a class="link" href="mailto:info@genos-glyco.com">info@genos-glyco.com</a>
    </div>

    <div class="col-6 col-s-12">
      <ContactForm hydrate-client={{}} />
    </div>
  </div>
</section>

<style>
  .gg-intro {
    padding: 200px 0 60px;
    background-image: url("/images/section-services.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>

<svelte:head>
  <title>Kontakt | Genos Glyco</title>
  <meta name="description" content="Contact us">
</svelte:head>
