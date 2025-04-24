<svelte:options customElement={{ tag: 'pb-projects', shadow: 'none' }} />

<script lang="ts">
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

<div class="grid grid-large projects-grid">
  <div class="col-span-3 projects-sticky">
    <div class="flex flex-col gap">
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
  <div class="projects col-span-9">
    {#each $sortedProjects as program}
      <h2 class="program-title" id="{program.href}">
        {#if program.group.en || program.group.hr}
          {$language === 'en' ? program.group.en : program.group.hr} {$language === 'en' ? 'projects' : 'projekti'}
        {:else}
          {program.group} {$language === 'en' ? 'projects' : 'projekti'}
        {/if}
      </h2>
      <div class="projects-cards">
        {#if program.projects}
          {#each program.projects as project}
            <div class="project-card-container">
              <button class="project-card" on:click={() => selectedProject = project}>
                <div class="project-date">
                  <span>{$language === 'en' ? 'Start' : 'Početak'}: {project.startDate}</span>
                </div>
                <div class="project-title">
                  {project.short}
                </div>
                <span class="project-text clamp">
                {#if project.title}
                  {project.title}
                {/if}
                </span>
                <span class="project-link">
                  {$language === 'en' ? 'View project details' : 'Pogledaj detalje projekta'} • PDF
                </span>
              </button>
            </div>
          {/each}
        {:else if program}
          {#each program.programs as programsGroup}
            <h3 class="program-title" id="{programsGroup.href}" style="margin-bottom: -1.25rem">
              {programsGroup.program} {$language === 'en' ? 'projects' : 'projekti'}
            </h3>

            {#each programsGroup.projects as project}
              <div class="project-card-container">
                <button class="project-card" on:click={() => selectedProject = project}>
                  <div class="project-date">
                    <span>{$language === 'en' ? 'Start' : 'Početak'}: {project.startDate}</span>
                  </div>
                  <div class="project-title">
                    {project.short}
                  </div>
                  <span class="project-text clamp">
                {#if project.title}
                  {project.title}
                {/if}
                </span>
                  <span class="project-link">
                  {$language === 'en' ? 'View project details' : 'Pogledaj detalje projekta'} • PDF
                </span>
                </button>
              </div>
            {/each}
          {/each}
        {/if}
      </div>
    {/each}
  </div>
</div>

{#if selectedProject}
  <div class="overlay" on:click={() => selectedProject = ''}></div>
  <div class="dialog">
    <div class="dialog-header">
      <div class="dialog-header-titles">
        {#if selectedProject.short}
          <h2>{selectedProject.short}</h2>
        {/if}
        {#if selectedProject.title}
          <h3>{selectedProject.title}</h3>
        {/if}
      </div>
      <div class="dialog-header-details">
      </div>
    </div>
    <div class="dialog-content">
      <ul>
        {#if selectedProject.startDate}
          <li>Start Date: {selectedProject.startDate}</li>
        {/if}
        {#if selectedProject.projectDuration}
          <li>Project Duration: {selectedProject.projectDuration}</li>
        {/if}
        {#if selectedProject.projectId}
          <li>Project ID: {selectedProject.projectId}</li>
        {/if}
        {#if selectedProject.callForProposals}
          <li>Call For Proposals: {selectedProject.callForProposals}</li>
        {/if}
        {#if selectedProject.coordinator}
          <li>Coordinator: {selectedProject.coordinator}</li>
        {/if}
        {#if selectedProject.projectParticipants}
          <li>Project Participants: {selectedProject.projectParticipants}</li>
        {/if}
        {#if selectedProject.projectValue}
          <li>Project Value: {selectedProject.projectValue}</li>
        {/if}
        {#if selectedProject.genosContribution}
          <li>Genos Contribution: {selectedProject.genosContribution}</li>
        {/if}
        {#if selectedProject.euCoFinancingAmount}
          <li>Eu Co-finacing Amount: {selectedProject.euCoFinancingAmount}</li>
        {/if}
        {#if selectedProject.contactPerson}
          <li>Contact Person: {selectedProject.contactPerson}</li>
        {/if}
        {#if selectedProject.pdf}
          <li><a class="link" href="/pdfs/{selectedProject.pdf}" target="_blank">Open as PDF</a></li>
        {/if}
      </ul>
      {#if selectedProject.description}
        <div>{@html selectedProject.description}</div>
      {/if}
    </div>
  </div>
{/if}