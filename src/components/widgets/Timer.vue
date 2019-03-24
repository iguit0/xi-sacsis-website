<template>
  <div class="countdown">
    <div class="block" :class="clDays">
      <div class="digit">{{ days | two_digits }}</div>
      <div class="text">Dias</div>
    </div>
    <div class="block" :class="clHours">
      <div class="digit">{{ hours | two_digits }}</div>
      <div class="text">Horas</div>
    </div>
    <div class="block" :class="clMinutes">
      <div class="digit">{{ minutes | two_digits }}</div>
      <div class="text">Minutos</div>
    </div>
    <div class="block" :class="clSeconds">
      <div class="digit">{{ seconds | two_digits }}</div>
      <div class="text">Segundos</div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["duration"],
  data() {
    return {
      now: new moment().format("X")
    };
  },
  computed: {
    normalizedDate() {
      let a = this.duration.split(" ");
      return new moment().add(a[0], a[1]).format("X");
    },
    diff() {
      return this.normalizedDate - this.now;
    },

    seconds() {
      return this.diff % 60;
    },

    minutes() {
      return Math.trunc(this.diff / 60) % 60;
    },

    hours() {
      return Math.trunc(this.diff / 60 / 60) % 24;
    },

    days() {
      return Math.trunc(this.diff / 60 / 60 / 24);
    },
    clSeconds() {
      if (this.days > 0) {
        return { green: true };
      } else if (this.hours > 0) {
        return { yellow: true };
      } else if (this.minutes > 0) {
        return { orange: true };
      } else if (this.seconds > 0) {
        return { red: true };
      }
    },
    clMinutes() {
      if (this.days > 0) {
        return { green: true };
      } else if (this.hours > 0) {
        return { yellow: true };
      } else if (this.minutes > 0) {
        return { orange: true };
      }
    },
    clHours() {
      if (this.days > 0) {
        return { green: true };
      } else if (this.hours > 0) {
        return { yellow: true };
      }
    },

    clDays() {
      if (this.days > 0) {
        return { green: true };
      }
    }
  },
  methods: {
    moment() {
      return moment();
    },
    updateTime() {
      if (this.diff > 0) {
        this.now = new moment().format("X");
        setTimeout(this.updateTime, 1000);
      }
    }
  },
  filters: {
    two_digits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    }
  },
  mounted() {
    this.updateTime();
  }
};
</script>

<style lang="scss" scoped>
$white: #ffffff;
$light: #fafbfd;
$green: #abd67a;
$yellow: #fbcf64;
$orange: #fab568;
$red: #ef6171;
$gray: #c3ced4;

$radius: 3rem;
$border: 1px solid $gray;

.countdown {
  margin: 2rem auto;
  width: 50%;
  display: flex;
  flex-direction: row;
  //border: $border;
  border-radius: $radius;

  & .block {
    flex: 1;
    background-color: $light;
    padding: 0.75rem 0;
    font: {
      weight: 700;
    }
    color: $gray;
    text: {
      align: center;
      transform: uppercase;
    }
    border: {
      right: $border;
    }
    &:first-child {
      border: {
        top-left-radius: $radius;
        bottom-left-radius: $radius;
      }
    }
    &:last-child {
      border: none;
      border: {
        top-right-radius: $radius;
        bottom-right-radius: $radius;
      }
    }
    &.green {
      background-color: $green;
      color: $white;
    }
    &.yellow {
      background-color: $yellow;
      color: $white;
    }
    &.orange {
      background-color: $orange;
      color: $white;
    }
    &.red {
      background-color: $red;
      color: $white;
    }
    & .digit {
      font: {
        size: 2.4rem;
      }
    }
    & .text {
      font: {
        size: 1.2rem;
      }
    }
  }
}
</style>

