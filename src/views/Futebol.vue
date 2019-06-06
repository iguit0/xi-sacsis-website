<template>
  <div class="wsis-info py-4">
    <span>
      <v-icon color="indigo" size="40px">fas fa-futbol</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">II Copa de Futsal da SACSIS</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">II Copa de Futsal da SACSIS</div>
    <p class="intro-desc pt-3">
      • Membro participante da SACSIS:
      <strong>R$ 5,00</strong>;
      <br>• Aluno de Sistemas não participante da SACSIS:
      <strong>R$ 10,00</strong>;
      <br>• Aluno de outros cursos não participante da SACSIS:
      <strong>R$ 15,00</strong>;
    </p>
    <div class="title mt-1 text-uppercase">
      Premiação: Total da arrecadação de todas as equipes
      <br>
    </div>
    <p class="intro-desc pt-3">
      <strong>OBS.: Cada time pode inscrever no máximo 10 jogadores.</strong>
    </p>
    <span>
      <v-icon color="indigo" size="40px">fas fa-calendar-check</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">datas</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">datas</div>
    <p class="intro-desc pt-3">
      • Prazo final para a inscrição das equipes:
      <strong>9 de junho de 2019</strong>;
      <br>• Início das partidas:
      <strong>10 de junho de 2019</strong>;
      <br>
    </p>

    <span>
      <v-icon color="indigo" size="40px">fas fa-id-badge</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">inscrições</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">inscrições</div>
    <v-btn @click="redirectForms" color="info" class="mt-3" depressed large>
      <span class="font-weight-bold mr-1">abrir</span>
      <v-icon light class="ml-1" size="18px">fas fa-external-link-alt</v-icon>
    </v-btn>
    <br>
    <br>
    <span>
      <v-icon color="indigo" size="40px">fa fa-file-pdf</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">MAIS INFORMAÇÕES</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">MAIS INFORMAÇÕES</div>
    <p class="intro-desc pt-3">Ainda irá ser anunciado...</p>
  </div>
</template>

<script>
export default {
  name: "futebol",
  methods: {
    redirectForms() {
      window.open(
        "https://docs.google.com/forms/d/1NKqjGomU_vlktzuHe4PJ1WZsFgWeKJEXYxUP13CYEbI?fbclid=IwAR1jszpETDSjDo04ecqEzIWijEI59H52FsQIQt55uu8rcFGT-KKNsEJdylA"
      );
    }
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
