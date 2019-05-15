<template>
  <div>
    <div class="display-3 text-uppercase text-center">Redirecionando...</div>
  </div>
</template>

<script>
export default {
  name: "redirect",
  mounted() {
    window.open("https://app.sacsis.tech");
    this.$router.go(-1);
  }
};
</script>
