<template>
  <v-toolbar>
    <v-toolbar-title class="headline text-uppercase mr-4">
      XI
      <strong>SACSIS</strong>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu offset-y>
        <v-btn flat slot="activator">
          Evento
          <v-icon class="ml-1">keyboard_arrow_down</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>
              <v-list-tile-title>Teste 1</v-list-tile-title>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Teste 2</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn flat href="#programacao">programação</v-btn>
      <v-btn flat>atrações</v-btn>
      <v-btn flat color="deep-orange">inscrição</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    dropdown_font: ["Arial", "Calibri", "Courier", "Verdana"]
  })
};
</script>

<style>
</style>
