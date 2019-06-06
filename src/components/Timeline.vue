<template>
  <v-timeline>
    <v-timeline-item
      v-for="(event, i) in schedule"
      :key="i"
      :color="event.color"
      :icon="event.icon"
      large
      fill-dot
    >
      <template v-slot:icon v-if="event.palestra || event.minicurso">
        <v-avatar>
          <v-img :src="event.avatar"/>
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span :class="`headline font-weight-bold`" v-text="event.data_inicio"></span>
        <span
          v-if="event.data_fim"
          :class="`headline mr-1 ml-1 font-weight-bold red--text`"
          v-text="separator"
        ></span>
        <span :class="`headline font-weight-bold`" v-text="event.data_fim"></span>
      </template>
      <div class="py-3" v-if="event.palestra">
        <div :class="`headline text-uppercase font-weight-bold mb-3`">{{event.palestra}}</div>
        <p class="subtitle black--text">{{event.ministrante}}</p>
        <p class="subtitle black--text">{{event.descricao}}</p>
        <p class="subtitle black--text">
          <v-icon small>fa fa-map-marker-alt</v-icon>
          {{event.local}}
        </p>
      </div>
      <div class="py-3" v-else-if="event.minicurso">
        <div :class="`headline text-uppercase font-weight-bold mb-3`">{{event.minicurso}}</div>
        <p class="subtitle black--text">{{event.ministrante}}</p>
        <p class="subtitle black--text">{{event.descricao}}</p>
        <p class="subtitle black--text">
          <v-icon small>fa fa-map-marker-alt</v-icon>
          {{event.local}}
        </p>
      </div>
      <div class="py-3" v-else>
        <div
          :class="`headline text-uppercase font-weight-bold mb-3`"
          v-if="event.titulo"
        >{{event.titulo}}</div>
        <p class="subtitle black--text">{{event.descricao}}</p>
        <p class="subtitle black--text">
          <v-icon small>fa fa-map-marker-alt</v-icon>
          {{event.local}}
        </p>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: ["schedule"],
  data: () => ({
    separator: "·"
    /*schedule: [
      {
        color: "cyan",
        type: "credenciamento",
        start_time: "08:00",
        end_time: "12:00",
        icon: "fa fa-id-card",
        description:
          "Será realizado o credenciamento de todos os participantes."
      },
      {
        color: "pink",
        type: "minicurso",
        start_time: "11:00",
        end_time: "12:00",
        icon: "fa fa-chalkboard-teacher",
        description: "Descrição Minicurso"
      },
      {
        color: "green",
        type: "palestra",
        start_time: "14:00",
        end_time: "12:00",
        icon: "fa fa-microphone",
        description: "Descrição Palestra"
      },

      {
        color: "amber",
        type: "campeonato futebol",
        start_time: "15:30",
        end_time: "18:00",
        icon: "fa fa-futbol",
        description: "Descrição Futebol"
      },
      {
        color: "orange",
        type: "campeonato dota 2",
        start_time: "18:00",
        end_time: "19:40",
        icon: "fa fa-gamepad",
        description: "Descrição Dota 2"
      },
      {
        color: "indigo",
        type: "maratona de programação",
        start_time: "20:00",
        end_time: "21:30",
        icon: "fa fa-code",
        description: "Descrição Maratona"
      }
    ]*/
  })
};
</script>

<style>
.subtitle {
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  text-align: center;
}
</style>
