<template>
  <div class="features py-4">
    <span>
      <v-icon color="indigo" size="40px">far fa-thumbs-up</v-icon>
    </span>
    <h2 class="display-3 text-uppercase">
      O que te espera na
      <strong>XI SACSIS</strong>
    </h2>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex v-for="(card, index) in cards" :key="index" xs12 md6 lg3 sm6>
          <v-card flat color="transparent">
            <v-responsive class="pt-4">
              <i :class="'icon fa fa-'+`${card.icon}`" :style="'color: '+`${card.color}`"/>
            </v-responsive>
            <v-card-text>
              <h2 class="display-1 text-uppercase">{{card.title}}</h2>
              <div class="divider div-transparent div-arrow-down"></div>
              <p class="subtitle black--text mt-1">{{card.subtitle}}</p>
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
          title: "Integração",
          color: "#333",
          icon: "handshake",
          subtitle:
            "Oferece atividades descontraídas para interação entre os participantes (coffee breaks, campeonatos, etc)."
        },
        {
          title: "Experiências",
          color: "#B8860B",
          icon: "chart-line",
          subtitle:
            "Foi formulado buscando dinamizar a aquisição de conhecimento e experiências para além do cotidiano da vida acadêmica."
        },
        {
          title: "Minicursos",
          color: "indigo",
          icon: "chalkboard-teacher",
          subtitle:
            "Conta com minicursos para aprimoramento com temas atuais, alinhados à formação técnico-científica dos participantes."
        },
        {
          title: "Palestras",
          color: "#4169E1",
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
}

.subtitle {
  font-size: 18px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  text-align: center;
}

.divider {
  position: relative;
  margin-top: 6px;
  height: 9px;
}

.div-transparent:before {
  content: "";
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(48, 49, 51),
    transparent
  );
}

.div-arrow-down:after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -7px;
  left: calc(50% - 7px);
  width: 14px;
  height: 14px;
  transform: rotate(45deg);
  background-color: white;
  border-bottom: 1px solid rgb(48, 49, 51);
  border-right: 1px solid rgb(48, 49, 51);
}
</style>
