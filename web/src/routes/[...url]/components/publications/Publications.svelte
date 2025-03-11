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

<div class="grid grid-small">
  <div class="year-links">
    {#each years as year}
      <a href="#{year}" class="year-link">{year}</a>
    {/each}
  </div>

  {#each years as year}
    <div class="col-span-12" id={year}>
      <h2>{year}</h2>
      <div class="flex flex-col gap-4">
        {#each groupedData[year] as publication}
          <div class="card">
            <div class="card-date">{publication.date}</div>
            <div class="card-paper">{publication.paper}</div>
            <div class="card-author">Authors: {getFirstAuthor(publication.authors)} et al.</div>
            <a class="card-link" href="https://doi.org/{publication.doi}" target="_blank" rel="noreferrer noopener">View reference</a>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        border: 2px solid #032130;
        color: #032130;
        padding: 2rem;
    }

    .card-date {
        font-weight: bold;
        font-size: .75rem;
        margin-bottom: .5rem;
    }

    .card-paper {
        font-size: 1.25rem;
        line-height: 1.3;
    }

    .card-author {
        margin-top: 1rem;
    }

    .card-link {
        margin-top: 1rem;
        font-weight: bold;
    }

    .card-link:hover {
        text-decoration: underline;
    }

    .col-span-12 {
        grid-column: span 12 / span 12;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 2rem;
    }

    .year-links {
        margin-bottom: 1rem;
    }

    .year-link {
        font-size: 1rem;
        font-weight: bold;
        margin-right: 1rem;
        text-decoration: none;
        color: #0070f3;
    }

    .year-link:hover {
        text-decoration: underline;
    }

    p {
        margin-top: 1rem;
    }
</style>
