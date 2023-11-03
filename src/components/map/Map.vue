<template>
  <div class="map-wrapper">
    <l-map :zoom="zoom" :center="coordinates">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="coordinates"></l-marker>
    </l-map>
  </div>
</template>
<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  props: ['coordinates'],
  data: () => ({
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    zoom: 3,
  }),
};
</script>
<style lang="scss" scoped>
.map-wrapper {
  width: 500px;
  height: 500px;
}
</style>
