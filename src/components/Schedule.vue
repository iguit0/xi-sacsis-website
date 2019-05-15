<template>
  <v-layout>
    <v-flex>
      <span>
        <v-icon color="indigo" size="40px">fa fa-calendar-alt</v-icon>
      </span>
      <div class="display-3 text-uppercase hidden-sm-and-down">programação</div>
      <div class="title mt-1 text-uppercase hidden-md-and-up">programação</div>
      <div v-if="schedule && schedule.length">
        <div
          class="subtitle mt-1 mb-2"
        >Organizamos uma linha do tempo com todos os eventos para você</div>
        <v-tabs centered fixed color="indigo darken-1" dark icons-and-text>
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
      </div>
      <div v-else class="mt-1 mb-3 pb-5">
        <h2 class="headline text-uppercase font-weight-light indigo--text">{{ error }} :(</h2>
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
      //schedule: [],
      schedule: [
        {
          color: "#333",
          type: "credenciamento",
          start_time: "08:00",
          end_time: "12:00",
          location: "LAE 176",
          icon: "fa fa-id-card",
          description:
            "Será realizado o credenciamento de todos os participantes."
        },
        {
          color: "pink",
          type: "minicurso",
          start_time: "14:00",
          end_time: "17:00",
          location: "PVA 229",
          speaker: "Seu Zé",
          icon: "fa fa-chalkboard-teacher",
          description: "Como fazer gambiarra com excelência"
        },
        {
          color: "#33691E",
          type: "palestra",
          start_time: "14:00",
          end_time: "12:00",
          location: "LAE 171",
          speaker: "Buguinho Developer",
          icon: "fa fa-microphone",
          description: "Descrição Palestra"
        },

        {
          color: "amber",
          type: "campeonato futebol",
          start_time: "15:30",
          end_time: "18:00",
          location: "Parque do Zarico",
          icon: "fa fa-futbol",
          description: "Descrição Futebol"
        },
        {
          color: "orange",
          type: "campeonato dota 2",
          start_time: "18:00",
          end_time: "19:40",
          icon: "fa fa-gamepad",
          location: "PVA 225",
          description: "Descrição Dota 2"
        },
        {
          color: "indigo",
          type: "maratona de programação",
          start_time: "20:00",
          end_time: "21:30",
          icon: "fa fa-code",
          location: "PVA 227",
          description: "Descrição Maratona"
        }
      ],
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
    //this.getSchedule();
  }
};
</script>