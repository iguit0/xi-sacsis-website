<template>
  <v-layout>
    <v-flex>
      <h2 class="display-3 text-uppercase">Perguntas Frequentes</h2>
      <h2 class="subtitle">Adiantamos {{questions.length}} perguntas mais frequentes!</h2>
      <v-expansion-panel class="mt-3">
        <v-expansion-panel-content v-for="(item,i) in questions" :key="i">
          <template v-slot:header>
            <div>{{item.question}}</div>
          </template>
          <v-card>
            <v-card-text>{{item.answer}}</v-card-text>
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
          question: "O que preciso fazer para participar?",
          answer:
            "Para participar do evento é necessário fazer sua inscrição, ela pode ser feita através do site e finalizada no prédio PVA, no Campus da UFV, Rio Paranaíba"
        },
        {
          question: "Vou ser dispensado das minhas aulas?",
          answer:
            "Por se tratar da Semana Acadêmica da graduação em Sistemas de Informação, os docentes deste curso irão abonar a (s) falta (s) dos alunos inscritos na X SACSIS, mediante comprovação de participação e apresentação do certificado fornecido pela organização"
        },
        {
          question: "Ganharei horas?",
          answer:
            "Sim! No final do evento, será emitido um certificado de participação que poderá ser utilizado para receber horas extracurriculares."
        },
        {
          question:
            "Se eu me inscrever e não ir às palestras, ganho certificado?",
          answer:
            "Não, o certificado é emitido mediante comprovação de presença nos eventos/palestras da X SACSIS."
        },
        {
          question: "Pessoas de outros cursos podem participar?",
          answer:
            "O evento é aberto a toda comundiade acadêmica, desta forma alunos de outros cursos poderão se inscrever na X SACSIS. Para alunos de outros cursos e participantes externos, as inscrições poderão ocorrer de maneira integral ou para palestras específicas, de acordo com as áreas de interesse relacionadas a sua formação. Acesso o menu Inscrições -> Outro"
        }
      ]
    };
  }
};
</script>
