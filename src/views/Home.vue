<template>
  <span>
    <HomeHero/>
    <Features/>
    <FAQ/>
    <Schedule/>
    <Sponsors/>
  </span>
</template>

<script>
import HomeHero from "@/components/HomeHero.vue";
import Features from "@/components/Features.vue";
import FAQ from "@/components/FAQ";
import Schedule from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";

export default {
  name: "Home",
  components: {
    HomeHero,
    Features,
    FAQ,
    Schedule,
    Sponsors
  }
};
</script>
