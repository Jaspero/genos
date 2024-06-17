<script>
  import Section from '$lib/Section.svelte';
  import {onDestroy, onMount} from 'svelte';
  import {browser} from '$app/environment';
  import Cta from '$lib/Cta.svelte';

  let previousScrollY = 0;
  let navVisible = true;

  function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > previousScrollY) {
      navVisible = false;
    } else {
      navVisible = true;
    }

    previousScrollY = currentScrollY;
  }

  onMount(() => {
    if (browser) {
      window.addEventListener('scroll', handleScroll);
    }
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener('scroll', handleScroll);
    }
  });
</script>

<Section bg="/images/services/filled-half-circle.svg" bgAlt="filled half circle" decoration="/images/services/outlined-geometrical-shapes.svg" decorationAlt="outlined geometrical shapes">
  <slot slot="title">
    <h1>GENOS <br> <b class="text-[#4095BF]">services</b></h1>
  </slot>
  <p class="text-sm leading-normal mt-16 sm:mt-24 md:mt-40 max-w-[34ch] ml-auto">With over 20 large collaborative projects conducted with scientific teams from different research centers from around the world, we have the expertise to design studies and bring them to a successful conclusion.</p>
</Section>

<div class="mt-40">
  <div class="grid grid-cols-12 gap-y-24 xl:gap-20">
    <div class="col-span-12 md:col-span-6 xl:col-span-4">
      <img src="/images/services/flexibility.png" alt="colored geometrical shapes" aria-hidden="true" class="max-w-[100px] sm:max-w-[240px] w-full">
      <h2 class="text-base mt-12">Flexibility</h2>
      <p class="text-2xs max-w-[32ch]">We offer a wide range of bespoke lab services. We bring experience in all of them.</p>
    </div>
    <div class="col-span-12 md:col-span-6 xl:col-span-4">
      <img src="/images/services/scalability.png" alt="colored geometrical shapes" aria-hidden="true" class="max-w-[100px] sm:max-w-[240px] w-full">
      <h2 class="text-base mt-12">Scalability</h2>
      <p class="text-2xs max-w-[32ch]">Our technology and connections allows us to work on projects of any size and scale.</p>
    </div>
    <div class="col-span-12 md:col-span-6 xl:col-span-4">
      <img src="/images/services/expertise.png" alt="colored geometrical shapes" aria-hidden="true" class="max-w-[100px] sm:max-w-[240px] w-full">
      <h2 class="text-base mt-12">Expertise</h2>
      <p class="text-2xs max-w-[32ch]">The mixture of expertise from our team ensures the quality of service in all areas.</p>
    </div>
  </div>

  <div class="flex items-center justify-center mt-16 sm:mt-24">
        <span class="material-symbols-outlined text-base text-[#B2D4E5]">
          arrow_downward
        </span>
    <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_downward
        </span>
    <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_downward
        </span>
    <div class="text-base text-[#175E82] mx-6">Scroll to learn more</div>
    <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_downward
        </span>
    <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_downward
        </span>
    <span class="material-symbols-outlined text-base text-[#B2D4E5]">
          arrow_downward
        </span>
  </div>
</div>

<nav class="sticky-nav -ml-16 sm:-ml-24 md:-ml-40
            {navVisible ? 'top-24 sm:top-36' : 'top-0'}">
  <a href="/services#sample-preparation">Sample preparation</a>
  <a href="/services#biomarker-discovery">Biomarker discovery</a>
  <a href="/services#in-depth-glycoprofiling">In-depth glycoprofiling</a>
  <a href="/services#high-throughput-analysis">High-throughput analysis</a>
  <a href="/services#data-analysis">Data analysis</a>
  <a href="/services#joint-project-development">Joint project development</a>
</nav>

