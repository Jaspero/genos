<svelte:options customElement={{ tag: 'pb-publications', shadow: 'none' }} />

<script lang="ts">
  import { PUBLICATIONS } from './publications.const';
  import {language} from '$lib/page-builder/stores/language';

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

<div class="grid grid-large publications-grid">
  <div class="publications-years">
    {#each years as year}
      <a href="/{$language === 'en' ? 'publications' : 'publikacije'}#{year}" class="publication-year-link">{year}</a>
    {/each}
  </div>

  <div class="publications">
    {#each years as year}
      <div id={year}>
        <h2>{year}</h2>
        <div class="flex flex-col gap-12">
          {#each groupedData[year] as publication}
            <a href="https://doi.org/{publication.doi}" target="_blank" rel="noreferrer noopener" class="publication-card">
              <div class="publication-card-paper">{publication.paper}<img src="/icons/open-in-new.svg" alt="" class="publications-open-in-new"></div>
              <div class="publication-card-journal">{publication.date} - {getFirstAuthor(publication.authors)} et al., {publication.journal}</div>
            </a>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
