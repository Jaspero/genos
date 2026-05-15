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
  // 1. Check for existing "Careers" category or create one
  const categoriesSnap = await firestore.collection('blog-categories').get();
  console.log('Existing categories:');
  categoriesSnap.docs.forEach(doc => {
    console.log(`  - ${doc.id}: ${JSON.stringify(doc.data())}`);
  });

  let careersCategoryId = null;
  for (const doc of categoriesSnap.docs) {
    const data = doc.data();
    if (data.name && data.name.toLowerCase().includes('career')) {
      careersCategoryId = doc.id;
      console.log(`\nFound existing careers category: ${doc.id}`);
      break;
    }
  }

  if (!careersCategoryId) {
    console.log('\nNo careers category found. Creating one...');
    const catRef = await firestore.collection('blog-categories').add({
      name: 'Careers',
      url: 'careers',
      description: 'Job openings and career opportunities at Genos',
      lastUpdatedOn: new Date().toISOString(),
      createdOn: new Date().toISOString()
    });
    careersCategoryId = catRef.id;
    console.log(`Created careers category with ID: ${careersCategoryId}`);
  }

  // 2. Check existing authors
  const authorsSnap = await firestore.collection('blog-authors').get();
  console.log('\nExisting authors:');
  authorsSnap.docs.forEach(doc => {
    console.log(`  - ${doc.id}: ${JSON.stringify(doc.data().name)}`);
  });

  // Use first available author or empty
  const firstAuthor = authorsSnap.docs.length > 0 ? authorsSnap.docs[0].id : '';
  console.log(`\nUsing author ID: ${firstAuthor}`);

  // 3. Check if article already exists
  const existingSnap = await firestore.collection('blog-articles')
    .where('url', '==', 'natjecaj-postdoktorand-glycobrain')
    .get();
  
  if (!existingSnap.empty) {
    console.log('\nArticle already exists! Skipping creation.');
    process.exit(0);
  }

  // 4. Create the article
  const now = new Date().toISOString();
  const articleContent = `<p><strong>Genos d.o.o. za vještačenje i analizu raspisuje natječaj za zapošljavanje jednog (1) zaposlenika (m/ž) na radno mjesto postdoktoranda na projektu Programa „Istraživački Projekt" Hrvatske zaklade za znanost „Dekodiranje moždanog glikoma: Ciljano glikoproteomsko istraživanje ljudskog mozga" (akronim: GlycoBrain):</strong></p>
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

  const articleData = {
    title: 'Natječaj za postdoktoranda na HRZZ projektu GlycoBrain',
    url: 'natjecaj-postdoktorand-glycobrain',
    category: careersCategoryId,
    author: firstAuthor,
    publicationDate: now,
    createdOn: now,
    lastUpdatedOn: now,
    active: true,
    content: articleContent,
    description: 'Genos d.o.o. raspisuje natječaj za zapošljavanje postdoktoranda na HRZZ projektu GlycoBrain - Dekodiranje moždanog glikoma.',
    image: '',
    imageAlt: '',
    meta: {
      title: 'Natječaj za postdoktoranda na HRZZ projektu GlycoBrain - Genos',
      description: 'Genos d.o.o. raspisuje natječaj za zapošljavanje postdoktoranda na HRZZ projektu GlycoBrain - Dekodiranje moždanog glikoma.'
    }
  };

  const ref = await firestore.collection('blog-articles').add(articleData);
  console.log(`\nArticle created successfully with ID: ${ref.id}`);
  console.log(`URL: /posts/natjecaj-postdoktorand-glycobrain`);
  
  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
