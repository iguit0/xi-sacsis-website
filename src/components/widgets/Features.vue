<template>
  <div class="features py-4">
    <h2 class="display-2 text-uppercase indigo--text">O que te espera na X SACSIS</h2>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex v-for="(card, index) in cards" :key="index" xs12 md6 lg3 sm6>
          <v-card flat color="transparent">
            <v-responsive class="pt-4">
              <i :class="'icon fa fa-'+`${card.icon}`"/>
            </v-responsive>
            <v-card-text>
              <h2 class="display-1">{{card.title}}</h2>
              <p class="black--text mt-1">{{card.subtitle}}</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Diversão & Integração",
          icon: "handshake",
          subtitle:
            "O evento oferece atividades descontraídas para interação entre os participantes (coffee breaks, campeonatos, etc)."
        },
        {
          title: "Somando Experiências",
          icon: "chart-line",
          subtitle:
            "O evento foi formulado buscando dinamizar a aquisição de conhecimento e experiências para além do cotidiano da vida acadêmica."
        },
        {
          title: "Minicursos",
          icon: "chalkboard-teacher",
          subtitle:
            "A SACSIS conta com minicursos para aprimoramento com temas atuais, alinhados à formação técnico-científica dos participantes."
        },
        {
          title: "Palestras Inspiradoras",
          icon: "microphone",
          subtitle:
            "Convidamos referências nacionais nas diversas áreas do conhecimento, com foco em tecnologia da informação."
        }
      ]
    };
  }
};
</script>

<style scoped>
.icon {
  font-size: 50px;
  color: #136a8a;
}
</style>
