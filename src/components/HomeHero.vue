<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout align-center justify-center column fill-height>
      <div class="home-hero-title font-weight-black white--text text-xs-center hidden-sm-and-down">
        <v-img width="500px" :src="require('../assets/img/sacsis-logo-white.png')"/>
      </div>
      <div
        class="home-hero-title-res font-weight-black white--text text-xs-center hidden-md-and-up"
      >
        <v-img width="250px" :src="require('../assets/img/sacsis-logo-white.png')"/>
      </div>
      <div
        class="home-hero-subtitle white--text text-xs-center text-uppercase mb-3 mt-2"
      >10 a 14 de Junho</div>
      <div
        class="home-hero-subtitle text-uppercase font-weight-bold white--text text-xs-center hidden-sm-and-down"
      >Grandes carreiras começam aqui</div>
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

.home-hero-title {
  font-size: 112px !important;
  line-height: 1 !important;
  letter-spacing: -0.04em !important;
  font-family: "Kanit", sans-serif !important;
}

.home-hero-title-res {
  font-size: 56px !important;
  line-height: 1 !important;
  letter-spacing: -0.04em !important;
  font-family: "Kanit", sans-serif !important;
}

.home-hero-subtitle {
  font-size: 34px !important;
  font-weight: bold;
  line-height: 40px !important;
  letter-spacing: normal !important;
  font-family: "Kanit", sans-serif !important;
}
</style>