<div class="-mx-16 sm:-mx-24 md:-mx-40 mt-40" id="sample-preparation">
  <svg class="w-full h-full" width="1680" height="131" viewBox="0 0 1680 131" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 44C59 44 82.8059 1 140 1C197.194 1 232 44 280 44C339 44 362.806 1 420 1C477.194 1 512 44 560 44C619 44 642.806 1 700 1C757.194 1 792 44 840 44C899 44 922.806 1 980 1C1037.19 1 1072 44 1120 44C1179 44 1202.81 1 1260 1C1317.19 1 1352 44 1400 44C1459 44 1482.81 1 1540 1C1597.19 1 1632 44 1680 44M0 87C59 87 82.8059 44 140 44C197.194 44 232 87 280 87C339 87 362.806 44 420 44C477.194 44 512 87 560 87C619 87 642.806 44 700 44C757.194 44 792 87 840 87C899 87 922.806 44 980 44C1037.19 44 1072 87 1120 87C1179 87 1202.81 44 1260 44C1317.19 44 1352 87 1400 87C1459 87 1482.81 44 1540 44C1597.19 44 1632 87 1680 87M0 130C59 130 82.8059 87 140 87C197.194 87 232 130 280 130C339 130 362.806 87 420 87C477.194 87 512 130 560 130C619 130 642.806 87 700 87C757.194 87 792 130 840 130C899 130 922.806 87 980 87C1037.19 87 1072 130 1120 130C1179 130 1202.81 87 1260 87C1317.19 87 1352 130 1400 130C1459 130 1482.81 87 1540 87C1597.19 87 1632 130 1680 130" stroke="#4095BF" stroke-width="2"/>
  </svg>

  <div class="px-16 sm:px-40 py-24">
    <h2 class="max-w-[16ch] text-xl sm:text-2xl font-bold leading-tight text-center mx-auto">Sample preparation</h2>
  </div>

  <div class="px-16 sm:px-40 mt-24">
    <p class="ml-auto text-sm max-w-[35ch]">
      We can prepare samples for glycan analysis from blood of human, rat, mouse, and various tissues and cell cultures. We can also develop custom new protocols for various samples.
    </p>

    <div class="flex items-center justify-center mt-16">
        <span class="material-symbols-outlined text-base text-[#B2D4E5]">
          arrow_forward
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_forward
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_forward
        </span>
      <a href="/request"
         class="text-base text-[#175E82] mx-6 hover:underline">
        Submit free request
      </a>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_back
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_back
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5]">
          arrow_back
        </span>
    </div>
  </div>
</div>

<div class="-mx-16 sm:-mx-24 md:-mx-40 mt-40" id="biomarker-discovery">
  <svg class="w-full h-full" width="1680" height="131" viewBox="0 0 1680 131" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 44C59 44 82.8059 1 140 1C197.194 1 232 44 280 44C339 44 362.806 1 420 1C477.194 1 512 44 560 44C619 44 642.806 1 700 1C757.194 1 792 44 840 44C899 44 922.806 1 980 1C1037.19 1 1072 44 1120 44C1179 44 1202.81 1 1260 1C1317.19 1 1352 44 1400 44C1459 44 1482.81 1 1540 1C1597.19 1 1632 44 1680 44M0 87C59 87 82.8059 44 140 44C197.194 44 232 87 280 87C339 87 362.806 44 420 44C477.194 44 512 87 560 87C619 87 642.806 44 700 44C757.194 44 792 87 840 87C899 87 922.806 44 980 44C1037.19 44 1072 87 1120 87C1179 87 1202.81 44 1260 44C1317.19 44 1352 87 1400 87C1459 87 1482.81 44 1540 44C1597.19 44 1632 87 1680 87M0 130C59 130 82.8059 87 140 87C197.194 87 232 130 280 130C339 130 362.806 87 420 87C477.194 87 512 130 560 130C619 130 642.806 87 700 87C757.194 87 792 130 840 130C899 130 922.806 87 980 87C1037.19 87 1072 130 1120 130C1179 130 1202.81 87 1260 87C1317.19 87 1352 130 1400 130C1459 130 1482.81 87 1540 87C1597.19 87 1632 130 1680 130" stroke="#4095BF" stroke-width="2"/>
  </svg>

  <div class="px-16 sm:px-40 py-24">
    <h2 class="max-w-[16ch] text-xl sm:text-2xl font-bold leading-tight text-center mx-auto">Biomarker discovery</h2>
  </div>

  <div class="px-16 sm:px-40 mt-24">
    <p class="ml-auto text-sm max-w-[35ch]">
      With over 20 large collaborative projects conducted with scientific teams from different research centers from around the world, we have the expertise to design studies and bring them to a successful conclusion.
    </p>

    <div class="flex items-center justify-center mt-16">
        <span class="material-symbols-outlined text-base text-[#B2D4E5]">
          arrow_forward
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_forward
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_forward
        </span>
      <a href="/request"
         class="text-base text-[#175E82] mx-6 hover:underline">
        Submit free request
      </a>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_back
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_back
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5]">
          arrow_back
        </span>
    </div>
  </div>
