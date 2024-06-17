<script lang="ts">
  import Section from '$lib/Section.svelte';
  import Cta from '$lib/Cta.svelte';
</script>

<h1 class="text-2xl sm:text-3xl md:text-4xl text-center font-bold">
  <span class="leading-none">We are</span>
  <div class="flex justify-center">
    <span class="text-[#4095BF] leading-none">G</span>
    <span class="text-[#40BFBF] leading-none">E</span>
    <span class="text-[#80BF40] leading-none">N</span>
    <span class="text-[#FF8000] leading-none">O</span>
    <span class="text-[#FFD400] leading-none">S</span>
  </div>
</h1>

<div class="mt-20 sm:mt-40 md:mt-60">
  <Section bg="/images/about/filled-rectangle.svg" bgAlt="filled rectangle in background">
    <slot slot="title"><h2>We are the largest glycan analysis lab <span class="text-[#4095BF]">in the world.</span></h2></slot>
  </Section>

  <div class="-mr-16 sm:-mr-24 md:-mr-40 -mt-16 md:-mb-36 lg:-mb-48 xl:-mb-56 flex justify-end">
    <img src="/images/about/genos-lab.png" alt="" class="w-full max-w-[1200px]">
  </div>
</div>

<div class="z-[1] relative -mx-16 sm:-mx-24 md:-mx-40">
  <img src="/images/about/wave.svg" alt="wave" aria-hidden="true" class="translate-y-px w-full">
  <div class="bg-[#D9EAF2]">
    <div class="ml-auto pl-12 sm:pl-40 md:pl-60 py-20 pr-12 sm:pr-32 md:pr-64 text-sm sm:max-w-[59ch]">
      Our journey started in 2008 where we analyzed over 1,000 individuals from the Croatian island Vis. More than 10 years later we have published over 150 research publications and completed more than 20 collaborative projects with research and commercial facilities around the world.
      <br><br>
      Today the laboratory has the capacity for 150,000+ glycan analyses per annum and represents the majority of the glycan research <b>in the world</b>.
    </div>
  </div>
  <img src="/images/about/filled-triangle.svg" alt="filled triangle in background" aria-hidden="true" class="w-full">
</div>

<Section bg="/images/about/hexagon.svg" bgAlt="filled hexagon in background"
         decoration="/images/about/outlined-hexagons.svg" decorationAlt="outlined hexagons in background">
  <slot slot="title">
    <h2 class="max-w-[11ch]">We are a team of world-class <span class="text-[#80BF40] mt-40">scientists</span></h2>
  </slot>

    <div>
      <div class="bubble">
        Glycosylation is the ultimate layer of molecular complexity, but exactly because of this complexity many researchers are still avoiding including glycans in their studies.

        <img src="/images/about/bubble-arrow.svg" alt="bubble arrow" class="bubble-arrow">
      </div>
    </div>

    <div class="max-w-[50rem] ml-auto">
      <img src="/images/about/gordan.png" alt="A portrait of Gordan Lauc" class="sm:max-w-[400px]">
      <h3 class="text-xl sm:text-2xl font-bold leading-tight mt-20">Prof. Gordan Lauc</h3>
      <h4 class="text-base leading-tight">Founder & CEO</h4>
      <p class="text-sm mt-8 sm:mt-16 max-w-[35ch]">
        Dr. Gordan Lauc is Professor of Biochemistry and Molecular Biology at the University of Zagreb Faculty of Pharmacy and Biochemistry and founder and CEO of Genos Ltd.
        <br><br>
        He chaired a number of conferences, including the “European Science Foundation Exploratory Workshop on Glycoscience” which resulted in the creation of the “European Glycoscience Forum”.
        <br><br>
        He is a President elect of the International Glycoscience Organization and member of the Steering Committee of the European Glycoscience Forum.
      </p>
  </div>
</Section>

