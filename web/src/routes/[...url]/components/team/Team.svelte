<svelte:options customElement={{ tag: 'pb-team', shadow: 'none' }} />

<script lang="ts">
  import {TEAM} from './team.const';
  import {language} from '$lib/stores/language';

  import { tick } from 'svelte';

  let selectedMember: any = '';
  let opener: HTMLElement | null = null;
  let dialogEl: HTMLDivElement;

  async function selectMember(gr: any, mem: any, event: MouseEvent) {
    opener = event.currentTarget as HTMLElement;
    selectedMember = TEAM[gr].members[mem];
    await tick();
    dialogEl?.querySelector<HTMLElement>('.selected-member-dialog-close')?.focus();
  }

  function closeMember() {
    selectedMember = '';
    opener?.focus();
  }

  /** Escape closes the dialog; Tab stays inside it. */
  function dialogKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeMember();
    } else if (event.key === 'Tab' && dialogEl) {
      const items = [...dialogEl.querySelectorAll<HTMLElement>('a[href], button')];
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
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
        <button type="button" on:click={(e) => selectMember(i, m, e)} class="team-member" aria-haspopup="dialog">
          <div>
            <img src="/team/{member.img}.jpg" alt="">
          </div>
          <h2>
            {#if $language === 'hr'}{member.title?.[0]?.hr || ''}{/if} {member.name}{#if $language === 'en'}{member.title?.[0]?.en || ''}{/if}
          </h2>
          <h3>
            {$language === 'en' ? member.job.en : member.job.hr}
          </h3>
        </button>
      </div>
    {/each}
  {/each}
</div>

{#if selectedMember}
  <div class="overlay" on:click={closeMember} aria-hidden="true"></div>
  <div class="selected-member-dialog" role="dialog" aria-modal="true" aria-labelledby="selected-member-name" bind:this={dialogEl} on:keydown={dialogKeydown}>
    <div class="selected-member-dialog-header">
      <img class="selected-member-dialog-image" src="/team/{selectedMember.img}.jpg" alt="">
      <div class="flex-1">
        <div class="selected-member-dialog-name" id="selected-member-name">{selectedMember.name}</div>
        <div class="selected-member-dialog-job">{$language === 'en' ? selectedMember.job.en : selectedMember.job.hr}</div>
      </div>
      <button type="button" class="selected-member-dialog-close" on:click={closeMember}>
        <img src="/images/close.svg" alt={$language === 'en' ? 'Close' : 'Zatvori'}>
      </button>
    </div>
    <p class="selected-member-description">
      {@html $language === 'en' ? selectedMember.descriptionEn : selectedMember.descriptionHr}
    </p>
  </div>
{/if}
