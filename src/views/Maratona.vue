<template>
  <div class="wsis-info py-4">
    <span>
      <v-icon color="indigo" size="40px">fas fa-code</v-icon>
    </span>
    <div class="display-3 mt-1 mb-3 text-uppercase hidden-sm-and-down">V Maratona de Programação</div>
    <div class="title mt-1 mb-3 text-uppercase hidden-md-and-up">V Maratona de Programação</div>
    <p class="intro-desc pt-3">
      • Premiação Iniciante:
      <strong>R$ 300,00</strong>
      <br>• Premiação Avançado:
      <strong>R$ 600,00</strong>
    </p>
    <span>
      <v-icon color="indigo" size="40px">fas fa-calendar-check</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">datas</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">datas</div>
    <p class="intro-desc pt-3">
      • Prazo final para a inscrição das equipes:
      <strong>12 de junho de 2019 às 23:59</strong>;
      <br>• Evento acontecerá nos dias:
      <strong>14 de junho de 2019 a partir das 8:00 no PVA 226 e 227</strong>;
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
    <div class="display-3 text-uppercase hidden-sm-and-down">regulamento</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">regulamento</div>
    <v-btn @click="redirect" color="info" class="mt-3" depressed large>
      <span class="font-weight-bold mr-1">abrir</span>
      <v-icon light class="ml-1" size="18px">fas fa-external-link-alt</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "maratona",
  methods: {
    redirectForms() {
      window.open("https://kutt.it/Ynv8sd");
    },
    redirect() {
      window.open("https://kutt.it/Ryfeao");
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
