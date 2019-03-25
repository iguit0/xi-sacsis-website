<template>
  <v-responsive>
    <Parallax/>
    <FAQ/>
  </v-responsive>
</template>

<script>
import Parallax from "@/components/widgets/Parallax.vue";
import FAQ from "@/components/widgets/FAQ";

export default {
  components: {
    Parallax,
    FAQ
  }
};
</script>
