<template>
  <div>
    <v-card class="mx-auto" v-for="(event, i) in schedule" :key="i" dark max-width="950">
      <v-card-title>
        <v-icon left v-if="event.minicurso">fa fa-chalkboard-teacher</v-icon>
        <v-icon left v-else-if="event.palestra">fa fa-microphone</v-icon>
        <v-icon left v-else>fa fa-star</v-icon>
        <span class="subtitle text-uppercase font-weight-light" v-if="event.palestra">palestra</span>
        <span
          class="subtitle text-uppercase font-weight-light"
          v-else-if="event.minicurso"
        >minicurso</span>
        <span class="subtitle text-uppercase font-weight-light" v-else>{{ event.titulo }}</span>
      </v-card-title>

      <v-card-text class="subtitle font-weight-bold" v-if="event.palestra">{{ event.palestra }}</v-card-text>
      <v-card-text
        class="subtitle font-weight-bold"
        v-else-if="event.minicurso"
      >{{ event.minicurso }}</v-card-text>

      <v-card-text class="subtitle font-weight-bold">
        <v-icon small>fa fa-clock</v-icon>
        <span class="subheading ml-1">{{ event.data_inicio }} · {{ event.data_fim }}</span>
      </v-card-text>

      <v-card-text class="subtitle font-weight-bold">
        <v-icon small>fa fa-map-marker-alt</v-icon>
        <span class="subheading ml-1">{{ event.local }}</span>
      </v-card-text>

      <v-card-actions v-if="event.palestra || event.minicurso">
        <v-list-tile class="grow">
          <v-list-tile-avatar :color="`${event.color} darken-3`">
            <v-img class="elevation-6" :src="event.avatar"/>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ event.ministrante }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-card-actions>

      <v-card-actions v-else>
        <v-list-tile class="grow">
          <v-layout align-center justify-end>
            <v-icon small>fa fa-map-marker-alt</v-icon>
            <span class="subheading ml-1">{{ event.local }}</span>
          </v-layout>
        </v-list-tile>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["schedule"],
  name: "ListSchedule",
  data: () => ({
    /*schedule: [
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
    ]*/
  })
};
</script>