<div class="grid grid-cols-12 gap-8 sm:gap-16 mt-24">
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/s-busic.png" alt="portrait of genos employee" aria-hidden="true">
    <h3 class="text-xs font-bold leading-tight mt-4">MSc. Svjetlana Bušić</h3>
    <h4 class="text-2xs leading-tight">Director of EU Funds and Finance</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/v-juras.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Vesna Juras</h3>
    <h4 class="text-2xs leading-tight">Head of Project Management Office</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/f-sostaric.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Filip Šoštarić</h3>
    <h4 class="text-2xs leading-tight">Project Implementation and Public Procurement Specialist</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/f-slipcevic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Filip Slipčević</h3>
    <h4 class="text-2xs leading-tight">Project Manager</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/d-peic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dijana Peić</h3>
    <h4 class="text-2xs leading-tight">Head of Finance and Accounting</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/p-ruzic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Petra Ružić</h3>
    <h4 class="text-2xs leading-tight">Administrative Assistant and HR</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/i-trbojevic-akmacic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dr.sc. Irena Trbojević Akmačić</h3>
    <h4 class="text-2xs leading-tight">Head of Laboratory for high-throughput glycomics</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/t-pribic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Tea Pribić</h3>
    <h4 class="text-2xs leading-tight">Head of UPLC lab</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/m-hanic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Maja Hanić</h3>
    <h4 class="text-2xs leading-tight">Head of CGE lab</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/j-simunovic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Jelena Šimunović</h3>
    <h4 class="text-2xs leading-tight">PhD Student</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/j-antolkovic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Jelena Antolković</h3>
    <h4 class="text-2xs leading-tight">Laboratory analyst</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/a-baletic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dr. sc. Baletić Anđelo</h3>
    <h4 class="text-2xs leading-tight">Laboratory analyst</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/n-mraz.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Nikol Mraz</h3>
    <h4 class="text-2xs leading-tight">Laboratory Analyst</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/m-vinicki.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Martina Vinicki</h3>
    <h4 class="text-2xs leading-tight">Laboratory Analyst</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/i-petric.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Ivan Petrić</h3>
    <h4 class="text-2xs leading-tight">Laboratory Analyst</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/g-josipovic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dr. Goran Josipović</h3>
    <h4 class="text-2xs leading-tight">Senior Researcher</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/m-novokmet.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dr.sc. Mislav Novokmet</h3>
    <h4 class="text-2xs leading-tight">Head of MS Laboratory</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/j-stambuk.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dr. Jerko Štambuk</h3>
    <h4 class="text-2xs leading-tight">Senior researcher</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/s-habazin.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Siniša Habazin</h3>
    <h4 class="text-2xs leading-tight">Researcher</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/f-klicek.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Filip Kliček</h3>
    <h4 class="text-2xs leading-tight">Research PhD Student</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/f-vuckovic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dr. Frano Vučković</h3>
    <h4 class="text-2xs leading-tight">Head of Data analysis</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/a-frkatovic-hodzic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dr. Azra Frkatović-Hodžić</h3>
    <h4 class="text-2xs leading-tight">Data Analyst</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/m-pucic-bakovic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dr. Maja Pučić Baković</h3>
    <h4 class="text-2xs leading-tight">Head of Glycoprofiling</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/i-gudelj.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dr. sc. Ivan Gudelj</h3>
    <h4 class="text-2xs leading-tight">Senior researcher</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/t-klaric.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dr. sc. Thomas Klarić</h3>
    <h4 class="text-2xs leading-tight">Senior Researcher</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/am-patenaude.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Anne-Marie Patenaude, MSc</h3>
    <h4 class="text-2xs leading-tight">Laboratory Analyst</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/a-cindric.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Ana Cindrić</h3>
    <h4 class="text-2xs leading-tight">PhD Student</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/h-deris.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Helena Deriš</h3>
    <h4 class="text-2xs leading-tight">PhD Student</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/d-j-petrovic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dražen Juraj Petrović</h3>
    <h4 class="text-2xs leading-tight">PhD student</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/j-kristic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Jasminka Krištić, Ph.D.</h3>
    <h4 class="text-2xs leading-tight">Head of industrial development and innovation unit</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/t-stambuk.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Tamara Štambuk</h3>
    <h4 class="text-2xs leading-tight">Head of industrial development and innovation unit</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/a-skelin.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Andrea Skelin, Ph.D.</h3>
    <h4 class="text-2xs leading-tight">Research manager</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/n-nakic-bedekovic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dr. Natali Nakić Bedeković</h3>
    <h4 class="text-2xs leading-tight">Senior researcher</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/i-duvnjak-oreskovic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Ivana Duvnjak Orešković</h3>
    <h4 class="text-2xs leading-tight">DNA Analyst</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/d-hmura.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dajana Hmura</h3>
    <h4 class="text-2xs leading-tight">DNA analyst</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/m-fancovic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Matko Fančović</h3>
    <h4 class="text-2xs leading-tight">Laboratory Analyst and Automation Specialist</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/i-gulisija-radic.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Ivana Gulišija Radić</h3>
    <h4 class="text-2xs leading-tight">Scientist & Project Manager</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/a-mijakovac.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dr. Anika Mijakovac</h3>
    <h4 class="text-2xs leading-tight">Researcher</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/g-razdorov.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">MSc. Genadij Razdorov</h3>
    <h4 class="text-2xs leading-tight">Senior Mass Spectrometry Specialist and Glycobiology Researcher</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/o-zaitseva.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dr. Olga Zaitseva</h3>
    <h4 class="text-2xs leading-tight">Glycan Analysis Specialist</h4>
  </div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3">
    <img src="/images/team/m-martinic-kavur.png" alt="A portrait of a Genos employee">
    <h3 class="text-xs font-bold leading-tight mt-4">Dr. Marina Martinić Kavur</h3>
    <h4 class="text-2xs leading-tight">Head of Corporate Communications</h4>
  </div>
