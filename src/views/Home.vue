<template>
  <v-responsive>
    <Parallax/>
    <Features/>
    <FAQ/>
    <Schedule/>
  </v-responsive>
</template>

<script>
import Parallax from "@/components/widgets/Parallax.vue";
import Features from "@/components/widgets/Features.vue";
import FAQ from "@/components/widgets/FAQ";
import Schedule from "@/components/widgets/Schedule";

export default {
  components: {
    Parallax,
    Features,
    FAQ,
    Schedule
  }
};
</script>
