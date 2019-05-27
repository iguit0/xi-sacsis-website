<template>
  <div class="meninas-info py-4">
    <span>
      <v-icon color="indigo" size="40px">fas fa-plus-circle</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">Workshop meninas++</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">workshop meninas++</div>
    <p class="intro-desc pt-3">
      <strong class="text-uppercase">Meninas++</strong> é um projeto de extensão criado por professoras e alunas do curso de Sistemas de Informação da Universidade Federal de Viçosa do campus de Rio Paranaíba (UFV-CRP).
    </p>
    <span>
      <v-icon color="indigo" size="40px">fas fa-thumbtack</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">objetivos</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">objetivos</div>
    <p class="intro-desc pt-3">
      É alinhado com a proposta do programa
      <strong>Meninas Digitais</strong> que visa a divulgação da área de Computação no intuito de discutir e promover ações para
      <strong>motivar</strong> e
      <strong>atrair</strong> alunas do ensino médio a seguir carreira
      <br>na área de TI na região do Alto Paranaíba - MG.
    </p>
    <span>
      <v-icon color="indigo" size="40px">fab fa-facebook</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">Redes sociais</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">Redes sociais</div>
    <span>
      <v-container grid-list-sm fill-height>
        <v-layout justify-center align-center row>
          <v-flex xs10 xl6 lg6 sm6 md10>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/projetomeninasmaismais/"
            >
              <v-img :src="require('@/assets/img/meninas.png')"/>
            </a>
          </v-flex>
        </v-layout>
      </v-container>
    </span>
  </div>
</template>

<style scoped>
.intro-desc {
  font-size: 17px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  line-height: 25px;
  font-weight: 400;
}
</style>
