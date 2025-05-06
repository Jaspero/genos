<svelte:options customElement={{ tag: 'pb-projects', shadow: 'none' }} />

<script lang="ts">
  import { slide } from 'svelte/transition';
  import { PROJECTS } from './projects.const';
  import {language} from '$lib/page-builder/stores/language';
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
                  {project.short}
                </h4>
                {#if project.title}
                  <p class="project-text clamp">
                    {project.title}.
                    <button class="details-toggle" on:click={() => selectedProject = selectedProject === project ? '' : project}>
                      {#if $language === 'en'}
                        {selectedProject === project ? 'Less details' : 'More details'}
                      {:else}
                        {selectedProject === project ? 'Manje detalja' : 'Više detalja'}
                      {/if}
                    </button>
                  </p>
                {/if}
                {#if selectedProject === project}
                  <div class="project-details" transition:slide>
                    <table>
                      <tbody>
                      {#if selectedProject.startDate}
                        <tr>
                          <td>Start Date:</td>
                          <td>{selectedProject.startDate}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.projectDuration}
                        <tr>
                          <td>Project Duration:</td>
                          <td>{selectedProject.projectDuration}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.projectId}
                        <tr>
                          <td>Project ID:</td>
                          <td>{selectedProject.projectId}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.callForProposals}
                        <tr>
                          <td>Call For Proposals:</td>
                          <td>{selectedProject.callForProposals}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.coordinator}
                        <tr>
                          <td>Coordinator:</td>
                          <td>{selectedProject.coordinator}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.projectParticipants}
                        <tr>
                          <td>Project Participants:</td>
                          <td>{selectedProject.projectParticipants}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.projectValue}
                        <tr>
                          <td>Project Value:</td>
                          <td>{selectedProject.projectValue}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.genosContribution}
                        <tr>
                          <td>Genos Contribution:</td>
                          <td>{selectedProject.genosContribution}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.euCoFinancingAmount}
                        <tr>
                          <td>Eu Co-finacing Amount:</td>
                          <td>{selectedProject.euCoFinancingAmount}</td>
                        </tr>
                      {/if}
                      {#if selectedProject.contactPerson}
                        <tr>
                          <td>Contact Person:</td>
                          <td>{selectedProject.contactPerson}</td>
                        </tr>
                      {/if}
                      </tbody>
                    </table>
                  </div>
                {/if}
                <a href="/pdfs/{project.pdf}" target="_blank" class="button-filled open-pdf">
                  {$language === 'en' ? 'Open as' : 'Otvori kao'} PDF
                </a>
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
                      {project.short}
                    </h4>
                    <p class="project-text clamp">
                      {#if project.title}
                        {project.title}.
                      {/if}
                      <button class="details-toggle" on:click={() => selectedProject = selectedProject === project ? '' : project}>
                        {
                          selectedProject === project
                            ? ($language === 'en' ? 'Less details' : 'Manje detalja')
                            : ($language === 'hr' ? 'More details' : 'Više detalja')}
                      </button>
                    </p>
                    {#if selectedProject === project}
                      <div class="project-details" transition:slide>
                        <table>
                          <tbody>
                          {#if selectedProject.startDate}
                            <tr>
                              <td>Start Date:</td>
                              <td>{selectedProject.startDate}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.projectDuration}
                            <tr>
                              <td>Project Duration:</td>
                              <td>{selectedProject.projectDuration}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.projectId}
                            <tr>
                              <td>Project ID:</td>
                              <td>{selectedProject.projectId}</td>
                            </tr>
                          {/if}

                          {#if selectedProject.callForProposals}
                            <tr>
                              <td>Call For Proposals:</td>
                              <td>{selectedProject.callForProposals}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.coordinator}
                            <tr>
                              <td>Coordinator:</td>
                              <td>{selectedProject.coordinator}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.projectParticipants}
                            <tr>
                              <td>Project Participants:</td>
                              <td>{selectedProject.projectParticipants}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.projectValue}
                            <tr>
                              <td>Project Value:</td>
                              <td>{selectedProject.projectValue}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.projectLead}
                            <tr>
                              <td>Project Lead:</td>
                              <td>
                                {#if $language === 'hr'}{selectedProject.jobTitle?.hr}{/if}
                                {selectedProject.projectLead}{#if $language === 'en'}{selectedProject.jobTitle?.en}{/if}
                              </td>
                            </tr>
                          {/if}
                          {#if selectedProject.genosContribution}
                            <tr>
                              <td>Genos Contribution:</td>
                              <td>{selectedProject.genosContribution}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.euCoFinancingAmount}
                            <tr>
                              <td>Eu Co-finacing Amount:</td>
                              <td>{selectedProject.euCoFinancingAmount}</td>
                            </tr>
                          {/if}
                          {#if selectedProject.contactPerson}
                            <tr>
                              <td>Contact Person:</td>
                              <td>{selectedProject.contactPerson}</td>
                            </tr>
                          {/if}
                          </tbody>
                        </table>
                      </div>
                    {/if}
                    <a href="/pdfs/{project.pdf}" target="_blank" class="button-filled open-pdf">
                      {$language === 'en' ? 'Open as' : 'Otvori kao'} PDF
                    </a>
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