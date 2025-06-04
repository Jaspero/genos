<svelte:options customElement={{ tag: 'pb-forensics', shadow: 'none' }} />

<script>
  import {language} from '$lib/page-builder/stores/language';

  let tab = 1;
</script>

<div class="grid grid-large services-grid">
  <div class="col-span-4 tab-selectors">
    <div class="flex flex-col mb-4">
      <h2>{$language === 'en' ? 'Services' : 'Usluge'}</h2>
      <a href="/{$language === 'en' ? 'glycomics' : 'glikomika'}" class="tab-selector">{$language === 'en' ? 'Glycomics' : 'Glikomika'}</a>
      <a href="/{$language === 'en' ? 'epigenetics' : 'epigenetika'}" class="tab-selector">{$language === 'en' ? 'Epigenetics' : 'Epigenetika'}</a>
      <span class="tab-selector active">{$language === 'en' ? 'DNA and Forensics' : 'DNA i Forenzika'}</span>
    </div>
    <div class="flex flex-col">
      <h2>{$language === 'en' ? 'Types of Tests Offered' : 'Vrste ponuđenih testova'}:</h2>
      <button class="tab-selector" class:active={tab === 1} on:click={() => tab = 1}>Paternity testing</button>
      <button class="tab-selector" class:active={tab === 2} on:click={() => tab = 2}>Kinship testing</button>
      <button class="tab-selector" class:active={tab === 3} on:click={() => tab = 3}>Non-Invasive Prenatal Gender and Paternity Testing</button>
      <button class="tab-selector" class:active={tab === 4} on:click={() => tab = 4}>Other analyses</button>
      <button class="tab-selector" class:active={tab === 5} on:click={() => tab = 5}>Avian Gender Determination via DNA Analysis</button>
      <button class="tab-selector" class:active={tab === 6} on:click={() => tab = 6}>Testing Procedure</button>
      <button class="tab-selector" class:active={tab === 7} on:click={() => tab = 7}>Data confidentiality</button>
    </div>
  </div>
  <div class="col-span-8 tabs">
    {#if tab === 1}
      <ul>
        <li>Personal Paternity Test – Analysis of 18 or 24 STR markers</li>
        <li>Legal Paternity Test – Analysis of 24 STR markers for court proceedings</li>
      </ul>
      <br>
      DNA analysis results serve as crucial evidence in numerous civil and criminal cases. While DNA analysis can definitively determine the identity of an individual or biological traces, correct interpretation of laboratory results requires significant expertise and experience.
      <br><br>
      Genos d.o.o. was the first private laboratory in Croatia authorized to perform forensic DNA analysis, a distinction recognized by our clients as an added value, fostering trust in the reliability of our results.
      <br><br>
      Our team includes a full-time court expert with extensive experience in DNA analysis, along with collaborations with other court experts in Croatia. Our experts were part of the national team that conducted victim identifications from the Homeland War under the Ministry of Family, Veterans, and Intergenerational Solidarity.
      <br><br>
      Unlike companies that outsource DNA sample testing, we handle all analyses in our laboratory in Zagreb.
      <br><br>

      <b>Paternity/Maternity Testing for Personal Purposes</b>
      <br><br>
      For personal paternity/maternity testing, comparing the DNA profiles of one parent and the child is sufficient. We analyze 16 or 24 STR markers (loci), which are internationally recognized as sufficiently discriminatory, providing a probability of biological parenthood greater than 99.99%.
      <br><br>
      For higher paternity accuracy, we recommend including the mother's sample in the analysis. When standard samples from the presumed father, child, and mother are tested, the mother's sample is analyzed free of charge.
      <br><br>
      After obtaining and comparing DNA profiles, for paternity testing, mandatory alleles are identified to determine if the presumed father carries the required alleles. A mandatory allele is one inherited from the biological parent.
      <br><br>
      If the analysis shows a mismatch in at least three mandatory alleles between the child and the presumed father, it is conclusive that the presumed father is not the biological father of the child. In cases of a mismatch in one or two molecular markers, mutations (which are relatively common) can be considered. In such cases, it is recommended to include the mother's sample in the analysis or test additional genetic markers. If desired or needed, Genos can perform an analysis of 24 markers for an additional fee.
      <br><br>

      <b>Paternity/Maternity Testing for Legal Proceedings</b>
      <br><br>
      Paternity/maternity testing for legal proceedings is conducted based on a court order, by comparing the genotypes of the mother, child, and presumed father. As a certified court expert, Genos d.o.o. performs paternity testing at the request of individuals, and the findings and opinions of our authorized expert are valid as evidence in court. This helps avoid unnecessary costs of double testing (once for personal purposes and once for legal proceedings).
      <br><br>
      The probability values for paternity in legal cases range from one in several million to one in several billion. The minimum threshold required for conclusive paternity determination in court is 99.999%.
    {:else if tab === 2}
      <ul>
        <li>Male Lineage Testing – Analysis of 23 STR markers on the Y chromosome</li>
        <li>Sibling and Half-Sibling Testing – Analysis of 24 STR markers</li>
        <li>Grandparent-Grandchild Testing – Analysis of 24 STR markers</li>
      </ul>
      <br>
      <b>Paternity Testing Through the Male Line</b>
      <br><br>
      Paternity testing through the male line is conducted by analyzing 23 STR markers on the Y chromosome. Since the sex chromosome is inherited unchanged, kinship is confirmed by a complete match of all the analyzed Y STR markers. Any changes that might occur are mutations, which are random nucleotide substitutions that happen spontaneously and very rarely.
      <br><br>
      The Y chromosome is inherited through the male line, passed directly from father to son. Therefore, all male relatives on the paternal side share the same markers on the Y chromosome, meaning they have an identical Y DNA profile.
      <br><br>
      This method is useful in indirect paternity testing for male children when a male relative on the paternal side (brother, grandfather, uncle, or any male family member) can substitute for the deceased alleged father. It can also be applied for proving kinship between brothers, grandfather and grandson, uncle and nephew, etc. The test is also used in male identification cases when only paternal relatives are available.
      <br><br>
      Y chromosome testing is valuable in the following cases:
      <ul>
        <li>When brothers want to confirm they share the same biological father</li>
        <li>When adopted male children seek to find their biological father or other male relatives</li>
        <li>When official proof of kinship is required between males, such as in legal disputes or immigration cases.</li>
      </ul>
      <br>
      <b>Sibling and Half-Sibling Testing</b>
      <br><br>
      Kinship testing for first-generation relationships between potential siblings and half-siblings is conducted by analyzing 24 STR markers. The test is used when the presumed father is unavailable for testing, and potential brothers or sisters, or half-siblings, want to confirm if they share the same father.
      <br><br>
      There are two types of tests:
      <ul>
        <li>Full-Sibling Test – To confirm if two individuals share the same biological parents</li>
        <li>Half-Sibling Test – To confirm if two individuals share one biological parent.</li>
      </ul>
      <br>
      <b>Grandparent-Grandchild Testing</b>
      <br><br>
      Grandparent-grandchild testing is performed by analyzing 24 STR markers and is conducted when the presumed father is unavailable for testing. The test confirms whether the child is biologically related to the grandparents, thus aiding in identifying the biological father. This test can also assist in confirming maternity.
    {:else if tab === 3}
      <ul>
        <li>Analysis of free fetal DNA from the mother’s blood using 23 Y STR markers</li>
      </ul>
      <br>
      <b>Prenatal Gender Determination and Paternity Testing</b>
      <br><br>
      The sex of a baby is usually determined via ultrasound. However, in cases where this is not possible, prenatal gender determination can be performed through a DNA test.
      <br><br>
      This test analyzes free fetal DNA present in the mother’s blood by detecting Y STR markers. Since the Y chromosome is unique to males, the presence of a Y chromosome confirms that the fetus is male. If no Y chromosome is detected, the fetus is female.
      <br><br>
      Genos DNA Laboratory researchers, in collaboration with other scientific institutions, were among the first to publish findings on prenatal gender determination in the prestigious journal Prenatal Diagnosis in 2008.
      <br><br>
      Paternity testing before birth is only possible if the fetus is male. The fetal Y DNA profile is compared to the Y DNA profile of the potential father to determine if they match.
      <br><br>
      However, prenatal paternity testing is not possible if the potential fathers are close male relatives (e.g., brothers or father and son) since they share an identical Y chromosome. Due to this limitation, it is recommended to test all potential fathers and confirm paternity with a standard DNA test after birth. This analysis can only determine whether a potential father can be the biological father but cannot definitively confirm paternity—it can only exclude a man as the biological father.
      <br><br>
      Testing is available from the 14th week of pregnancy. An appointment must be scheduled in advance, and the expectant mother must bring her pregnancy record book. The test requires 9 ml of the mother’s venous blood and a buccal swab from the potential father. The blood draw is completely safe for the fetus.
    {:else if tab === 4}
      <ul>
        <li>DNA Profiling – Analysis of 24 STR markers</li>
        <li>Detection of Seminal Fluid Traces</li>
        <li>DNA Isolation</li>
      </ul>
      <b>DNA Profiling</b>
      <br><br>
      DNA profiling is often requested to verify an existing DNA profile, confirm the authenticity of previous test results, or supplement earlier paternity or kinship tests. A DNA profile serves as genetic identification and can be used in various cases, such as:
      <br>
      <ul>
        <li>Establishing or disputing inheritance rights</li>
        <li>Resolving cases of missing or abducted children</li>
        <li>Immigration disputes</li>
        <li>For individuals in high-risk professions</li>
        <li>Insurance purposes</li>
        <li>Identifying victims of natural disasters, accidents, or terrorist attacks</li>
        <li>Investigating potential sample mix-ups (e.g., verifying preserved tissue samples in cancer diagnoses or ensuring proper handling of reproductive cells in IVF procedures)</li>
      </ul>
      <br>
      DNA profiling is performed by analyzing 24 STR loci.
      <br><br>
      <b>Detection of Semen Traces</b>
      <br><br>
      The presence of semen traces on various samples (e.g., clothing, bedding, towels, vaginal swabs) is determined using the RSID™-Semen test (Rapid Stain Identification of Human Semen; Independent Forensics, USA). This test detects the presence of human semenogelin protein via an immunochromatographic strip assay using two anti-semenogelin monoclonal antibodies.
      <br><br>
      <b>DNA Isolation</b>
      <br><br>
      DNA isolation is typically performed upon request when the DNA sample is needed for molecular diagnostic tests, which are essential for personalized medicine. These tests may include:
      <br><br>
      Assessing genetic predisposition to certain diseases or disorders to enable early prevention and targeted treatment
      <br><br>
      Evaluating treatment outcomes to improve drug efficacy and reduce ineffective treatments (pharmacogenetics)
      <br><br>
      Since some of these analyses are not available in Croatia, the isolated DNA sample is often sent abroad for testing.
      <br><br>
      For DNA isolation, a 3 mL whole blood sample is required in a vacutainer tube with EDTA anticoagulant (purple cap). The sample should ideally be delivered immediately after collection. If necessary, it can be stored at +4°C for a few hours or at -20°C for longer periods.
    {:else if tab === 5}
      <ul>
        <li>Analysis of bird sex chromosomes to differentiate male and female birds</li>
      </ul>
      <br>
      <b>Avian Gender Determination</b>
      <br><br>
      The sex of many bird species cannot be determined based on physical appearance and characteristics. By using DNA analysis methods, it is possible to examine parts of the birds' sex chromosomes. This allows us to distinguish between male birds (ZZ) and female birds (ZW).
      <br><br>
      <b>Advantages of DNA Analysis</b>
      <ul>
        <li>The sex of a bird can be determined from feather or blood samples.</li>
        <li>The accuracy of DNA-based sex determination does not depend on the bird's age.</li>
        <li>The accuracy of DNA sex determination is very high (>99%).</li>
        <li>Knowing the bird's sex increases its value.</li>
        <li>The analysis is conducted by experts with years of experience in DNA analysis.</li>
      </ul>
      <br>
      <b>Sample collection</b>
      <ul>
        <li>3–5 freshly plucked feathers, preferably from the bird's chest (collect without touching the tip of the feather with your hands).</li>
        <li>2–3 drops of blood on a card or tissue (sample collection cards for blood can be requested from the Genos DNA laboratory).</li>
        <li>Each bird's sample should be placed in a separate envelope.</li>
        <li>Samples can be sent by mail or delivered in person.</li>
        <li>When sending samples by mail, include an order form and proof of payment for the analysis.</li>
      </ul>
      <br>
      <a href="/pdfs/genbird-hr.pdf" target="_blank" class="underline">Instructions for Collecting Feather and Blood Samples</a>
      <br><br>
      <b>Results</b>
      <ul>
        <li>The average time for sex determination is 5–10 business days.</li>
        <li>Results can be sent by mail or email.</li>
      </ul>
    {:else if tab === 6}
      <b>How Is Testing Conducted?</b>
      <br><br>
      At the Genos DNA laboratory, paternity/kinship determination through DNA analysis is conducted quickly and painlessly by collecting buccal swab samples (swabbing the inner cheek lining). Blood sampling is not required.
      <br><br>
      Fasting before sample collection is not necessary. However, an appointment must be scheduled before visiting the laboratory!
      <br><br>
      Sample collection can be performed at our laboratory in
      <a class="underline" href="https://www.google.hr/maps/place/Genos+d.o.o.,+DNA+laboratorij/@45.8108515,16.0374966,17z/data=!3m1!4b1!4m5!3m4!1s0x4765d64a422268f1:0xe1b9f7b230482795!8m2!3d45.8108478!4d16.0396853" target="_blank">Zagreb (Borongajska cesta 83 H, 1st floor, BIOCenter building, within the Borongaj Science and Education Campus)</a>,
      or at our office in
      <a class="underline" href="https://maps.app.goo.gl/LJR1P1YqEGBp8uD96" target="_blank">Osijek (Drniška 9)</a>.
      <br><br>
      For sample collection from minors, the presence of both parents or guardians is required, or a written and notarized consent from the absent parent/guardian.
      <br><br>
      There is no age restriction for paternity determination.
      <br><br>
      If testing is requested for personal use in legal proceedings, an appointment must be scheduled in advance. All parties must attend the sample collection together at the agreed time. For identification, they must bring a valid ID card or another valid photo document (which includes a personal identification number - OIB), and for a child, a birth certificate and an ID card (if available). The child's identity must be confirmed by all parties in the process by signing the order form.
      <br><br>
      If paternity testing is conducted at the court’s request, an authorized Genos representative can collect the samples at the court during the hearing or at the Genos premises based on a court order.
      <br><br>
      You can also collect samples yourself in the privacy of your home using the **DNA Sample Collection Kit**.
      <br><br>
      <b>Results Available in the Shortest Possible Time!</b>
      <br><br>
      For personal paternity/kinship testing, the standard timeframe for analysis completion and result delivery is **7 working days** from the date of payment and sample receipt at the laboratory.
      For urgent testing, results are available within **4 working days** (subject to an additional fee).
      <br><br>
      For court-ordered testing, the timeframe for completing the analysis and delivering the expert report is **10 working days**.
      <br><br>
      The test results are delivered exclusively to the Client or the person specified by the Client in the signed order form (in person, via email, or by mail).
      <br><br>
      <b>Download:</b>
      <a class="underline" href="/pdfs/cjenik.pdf" download="cjenik genos usluga">Price List</a>
    {:else if tab === 7}
      <b>Data Confidentiality</b>
      <br><br>
      All DNA test results are strictly confidential. Biological samples submitted for DNA analysis are destroyed after testing, and all digital records are deleted 5 years after results are issued. Within this period, a copy of the issued results can be requested only by the original client through a written request.
      <br><br>
      The Genos d.o.o. DNA laboratory uses cutting-edge DNA analysis methods to provide accurate answers to all inquiries. However, in some cases, results may not align with expectations, which can have emotional and social consequences. Genos d.o.o. is not authorized to provide psychological counseling and cannot offer direct support in such situations.
      <br><br>
      If DNA test results cause emotional distress such as dissatisfaction, anger, fear, sadness, or concern, we strongly recommend seeking professional support from one of the organizations listed below, a family doctor, or a psychologist at the relevant social services center.
      <br><br>
      Psychological Center TESA, tel. 01 48 28 888 / <a class="underline" href="www.tesa.hr" target="_blank" rel="noreferrer noopener">www.tesa.hr</a>
      <br><br>
      Society for Psychological Help, MODUS – Center for Children, Youth, and Families, tel. 01 4621 554 / <a class="underline" href="www.dpp.hr" target="_blank" rel="noreferrer noopener">www.dpp.hr</a>
    {/if}
  </div>
</div>