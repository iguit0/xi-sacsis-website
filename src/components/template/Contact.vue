<template>
  <v-layout pa-5>
    <v-flex xs6>
      <h2 class="display-2 text-uppercase">Fale conosco</h2>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :counter="25" :rules="nameRules" label="Nome" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-textarea
          v-model="msg"
          label="Mensagem"
          hint="Escreva da maneira mais clara possível!"
          :rules="msgRules"
          required
        ></v-textarea>

        <v-btn color="primary" large block :disabled="!valid">
          Enviar
          <v-icon class="ml-2" size="20px">fa fa-paper-plane</v-icon>
        </v-btn>
      </v-form>
    </v-flex>
    <v-flex ml-5 pl-0 class="map">
      <l-map
        :zoom="zoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
      >
        <l-tile-layer :url="url"></l-tile-layer>
      </l-map>
    </v-flex>
  </v-layout>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Nome é obrigatório",
        v => (v && v.length <= 10) || "Nome deve ser menor que 25 caracteres"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail é obrigatório",
        v => /.+@.+/.test(v) || "E-mail deve ser válido"
      ],
      msg: "",
      msgRules: [v => !!v || "Mensagem não pode estar vazia!"],
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 24,
      center: [-19.2190987, -46.223652],
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
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
