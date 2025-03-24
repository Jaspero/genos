<svelte:options customElement={{ tag: 'pb-projects', shadow: 'none' }} />

<script lang="ts">
  import { PROJECTS } from './projects.const';
</script>

<div class="grid grid-large projects-grid">
  <div class="col-span-3 projects-sticky">
    <div class="flex flex-col gap">
      {#each PROJECTS as program}
        <a href="/projects#{program.href}">{program.group}</a>
      {/each}
    </div>
  </div>
  {#each PROJECTS as program}
    <div class="projects col-span-9">
      <h2 class="program-title" id="{program.href}">
        {program.group} projects
      </h2>
      <div class="projects-cards">
        {#if program.projects}
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
        {:else if program}
          {#each program.programs as programsGroup}
            <h3 class="program-title" id="{programsGroup.href}" style="margin-bottom: -1.25rem">
              {programsGroup.program} projects
            </h3>

            {#each programsGroup.projects as project}
              <div class="project-card-container">
                <a  download="Genos project-{project.short}" class="project-card">
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
            <!--{#each programsGroup as project}
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
            {/each}-->
          {/each}
        {/if}
      </div>
    </div>
  {/each}
</div>
