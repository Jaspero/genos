<svelte:options customElement={{ tag: 'pb-projects', shadow: 'none' }} />

<script lang="ts">
  import { slide } from 'svelte/transition';
  import { PROJECTS } from './projects.const';
  import { language } from '$lib/stores/language';
  import { derived } from 'svelte/store';

  const parseDate = (dateStr: string): Date => {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  };

  const sortedProjects = derived([], () => {
    return PROJECTS.map(program => {
      let sortedProgram = { ...program };

      if (sortedProgram.projects) {
        sortedProgram.projects = [...sortedProgram.projects].sort(
          (a, b) => parseDate(b.startDate) - parseDate(a.startDate)
        );
      } else if (sortedProgram.programs) {
        sortedProgram.programs = sortedProgram.programs.map(programGroup => ({
          ...programGroup,
          projects: [...programGroup.projects].sort(
            (a, b) => parseDate(b.startDate) - parseDate(a.startDate)
          )
        }));
      }

      return sortedProgram;
    });
  });

  let selectedProject: any = '';
</script>

<div class="grid grid-small projects">
  <div class="gc-12 mb-24">
    <h2>
      {
        $language === 'en'
          ? 'With over 40 larger and smaller collaborative projects conducted with scientific teams from different research institutions from around the world, we have the expertise to design studies and bring them to a successful conclusion.'
          : 'S više od 40 većih i manjih suradničkih projekata provedenih sa znanstvenim timovima iz različitih istraživačkih institucija diljem svijeta, posjedujemo stručnost za osmišljavanje studija i njihovo uspješno provođenje.'
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
      {#each $sortedProjects as program}
        <a href="/{$language === 'en' ? 'projects' : 'projekti'}#{program.href}">
          {#if program.group.en || program.group.hr}
            {$language === 'en' ? program.group.en : program.group.hr} {$language === 'en' ? 'projects' : 'projekti'}
          {:else}
            {program.group} {$language === 'en' ? 'projects' : 'projekti'}
          {/if}
        </a>
      {/each}
    </div>
  </div>
  <div class="gc-9 programs">
    {#each $sortedProjects as program}
      <div class="projects-cards">
        <h3 class="program-title" id="{program.href}">
          {#if program.group.en || program.group.hr}
            {$language === 'en' ? program.group.en : program.group.hr} {$language === 'en' ? 'projects' : 'projekti'}
          {:else}
            {program.group} {$language === 'en' ? 'projects' : 'projekti'}
          {/if}
        </h3>
        {#if program.projects}
          {#each program.projects as project}
            <div class="project-card-container">
              <div class="project-card">
                <h4 class="project-title">
                  {#if project.shortEn && project.shortHr}
                    {#if $language === 'en'}
                      {project.shortEn}
                    {:else}
                      {project.shortHr}
                    {/if}
                  {:else}
                    {project.short}
                  {/if}
                </h4>
                {#if project.titleEn && project.titleHr}
                  <p class="project-text clamp">
                    {#if $language === 'en'}
                      {project.titleEn}.
                    {:else}
                      {project.titleHr}.
                    {/if}
                  </p>
                {/if}
                <button class="details-toggle" on:click={() => selectedProject = selectedProject === project ? '' : project}>
                  {#if $language === 'en'}
                    {selectedProject === project ? 'Less details' : 'More details'}
                  {:else}
                    {selectedProject === project ? 'Manje detalja' : 'Više detalja'}
                  {/if}
                </button>
                {#if selectedProject === project}
                  <div class="project-details" transition:slide>
                    <table>
                      <tbody>
                      {#if selectedProject.startDate}
                        <tr>
                          <td>
                            {@html $language === 'en' ? 'Start Date:' : 'Datum početka:'}
                          </td>
                          <td>{selectedProject.startDate}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.projectDuration}
                        <tr>
                          <td>{@html $language === 'en' ? 'Project Duration:' : 'Trajanje projekta:'}</td>
                          <td>{selectedProject.projectDuration} {@html $language === 'en' ? 'months' : 'mjeseci'}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.projectId}
                        <tr>
                          <td>{@html $language === 'en' ? 'Project ID:' : 'ID projekta:'}</td>
                          <td>{selectedProject.projectId}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.callForProposals}
                        <tr>
                          <td>{@html $language === 'en' ? 'Call For Proposals:' : 'Poziv:'}</td>
                          <td>{selectedProject.callForProposals}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.coordinator}
                        <tr>
                          <td>{@html $language === 'en' ? 'Coordinator:' : 'Koordinator:'}</td>
                          <td>{selectedProject.coordinator}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.projectParticipants}
                        <tr>
                          <td>{@html $language === 'en' ? 'Project Participants:' : 'Sudionici projekta:'}</td>
                          <td>{selectedProject.projectParticipants}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.projectValue}
                        <tr>
                          <td>{@html $language === 'en' ? 'Project Value:' : 'Vrijednost projekta:'}</td>
                          <td>{selectedProject.projectValue}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.genosContribution}
                        <tr>
                          <td>{@html $language === 'en' ? 'Genos Grant Amount:' : 'Iznos Genosove potpore:'}</td>
                          <td>{selectedProject.genosContribution}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.euCoFinancingAmount}
                        <tr>
                          <td>{@html $language === 'en' ? 'Eu Co-finacing Amount:' : 'Iznos EU sufinanciranja:'}</td>
                          <td>{selectedProject.euCoFinancingAmount}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.contactPerson}
                        <tr>
                          <td>{@html $language === 'en' ? 'Contact Person:' : 'Kontakt osoba:'}</td>
                          <td>{selectedProject.contactPerson}</td>
                        </tr>
                      {/if}
                      </tbody>
                    </table>
                  </div>
                {/if}
                {#if $language === 'en'}
                  <a href="/pdfs/en/{project.pdf}" target="_blank" class="button-filled open-pdf">
                    Open as PDF
                  </a>
                {:else}
                  <a href="/pdfs/hr/{project.pdf}" target="_blank" class="button-filled open-pdf">
                    Otvori kao PDF
                  </a>
                {/if}
              </div>
            </div>
          {/each}
        {:else if program}
          {#each program.programs as programsGroup}
            <div class="program-container">
              <h3 class="program-title" id="{programsGroup.href}" style="margin-top: 1.5rem">
                {programsGroup.program} {$language === 'en' ? 'projects' : 'projekti'}
              </h3>
              {#each programsGroup.projects as project}
                <div class="project-card-container">
                  <div class="project-card">
                    <h4 class="project-title">
                      {#if project.shortEn && project.shortHr}
                        {#if $language === 'en'}
                          {project.shortEn}
                        {:else}
                          {project.shortHr}
                        {/if}
                      {:else}
                        {project.short}
                      {/if}
                    </h4>
                    {#if project.titleEn && project.titleHr}
                      <p class="project-text clamp">
                        {#if $language === 'en'}
                          {project.titleEn}.
                        {:else}
                          {project.titleHr}.
                        {/if}
                      </p>
                    {/if}
                    <button class="details-toggle" on:click={() => selectedProject = selectedProject === project ? '' : project}>
                      {#if $language === 'en'}
                        {selectedProject === project ? 'Less details' : 'More details'}
                      {:else}
                        {selectedProject === project ? 'Manje detalja' : 'Više detalja'}
                      {/if}
                    </button>
                    {#if selectedProject === project}
                      <div class="project-details" transition:slide>
                        <table>
                          <tbody>
                          {#if selectedProject.startDate}
                            <tr>
                              <td>
                                {@html $language === 'en' ? 'Start Date:' : 'Datum početka:'}
                              </td>
                              <td>{selectedProject.startDate}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.projectDuration}
                            <tr>
                              <td>{@html $language === 'en' ? 'Project Duration:' : 'Trajanje projekta:'}</td>
                              <td>{selectedProject.projectDuration} {@html $language === 'en' ? 'months' : 'mjeseci'}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.projectId}
                            <tr>
                              <td>{@html $language === 'en' ? 'Project ID:' : 'ID projekta:'}</td>
                              <td>{selectedProject.projectId}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.callForProposals}
                            <tr>
                              <td>{@html $language === 'en' ? 'Call For Proposals:' : 'Poziv:'}</td>
                              <td>{selectedProject.callForProposals}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.coordinator}
                            <tr>
                              <td>{@html $language === 'en' ? 'Coordinator:' : 'Koordinator:'}</td>
                              <td>{selectedProject.coordinator}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.projectParticipants}
                            <tr>
                              <td>{@html $language === 'en' ? 'Project Participants:' : 'Sudionici projekta:'}</td>
                              <td>{selectedProject.projectParticipants}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.projectValue}
                            <tr>
                              <td>{@html $language === 'en' ? 'Project Value:' : 'Vrijednost projekta:'}</td>
                              <td>{selectedProject.projectValue}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.projectLead}
                            <tr>
                              <td>{@html $language === 'en' ? 'Project lead' : 'Voditelj projekta:'}</td>
                              <td>
                                {#if $language === 'hr'}{selectedProject.jobTitle?.hr}{/if}
                                {selectedProject.projectLead}{#if $language === 'en'}{selectedProject.jobTitle?.en}{/if}
                              </td>
                            </tr>
                          {/if}
                          {#if selectedProject.genosContribution}
                            <tr>
                              <td>{@html $language === 'en' ? 'Genos Grant Amount:' : 'Iznos Genosove potpore:'}</td>
                              <td>{selectedProject.genosContribution}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.euCoFinancingAmount}
                            <tr>
                              <td>{@html $language === 'en' ? 'Eu Co-finacing Amount:' : 'Iznos EU sufinanciranja:'}</td>
                              <td>{selectedProject.euCoFinancingAmount}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.contactPerson}
                            <tr>
                              <td>{@html $language === 'en' ? 'Contact Person:' : 'Kontakt osoba:'}</td>
                              <td>{selectedProject.contactPerson}</td>
                            </tr>
                          {/if}
                          </tbody>
                        </table>
                      </div>
                    {/if}
                    {#if $language === 'en'}
                      <a href="/pdfs/en/{project.pdf}" target="_blank" class="button-filled open-pdf">
                        Open as PDF
                      </a>
                    {:else}
                      <a href="/pdfs/hr/{project.pdf}" target="_blank" class="button-filled open-pdf">
                        Otvori kao PDF
                      </a>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
          {/each}
        {/if}
      </div>
    {/each}
  </div>
</div>