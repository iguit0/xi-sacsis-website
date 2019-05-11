<template>
  <v-layout>
    <v-flex>
      <span>
        <v-icon color="indigo" size="40px">fa fa-calendar-alt</v-icon>
      </span>
      <div class="display-3 text-uppercase hidden-sm-and-down">programação</div>
      <div class="display-1 text-uppercase hidden-md-and-up">programação</div>
      <h2 class="pb-3">Organizamos uma linha do tempo com todos os eventos para você</h2>
      <v-tabs
        centered
        fixed
        color="indigo darken-1"
        dark
        icons-and-text
        v-if="schedule && schedule.length"
      >
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

        <v-tab-item lazy v-for="i in 5" :key="i" :value="'dia-' + i">
          <Timeline :schedule="schedule" v-if="$vuetify.breakpoint.mdAndUp"/>
          <ListSchedule :schedule="schedule" v-else/>
        </v-tab-item>
      </v-tabs>
      <div v-else>
        <h2 class="headline pt-1 pb-1 text-uppercase font-weight-light indigo--text">{{ error }} :(</h2>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Timeline from "./Timeline";
import ListSchedule from "./ListSchedule";
import api from "@/services/api";

export default {
  components: { Timeline, ListSchedule },
  data() {
    return {
      schedule: [],
      error: ""
    };
  },
  methods: {
    getSchedule() {
      api.get("/schedule").then(res => {
        if (res.status === 200) {
          this.schedule = res.data;
        } else {
          this.error = res.data.message;
        }
      });
    }
  },
  mounted() {
    this.getSchedule();
  }
};
</script>