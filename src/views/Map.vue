<template>
  <l-map
    class="map"
    :zoom="zoom"
    :center="center"
    @update:zoom="zoomUpdated"
    @update:center="centerUpdated"
    @update:bounds="boundsUpdated"
  >
    <l-tile-layer :url="url"/>
    <l-marker :lat-lng="markerLatLng">
      <l-tooltip>Os eventos acontecerão (em sua grande maioria) aqui!</l-tooltip>
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LTooltip, LMarker } from "vue2-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LMarker,
    LTooltip,
    LTileLayer
  },
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 18,
      center: [-19.2163933, -46.223302],
      markerLatLng: [-19.216289, -46.2235128],
      bounds: null
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }
};
</script>

<style scoped>
.map {
  z-index: 1;
}
</style>
