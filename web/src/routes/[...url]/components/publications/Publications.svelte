<svelte:options customElement={{ tag: 'pb-publications', shadow: 'none' }} />

<script lang="ts">
  import { PUBLICATIONS } from './publications.const';

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

<div class="grid grid-small publications-grid">
  <div class="publications-years">
    {#each years as year}
      <a href="/publications#{year}" class="publication-year-link">{year}</a>
    {/each}
  </div>

  <div class="publications">
    {#each years as year}
      <div id={year}>
        <h2>{year}</h2>
        <div class="flex flex-col gap-4">
          {#each groupedData[year] as publication}
            <div class="publication-card">
              <div class="publication-card-date">{publication.date}</div>
              <div class="publication-card-paper">{publication.paper}</div>
              <div class="publication-card-author">Authors: {getFirstAuthor(publication.authors)} et al.</div>
              <a class="publication-card-link" href="https://doi.org/{publication.doi}" target="_blank" rel="noreferrer noopener">View reference</a>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
