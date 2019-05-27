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

      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index" :to="item.link">
            <v-list-tile-content>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-content>
            <v-list-tile-content class="text-uppercase white--text font-weight-light">{{item.title}}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
      <!-- dropdown -->
      <v-list>
        <v-list-group prepend-icon="fas fa-star">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content
                class="text-uppercase white--text font-weight-light ml-4"
              >atrações</v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile v-for="(item, index) in attractions" :key="index" :to="item.link">
            <v-list-tile-content>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-content>
            <v-list-tile-content class="text-uppercase white--text font-weight-light">{{item.title}}</v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
      <!-- fim -->
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
        <v-menu offset-y auto light open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn flat v-on="on">atrações</v-btn>
          </template>
          <v-list>
            <v-list-tile v-for="(item, index) in attractions" :key="index" :to="item.link" light>
              <v-list-tile-content>
                <v-icon class="mr-3" color="indigo">{{item.icon}}</v-icon>
              </v-list-tile-content>
              <v-list-tile-title
                class="text-uppercase black--text font-weight-light"
              >{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
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
    attractions: [
      /*{
        icon: "fas fa-futbol",
        title: "campeonato futebol",
        link: "/futebol"
      },
      {
        icon: "fas fa-headset",
        title: "campeonato dota 2",
        link: "/dota2"
      },*/
      {
        icon: "fas fa-at",
        title: "iii wsis",
        link: "/wsis"
      },
      {
        icon: "fas fa-plus-circle",
        title: "meninas++",
        link: "/meninasmaismais"
      }
    ],
    items: [
      { icon: "fa fa-home", title: "início", link: "/" },
      { icon: "fa fa-building", title: "evento", link: "/evento" },
      {
        icon: "fa fa-map-marker-alt",
        title: "como chegar",
        link: "/como-chegar"
      },
      { icon: "fa fa-user-plus", title: "inscrição", link: "/inscricao" }
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

.v-list {
  padding: 0;
}
</style>
