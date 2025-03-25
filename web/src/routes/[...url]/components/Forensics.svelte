<svelte:options customElement={{ tag: 'pb-forensics', shadow: 'none' }} />

<script>
  let tab = 1;
</script>

<div class="grid grid-large services-grid">
  <h2 class="col-span-12">What we offer</h2>
  <div class="col-span-4 tab-selectors">
    <button class="tab-selector" class:active={tab === 1} on:click={() => tab = 1}>Determination of paternity</button>
    <button class="tab-selector" class:active={tab === 2} on:click={() => tab = 2}>Determination of kinship</button>
    <button class="tab-selector" class:active={tab === 3} on:click={() => tab = 3}>Non-invasive prenatal determination of sex and paternity</button>
    <button class="tab-selector" class:active={tab === 4} on:click={() => tab = 4}>Other analyses</button>
    <button class="tab-selector" class:active={tab === 5} on:click={() => tab = 5}>Determination of bird sex through DNA analysis</button>
    <button class="tab-selector" class:active={tab === 6} on:click={() => tab = 6}>How testing is conducted</button>
    <button class="tab-selector" class:active={tab === 7} on:click={() => tab = 7}>Data confidentiality</button>
  </div>
  <div class="col-span-8 tabs">
    {#if tab === 1}
      <ul>
        <li>Paternity test for personal use using the analysis of 18 or 24 STR markers</li>
        <li>Paternity expert analysis for court proceedings using the analysis of 24 STR markers</li>
      </ul>
      <br>
      The result of a DNA analysis is fundamental evidence in many civil and criminal cases in municipal and county courts. While DNA analysis can definitively determine a person's identity or biological trace, it is not infallible and requires extensive knowledge and experience for accurate interpretation of laboratory results.
      <br><br>
      Genos was the first private laboratory in Croatia to be listed among legal entities authorized for forensic DNA analysis, recognized by our clients as an added value, providing confidence in the accuracy of our analyses.
      <br><br>
      With a full-time forensic expert with years of experience in DNA analysis, we also collaborate with other court-appointed forensic experts in Croatia. Our associates were part of the national project for the identification of Homeland War victims, conducted by the Administration for Detained and Missing Persons, Ministry of Family, Veterans, and Intergenerational Solidarity.
      <br><br>
      Unlike companies that mostly send samples to other laboratories for analysis, we process all samples in our laboratory in Zagreb.
      <br><br>

      <b>Paternity/Maternity Testing - Personal Use</b>
      <br><br>
      For paternity/maternity testing upon personal request, comparing the DNA profiles of one parent and the child is sufficient. We analyze 16 or 24 STR markers (loci), which are internationally recognized as highly discriminatory, providing a probability of biological parenthood greater than 99.99%.
      <br><br>
      For increased accuracy, it is recommended to include the mother's sample in the analysis. When analyzing standard samples from the presumed father, child, and mother, the mother's sample is tested free of charge.
      <br><br>
      After obtaining and comparing DNA profiles in paternity tests, required alleles are identified to determine if the presumed father has the necessary alleles. A required allele is one inherited from the biological parent.
      <br><br>
      If the test result shows a mismatch between the child and the presumed father in at least three required alleles, it definitively confirms that the tested individual is not the biological father. If there is a mismatch in one or two genetic markers, it could be due to mutations (which are relatively common). In such cases, we recommend including the mother in the analysis or testing additional genetic markers. If necessary or upon request, Genos can perform an extended analysis of up to 24 markers for an additional fee.
      <br><br>

      <b>Paternity/Maternity Testing - Legal Cases</b>
      <br><br>
      Paternity/maternity determination for court proceedings is conducted based on a decision from the competent court, comparing the genotypes of the mother, child, and presumed father. As a court-appointed forensic expert, Genos provides expert reports that are admissible as legal evidence, allowing clients to avoid unnecessary costs of duplicate paternity tests (first for personal use, then for court proceedings).
      <br><br>
      The probability values for paternity determination in legal cases range from one in several million to one in several billion. The minimum threshold required for legally conclusive paternity determination in court is 99.999%.
    {:else if tab === 2}
      <b>Determining Relationship Through the Male Line</b>
      <br><br>
      We determine relationships through the male lineage by analyzing 23 STR loci on the Y chromosome. Since the sex chromosome is inherited unchanged, kinship is confirmed by the complete match of all analyzed Y STR loci. Any changes that may occur are mutations—random substitutions of individual nucleotides that happen sporadically, spontaneously, and very rarely.
      <br><br>
      The Y chromosome is inherited through the male line, passing directly from father to son. This means that all male relatives on the father's side share the same loci on the Y chromosome, resulting in an identical Y DNA profile.
      <br><br>
      This method is useful and applicable in cases of indirect paternity determination for male children when a male relative on the father’s side (brother, grandfather, uncle, or any male family member) can replace a deceased alleged father. It is also used to confirm kinship between brothers, grandfathers and grandsons, uncles and nephews, and so on. Additionally, it is applicable in the process of identifying a male individual when only paternal relatives are available.
      <br><br>
      Y chromosome testing is useful in cases where:
      <ul>
        <li>Brothers want to verify if they have the same biological father</li>
        <li>Adopted male children are searching for their biological father or other male family members</li>
        <li>An official proof of kinship between male individuals is required, such as in legal disputes or immigration cases</li>
      </ul>
      <br><br>

      <b>Determining Relationship Between Siblings and Half-Siblings</b>
      <br><br>
      We determine kinship in the first generation between potential full siblings and half-siblings by analyzing 24 STR loci. The test is performed when the presumed father is unavailable for analysis, and potential siblings or half-siblings want to confirm whether they share the same father.
      <br><br>
      There are two types of tests:
      <ul>
        <li>Sibling relationship test</li>
        <li>Half-sibling relationship test</li>
      </ul>
      <br><br>

      <b>Determining Relationship Between Grandparents and Grandchildren</b>
      <br><br>
      We determine kinship between grandparents and grandchildren by analyzing 24 STR loci. This test is performed when the presumed father is unavailable for testing. It helps determine whether a child is related to their grandparents, thereby assisting in the identification of the child’s biological father. The same test can also be used to confirm maternity.
    {:else if tab === 3}
      <b>Prenatal Gender Determination and Paternity Testing</b>
      <br><br>
      The gender of a child is most commonly determined through ultrasound. However, there are cases where this is not possible, and in such situations, prenatal gender determination of the fetus can be applied.
      <br><br>
      This process involves analyzing free fetal DNA from the mother’s blood by examining Y STR markers. Since the Y chromosome is characteristic only of the male sex, prenatal fetal DNA analysis detects whether a Y chromosome is present. If it is, the analysis will generate a Y DNA profile for the tested STR loci, indicating that the fetus is male. If the fetus is female, there is no Y chromosome in the mother’s blood, so no Y DNA profile will be detected.
      <br><br>
      The first research results on prenatal gender determination were published in 2008 by researchers from the Genos DNA laboratory in collaboration with other scientific institutions, in the prestigious journal "Prenatal Diagnosis."
      <br><br>
      Paternity testing in this case is only possible for a male child. The obtained Y DNA profile of the fetus is compared with the Y DNA profile of the potential father.
      <br><br>
      Prenatal paternity testing is not possible if the potential fathers are direct blood relatives along the male lineage, as they all have an identical Y chromosome. Due to the limitations of this analysis, it is recommended that all potential fathers be tested, and that the DNA analysis be repeated after the child is born to confirm paternity. Since this test only provides information about direct male-line blood relationships, it cannot provide a definitive confirmation of paternity but can determine whether a potential father can be excluded as the biological father.
      <br><br>
      Testing is conducted from the 14th week of pregnancy. To visit the laboratory, the pregnant woman must schedule an appointment and bring her maternity record book. The analysis requires 9 ml of the mother’s venous blood and a buccal swab from the potential father. The blood sampling procedure is completely safe for the fetus.
    {:else if tab === 4}
      <b>DNA Profiling</b>
      <br><br>
      DNA profiling is most commonly requested for comparison purposes, verification of an existing DNA profile or report, or as a supplement to a previously conducted paternity or kinship test. A DNA profile provides genetic identification evidence and can be used in numerous cases, such as:
      <ul>
        <li>in cases of inheritance claims or disputes</li>
        <li>in resolving cases of lost or abducted children</li>
        <li>in immigration disputes</li>
        <li>for individuals in high-risk professions</li>
        <li>for insurance purposes</li>
        <li>in cases of natural disasters, accidents, terrorist attacks, etc.</li>
        <li>when there is suspicion of biological sample mix-up (e.g., tissue embedded in a paraffin block in cases of diagnosed cancer, sperm sample mix-up during IVF procedures).</li>
      </ul>
      <br>
      DNA profiling is conducted by analyzing 24 STR loci.
      <br><br>

      <b>Detection of Semen Traces</b>
      <br><br>
      The presence of semen traces on various samples (clothing, bedding, towels, vaginal swabs, etc.) is determined using the RSID™-Semen test (Rapid Stain Identification of Human Semen; Independent Forensics, USA). The RSID™-Semen test is based on detecting the presence of the human protein semenogelin using an immunochromatographic test strip, employing two anti-semenogelin monoclonal antibodies.
      <br><br>

      <b>DNA Isolation</b>
      <br><br>
      DNA isolation is primarily performed upon request for clients who need a DNA isolate for molecular diagnostic tests, which form the basis of personalized medicine, such as:
      <ul>
        <li>determining genetic predisposition to certain diseases or disorders for timely and targeted prevention and/or treatment</li>
        <li>assessing treatment outcomes to reduce ineffective treatments (pharmacogenetics).</li>
      </ul>
      <br>
      Often, these analyses are not available in Croatia, requiring the DNA isolate to be sent abroad.
      <br><br>
      For DNA isolation, 3 mL of whole blood is required in a vacutainer tube with EDTA anticoagulant (purple cap). It is best to deliver the blood immediately after collection, but if necessary, it can be stored at +4°C for a few hours or at -20°C for extended periods.
    {:else if tab === 5}
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
      <b>Confidentiality of Data</b>
      <br><br>
      The results of every test conducted are strictly confidential. Biological samples submitted for DNA analysis are destroyed after the analysis is completed, and all computer records are deleted 5 years after the results are issued. During this period, a copy of the issued result can be requested, but only with a personal written request from the Client who ordered the analysis.
      <br><br>
      The Genos DNA laboratory uses the most advanced DNA analysis methods to provide accurate answers to all questions posed. Unfortunately, sometimes the results do not match the expectations of the client and/or other participants in the testing, which can have negative emotional and social consequences. Genos d.o.o. is not authorized to provide psychological counseling services and cannot offer direct assistance in such situations.
      <br><br>
      If the results of the DNA analysis cause negative emotions such as dissatisfaction, anger, fear, sadness, or concern, we strongly recommend that you seek professional assistance from one of the following addresses, your family doctor, or a psychologist at the relevant social welfare center.
      <br><br>
      Psychological Center TESA, tel. 01 48 28 888 / <a class="underline" href="www.tesa.hr" target="_blank" rel="noreferrer noopener">www.tesa.hr</a>
      <br><br>
      Society for Psychological Help, MODUS – Center for Children, Youth, and Families, tel. 01 4621 554 / <a class="underline" href="www.dpp.hr" target="_blank" rel="noreferrer noopener">www.dpp.hr</a>
    {/if}
  </div>
</div>