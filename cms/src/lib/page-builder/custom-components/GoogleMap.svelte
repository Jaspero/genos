<svelte:options customElement={{ tag: 'pb-google-map', shadow: 'none' }} />

<script>
  import { onMount } from 'svelte';
  import { GOOGLE_MAPS_API_KEY } from '$lib/consts/google-maps-api-key.conts';

  let mapElement;
  let map;
  let zoom = 10;
  let marker;
  let latitude = 37.7749;
  let longitude = -122.4194;

  export let lat;
  export let lng;
  export let mapZoom;
  export let address;

  $: if (lat) latitude = parseFloat(lat) || latitude;
  $: if (lng) longitude = parseFloat(lng) || longitude;
  $: if (mapZoom) zoom = parseInt(mapZoom) || zoom;

  onMount(() => {
    console.log(lat, lng);
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
        zoom: zoom
      });

      console.log(latitude, longitude);
      marker = new window.google.maps.Marker({
        map: map,
        position: { lat: latitude, lng: longitude },
      });
    });
  });

  $: if (map) {
    map.setCenter({ lat: latitude, lng: longitude });
    map.setZoom(zoom);
  }

  $: search(address, mapZoom);

  async function search(value, mapZoom) {
    if (map) {
      map.setZoom(mapZoom || zoom);
    }

    if (!value) {
      return;
    }

    const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${GOOGLE_MAPS_API_KEY}`)
      .then(res => res.json());

    if (res.results.length) {
      const { lat: lt, lng: lg } = res.results[0].geometry.location;
      latitude = lt;
      longitude = lg;
      lat = lt;
      lng = lg;

      if (map) {
        map.setCenter({ lat, lng });
      }

      marker.setPosition({ lat, lng });
      marker.setTitle(res.results[0].formatted_address);
    }
  }
</script>

<style>
    #map {
        width: 100%;
        height: 500px
    }
</style>

<div id="map" bind:this={mapElement}></div>
