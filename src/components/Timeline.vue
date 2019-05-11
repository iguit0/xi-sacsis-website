<template>
  <v-timeline v-if="schedule && schedule.length">
    <v-timeline-item
      v-for="(event, i) in schedule"
      :key="i"
      :color="event.color"
      :icon="event.icon"
      large
      fill-dot
    >
      <template v-slot:icon v-if="event.type === 'palestra' || event.type === 'minicurso'">
        <v-avatar>
          <v-img src="https://place-hold.it/64"/>
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span :class="`headline font-weight-bold ${event.color}--text`" v-text="event.start_time"></span>
        <span
          v-if="event.end_time"
          :class="`headline mr-1 ml-1 font-weight-bold ${event.color}--text`"
          v-text="separator"
        ></span>
        <span :class="`headline font-weight-bold ${event.color}--text`" v-text="event.end_time"></span>
      </template>
      <div class="py-3">
        <div
          :class="`headline text-uppercase font-weight-bold mb-3 ${event.color}--text`"
        >{{event.type}}</div>
        <p class="subtitle black--text">{{event.description}}</p>
      </div>
    </v-timeline-item>
  </v-timeline>
  <h2 class="mt-2 text-center text-uppercase" v-else>programação não definida ainda.. aguarde!</h2>
</template>

<script>
export default {
  data: () => ({
    separator: "·",
    schedule: [
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
    ]
  })
};
</script>

<style>
.subtitle {
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  text-align: center;
}
</style>
