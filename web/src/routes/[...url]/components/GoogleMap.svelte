<svelte:options customElement={{ tag: 'pb-google-map', shadow: 'none' }} />

<script>
  import { onMount } from 'svelte';
  import { GOOGLE_MAPS_API_KEY } from '$lib/consts/google-maps-api-key.conts';

  let mapElement;
  let map;
  let zoom = 10;

  export let lat;
  export let lng;
  export let mapZoom;

  $: latitude = parseFloat(lat) || latitude || 37.7749;
  $: longitude = parseFloat(lng) || longitude || -122.4194;
  $: zoom = parseInt(mapZoom) || zoom;

  onMount(() => {
    const loadGoogleMapsScript = () => {
      return new Promise((resolve, reject) => {
        if (window.google && window.google.maps) {
          resolve();
        } else {
          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
          script.async = true;
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        }
      });
    };

    loadGoogleMapsScript().then(() => {
      map = new window.google.maps.Map(mapElement, {
        center: { lat: latitude, lng: longitude },
        zoom: +mapZoom || zoom,
      });

      new window.google.maps.Marker({
        map: map,
        position: { lat: latitude, lng: longitude },
      });
    });
  });
</script>

<style>
    #map {
        width: 100%;
        height: 500px
    }
</style>

<div id="map" bind:this={mapElement}></div>
