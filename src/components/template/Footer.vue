<template>
  <v-footer dark height="auto">
    <v-card flat tile class="transparent white--text text-xs-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 text-sm-center">{{text}}</v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy; {{new Date().getFullYear()}} —
        Feito com
        <v-icon color="red" size="18px">fa fa-heart</v-icon>
        <span class="ml-1 mr-1">por</span>
        <a
          href="https://github.com/iguit0"
          target="_blank"
          rel="noopener noreferrer"
          style="text-decoration: none; color: #FFA000;"
        >
          <strong>@iguit0</strong>
        </a>
        <span class="ml-1 mr-1">&</span>
        <a
          href="https://github.com/LuisMSoares/"
          target="_blank"
          rel="noopener noreferrer"
          style="text-decoration: none; color: #FFA000;"
        >
          <strong>@LuisMSoares</strong>
        </a>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["fab fa-facebook", "fab fa-instagram"],
    text:
      "A SACSIS é um evento realizado anualmente na Universidade Federal de Viçosa campus Rio Paranaíba, com o objetivo de amplificar e atualizar a visão de nossos estudantes em relação ao mercado de trabalho e instigar o instinto empreendedor. O evento é organizado pela InfoAlto, Empresa Júnior do curso de Sistemas de Informação, pelo CASI (Centro Acadêmico do curso de Sistemas de Informação) em conjunto com o corpo docente."
  })
};
</script>