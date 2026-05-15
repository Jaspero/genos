import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const credential = JSON.parse(readFileSync(join(__dirname, '..', 'web', 'key.json'), 'utf8'));

const app = admin.initializeApp({
  credential: admin.credential.cert(credential),
  storageBucket: 'genos-ec52a.firebasestorage.app'
});

const firestore = app.firestore();

async function main() {
  // Find the existing article
  const snap = await firestore.collection('blog-articles')
    .where('url', '==', 'natjecaj-postdoktorand-glycobrain')
    .get();

  if (snap.empty) {
    console.error('Article not found!');
    process.exit(1);
  }

  const docRef = snap.docs[0].ref;
  const existing = snap.docs[0].data();
  console.log('Found article:', snap.docs[0].id);

  // Croatian content (original from the document)
  const contentHr = `<p><strong>Genos d.o.o. za vještačenje i analizu raspisuje natječaj za zapošljavanje jednog (1) zaposlenika (m/ž) na radno mjesto postdoktoranda na projektu Programa „Istraživački Projekt" Hrvatske zaklade za znanost „Dekodiranje moždanog glikoma: Ciljano glikoproteomsko istraživanje ljudskog mozga" (akronim: GlycoBrain):</strong></p>
<ul><li><strong>Radno mjesto: jedan (1) postdoktorand za rad na aktivnostima projekta koji uključuju analizu glikozilacije proteina pod mentorstvom dr. sc. Thomasa Klarića (Genos)</strong></li></ul>
<p>Ugovor o radu sklapa se na određeno vrijeme dok traje projekt (do 30.11.2027.) u punom radnom vremenu.</p>
<p><strong>Obavezni uvjeti:</strong></p>
<ul>
<li>završen odgovarajući doktorski studij u području prirodnih znanosti (molekularna biologija, eksperimentalna biologija, biokemija) ili biomedicine i zdravstva (medicina, farmacija, medicinska biokemija)</li>
<li>znanje engleskog jezika te rada na računalu</li>
<li>prethodno iskustvo rada u laboratoriju te iskustvo u osnovnim tehnikama molekularne biologije i proteomike</li>
</ul>
<p><strong>Dodatni kriteriji:</strong></p>
<ul>
<li>iskustvo rada u inozemnom laboratoriju</li>
<li>poznavanje kromatografskih analitičkih metoda</li>
<li>iskustvo analize proteina i/ili glikana masenom spektrometrijom</li>
<li>znanje analize i vizualizacije podataka te statističke analize podataka u programu R</li>
<li>poznavanje bioinformatičkih alata za analizu glikopeptida (npr. ProteinScape™, DataAnalysis™)</li>
<li>iskustvo u razvoju metoda za analizu glikopeptida masenom spektrometrijom</li>
<li>prethodno sudjelovanje u znanstveno-istraživačkom radu i osobna izlaganja na znanstvenim konferencijama</li>
</ul>
<p><strong>Prijava na natječaj treba sadržavati:</strong></p>
<ul>
<li>motivacijsko pismo</li>
<li>životopis</li>
<li>dokaz o završenom doktorskom studiju</li>
<li>pismo preporuke od bivšeg ili sadašnjeg mentora ili poslodavca</li>
</ul>
<p>Na natječaj se mogu prijaviti osobe oba spola.</p>
<p>Rok za podnošenje prijava je 7 dana od dana objave u Narodnim novinama.</p>
<p>Nepotpune i nepravovremene prijave neće se razmatrati.</p>
<p><strong>Molimo zainteresirane da prijave šalju na e-mail adresu <a href="mailto:dpeic@genos.hr">dpeic@genos.hr</a></strong></p>`;

  // English translation
  const contentEn = `<p><strong>Genos d.o.o. for expertise and analysis is opening a call for the employment of one (1) employee (m/f) for the position of postdoctoral researcher on the Croatian Science Foundation "Research Project" Programme project "Decoding the Brain Glycome: Targeted Glycoproteomic Investigation of the Human Brain" (acronym: GlycoBrain):</strong></p>
<ul><li><strong>Position: one (1) postdoctoral researcher for work on project activities involving the analysis of protein glycosylation under the mentorship of Dr. Thomas Klarić (Genos)</strong></li></ul>
<p>The employment contract is for a fixed term for the duration of the project (until 30 November 2027) on a full-time basis.</p>
<p><strong>Mandatory requirements:</strong></p>
<ul>
<li>completed relevant doctoral degree in the field of natural sciences (molecular biology, experimental biology, biochemistry) or biomedicine and health (medicine, pharmacy, medical biochemistry)</li>
<li>knowledge of the English language and computer skills</li>
<li>previous laboratory experience and experience in basic techniques of molecular biology and proteomics</li>
</ul>
<p><strong>Additional criteria:</strong></p>
<ul>
<li>experience working in an international laboratory</li>
<li>knowledge of chromatographic analytical methods</li>
<li>experience in protein and/or glycan analysis by mass spectrometry</li>
<li>knowledge of data analysis and visualization and statistical data analysis in R</li>
<li>knowledge of bioinformatics tools for glycopeptide analysis (e.g. ProteinScape™, DataAnalysis™)</li>
<li>experience in developing methods for glycopeptide analysis by mass spectrometry</li>
<li>previous participation in scientific research and personal presentations at scientific conferences</li>
</ul>
<p><strong>The application should include:</strong></p>
<ul>
<li>cover letter</li>
<li>curriculum vitae</li>
<li>proof of completed doctoral studies</li>
<li>letter of recommendation from a former or current mentor or employer</li>
</ul>
<p>Applications are open to candidates of both sexes.</p>
<p>The application deadline is 7 days from the date of publication in the Official Gazette (Narodne novine).</p>
<p>Incomplete and late applications will not be considered.</p>
<p><strong>Interested candidates should send their applications to the email address <a href="mailto:dpeic@genos.hr">dpeic@genos.hr</a></strong></p>`;

  await docRef.update({
    // Default fields (keep as HR since original doc is Croatian)
    title: 'Natječaj za postdoktoranda na HRZZ projektu GlycoBrain',
    content: contentHr,
    description: 'Genos d.o.o. raspisuje natječaj za zapošljavanje postdoktoranda na HRZZ projektu GlycoBrain - Dekodiranje moždanog glikoma.',

    // Croatian translations
    titleHr: 'Natječaj za postdoktoranda na HRZZ projektu GlycoBrain',
    contentHr: contentHr,
    descriptionHr: 'Genos d.o.o. raspisuje natječaj za zapošljavanje postdoktoranda na HRZZ projektu GlycoBrain - Dekodiranje moždanog glikoma.',

    // English translations
    titleEn: 'Call for Postdoctoral Researcher – HRZZ GlycoBrain Project',
    contentEn: contentEn,
    descriptionEn: 'Genos d.o.o. is opening a call for a postdoctoral researcher on the HRZZ GlycoBrain project – Decoding the Brain Glycome.',

    meta: {
      title: 'Natječaj za postdoktoranda na HRZZ projektu GlycoBrain - Genos',
      description: 'Genos d.o.o. raspisuje natječaj za zapošljavanje postdoktoranda na HRZZ projektu GlycoBrain - Dekodiranje moždanog glikoma.'
    }
  });

  console.log('Article updated with EN and HR translations!');
  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
