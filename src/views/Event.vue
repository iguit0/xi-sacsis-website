<template>
  <div class="event-info py-4">
    <span>
      <v-icon color="indigo" size="40px">fa fa-building</v-icon>
    </span>
    <h2 class="display-3 text-uppercase hidden-sm-and-down">Sobre o evento</h2>
    <p class="intro-desc pt-3">{{about}}</p>
    <span>
      <v-icon color="indigo" size="40px">fa fa-people-carry</v-icon>
    </span>
    <h2 class="display-3 text-uppercase hidden-sm-and-down">organização</h2>
    <p class="intro-desc pt-3">{{organization}}</p>
    <span>
      <v-container grid-list-sm fill-height>
        <v-layout justify-center align-center row>
          <v-flex xs6 sm4>
            <v-img :src="require('@/assets/img/logo-infoalto.png')"/>
          </v-flex>

          <v-flex xs6 sm4>
            <v-img :src="require('@/assets/img/casi.png')"/>
          </v-flex>

          <v-flex xs6 sm4>
            <v-img :src="require('@/assets/img/ufv-logo.png')"/>
          </v-flex>
        </v-layout>
      </v-container>
    </span>
    <span>
      <v-icon color="indigo" size="40px">fa fa-calendar-check</v-icon>
    </span>
    <h2 class="display-3 text-uppercase hidden-sm-and-down">o que vai ter?</h2>
    <p class="intro-desc pt-3">{{content}}</p>
  </div>
</template>

<script>
export default {
  name: "Event",
  data() {
    return {
      about:
        "A SACSIS é um evento realizado anualmente na Universidade Federal de Viçosa campus Rio Paranaíba, com o objetivo de amplificar e atualizar a visão de nossos estudantes em relação ao mercado de trabalho e instigar o instinto empreendedor.",
      organization:
        "O evento é organizado pela InfoAlto, Empresa Júnior do curso de Sistemas de Informação, pelo CASI, Centro Acadêmico do curso de Sistemas de Informação, em conjunto com o corpo docente do curso.",
      content:
        " Em sua 11ª edição, o evento contará com temas como: empreendedorismo, startups, a indústria de games e desenvolvimento de softwares. Serão várias palestras, minicursos, debates e campeonatos, distribuídos ao longo de cinco dias. Todas as atividades visam o aprimoramento e atualização de conhecimento por parte da comunidade acadêmica, oportunizando a socialização de experiências entre os discentes e profissionais relacionados a àrea de Sistemas de Informação."
    };
  }
};
</script>

<style scoped>
.intro-desc {
  font-family: "Roboto", sans-serif;
  line-height: 25px;
  font-size: 21px;
  font-weight: 400;
}
</style>
