<template>
  <div class="event-info py-4">
    <span>
      <v-icon color="indigo" size="40px">fa fa-building</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">sobre o evento</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">sobre o evento</div>
    <p class="intro-desc pt-3">{{about}}</p>
    <span>
      <v-icon color="indigo" size="40px">fa fa-calendar-check</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">o que vai ter?</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">o que vai ter?</div>
    <p class="intro-desc pt-3">{{content}}</p>
    <span>
      <v-icon color="indigo" size="40px">fa fa-people-carry</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">organização</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">organização</div>
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
  </div>
</template>

<script>
export default {
  name: "Event",
  data() {
    return {
      about:
        "A SACSIS é um evento realizado anualmente pelo curso de Sistemas de Informação da Universidade Federal de Viçosa campus Rio Paranaíba e se encontra na 11ª edição. Possui o objetivo de amplificar e atualizar a visão dos estudantes em relação ao mercado de trabalho, contribuir com conhecimento técnico-científico, além de instigar a inovação e o empreendedorismo.",
      organization:
        "O evento é organizado pela InfoAlto (Empresa Júnior do Curso de Sistemas de informação), CASI (Centro Acadêmico de Sistemas de Informação) e por alguns membros do corpo discente e docente do curso de sistemas de informação da UFV-CRP.",
      content:
        "O evento contará com temas como: empreendedorismo, startups, indústria de games e softwares em geral. Serão diversas palestras, minicursos, debates e campeonatos, todos distribuídos de 10 a 14 de junho. Todas as atividades visam o aprimoramento e atualização de conhecimento por parte da comunidade acadêmica, permitindo a troca de experiências entre os discentes e profissionais dentro do campo da computação."
    };
  }
};
</script>

<style scoped>
.intro-desc {
  font-size: 17px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  line-height: 25px;
  font-weight: 400;
}
</style>
