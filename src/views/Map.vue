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
    <l-marker :lat-lng="markerLatLng"></l-marker>
    <l-marker :lat-lng="marker2LatLng"></l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LMarker,
    LTileLayer
  },
  data() {
    return {
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 18,
      center: [-19.2171352, -46.2232625],
      markerLatLng: [-19.216289, -46.2235128],
      marker2LatLng: [-19.217663, -46.223501],
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
