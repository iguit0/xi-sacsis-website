<template>
  <v-app id="app">
    <Header/>
    <v-content>
      <v-container fluid class="pa-0">
        <router-view/>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "@/components/template/Header";
import Footer from "@/components/template/Footer";

export default {
  components: { Header, Footer }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