</div>

<div class="-mx-16 sm:-mx-24 md:-mx-40 mt-40" id="in-depth-glycoprofiling">
  <svg class="w-full h-full" width="1680" height="131" viewBox="0 0 1680 131" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 44C59 44 82.8059 1 140 1C197.194 1 232 44 280 44C339 44 362.806 1 420 1C477.194 1 512 44 560 44C619 44 642.806 1 700 1C757.194 1 792 44 840 44C899 44 922.806 1 980 1C1037.19 1 1072 44 1120 44C1179 44 1202.81 1 1260 1C1317.19 1 1352 44 1400 44C1459 44 1482.81 1 1540 1C1597.19 1 1632 44 1680 44M0 87C59 87 82.8059 44 140 44C197.194 44 232 87 280 87C339 87 362.806 44 420 44C477.194 44 512 87 560 87C619 87 642.806 44 700 44C757.194 44 792 87 840 87C899 87 922.806 44 980 44C1037.19 44 1072 87 1120 87C1179 87 1202.81 44 1260 44C1317.19 44 1352 87 1400 87C1459 87 1482.81 44 1540 44C1597.19 44 1632 87 1680 87M0 130C59 130 82.8059 87 140 87C197.194 87 232 130 280 130C339 130 362.806 87 420 87C477.194 87 512 130 560 130C619 130 642.806 87 700 87C757.194 87 792 130 840 130C899 130 922.806 87 980 87C1037.19 87 1072 130 1120 130C1179 130 1202.81 87 1260 87C1317.19 87 1352 130 1400 130C1459 130 1482.81 87 1540 87C1597.19 87 1632 130 1680 130" stroke="#4095BF" stroke-width="2"/>
  </svg>

  <div class="px-16 sm:px-40 py-24">
    <h2 class="max-w-[16ch] text-xl sm:text-2xl font-bold leading-tight text-center mx-auto">In-depth glycoprofiling</h2>
  </div>

  <div class="px-16 sm:px-40 mt-24">
    <p class="ml-auto text-sm max-w-[35ch]">
      With over 20 large collaborative projects conducted with scientific teams from different research centers from around the world, we have the expertise to design studies and bring them to a successful conclusion.
    </p>

    <div class="flex items-center justify-center mt-16">
        <span class="material-symbols-outlined text-base text-[#B2D4E5]">
          arrow_forward
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_forward
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_forward
        </span>
      <a href="/request"
         class="text-base text-[#175E82] mx-6 hover:underline">
        Submit free request
      </a>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_back
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_back
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5]">
          arrow_back
        </span>
    </div>
  </div>
</div>

