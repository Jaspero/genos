<svelte:options customElement={{ tag: 'pb-team', shadow: 'none' }} />

<script lang="ts">
  import {TEAM} from './team.const';
  import {language} from '$lib/stores/language';

  let selectedMember: any = '';

  function selectMember(gr: any, mem: any) {
    selectedMember = TEAM[gr].members[mem];
  }

  $: {
    if (selectedMember) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }
  }
</script>

<div class="grid grid-large team-members">
  {#each TEAM as group, i}
    {#each group.members as member, m}
      <div class="gc-3 gc-sm-6">
        <button on:click={() => selectMember(i,m)} class="team-member">
          <div>
            <img src="/team/{member.img}.jpg" alt="">
          </div>
          <h2>
            {#if $language === 'hr'}{member.title?.[0]?.hr || ''}{/if} {member.name}{#if $language === 'en'}{member.title?.[0]?.en || ''}{/if}
          </h2>
          <h3>
            {member.job}
          </h3>
        </button>
      </div>
    {/each}
  {/each}
</div>

{#if selectedMember}
  <button class="overlay" on:click={() => selectedMember = ''} aria-label="overlay"></button>
  <div class="selected-member-dialog">
    <div class="selected-member-dialog-header">
      <img class="selected-member-dialog-image" src="/team/{selectedMember.img}.jpg" alt="">
      <div class="flex-1">
        <div class="selected-member-dialog-name">{selectedMember.name}</div>
        <div class="selected-member-dialog-job">{selectedMember.job}</div>
      </div>
      <button class="selected-member-dialog-close" on:click={() => selectedMember = ''}>
        <img src="/images/close.svg" alt="">
      </button>
    </div>
    <p class="selected-member-description">
      {@html $language === 'en' ? selectedMember.descriptionEn : selectedMember.descriptionHr}
    </p>
  </div>
{/if}
