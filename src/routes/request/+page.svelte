<script>
  import { scale } from 'svelte/transition';

  let email = '';
  let message = '';
  let submitted = false;

  function submit() {
    submitted = true;
  }
</script>

<h1 class="text-center font-bold text-xl">Submit <span class="text-[#4095BF]">free request</span></h1>
<p class="text-center text-xs mx-auto max-w-[34ch] mt-4">
  Fill out the form below. We’ll get back to you to schedule a meeting to discuss your request in further details.
</p>

<form class="mt-8 flex flex-col gap-8" id="form" on:submit={submit}>
  <label>
    <span class="label" class:move={email}>Enter your email address</span>
    <input type="email" bind:value={email} required>
  </label>
  <label>
    <span class="label" class:move={message}>What is your request?</span>
    <textarea bind:value={message} required></textarea>
  </label>
</form>

<div class="relative flex items-end -mx-16 sm:-mx-24 md:-mx-40 mt-16">
  {#if submitted}
    <div class="absolute bottom-1/2 text-sm text-center w-full"
         transition:scale={{ duration: 500, delay: 500, opacity: 1, start: 0 }}>
      Submitted free request successfully!
    </div>
  {/if}
  <div class="finger finger-left"></div>
  <button type="submit" form="form" class="submit-button" class:pressed={submitted}>
    Submit
  </button>
  <div class="finger finger-right"></div>
</div>

<svelte:head>
  <title>Request a Service | Genos</title>
  <meta name="title" content="Request a Service | Genos">
  <meta property="og:title" content="Request a Service | Genos">
  <meta name="description"
        content="Submit a service request to Genos Glyco for advanced glycan analysis and research solutions. Discover how our expertise in glycomics can support your scientific or commercial needs.">
  <meta property="og:description"
        content="Submit a service request to Genos Glyco for advanced glycan analysis and research solutions. Discover how our expertise in glycomics can support your scientific or commercial needs.">
  <meta property="og:url" content="https://genos.hr/request" />
</svelte:head>

<style lang="postcss">
    label {
        @apply relative block pb-4 pt-16 bg-[#D9EAF2] border-b-8 border-b-[#4095BF];
    }

    label:focus-within .label {
        @apply translate-y-0 top-4 text-xs;
    }

    .move {
        @apply translate-y-0 top-4 text-xs;
    }

    input, textarea {
        @apply block w-full h-full text-center text-sm bg-transparent outline-none;
    }

    .label {
        @apply absolute top-1/2 -translate-y-1/2 w-full text-center text-sm duration-200;
    }

    .finger {
        @apply relative flex-1 h-16 bg-[#E8E8E8];
    }

    .finger::after {
        content: '';
        @apply bg-[#999999] absolute w-16 h-4 top-0;
    }

    .finger-left {
        @apply rounded-tr-[1rem] rounded-br-[3rem];
    }

    .finger-left::after {
        @apply right-0 rounded-tr-full rounded-bl-full;
    }

    .finger-right {
        @apply rounded-tl-[1rem] rounded-bl-[3rem];
    }

    .finger-right::after {
        @apply left-0 rounded-tl-full rounded-br-full;
    }

    .submit-button {
        @apply bg-[#FFD400] underline underline-offset-4 w-[200px] sm:w-[500px] h-32 font-bold text-base text-center overflow-hidden duration-500;
    }

    .submit-button.pressed {
        @apply w-0;
    }
</style>