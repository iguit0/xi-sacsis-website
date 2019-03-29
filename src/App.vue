<template>
  <v-app id="app">
    <Header/>
    <v-content>
      <v-container fluid class="pa-0">
        <router-view/>
      </v-container>
    </v-content>
    <Contact/>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "@/components/template/Header";
import Footer from "@/components/template/Footer";
import Contact from "@/components/template/Contact";

export default {
  components: { Header, Footer, Contact }
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
