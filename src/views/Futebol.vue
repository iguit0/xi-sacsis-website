<template>
  <div class="wsis-info py-4">
    <span>
      <v-icon color="indigo" size="40px">fas fa-futbol</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">II Copa de Futsal da SACSIS</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">II Copa de Futsal da SACSIS</div>
    <p class="intro-desc pt-3">
      Quando: 21 e 23 de maio
      Onde: Quadra do Zarico, Rua Otaviano Rosa, 2 - Rio Paranaíba
      Time: 5 jogadores e 2 reservas
      Fique atento!!!
      - Somente alunos do curso de Sistemas de Informação poderão jogar.
      - Pelo menos um dos jogadores deve estar inscrito na SACSIS
      - Taxa de inscrição: R$ 5,00 (inscritos na SACSIS) R$ 10,00 (não inscritos)
      Link para inscrição: aqui
    </p>
    <span>
      <v-icon color="indigo" size="40px">fas fa-calendar-check</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">datas</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">datas</div>
    <p class="intro-desc pt-3">
      • Prazo para a submissão dos resumos:
      <strong>30 de maio de 2019</strong>;
      <br>• Divulgação dos resultados:
      <strong>06 de junho de 2019</strong>;
      <br>• Submissão da versão final:
      <strong>10 de junho de 2019</strong>;
      <br>• Data das apresentações:
      <strong>13 de junho de 2019</strong>.
      <br>
    </p>
    <span>
      <v-icon color="indigo" size="40px">fa fa-file-pdf</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">MAIS INFORMAÇÕES</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">MAIS INFORMAÇÕES</div>
    <v-btn @click="redirect" color="info" class="mt-3" depressed large>
      <span class="font-weight-bold mr-1">abrir edital</span>
      <v-icon light class="ml-1" size="18px">fas fa-external-link-alt</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "futebol",
  methods: {
    redirect() {
      window.open(
        "https://drive.google.com/file/d/1e29SKkbiYTrkwmxy6Tq9_bwEA5ot21VZ/view"
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
