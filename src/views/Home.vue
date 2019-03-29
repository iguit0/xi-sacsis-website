<template>
  <v-responsive>
    <Parallax/>
    <Features/>
    <FAQ/>
  </v-responsive>
</template>

<script>
import Parallax from "@/components/widgets/Parallax.vue";
import Features from "@/components/widgets/Features.vue";
import FAQ from "@/components/widgets/FAQ";

export default {
  components: {
    Parallax,
    Features,
    FAQ
  }
};
</script>
