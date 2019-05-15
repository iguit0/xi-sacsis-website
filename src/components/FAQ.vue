<template>
  <v-layout>
    <v-flex>
      <span>
        <v-icon color="indigo" size="40px">far fa-question-circle</v-icon>
      </span>
      <div class="display-3 text-uppercase hidden-sm-and-down">Perguntas Frequentes</div>
      <div class="title mt-1 text-uppercase hidden-md-and-up">Perguntas Frequentes</div>
      <div class="subtitle mt-2">Adiantamos as {{questions.length}} perguntas mais frequentes</div>
      <v-expansion-panel class="mt-3 mb-4" focusable>
        <v-expansion-panel-content v-for="(item,i) in questions" :key="i">
          <template v-slot:header>
            <h6 class="headline">{{item.question}}</h6>
          </template>
          <v-card>
            <v-card-text class="indigo--text" style="font-size: 1.3rem;">{{item.answer}}</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "1. O que preciso fazer para participar?",
          answer:
            "Para participar do evento é necessário fazer sua inscrição, ela pode ser feita através do site e finalizada no prédio PVA, no Campus da UFV Rio Paranaíba."
        },
        {
          question: "2. Vou ser dispensado das minhas aulas?",
          answer:
            "Por se tratar da Semana Acadêmica do curso de Sistemas de Informação, os docentes deste curso irão abonar a(s) falta(s) dos alunos inscritos na XI SACSIS, mediante comprovação de participação e apresentação do certificado fornecido pela organização."
        },
        {
          question: "3. Ganharei horas?",
          answer:
            "Sim! No final do evento, será emitido um certificado de participação o qual poderá ser utilizado para receber horas extracurriculares."
        },
        {
          question:
            "4. Se eu me inscrever e não ir às palestras, ganho certificado?",
          answer:
            "Não, o certificado é emitido mediante a comprovação de presença nos eventos/palestras."
        },
        {
          question: "5. Pessoas de outros cursos podem participar?",
          answer:
            "O evento é aberto a toda comunidade acadêmica, desta forma alunos de outros cursos e participantes externos vinculados à UFV poderão se inscrever na XI SACSIS. Para esse grupo, as inscrições poderão ocorrer de maneira integral ou para palestras específicas, de acordo com as áreas de interesse relacionadas a sua formação. Acesse o menu Inscrições."
        }
      ]
    };
  }
};
</script>
