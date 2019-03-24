<template>
  <v-footer dark height="auto">
    <v-card flat tile class="transparent white--text text-xs-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text
        class="white--text pt-0"
      >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>

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
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["fab fa-facebook", "fab fa-instagram"]
  })
};
</script>