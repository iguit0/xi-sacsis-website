<template>
  <div id="app">
    <v-app>
      <Header/>
      <v-content transition="slide-x transition">
        <router-view/>
      </v-content>
      <back-to-top bottom="40px" right="20px">
        <v-btn small fab color="indigo" dark class="btn-to-top">
          <v-icon>expand_less</v-icon>
        </v-btn>
      </back-to-top>
      <Footer/>

      <!-- Dialogs -->
      <modals-container />
    </v-app>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: { Header, Footer }
};
</script>

<!-- color: #2c3e50; -->

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>