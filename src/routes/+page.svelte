<script>
  import Section from '$lib/Section.svelte';
  import Cta from '$lib/Cta.svelte';

  let questions = [
    {
      question: `What's the <b>benefit</b> of using our services?`,
      answer: 'Lorem ipsum dolor sit amet',
      open: false
    },
    {
      question: `What's the <b>capacity</b> of Genos laboratory?`,
      answer: 'Lorem ipsum dolor sit amet',
      open: false
    },
    {
      question: `How to set up a project <b>collaboration</b> with us?`,
      answer: 'Lorem ipsum dolor sit amet',
      open: false
    }
  ]
</script>

<div class="flex flex-col items-center">
  <h1 class="text-base sm:text-2xl font-bold max-w-[23ch] leading-tight">Simple and automated scientific solutions for your research or commercial needs.</h1>

  <div class="grid sm:grid-cols-12 w-full gap-10 mt-10">
    <div class="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col">
      <div class="text-xl leading-none text-[#D95C26]">200k+</div>
      <b class="text-2xs leading-none text-[#D95C26]">Samples analyzed to date</b>
      <div class="h-10 bg-[#FF9933] mt-2" />
    </div>
    <div class="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col">
      <div class="text-xl leading-none text-[#0A5C5C]">500+</div>
      <b class="text-2xs leading-none text-[#0A5C5C]">Samples analyzed daily</b>
      <div class="h-10 bg-[#66CCCC] mt-2" />
    </div>
    <div class="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col">
      <div class="text-xl leading-none text-[#EC9C13]">100+</div>
      <b class="text-2xs leading-none text-[#EC9C13]">Scientific publications</b>
      <div class="h-10 bg-[#FFDD33] mt-2" />
    </div>
    <div class="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col">
      <div class="text-xl leading-none text-[#335C0A]">20+</div>
      <b class="text-2xs leading-none text-[#335C0A]">Collaboration projects</b>
      <div class="h-10 bg-[#99CC66] mt-2" />
    </div>
    <div class="col-span-12">
      <a class="cta" href="/request">
        Submit free request
      </a>
      <div class="flex items-center justify-center mt-5">
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
  </div>

  <p class="text-base text-center mt-48 max-w-[28ch]">We are the world’s leading glycomic lab, with <b>over 20 years</b> of experience in glycomics. Our team of highly qualified experts can help bring your ideas to life.</p>

  <div class="relative mt-80">
    <h2 class="text-xl lg:text-2xl xl:text-3xl max-w-[16ch] leading-tight text-center font-bold">
      We offer bespoke
      <span class="text-[#40BFBF]">scientific solutions</span>
    </h2>
    <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-[1]" src="/images/home/hex-bg.png" alt="hexagons in the background" aria-hidden="true">
  </div>

  <div class="w-screen mt-40">
    <a href="/services#sample-preparation" class="solution hover:bg-[#9FCADF]">
      <span class="solution-line" />
      <span class="solution-text">
        <span class="text-base sm:text-xl md:text-2xl">Sample preparation</span>
        <span class="text-sm sm:text-base text-[#4095BF]">01</span>
      </span>
      <img class="h-48" src="/images/home/sample-preparation.png" alt="sample preparation illustration" aria-hidden="true">
    </a>
    <a href="/services#biomarker-discovery" class="solution hover:bg-[#9FDFDF]">
      <span class="solution-line" />
      <span class="solution-text">
        <span class="text-base sm:text-xl md:text-2xl">Biomarker discovery</span>
        <span class="text-sm sm:text-base text-[#40BFBF]">02</span>
      </span>
      <img class="h-48" src="/images/home/biomarker-discovery.png" alt="biomarker discovery illustration" aria-hidden="true">
    </a>
    <a href="/services#in-depth-glycoprofiling" class="solution hover:bg-[#BFDF9F]">
      <span class="solution-line" />
      <span class="solution-text">
        <span class="text-base sm:text-xl md:text-2xl">In-depth glycoprofiling</span>
        <span class="text-sm sm:text-base text-[#80BF40]">03</span>
      </span>
      <img class="h-48" src="/images/home/in-depth-glycoprofiling.png" alt="in-depth glycoprofiling illustration" aria-hidden="true">
    </a>
    <a href="/services#high-throughput-analysis" class="solution hover:bg-[#FCDF82]">
      <span class="solution-line" />
      <span class="solution-text">
        <span class="text-base sm:text-xl md:text-2xl">High-throughput analysis</span>
        <span class="text-sm sm:text-base text-[#F9C006]">04</span>
      </span>
      <img class="h-48" src="/images/home/high-throughput-analysis.png" alt="high-throughput analysis illustration" aria-hidden="true">
    </a>
    <a href="/services#data-analysis" class="solution hover:bg-[#FFBF80]">
      <span class="solution-line" />
      <span class="solution-text">
        <span class="text-base sm:text-xl md:text-2xl">Data analysis</span>
        <span class="text-sm sm:text-base text-[#FF8000]">05</span>
      </span>
      <img class="h-48" src="/images/home/data-analysis.png" alt="data analysis illustration" aria-hidden="true">
    </a>
    <a href="/services#joint-project-development" class="solution hover:bg-[#9FCADF]">
      <span class="solution-line" />
      <span class="solution-text">
        <span class="text-base sm:text-xl md:text-2xl">Joint project development</span>
        <span class="text-sm sm:text-base text-[#4095BE]">06</span>
      </span>
      <img class="h-48" src="/images/home/joint-project-development.png" alt="joint project development illustration" aria-hidden="true">
    </a>
  </div>

  <div class="flex items-center justify-center mt-5">
        <span class="material-symbols-outlined text-base text-[#B2E5E5]">
          arrow_forward
        </span>
    <span class="material-symbols-outlined text-base text-[#B2E5E5] hidden sm:block">
          arrow_forward
        </span>
    <span class="material-symbols-outlined text-base text-[#B2E5E5] hidden sm:block">
          arrow_forward
        </span>
    <a href="/services" class="text-base text-[#178282] mx-6 underline sm:no-underline hover:underline">Our services in details</a>
    <span class="material-symbols-outlined text-base text-[#B2E5E5] hidden sm:block">
          arrow_back
        </span>
    <span class="material-symbols-outlined text-base text-[#B2E5E5] hidden sm:block">
          arrow_back
        </span>
    <span class="material-symbols-outlined text-base text-[#B2E5E5]">
          arrow_back
        </span>
  </div>
