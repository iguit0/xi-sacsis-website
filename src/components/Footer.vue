<template>
  <v-footer app dark class="pa-3">
    <v-spacer></v-spacer>
    <div class="text-xs-center">
      Feito com
      <v-icon color="red" size="16px">fa fa-heart</v-icon>
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
      <span class="ml-1 hidden-sm-and-down">&copy; {{ new Date().getFullYear() }}</span>
    </div>
  </v-footer>
</template>