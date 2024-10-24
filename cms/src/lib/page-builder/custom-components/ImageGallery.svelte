<svelte:options customElement={{ tag: 'pb-image-gallery', shadow: 'none' }} />

<script lang="ts">
  // @ts-nocheck
  import '@jaspero/web-components/dist/image-gallery.wc';

  export let enablePagination: boolean;
  export let sliderBar: boolean;
  export let autoSlide: boolean;
  export let interval: number;
  export let images: Array<{ src: string; alt: string }>;
  export let columnCount;
  export let columnCountTable;
  export let columnCountMobile;
  export let gapX;
  export let gapY;

  let el: HTMLDivElement;

  function reRender(...args) { return true }

  $: if (el && reRender(enablePagination, sliderBar, autoSlide, interval, images, columnCount, columnCountTable, columnCountMobile, gapX, gapY)) {
    document.querySelectorAll('jp-image-gallery').forEach(el => el.remove());

    const imgEl = document.createElement('jp-image-gallery');

    imgEl.images = images || [{}];
    imgEl.enablePagination = !!enablePagination;
    imgEl.sliderBar = !!sliderBar;
    imgEl.autoSlide = !!autoSlide;

    if (columnCount) {
      imgEl.columnCount = +parseInt(columnCount, 10);
    }

    if (columnCountTable) {
      imgEl.columnCountTable = +parseInt(columnCountTable, 10);
    }

    if (columnCountMobile) {
      imgEl.columnCountMobile = +parseInt(columnCountMobile, 10);
    }

    if (gapX) {
      imgEl.gapX = +parseInt(gapX, 10);
    }

    if (gapY) {
      imgEl.gapY = +parseInt(gapY, 10);
    }

    if (interval) {
      imgEl.interval = interval;
    }

    el.appendChild(imgEl);
  }
</script>

<div bind:this={el}></div>
