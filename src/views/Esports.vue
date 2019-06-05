<template>
  <div class="wsis-info py-4">
    <span>
      <v-icon color="indigo" size="40px">fas fa-headset</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">III Campeonato eSports (CS-GO)</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">III Campeonato eSports (CS-GO)</div>
    <p class="intro-desc pt-3">
      • Membro participante da SACSIS:
      <strong>R$ 5,00</strong>;
      <br>• Aluno de Sistemas não paticipante da SACSIS:
      <strong>R$ 10,00</strong>;
      <br>• Aluno de outros cursos não participante da SACSIS:
      <strong>R$ 15,00</strong>;
    </p>
    <div class="title mt-1 text-uppercase">
      Premiação: Total da arrecadação de todas as equipes
      <br>
    </div>
    <p class="intro-desc pt-3">
      <strong>
        A composição da equipe há de conter no mínimo 2 (dois)
        membros inscritos na XI SACSIS, independente de qual curso.
      </strong>
    </p>
    <span>
      <v-icon color="indigo" size="40px">fas fa-calendar-check</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">datas</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">datas</div>
    <p class="intro-desc pt-3">
      • Prazo final para a inscrição das equipes:
      <strong>11 de junho de 2019</strong>;
      <br>• Divulgação dos resultados:
      <strong>12 de junho de 2019</strong>;
      <br>• Início das partidas:
      <strong>13 de junho de 2019</strong>;
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
  name: "csgo",
  methods: {
    redirectForms() {
      window.open(
        "https://docs.google.com/forms/d/1iwf0zq-JQajEYdqv3SH2f4tDzbRnoc-AMQs3euXLJVM?fbclid=IwAR16kkuOSGYRZjQsNUP_A_dkSi8nfuic2q9ceB4WGTkoMq8b0y86ORkVOKU"
      );
    },
    redirect() {
      window.open(
        "https://drive.google.com/file/d/16TVYIQbJn9yYo54HfYx1lEq-I7nGJD2v/view"
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
