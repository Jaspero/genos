<svelte:options customElement={{ tag: 'pb-projects', shadow: 'none' }} />

<script lang="ts">
  import { PROJECTS } from './projects.const';
  import {language} from '$lib/page-builder/stores/language';
  import { derived } from 'svelte/store';

  const parseDate = (dateStr: string): Date => {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  };

  // Create a derived store to avoid mutating PROJECTS
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
              <button class="project-card" on:click={() => {selectedProject = project}}>
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
                <button class="project-card" on:click={() => {selectedProject = project}}>
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
  <button class="overlay" on:click={() => selectedProject = ''}></button>
  <div class="project-modal">
    <iframe src="/pdfs/{selectedProject.pdf}"></iframe>
  </div>
{/if}