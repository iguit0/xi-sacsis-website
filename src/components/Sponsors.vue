<template>
  <div class="mt-3">
    <span>
      <v-icon color="indigo" size="40px">fa fa-hand-holding-usd</v-icon>
    </span>
    <div class="display-3 text-uppercase hidden-sm-and-down">patrocinadores</div>
    <div class="title mt-1 text-uppercase hidden-md-and-up">patrocinadores</div>
    <div class="subtitle mt-2">Empresas que apoiaram o evento</div>
    <div
      class="mt-4 pb-4 hidden-sm-and-down card-carousel-wrapper"
      v-if="sponsors && sponsors.length"
    >
      <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
      <div class="card-carousel">
        <div class="card-carousel--overflow-container">
          <div
            class="card-carousel-cards"
            :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}"
          >
            <div class="card-carousel--card" v-for="(item) in sponsors" :key="item.id">
              <img :src="item.img" width="200px" height="200px">
              <div class="card-carousel--card--footer">
                <p>{{ item.name }}</p>
                <p>{{ item.tag }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
    </div>
    <h2 v-else class="headline pt-1 pb-1 text-uppercase font-weight-light indigo--text">Em breve...</h2>
    <div class="mt-4 mb-3 pb-3 hidden-md-and-up">
      <v-card
        :color="item.color"
        class="mx-auto"
        v-for="(item) in sponsors"
        :key="item.id"
        dark
        max-width="950"
      >
        <v-card-title>
          <v-icon left>{{ item.icon }}</v-icon>
          <span class="title text-uppercase font-weight-light">{{ item.name }}</span>
        </v-card-title>

        <img :src="item.img" width="150px" height="150px" style="border-radius: 10px;">

        <v-card-text class="about-text font-weight-bold">{{ item.about }}</v-card-text>

        <v-card-actions>
          <v-list-tile class="grow">
            <a
              :href="item.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="mr-1"
              style="text-decoration: none; color: #FFA000;"
            >
              <v-btn color="#e1e1e1" icon depressed v-if="item.facebook">
                <v-icon size="20px" color="#3C5A99">fab fa-facebook</v-icon>
              </v-btn>
            </a>
            <a
              :href="item.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-2"
              style="text-decoration: none; color: #FFA000;"
            >
              <v-btn color="#e1e1e1" depressed icon v-if="item.instagram">
                <v-icon size="20px" color="#d6249f">fab fa-instagram</v-icon>
              </v-btn>
            </a>

            <span>
              <v-icon size="20px" color="green">fab fa-whatsapp</v-icon>
              {{ item.whatsapp }}
            </span>

            <v-layout align-center justify-end>
              <v-icon small>fas fa-map-signs</v-icon>
              <span class="subheading ml-1">{{ item.tag }}</span>
            </v-layout>
          </v-list-tile>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import sponsors from "../data/sponsors.json";

export default {
  data() {
    return {
      sponsors,
      currentOffset: 0,
      windowSize: 4,
      paginationFactor: 220
    };
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <= this.paginationFactor * -1 * (6 - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    }
  },
  methods: {
    moveCarousel(direction) {
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    }
  }
};
</script>

<style scoped>
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 30px;
  color: #666a73;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 870px;
}
.card-carousel--overflow-container {
  overflow: hidden;
}
.card-carousel--nav__left,
.card-carousel--nav__right {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  box-sizing: border-box;
  border-top: 2px solid #42b883;
  border-right: 2px solid #42b883;
  cursor: pointer;
  margin: 0 10px;
  transition: transform 150ms linear;
}
.card-carousel--nav__left[disabled],
.card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}
.card-carousel--nav__left {
  transform: rotate(-135deg);
}
.card-carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
}
.card-carousel--nav__right {
  transform: rotate(45deg);
}
.card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}
.card-carousel-cards .card-carousel--card {
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
}
.card-carousel-cards .card-carousel--card:first-child {
  margin-left: 0;
}
.card-carousel-cards .card-carousel--card:last-child {
  margin-right: 0;
}
.card-carousel-cards .card-carousel--card img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
}
.card-carousel-cards .card-carousel--card img:hover {
  opacity: 0.5;
}
.card-carousel-cards .card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
}
.card-carousel-cards .card-carousel--card--footer p {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 19px;
  font-weight: 500;
  color: #2c3e50;
  user-select: none;
}
.card-carousel-cards .card-carousel--card--footer p:nth-of-type(2) {
  font-size: 12px;
  font-weight: 300;
  padding: 6px;
  background: rgba(40, 44, 53, 0.06);
  display: inline-block;
  position: relative;
  margin-left: 4px;
  color: #666a73;
}
.card-carousel-cards .card-carousel--card--footer p:nth-of-type(2):before {
  content: "";
  float: left;
  position: absolute;
  top: 0;
  left: -12px;
  width: 0;
  height: 0;
  border-color: transparent rgba(40, 44, 53, 0.06) transparent transparent;
  border-style: solid;
  border-width: 12px 12px 12px 0;
}
.card-carousel-cards .card-carousel--card--footer p:nth-of-type(2):after {
  content: "";
  position: absolute;
  top: 10px;
  left: -1px;
  float: left;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: white;
  box-shadow: -0px -0px 0px #004977;
}

.about-text {
  font-weight: 100;
  font-size: 15px;
  font-family: "Kanit", sans-serif !important;
}

h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: #42b883;
}
</style>