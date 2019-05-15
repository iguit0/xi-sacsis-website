<template>
  <span>
    <!-- Drawer -->
    <v-navigation-drawer
      app
      v-model="drawer"
      class="indigo"
      dark
      hide-overlay
      disable-resize-watcher
      width="250px"
    >
      <v-list class="pa-1">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <v-img :src="require('../assets/img/logo.png')"/>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title class="subtitle">
              XI
              <strong>SACSIS</strong>
            </v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon class="pl-4" @click.stop="drawer = !drawer">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index" :to="item.link" @click="redirect">
            <v-list-tile-content>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-content>
            <v-list-tile-content class="text-uppercase white--text font-weight-light">{{item.title}}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- ./Drawer -->
    <!-- Toolbar -->
    <v-toolbar color="indigo" dark flat>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title class="headline text-uppercase">
        XI
        <strong>SACSIS</strong>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">início</v-btn>
        <v-btn flat to="/evento">evento</v-btn>
        <v-btn flat to="/como-chegar">como chegar</v-btn>
        <v-btn flat @click="redirect" color="yellow">inscrição</v-btn>
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
      { icon: "fa fa-home", title: "início", link: "/" },
      { icon: "fa fa-building", title: "evento", link: "/evento" },
      {
        icon: "fa fa-map-marker-alt",
        title: "como chegar",
        link: "/como-chegar"
      },
      { icon: "fa fa-user-plus", title: "inscrição", action: "redirect" }
    ]
  }),
  methods: {
    redirect() {
      window.open("https://app.sacsis.tech");
    }
  }
};
</script>

<style scoped>
.v-list__tile__avatar {
  min-width: 80px;
}

.v-toolbar__title:not(:first-child) {
  margin-left: auto;
}
</style>
