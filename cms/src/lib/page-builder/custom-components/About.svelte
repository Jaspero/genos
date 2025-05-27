<svelte:options customElement={{ tag: 'pb-about', shadow: 'none' }} />

<script>
  import {language} from '$lib/page-builder/stores/language';
</script>

<div class="grid grid-small">
  <div class="gc-12">
    <h2>
      {@html
        $language === 'en'
          ? 'We are the largest and most advanced laboratory dedicated to glycan analysis, <b>setting the standard</b> in high-throughput glycomics research. With the capacity for <b>over 20,000 glycan and glycoproteomic analyses</b> annually, our laboratory handles the majority of global glycan research.'
          : 'Mi smo najveći i najnapredniji laboratorij posvećen analizi glikana, <b>postavljajući standard</b> u istraživanju glikomike visokog kapaciteta. S kapacitetom za <b>više od 20.000 analiza glikana i glikoproteoma</b> godišnje, naš laboratorij provodi većinu svjetskih istraživanja glikana.'
      }
    </h2>
  </div>
  <div class="gc-12 spacer">
    <div class="image-text">
      <div class="image">
        <img src="/images/glycomics-vertical.jpg" alt="glycanage kit">
      </div>
      <div class="text">
        <h2>{$language === 'en' ? 'Glycomics & Glycoproteomics' : 'Glikomika i Glikoproteomika'}</h2>
        <p class="text-p">
          {@html
            $language === 'en'
              ? 'Our journey began in 2008 with a pioneering study analyzing glycans from over 1,000 individuals on the Croatian island of Vis—one of the first large-scale glycomic studies at a time when high-throughput methods were still in development. This foundational work set the stage for Genos to become a global leader in glycomics.<br><br>Today, we perform over 20,000 glycan and glycoproteomic analyses annually, representing the majority of high-throughput glycan analysis worldwide. With a track record of over 300 scientific publications and 40 collaborative projects, our expertise extends across clinical research, pharmaceutical development, and biotech innovations.<br><br>Over the years, our team has grown to more than 50 employees, including 30 PhD scientists, making us one of the largest glycobiology research groups in the world. Beyond analytical services, we continuously develop and refine glycan analysis methods for diverse sample types, ensuring robust, scalable, and reproducible results. Our validated procedures for IgG and plasma glycan analysis have become routine in the field, reinforcing our role at the forefront of glycobiology.'
              : 'Naše putovanje započelo je 2008. godine pionirskim istraživanjem u kojem smo analizirali glikane više od 1.000 pojedinaca s hrvatskog otoka Visa — jednim od prvih velikih glikomskih istraživanja u vrijeme kada su metode visokog kapaciteta još bile u razvoju. Ovo temeljno istraživanje postavilo je temelje da Genos postane globalni predvodnik u glikomici.<br><br>Danas godišnje provodimo preko 20,000 analiza glikana i glikoproteoma, što predstavlja većinu visokoprotočnih analiza glikana u svijetu. S više od 300 znanstvenih publikacija i 40 suradničkih projekata iza sebe, naše se stručnosti protežu kroz klinička istraživanja, razvoj lijekova i biotehnološke inovacije.<br><br>Tijekom godina naš se tim proširio na više od 50 zaposlenika, uključujući 30 doktora znanosti, čime smo postali jedna od najvećih istraživačkih skupina u području glikobiologije u svijetu. Osim analitičkih usluga, kontinuirano razvijamo i unapređujemo metode analize glikana za razne vrste uzoraka, osiguravajući robusne, skalabilne i ponovljive rezultate. Naši validirani protokoli za analizu IgG i plazma glikana postali su standard u struci, dodatno učvršćujući našu vodeću ulogu u području glikobiologije.'
          }
        </p>
      </div>
    </div>
  </div>
  <div class="gc-12 spacer">
    <div class="image-text">
      <div class="image">
        <img src="/images/forensics-vertical.jpg" alt="glycanage kit">
      </div>
      <div class="text">
        <h2>{$language === 'en' ? 'DNA & Forensics' : 'DNK i Forenzika'}</h2>
        <p class="text-p">
          {@html
            $language === 'en'
              ? 'Alongside our work in glycomics, Genos has a rich history in DNA analysis. Founded in 2007, the Genos DNA & Forensic Laboratory was the first private DNA laboratory in the region and continues to be a leader in human and animal genetic testing in Croatia.<br><br>All DNA analyses are conducted in-house at our Zagreb laboratory using state-of-the-art equipment for precise and reliable results. Genos is part of the internationally certified GEDNAP (German DNA Profiling) quality control system, ensuring the highest standards in forensic DNA testing. As the first private lab in Croatia authorized for forensic DNA analysis, our experts have contributed to national identification efforts, including the post-war victim identification program.<br><br>Unlike companies that outsource testing, Genos performs all analyses internally, maintaining full control over quality and accuracy.'
              : 'Uz naš rad u glikomici, Genos ima bogatu povijest u analizi DNK. Osnovan 2007. godine, Genosov DNK i forenzički laboratorij bio je prvi privatni DNK laboratorij u regiji i i dalje je vodeći u testiranju ljudske i životinjske genetike u Hrvatskoj.<br><br>Sve DNK analize provodimo interno u našem laboratoriju u Zagrebu koristeći najsuvremeniju opremu za precizne i pouzdane rezultate. Genos je dio međunarodno certificiranog sustava kontrole kvalitete GEDNAP (njemačko profiliranje DNK), čime se osiguravaju najviši standardi u forenzičkoj DNK analizi. Kao prvi privatni laboratorij u Hrvatskoj ovlašten za forenzičku DNK analizu, naši su stručnjaci pridonijeli nacionalnim identifikacijskim naporima, uključujući program identifikacije žrtava nakon rata.<br><br>Za razliku od tvrtki koje testiranja prepuštaju vanjskim partnerima, Genos sve analize provodi interno, zadržavajući potpunu kontrolu nad kvalitetom i točnošću.'
          }
        </p>
      </div>
    </div>
  </div>
  <div class="gc-12 spacer">
    <div class="image-text">
      <div class="image">
        <img src="/images/epigenetics-vertical.jpg" alt="glycanage kit">
      </div>
      <div class="text">
        <h2>{$language === 'en' ? 'Epigenetics' : 'Epigenetika'}</h2>
        <p class="text-p">
          {@html
            $language === 'en'
              ? 'Epigenetics Laboratory has been officially part of the Genos Research Laboratory since 2022 with the primary focus on unraveling the complex epigenetic regulation of protein glycosylation.<br><br>By repurposing CRISPR/Cas9 technology for epigenome editing, we specifically manipulate the expression of targeted genes, including various GWAS or EWAS hits, to disentangle the epigenetic regulatory network of protein glycosylation.<br><br>We have designed a modular CRISPR/dCas9-based Epi-Toolbox. This toolbox enables targeted gene regulation, manipulation of DNA methylation, various histone post-translational modifications, and genome editing. Furthermore, we also aim to understand the crosstalk between different epigenetic mechanisms in gene expression regulation, DNA methylation introduction, and maintenance.'
              : 'Epigenetski laboratorij je službeno postao dio Istraživačkog laboratorija Genos 2022. godine, s primarnim fokusom na razotkrivanje složene epigenetske regulacije glikozilacije proteina.<br><br>Prenamjenom CRISPR/Cas9 tehnologije za epigenomsko uređivanje, specifično manipuliramo ekspresijom ciljanih gena, uključujući razne GWAS ili EWAS nalaze, kako bismo rasvijetlili epigenetsku regulatornu mrežu glikozilacije proteina.<br><br>Dizajnirali smo modularni CRISPR/dCas9 bazirani Epi-Toolbox. Ova alatka omogućuje ciljanu regulaciju gena, manipulaciju metilacije DNK, razne posttranslacijske modifikacije histona te uređivanje genoma. Nadalje, cilj nam je razumjeti međudjelovanje različitih epigenetskih mehanizama u regulaciji genske ekspresije, uvođenju i održavanju metilacije DNK.'
          }
        </p>
      </div>
    </div>
  </div>
</div>