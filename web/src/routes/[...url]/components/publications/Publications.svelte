<svelte:options customElement={{ tag: 'pb-publications', shadow: 'none' }} />

<script lang="ts">
  import { PUBLICATIONS } from './publications.const';
  import {language} from '$lib/stores/language';

  const groupedData = PUBLICATIONS
    .reduce((result: {[key: number]: any[]}, publication) => {
      const year = publication.date;
      if (!result[year]) {
        result[year] = [];
      }
      result[year].push(publication);
      return result;
    }, {});

  const years = Object.keys(groupedData).sort((a, b) => b - a);

  const getFirstAuthor = (authors: string) => {
    const authorList = authors.split(',');
    return authorList[0];
  };

  $effect(() => {
    const savedScroll = sessionStorage.getItem('scrollPosition');
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll, 10));
    }

    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('scrollPosition', String(window.scrollY));
    });
  });
</script>

<div class="grid grid-small publications">
  <div class="gc-12 mb-24">
    <h2>
      {
        $language === 'en'
          ? 'Genos has been at the forefront of glycoscience. We have published over 300 articles in the past 15+ years. We continue to advance the field and look forward to further developments in our research field.'
          : 'Genos je na čelu glikoznanosti. U proteklih više od 15 godina objavili smo preko 300 znanstvenih radova. Nastavljamo s unaprjeđenjem ovog područja i veselimo se daljnjem razvoju naših istraživanja.'
      }
    </h2>
  </div>
  <div class="gc-3 sticky">
    <p>
      {
        $language === 'en'
          ? 'Quick links:'
          : 'Izbornik:'
      }
    </p>
    <div class="sticky-items">
      {#each years as year}
        <a href="/{$language === 'en' ? 'publications' : 'publikacije'}#{year}" class="publication-year-link">{year}</a>
      {/each}
    </div>
  </div>
  <div class="gc-9 publications-container">
    {#each years as year}
      <div class="publications-cards" id={year}>
        <h3>{year}</h3>
        <div class="flex flex-col">
          {#each groupedData[year] as publication}
            {#if publication.doi}
              <a href="https://doi.org/{publication.doi}" target="_blank" rel="noreferrer noopener" class="publication-card">
                <div class="publication-card-paper">{publication.paper}</div>
                <div class="publication-card-journal">{publication.date} | {getFirstAuthor(publication.authors)} et al. | {publication.journal}</div>
              </a>
            {:else if publication.href}
              <a href={publication.href} target="_blank" rel="noreferrer noopener" class="publication-card">
                <div class="publication-card-paper">{publication.paper}</div>
                <div class="publication-card-journal">{publication.date} | {getFirstAuthor(publication.authors)} et al. | {publication.journal}</div>
              </a>
            {/if}
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
