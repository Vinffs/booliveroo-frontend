<template>
  <div class="px-3">
    <!-- titolo riutilizzabile -->
    <RestaurantsTitle :title="'Sconti a tempo'" />
    <!-- sezioni contenenti le categorie scontate -->
    <div v-for="i in 2" class="my-card rounded-3 p-3 py-4 my-4 my-3">
      <h4>Categoria</h4>
      <div class="text-center p-4 image-container">
        <div class="discount rounded-circle">50%</div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1404/1404945.png"
          alt="nomecategoria"
          class="w-100"
        />
      </div>
      <router-link class="btn text-light fw-bold rounded-pill" to="/"
        >Vai alla categoria</router-link
      >
    </div>
    <!-- timer -->
    <div class="timer rounded-3 p-3 py-5">
      <h4>Lo sconto scade tra:</h4>
      <div class="d-flex align-items-center justify-content-center p-4">
        <div class="time fs-1 py-1 px-3 fw-bold rounded-4">
          <span v-if="minutes < 10">0</span>{{ minutes }}
        </div>
        <div class="fs-1 px-2 fw-bold">:</div>
        <div class="time fs-1 py-1 px-3 fw-bold rounded-4">
          <span v-if="seconds < 10">0</span>{{ seconds }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RestaurantsTitle from "../partials/RestaurantsTitle.vue";

export default {
  name: "CategoriesSales",
  components: {
    RestaurantsTitle,
  },
  data() {
    return {
      minutes: 10,
      seconds: 0,
    };
  },
  methods: {
    // funzione per gestire il countdown
    countdown() {
      const interval = setInterval(() => {
        this.seconds--;
        if (this.seconds < 0) {
          this.seconds = 59;
          this.minutes--;
        }
        if (this.minutes < 0) {
          clearInterval(interval);
          this.changeOffer();
        }
      }, 1000);
    },
    // funzione per cambiare lo sconto e riavviare il countdown
    changeOffer() {
      this.minutes = 10;
      this.seconds = 0;
      this.countdown();
    },
  },
  mounted() {
    //this.countdown();
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

.my-card {
  background-color: $bg-secondary;

  .image-container {
    position: relative;

    .discount {
      position: absolute;
      top: 0;
      right: 0;
      font-weight: bold;
      background-color: $primary;
      width: 3.5em;
      height: 3.5em;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .btn {
    background-color: $primary;
    transition: all 0.3s ease;
    &:hover {
      background-color: darken($primary, 8%);
    }
  }
}
.timer {
  background-color: $primary;

  .time {
    background-color: $bg-primary;
  }
}
</style>