</div>

<div class="mt-60">
  <Section bg="/images/home/filled-rectangle.svg" bgAlt="filled rectangle in background"
           decoration="/images/home/outlined-rectangles.svg" decorationAlt="outlined rectangles in background">
    <slot slot="title">Success through <span class="text-[#80BF40]">collaboration</span></slot>

    <p class="text-sm leading-normal mt-16 sm:mt-24 md:mt-40 max-w-[34ch] ml-auto">With over 20 large collaborative projects conducted with scientific teams from different research centers from <b>around the world</b>, we have the expertise to design studies and bring them to a successful conclusion.</p>
  </Section>

  <img src="/images/home/collaboration.png" alt="" class="w-full mt-16 sm:mt-24 md:mt-40">
</div>

<div class="mt-60">
  <Section bg="/images/home/half-circle.svg" bgAlt="filled half-circle in background"
           decoration="/images/home/question-marks.svg" decorationAlt="question marks in background">
    <slot slot="title">Common <br> <span class="text-[#4095BF]">Questions</span></slot>

    <p class="text-sm leading-normal max-w-[34ch] ml-auto">With over 20 large collaborative projects conducted with scientific teams from different research centers from <b>around the world</b>, we have the expertise to design studies and bring them to a successful conclusion.</p>
  </Section>

  <div class="flex flex-col gap-16 mt-16 sm:mt-24 md:mt-32">
    {#each questions as item}
      <div class="flex justify-center flex-wrap">
        <div class="flex justify-center items-center">
          <span class="material-symbols-outlined text-base text-[#D9EAF2]">
            arrow_forward
          </span>
          <span class="material-symbols-outlined text-base text-[#D9EAF2] hidden sm:block">
            arrow_forward
          </span>
          <span class="material-symbols-outlined text-base text-[#D9EAF2] hidden sm:block">
            arrow_forward
          </span>
          <button class="text-base text-[#175E82] mx-6 underline sm:no-underline hover:underline max-w-[18ch]"
                  on:click={() => {item.open = !item.open}}>
            {@html item.question}
          </button>
          <span class="material-symbols-outlined text-base text-[#D9EAF2] hidden sm:block">
            arrow_back
          </span>
          <span class="material-symbols-outlined text-base text-[#D9EAF2] hidden sm:block">
            arrow_back
          </span>
          <span class="material-symbols-outlined text-base text-[#D9EAF2]">
            arrow_back
          </span>
        </div>

        {#if item.open}
          <p class="w-full text-center text-sm mt-4">{item.answer}</p>
        {/if}
      </div>
    {/each}
  </div>
</div>

<div class="mt-24">
  <Cta />
</div>

<style lang="postcss">
    .cta {
        @apply underline underline-offset-[12px] text-base sm:text-xl bg-[#4095BF] block text-white opacity-80 hover:opacity-100 duration-300 text-center font-bold py-12 sm:py-16;
    }

    .solution {
        @apply relative flex justify-center items-center gap-24 px-16 sm:px-24 md:px-40 py-16 duration-500;
    }

    .solution-text {
        @apply flex gap-6;
    }

    .solution-line {
        @apply absolute left-0 top-1/2 translate-y-12 w-full border-b-4 border-b-[#D9F2F2] -z-[1];
    }

    .solution:nth-child(2n) {
        @apply flex-row-reverse;
    }

    .solution:nth-child(2n) .solution-text {
        @apply flex-row-reverse;
    }
</style>