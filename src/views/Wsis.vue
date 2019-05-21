<template>
  <div class="wsis-info py-4">
    <span>
      <v-icon color="indigo" size="40px">fas fa-at</v-icon>
    </span>
    <div
      class="display-3 text-uppercase hidden-sm-and-down"
    >III Workshop de Sistemas de Informação da SACSIS</div>
    <div
      class="title mt-1 text-uppercase hidden-md-and-up"
    >III Workshop de Sistemas de Informação da SACSIS</div>
    <p class="intro-desc pt-3">
      O
      <strong>III WSIS</strong> ocorrerá no dia
      <strong>13 de junho de 2019</strong> no campus de Rio Paranaíba da Universidade Federal de Viçosa (UFV-CRP), na cidade de Rio Paranaíba – MG.
      <br>O evento faz parte da
      <strong>XI Semana Acadêmica do Curso de Sistemas de Informação</strong> (XI SACSIS).
    </p>
    <span>
      <v-icon color="indigo" size="40px">fas fa-cloud-upload-alt</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">submissão</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">submissão</div>
    <p
      class="intro-desc pt-3"
    >Estudantes de graduação e pós-graduação estão convidados a submeter resumos dos seus trabalhos de pesquisa, ensino ou extensão nas áreas de Sistemas de Informação, Ciência da Computação ou áreas correlatas.</p>
    <p class="headline pt-1 font-weight-bold">
      <a
        href="https://easychair.org/conferences/?conf=iiiwsis2019"
        target="_blank"
        rel="noopener noreferrer"
      >Clique aqui para submeter</a>
    </p>
    <span>
      <v-icon color="indigo" size="40px">fas fa-calendar-check</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">datas importantes</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">datas importantes</div>
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
  name: "wsis",
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
