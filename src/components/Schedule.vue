<template>
  <v-layout id="programacao">
    <v-flex>
      <span>
        <v-icon color="indigo" size="40px">fa fa-calendar-alt</v-icon>
      </span>
      <div class="display-3 text-uppercase hidden-sm-and-down">programação</div>
      <div class="display-1 text-uppercase hidden-md-and-up">programação</div>
      <h2 class="pb-3">Organizamos uma linha do tempo com todos os eventos para você</h2>
      <v-tabs centered color="indigo darken-1" dark icons-and-text>
        <v-tabs-slider color="orange"></v-tabs-slider>

        <v-tab href="#dia-1">
          Dia 1
          <v-icon>looks_one</v-icon>
        </v-tab>

        <v-tab href="#dia-2">
          Dia 2
          <v-icon>looks_two</v-icon>
        </v-tab>

        <v-tab href="#dia-3">
          Dia 3
          <v-icon>looks_3</v-icon>
        </v-tab>

        <v-tab href="#dia-4">
          Dia 4
          <v-icon>looks_4</v-icon>
        </v-tab>

        <v-tab href="#dia-5">
          Dia 5
          <v-icon>looks_5</v-icon>
        </v-tab>

        <v-tab-item v-for="i in 5" :key="i" :value="'dia-' + i">
          <Timeline/>
        </v-tab-item>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
import Timeline from "./Timeline";

export default {
  components: { Timeline }
};
</script>