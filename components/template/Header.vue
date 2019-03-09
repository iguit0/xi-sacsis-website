<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"/>

    <nuxt-link to="/">
      <b-navbar-brand tag="h1" class="my-1">{{title}}</b-navbar-brand>
    </nuxt-link>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto header"></b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  }
};
</script>

<style scoped>
h1 {
  font-size: 1.4rem;
  font-family: "Raleway", sans-serif;
  color: #fff;
  font-weight: 600;
}
</style>