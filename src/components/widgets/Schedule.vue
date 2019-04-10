<template>
  <v-layout>
    <v-flex>
      <span>
        <v-icon color="indigo" size="40px">fa fa-calendar-alt</v-icon>
      </span>
      <h2 class="display-3 text-uppercase">programação</h2>
      <h2 class="pb-3">Organizamos uma linha do tempo com todos os eventos</h2>
      <v-tabs centered color="secondary" dark icons-and-text>
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab href="#tab-1">
          Dia 1
          <v-icon>looks_one</v-icon>
        </v-tab>

        <v-tab href="#tab-2">
          Dia 2
          <v-icon>looks_two</v-icon>
        </v-tab>

        <v-tab href="#tab-3">
          Dia 3
          <v-icon>looks_3</v-icon>
        </v-tab>

        <v-tab href="#tab-4">
          Dia 4
          <v-icon>looks_4</v-icon>
        </v-tab>

        <v-tab href="#tab-5">
          Dia 5
          <v-icon>looks_5</v-icon>
        </v-tab>

        <v-tab-item v-for="i in 5" :key="i" :value="'tab-' + i">
          <Timeline/>
        </v-tab-item>
        <!--
        <v-tab-item v-for="i in 5" :key="i" :value="'tab-' + i">
          <v-card flat>
            <v-card-text>{{ text +' '+ i}}</v-card-text>
          </v-card>
        </v-tab-item>-->
      </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
import Timeline from "@/components/widgets/Timeline";

export default {
  components: { Timeline }
};
</script>