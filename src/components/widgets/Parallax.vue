<template>
  <div>
    <v-parallax height="940" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-layout align-center column justify-center>
        <h1 class="display-4 font-weight-medium text-uppercase mb-3">SACSIS</h1>
        <h4 class="display-1 text-uppercase font-weight-bold pb-2">21 a 25 de Maio de 2019</h4>
        <Timer duration="28 days"/>
        <v-btn depressed large color="secondary">Conheça mais</v-btn>
      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
import Timer from "@/components/widgets/Timer.vue";

export default {
  components: { Timer }
};
</script>