<div class="-mx-16 sm:-mx-24 md:-mx-40 mt-40" id="high-throughput-analysis">
  <svg class="w-full h-full" width="1680" height="131" viewBox="0 0 1680 131" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 44C59 44 82.8059 1 140 1C197.194 1 232 44 280 44C339 44 362.806 1 420 1C477.194 1 512 44 560 44C619 44 642.806 1 700 1C757.194 1 792 44 840 44C899 44 922.806 1 980 1C1037.19 1 1072 44 1120 44C1179 44 1202.81 1 1260 1C1317.19 1 1352 44 1400 44C1459 44 1482.81 1 1540 1C1597.19 1 1632 44 1680 44M0 87C59 87 82.8059 44 140 44C197.194 44 232 87 280 87C339 87 362.806 44 420 44C477.194 44 512 87 560 87C619 87 642.806 44 700 44C757.194 44 792 87 840 87C899 87 922.806 44 980 44C1037.19 44 1072 87 1120 87C1179 87 1202.81 44 1260 44C1317.19 44 1352 87 1400 87C1459 87 1482.81 44 1540 44C1597.19 44 1632 87 1680 87M0 130C59 130 82.8059 87 140 87C197.194 87 232 130 280 130C339 130 362.806 87 420 87C477.194 87 512 130 560 130C619 130 642.806 87 700 87C757.194 87 792 130 840 130C899 130 922.806 87 980 87C1037.19 87 1072 130 1120 130C1179 130 1202.81 87 1260 87C1317.19 87 1352 130 1400 130C1459 130 1482.81 87 1540 87C1597.19 87 1632 130 1680 130" stroke="#4095BF" stroke-width="2"/>
  </svg>

  <div class="px-16 sm:px-40 py-24">
    <h2 class="max-w-[16ch] text-xl sm:text-2xl font-bold leading-tight text-center mx-auto">High-throughput analysis</h2>
  </div>

  <div class="px-16 sm:px-40 mt-24">
    <p class="ml-auto text-sm max-w-[35ch]">
      With over 20 large collaborative projects conducted with scientific teams from different research centers from around the world, we have the expertise to design studies and bring them to a successful conclusion.
    </p>

    <div class="flex items-center justify-center mt-16">
        <span class="material-symbols-outlined text-base text-[#B2D4E5]">
          arrow_forward
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_forward
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_forward
        </span>
      <a href="/request"
         class="text-base text-[#175E82] mx-6 hover:underline">
        Submit free request
      </a>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_back
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_back
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5]">
          arrow_back
        </span>
    </div>
  </div>
</div>

<div class="-mx-16 sm:-mx-24 md:-mx-40 mt-40" id="data-analysis">
  <svg class="w-full h-full" width="1680" height="131" viewBox="0 0 1680 131" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 44C59 44 82.8059 1 140 1C197.194 1 232 44 280 44C339 44 362.806 1 420 1C477.194 1 512 44 560 44C619 44 642.806 1 700 1C757.194 1 792 44 840 44C899 44 922.806 1 980 1C1037.19 1 1072 44 1120 44C1179 44 1202.81 1 1260 1C1317.19 1 1352 44 1400 44C1459 44 1482.81 1 1540 1C1597.19 1 1632 44 1680 44M0 87C59 87 82.8059 44 140 44C197.194 44 232 87 280 87C339 87 362.806 44 420 44C477.194 44 512 87 560 87C619 87 642.806 44 700 44C757.194 44 792 87 840 87C899 87 922.806 44 980 44C1037.19 44 1072 87 1120 87C1179 87 1202.81 44 1260 44C1317.19 44 1352 87 1400 87C1459 87 1482.81 44 1540 44C1597.19 44 1632 87 1680 87M0 130C59 130 82.8059 87 140 87C197.194 87 232 130 280 130C339 130 362.806 87 420 87C477.194 87 512 130 560 130C619 130 642.806 87 700 87C757.194 87 792 130 840 130C899 130 922.806 87 980 87C1037.19 87 1072 130 1120 130C1179 130 1202.81 87 1260 87C1317.19 87 1352 130 1400 130C1459 130 1482.81 87 1540 87C1597.19 87 1632 130 1680 130" stroke="#4095BF" stroke-width="2"/>
  </svg>

  <div class="px-16 sm:px-40 py-24">
    <h2 class="max-w-[16ch] text-xl sm:text-2xl font-bold leading-tight text-center mx-auto">Data analysis</h2>
  </div>

  <div class="px-16 sm:px-40 mt-24">
    <p class="ml-auto text-sm max-w-[35ch]">
      With over 20 large collaborative projects conducted with scientific teams from different research centers from around the world, we have the expertise to design studies and bring them to a successful conclusion.
    </p>

    <div class="flex items-center justify-center mt-16">
        <span class="material-symbols-outlined text-base text-[#B2D4E5]">
          arrow_forward
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_forward
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_forward
        </span>
      <a href="/request"
         class="text-base text-[#175E82] mx-6 hover:underline">
        Submit free request
      </a>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_back
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_back
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5]">
          arrow_back
        </span>
    </div>
  </div>
