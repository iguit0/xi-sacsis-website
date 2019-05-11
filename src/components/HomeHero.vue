<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout justify-center align-center column pa-2>
      <div
        class="display-4 font-weight-black white--text text-xs-center hidden-sm-and-down"
      >XI SACSIS</div>
      <div class="display-3 font-weight-black white--text text-xs-center hidden-md-and-up">XI SACSIS</div>
      <div
        class="display-1 font-weight-black yellow--text text-xs-center text-uppercase mb-3 mt-2"
      >10 a 14 de Junho</div>
      <div
        class="display-1 font-weight-bold white--text text-xs-center hidden-sm-and-down"
      >Grandes carreiras começam aqui</div>
      <!--<v-btn fab large color="primary" class="mt-5">
        <v-icon large color="white">expand_more</v-icon>
      </v-btn>-->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeHero"
};
</script>

<style scoped>
.home-hero {
  background: url("../assets/img/parallax.png") center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>