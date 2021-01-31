<script>
  import {fade, fly} from 'svelte/transition';

  export let member;

  let dialogOpen = false;
</script>

<div class="gg-member-card" on:click={dialogOpen = true}>
  <div class="gg-member-avatar">
    <img draggable="false" src="{member.image}" width="150" alt={member.name}>
  </div>
  <p class="fw-bold m-t-s m-b-xs">{member.name}</p>
  {#if member.title}
    <p class="m-b-s">{member.title}</p>
  {/if}
</div>

{#if dialogOpen}
  <section class="gg-single-member-dialog" in:fade="{{duration: 200}}" out:fade="{{duration: 200}}">
    <article class="gg-single-member"  in:fly="{{y: 200, duration: 600}}">
      <div class="bg-l-secondary p-x-m p-t-l">
        <div class="gg-single-member-avatar m-b-s">
          <img width="150" src={member.image} alt="">
        </div>
      </div>
      <div class="p-y-l p-x-m">
        <h6 class:m-b-s={!member.title}>{member.name}</h6>
        {#if member.title}
          <p class="fs-small c-d-secondary m-t-xs m-b-s">{member.title}</p>
        {/if}
        {#if member.bio}
          <div class="gg-read-format c-d-secondary">
            <p>{@html member.bio}</p>
          </div>
        {/if}
      </div>
      <button class="gg-single-member-close gg-icon-button" on:click={() => dialogOpen = false}>
        <img src="assets/images/icon-close.svg" alt="Close dialog">
      </button>
    </article>
  </section>
{/if}

<style>

  .gg-member-card {
    position: relative;
    text-align: center;
    padding: 20px;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    transition: .2s;
  }

  .gg-member-card:after {
    content: url("/assets/images/icon-search.svg");
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0;
    transition: .2s;
  }

  .gg-member-card:hover {
    box-shadow: 0 4px 10px 0 rgba(0,0,0,.28);
    background: white;
    border: 1px solid rgba(0,0,0,.12);
  }

  .gg-member-card:hover::after {
    opacity: 1;
  }

  .gg-member-avatar {
    display: inline-block;
    border: 1px solid rgba(0,0,0,.12);
    border-radius: 50%;
    padding: 5px;
  }

  .gg-member-avatar img {
    border-radius: 50%;
    width: 150px;
    min-width: 150px;
    height: 150px;
    min-height: 150px;
  }

  .gg-single-member-dialog {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.75);
  }

  .gg-single-member {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    max-width: 80vw;
    max-height: 80vh;
    overflow: auto;
    margin: auto;
    display: flex;
    border-radius: 8px; }
  @media (max-width: 1200px) {
    .gg-single-member {
      flex-direction: column;
      max-width: 96vw;
      max-height: 96vh; } }

  .gg-single-member-avatar {
    display: inline-block;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 5px;
    margin-top: 70px; }
  @media (max-width: 1200px) {
    .gg-single-member-avatar {
      margin-top: 0; } }

  .gg-single-member-avatar > img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    min-width: 150px;
    min-height: 150px; }

  .gg-single-member-close {
    position: absolute;
    top: 20px;
    right: 20px;
  }
</style>