</div>

<div class="-mx-16 sm:-mx-24 md:-mx-40 mt-40" id="joint-project-development">
  <svg class="w-full h-full" width="1680" height="131" viewBox="0 0 1680 131" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 44C59 44 82.8059 1 140 1C197.194 1 232 44 280 44C339 44 362.806 1 420 1C477.194 1 512 44 560 44C619 44 642.806 1 700 1C757.194 1 792 44 840 44C899 44 922.806 1 980 1C1037.19 1 1072 44 1120 44C1179 44 1202.81 1 1260 1C1317.19 1 1352 44 1400 44C1459 44 1482.81 1 1540 1C1597.19 1 1632 44 1680 44M0 87C59 87 82.8059 44 140 44C197.194 44 232 87 280 87C339 87 362.806 44 420 44C477.194 44 512 87 560 87C619 87 642.806 44 700 44C757.194 44 792 87 840 87C899 87 922.806 44 980 44C1037.19 44 1072 87 1120 87C1179 87 1202.81 44 1260 44C1317.19 44 1352 87 1400 87C1459 87 1482.81 44 1540 44C1597.19 44 1632 87 1680 87M0 130C59 130 82.8059 87 140 87C197.194 87 232 130 280 130C339 130 362.806 87 420 87C477.194 87 512 130 560 130C619 130 642.806 87 700 87C757.194 87 792 130 840 130C899 130 922.806 87 980 87C1037.19 87 1072 130 1120 130C1179 130 1202.81 87 1260 87C1317.19 87 1352 130 1400 130C1459 130 1482.81 87 1540 87C1597.19 87 1632 130 1680 130" stroke="#4095BF" stroke-width="2"/>
  </svg>

  <div class="px-16 sm:px-40 py-24">
    <h2 class="max-w-[16ch] text-xl sm:text-2xl font-bold leading-tight text-center mx-auto">Joint project development</h2>
  </div>

  <div class="px-16 sm:px-40 mt-24">
    <p class="ml-auto text-sm max-w-[35ch]">
      With over 20 large collaborative projects conducted with scientific teams from different research centers from around the world, we have the expertise to design studies and bring them to a successful conclusion.
    </p>

    <div class="flex items-center justify-center mt-16">
        <span class="material-symbols-outlined text-base text-[#B2D4E5]">
          arrow_forward
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_forward
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_forward
        </span>
      <a href="/request"
         class="text-base text-[#175E82] mx-6 hover:underline">
        Submit free request
      </a>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_back
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5] hidden sm:block">
          arrow_back
        </span>
      <span class="material-symbols-outlined text-base text-[#B2D4E5]">
          arrow_back
        </span>
    </div>
  </div>
</div>

<div class="mt-40">
  <Cta />
</div>

<svelte:head>
  <title>Expert Glycan Analysis Services - Your Partner in Advanced Glycomics | Genos</title>
  <meta name="title" content="Expert Glycan Analysis Services - Your Partner in Advanced Glycomics | Genos">
  <meta property="og:title" content="Expert Glycan Analysis Services - Your Partner in Advanced Glycomics | Genos">
  <meta name="description"
        content="Explore Genos Glyco's bespoke scientific services in glycan analysis. From sample preparation to high-throughput analysis, discover our expertise and flexible solutions tailored to your research or commercial needs.">
  <meta property="og:description"
        content="Explore Genos Glyco's bespoke scientific services in glycan analysis. From sample preparation to high-throughput analysis, discover our expertise and flexible solutions tailored to your research or commercial needs.">
  <meta property="og:url" content="https://genos.hr/services" />
</svelte:head>

<style lang="postcss">
  .sticky-nav {
      @apply sticky w-screen duration-500 delay-200 flex;
  }

  .sticky-nav a {
      @apply flex-1 border-2 border-black bg-[#D9EAF2] text-center flex items-center justify-center py-2;
  }
</style>