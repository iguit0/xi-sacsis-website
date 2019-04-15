<template>
  <span>
    <!-- Drawer -->
    <v-navigation-drawer app v-model="drawer" class="indigo lighten-2" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content class="text-uppercase">{{item.title}}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- ./Drawer -->
    <!-- Toolbar -->
    <v-toolbar color="indigo" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
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
        <v-btn flat>programação</v-btn>
        <v-btn flat>atrações</v-btn>
        <v-btn flat color="yellow">inscrição</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- ./Toolbar -->
  </span>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    drawer: false,
    items: [
      { title: "evento" },
      { title: "programação" },
      { title: "atrações" },
      { title: "inscrição" }
    ]
  })
};
</script>

<style>
</style>
