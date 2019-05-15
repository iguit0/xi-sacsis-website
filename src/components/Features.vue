<template>
  <div class="features py-4">
    <span>
      <v-icon color="indigo" size="40px">far fa-thumbs-up</v-icon>
    </span>
    <h2 class="display-3 text-uppercase hidden-sm-and-down">
      O que te espera na
      <strong>XI SACSIS</strong>
    </h2>
    <div class="display-1 text-uppercase hidden-md-and-up">
      O que te espera na
      <strong>XI SACSIS</strong>
    </div>
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
            "O evento contribui para a criação de novas relações por meio das atividades que permitem a interação entre os participantes (Palestras, Minicursos, competições, coffee break, etc)."
        },
        {
          title: "Experiências",
          color: "#B8860B",
          icon: "chart-line",
          subtitle:
            "O evento foi formulado com o intuito de dinamizar a aquisição de conhecimento e experiências para além do cotidiano da vida acadêmica."
        },
        {
          title: "Minicursos",
          color: "indigo",
          icon: "chalkboard-teacher",
          subtitle:
            "O evento conta com minicursos sobre temas relevantes e atuais, permitindo aos participantes adquirirem conhecimentos de suma importância para sua vida profissional."
        },
        {
          title: "Palestras",
          color: "#4169E1",
          icon: "microphone",
          subtitle:
            "Visando oferecer uma ampla visão aos participantes, foram convidados profissionais e docentes pertencentes às diversas áreas de conhecimento."
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
