<svelte:options customElement={{ tag: 'pb-team', shadow: 'none' }} />

<script lang="ts">
  import {TEAM} from './team.const';

  let selectedMember: any = '';

  function selectMember(pos: any) {
    selectedMember = TEAM[pos];
  }
</script>

<div class="grid grid-large team-members gap-4">
  {#each TEAM as group, i}
    {#each group.members as member}
      <button class="sm:col-span-12 md:col-span-4 col-span-3 team-member" on:click={() => selectMember(i)}>
        {#if member.img}
          <div>
            <img class="w-40 h-40 object-cover rounded-full" src="/team/{member.img}.jpg" alt="">
          </div>
        {/if}
        <h3>
          {member.name}
        </h3>
        <div>
          {member.job}
        </div>
      </button>
    {/each}
  {/each}
</div>

{#if selectedMember}
  <button class="overlay" on:click={() => selectedMember = ''} aria-label="overlay"></button>
  <div class="selected-member-dialog">
    <div class="selected-member-left">
      <img class="selected-member-image" src="/team/{selectedMember.img}.jpg" alt="">
    </div>
    <div class="selected-member-right">
      <div class="selected-member-name">
        {selectedMember.name}

        <button class="selected-member-dialog-close" on:click={() => selectedMember = ''}>
          <img src="/images/close.svg" alt="">
        </button>
      </div>
      <div class="selected-member-job">
        {selectedMember.job}
      </div>
      {@html selectedMember.description}
    </div>
  </div>
{/if}