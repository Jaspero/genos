<script>
  import {onMount} from 'svelte';
  import {fade, fly} from 'svelte/transition';

  export let members;


  let slidePage = 0;
  let dialogOpen = null;
  let totalLengthRound;

  function nextSlide() {
    if (slidePage < totalLengthRound - 1){
      slidePage++;

    } else {
      slidePage = 0;
    }
  }

  function prevSlide() {
    if (slidePage > 0){
      slidePage--;
    } else {
      slidePage = totalLengthRound - 1;
    }
  }

  onMount(() => {
    for (let i = 0; i < members.length; i++) {
      if (window.innerWidth >= 1400) {
        members[i].page = Math.floor(i / 4);
        totalLengthRound = Math.ceil(members.length / 4);
      } else if (window.innerWidth >= 900 && window.innerWidth <= 1400) {
        members[i].page = Math.floor(i / 3);
        totalLengthRound = Math.ceil(members.length / 3);
      } else if (window.innerWidth >= 600 && window.innerWidth <= 900) {
        members[i].page = Math.floor(i / 2);
        totalLengthRound = Math.ceil(members.length / 2);
      } else {
        members[i].page = i;
        totalLengthRound = members.length;
      }
    }
  })
</script>

<section class="bg-l-secondary team p-y-l">
  <div class="grid p-b-m">
    <div class="col-12 flex jc-between ai-center">
      <h4 class="gg-title">Our team<span class="gg-icon" aria-hidden="true"><img src="assets/images/icon-team.svg" alt=""></span></h4>
      <div class="arrows flex">
        <button aria-label="Previous slide" class="arrow flex ai-center bg-l-primary m-r-s" on:click="{prevSlide}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#00407F">
            <g data-name="Layer 2">
              <path d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z" data-name="chevron-left"/>
            </g>
          </svg>
        </button>
        <button aria-label="Next slide" class="arrow flex ai-center bg-l-primary" on:click="{nextSlide}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#00407F">
            <g data-name="Layer 2">
              <path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z" data-name="chevron-right"/>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div class="col-12 of-hidden relative flex">
      {#each members as member, i}
        <div class="col-3 col-m-4 col-s-6 col-xs-12 p-a-s ta-center item" class:active="{slidePage === member.page}" on:click={() => dialogOpen = member}>
          <div class="gg-member-card">
            <div class="gg-member-avatar">
              <img draggable="false" src="{member.image}" width="150" alt="">
            </div>
            <p class="fw-bold m-t-s m-b-xs">{member.fullName}</p>
            {#if member.title}
              <p class="m-b-s">{member.title}</p>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!--Single member dialog-->
{#if dialogOpen}
  <section class="gg-single-member-dialog" in:fade="{{duration: 200}}" out:fade="{{duration: 200}}">
    <article class="gg-single-member"  in:fly="{{y: 200, duration: 600}}">
      <div class="bg-l-secondary p-x-m p-t-l">
        <div class="gg-single-member-avatar m-b-s">
          <img width="150" src={dialogOpen.image}>
        </div>
      </div>
      <div class="p-y-l p-x-m">
        <h6 class:m-b-s={!dialogOpen.title}>{dialogOpen.fullName}</h6>
        {#if dialogOpen.title}
          <p class="fs-small c-d-secondary m-t-xs m-b-s">{dialogOpen.title}</p>
        {/if}
        <div class="gg-read-format c-d-secondary">
          {#if dialogOpen.longBio}
            <p>{@html dialogOpen.longBio}</p>
          {/if}
        </div>
      </div>
      <button aria-label="Close dialog" class="gg-single-member-close gg-icon-button" on:click={() => dialogOpen = null}>
        <img src="/images/icon-close.svg" alt="Close dialog">
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
    content: url("/images/icon-search.svg");
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

  .item {
    display: none;
  }

  .item.active {
    display: block;
  }
  .team {
    height: 600px;
  }
  .arrow {
    cursor: pointer;
    height: 30px;
  }
</style>
