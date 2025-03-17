<svelte:options customElement={{ tag: 'pb-projects', shadow: 'none' }} />

<script lang="ts">
  import { PROJECTS } from './projects.const';
</script>

<div class="grid grid-small projects-grid">
  <div class="col-span-3 projects-sticky">
    <div class="flex flex-col gap">
      {#each PROJECTS as program}
        <a href="/projects#{program.href}">{program.program}</a>
      {/each}
    </div>
  </div>
  {#each PROJECTS as program}
    <div class="projects col-span-9">
      <div class="program-title" id="{program.href}">
        {program.program} {program.projects.length > 1 ? 'projects' : 'project'}
      </div>
      <div class="projects-cards">
        {#each program.projects as project}
          <div class="project-card-container">
            <a href="/pdfs/{project.pdf}" download="Genos project-{project.short}" class="project-card">
              <div class="project-date">
                <span>Start: {project.startDate}</span>
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
            Download project details • PDF
          </span>
            </a>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
