<svelte:options customElement={{ tag: 'pb-image-gallery', shadow: 'none' }} />

<script lang="ts">
  // @ts-nocheck
  import '@jaspero/web-components/dist/image-gallery.wc';

  export let enablepagination: string | undefined;
  export let sliderbar: string | undefined;
  export let autoslide: string | undefined;
  export let interval: number;
  export let images: Array<{ src: string; alt: string }>;
  export let columncount;
  export let columncounttable;
  export let columncountmobile;
  export let enablegallery: string | undefined;
  export let gapx;
  export let gapy;

  let el: HTMLDivElement;

  $: if (el) {
    const imgEl = document.createElement('jp-image-gallery');

    imgEl.images = images?.length ? images.split(',').map(src => ({src, alt: ''})) : [{}];
    imgEl.enablePagination = enablepagination !== undefined;
    imgEl.sliderBar = sliderbar !== undefined;
    imgEl.autoSlide = autoslide !== undefined;
    imgEl.enableGallery = enablegallery !== undefined;

    if (columncount) {
      imgEl.columnCount = +parseInt(columncount, 12);
    }

    if (columncounttable) {
      imgEl.columnCountTable = +parseInt(columncounttable, 12);
    }

    if (columncountmobile) {
      imgEl.columnCountMobile = +parseInt(columncountmobile, 12);
    }

    if (gapx) {
      imgEl.gapX = +parseInt(gapx, 10);
    }

    if (gapy) {
      imgEl.gapY = +parseInt(gapy, 10);
    }

    if (interval) {
      imgEl.interval = interval;
    }

    el.appendChild(imgEl);
  }
</script>

<div bind:this={el}></div>
