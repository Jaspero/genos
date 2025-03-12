<svelte:options customElement={{ tag: 'pb-publications', shadow: 'none' }} />

<script>
  import { PUBLICATIONS } from './publications.const';

  const data = PUBLICATIONS.sort((a, b) => b.date - a.date);

  let groupedData = {};

  data.forEach(publication => {
    const year = publication.date;
    if (!groupedData[year]) {
      groupedData[year] = [];
    }
    groupedData[year].push(publication);
  });

  const years = Object.keys(groupedData).sort((a, b) => b - a);

  const getFirstAuthor = (authors) => {
    const authorList = authors.split(',');
    const firstAuthor = authorList[0];
    return firstAuthor;
  };
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