</div>

<div class="mt-24 sm:mt-40">
  <Section bg="/images/about/filled-half-circle.svg">
    <slot slot="title">We’re passionate about <span class="text-[#E58D19]">glycans</span></slot>

    <img src="/images/about/glycan.png" alt="" class="block ml-auto w-1/2 sm:w-full max-w-[400px]">

    <p class="text-sm max-w-[35ch] ml-auto mt-16">
      Glycans are the ultimate layer of complexity of life. These complex oligosaccharides change the structure and function of proteins and other molecules.
      <br><br>
      The level of molecular complexity achieved by glycosylation increases the proteome diversity to a level orders of magnitude greater than any other post-translational modification.
      <br><br>
      Proteins depend on secondary modifications to maintain structural integrity and perform their function. Over half of all existing proteins are glycosylated, the average mass representation of the majority of proteins are glycans. All secreted proteins are glycosylated and can serve as biomarkers.
      <br><br>
      Glycans are functional effectors in a variety of conditions, but also in autoimmune and chronic diseases. They are the biomarkers of inflammation and can prognose a variety of conditions.
    </p>
  </Section>
</div>


<div class="-mx-16 sm:-mx-24 md:-mx-40 mt-40">
  <svg class="w-full h-full" width="1680" height="131" viewBox="0 0 1680 131" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 44C59 44 82.8059 1 140 1C197.194 1 232 44 280 44C339 44 362.806 1 420 1C477.194 1 512 44 560 44C619 44 642.806 1 700 1C757.194 1 792 44 840 44C899 44 922.806 1 980 1C1037.19 1 1072 44 1120 44C1179 44 1202.81 1 1260 1C1317.19 1 1352 44 1400 44C1459 44 1482.81 1 1540 1C1597.19 1 1632 44 1680 44M0 87C59 87 82.8059 44 140 44C197.194 44 232 87 280 87C339 87 362.806 44 420 44C477.194 44 512 87 560 87C619 87 642.806 44 700 44C757.194 44 792 87 840 87C899 87 922.806 44 980 44C1037.19 44 1072 87 1120 87C1179 87 1202.81 44 1260 44C1317.19 44 1352 87 1400 87C1459 87 1482.81 44 1540 44C1597.19 44 1632 87 1680 87M0 130C59 130 82.8059 87 140 87C197.194 87 232 130 280 130C339 130 362.806 87 420 87C477.194 87 512 130 560 130C619 130 642.806 87 700 87C757.194 87 792 130 840 130C899 130 922.806 87 980 87C1037.19 87 1072 130 1120 130C1179 130 1202.81 87 1260 87C1317.19 87 1352 130 1400 130C1459 130 1482.81 87 1540 87C1597.19 87 1632 130 1680 130" stroke="#4095BF" stroke-width="2"/>
  </svg>

  <div class="px-16 sm:px-40 py-24">
    <h2 class="max-w-[16ch] text-xl sm:text-2xl font-bold leading-tight">Our passion project: <span class="text-[#4095BF]">Human Glycome</span></h2>
  </div>

  <img src="/images/about/glycome.png" alt="" class="w-full">

  <div class="px-16 sm:px-40 mt-24">
    <p class="ml-auto text-sm max-w-[35ch]">
      The Human Glycome Project is a research group that shares a common interest of defining the structures and functions of human glycome.
      <br><br>
      It’s goal is in-depth understanding of the effect that glycans have in health and disease.
      <br><br>
      Genos serves as the central hub in analysis of all human glycans.
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
      <a href="https://human-glycome.org/"
         target="_blank"
         rel="noreferrer noopener"
         class="text-base text-[#175E82] mx-6 hover:underline">
        human-glycome.org
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

  <svg class="w-full h-full mt-24" width="1680" height="131" viewBox="0 0 1680 131" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 44C59 44 82.8059 1 140 1C197.194 1 232 44 280 44C339 44 362.806 1 420 1C477.194 1 512 44 560 44C619 44 642.806 1 700 1C757.194 1 792 44 840 44C899 44 922.806 1 980 1C1037.19 1 1072 44 1120 44C1179 44 1202.81 1 1260 1C1317.19 1 1352 44 1400 44C1459 44 1482.81 1 1540 1C1597.19 1 1632 44 1680 44M0 87C59 87 82.8059 44 140 44C197.194 44 232 87 280 87C339 87 362.806 44 420 44C477.194 44 512 87 560 87C619 87 642.806 44 700 44C757.194 44 792 87 840 87C899 87 922.806 44 980 44C1037.19 44 1072 87 1120 87C1179 87 1202.81 44 1260 44C1317.19 44 1352 87 1400 87C1459 87 1482.81 44 1540 44C1597.19 44 1632 87 1680 87M0 130C59 130 82.8059 87 140 87C197.194 87 232 130 280 130C339 130 362.806 87 420 87C477.194 87 512 130 560 130C619 130 642.806 87 700 87C757.194 87 792 130 840 130C899 130 922.806 87 980 87C1037.19 87 1072 130 1120 130C1179 130 1202.81 87 1260 87C1317.19 87 1352 130 1400 130C1459 130 1482.81 87 1540 87C1597.19 87 1632 130 1680 130" stroke="#80BF40" stroke-width="2"/>
  </svg>

  <div class="px-16 sm:px-40 py-24 flex flex-wrap gap-24 sm:gap-40 justify-between">
    <h2 class="text-xl sm:text-2xl max-w-[10ch] font-bold leading-tight">From science to product: <span class="text-[#80BF40]">GlycanAge</span></h2>
    <img src="/images/about/glycanage.png" alt="" class="w-full max-w-[360px]">
  </div>

  <div class="px-16 sm:px-40">
    <p class="text-sm max-w-[36ch] ml-auto">
      GlycanAge is a biological age testing kit (and a health improvement service). It does so through measuring number of pro and anti inflammatory glycans attached to IgG.
      <br><br>
      It aims to help people increase the number of anti-inflammatory, and reduce number of pro-inflammatory glycans.
      <br><br>
      Genos has researched glycans as a biomarker over the past 20 years, and now servers as the central hub for GlycanAge blood sample analysis.
    </p>
    <div class="flex items-center justify-center mt-16">
        <span class="material-symbols-outlined text-base text-[#CCE5B2]">
          arrow_forward
        </span>
      <span class="material-symbols-outlined text-base text-[#CCE5B2] hidden sm:block">
          arrow_forward
        </span>
      <span class="material-symbols-outlined text-base text-[#CCE5B2] hidden sm:block">
          arrow_forward
        </span>
      <a href="https://glycanage.com/"
         target="_blank"
         rel="noopener"
         class="text-base text-[#4C8217] mx-6 hover:underline">
        glycanage.com
      </a>
      <span class="material-symbols-outlined text-base text-[#CCE5B2] hidden sm:block">
          arrow_back
        </span>
      <span class="material-symbols-outlined text-base text-[#CCE5B2] hidden sm:block">
          arrow_back
        </span>
      <span class="material-symbols-outlined text-base text-[#CCE5B2]">
          arrow_back
        </span>
    </div>
  </div>
</div>

<div class="mt-24">
  <Cta />
</div>

<style lang="postcss">
    .bubble {
        @apply relative bg-[#FFD400] ml-auto py-12 pl-16 pr-12 text-[2rem] font-bold max-w-[26ch] rounded-[2rem];
        box-shadow: 1.5rem 2rem 0 #E58D19;
    }

    .bubble-arrow {
        @apply absolute top-full w-1/6;
        filter: drop-shadow(1.5rem 2rem 0 #E58D19);
    }
</style>