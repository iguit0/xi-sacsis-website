<template>
  <v-timeline>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      :icon="year.icon"
      fill-dot
    >
      <template v-slot:opposite>
        <span :class="`headline font-weight-bold ${year.color}--text`" v-text="year.year"></span>
      </template>
      <div class="py-3">
        <h2
          :class="`headline text-uppercase font-weight-bold mb-3 ${year.color}--text`"
        >{{year.type}}</h2>
        <div>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    schedule: [],
    years: [
      {
        color: "cyan",
        type: "minicurso",
        year: "11:00",
        icon: "fa fa-chalkboard-teacher"
      },
      {
        color: "pink",
        type: "minicurso",
        year: "11:00",
        icon: "fa fa-chalkboard-teacher"
      },
      {
        color: "green",
        type: "palestra",
        year: "14:00",
        icon: "fa fa-microphone"
      },

      {
        color: "amber",
        type: "campeonato futebol",
        year: "17:30",
        icon: "fa fa-futbol"
      },
      {
        color: "orange",
        type: "campeonato dota 2",
        year: "18:30",
        icon: "fa fa-gamepad"
      },
      {
        color: "indigo",
        type: "maratona de programação",
        year: "20:00",
        icon: "fa fa-code"
      }
    ]
  })
};
</script>