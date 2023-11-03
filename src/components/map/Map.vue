<template>
  <div class="map-wrapper">
    <l-map :zoom="zoom" :center="coordinates">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="coordinates" :icon="icon"></l-marker>
    </l-map>
  </div>
</template>
<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { icon } from 'leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  props: ['coordinates'],
  data: () => ({
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoom: 3,
    icon: icon({
      iconUrl: '/marker.png',
      iconSize: [32, 50],
      iconAnchor: [16, 37],
    }),
  }),
};
</script>
<style lang="scss" scoped>
.map-wrapper {
  width: 500px;
  height: 500px;
}
</style>
