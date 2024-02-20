<template>
  <div class="container-fluid">
    <!-- titolo riutilizzabile -->
    <RestaurantsTitle
      :title="'Sconti a tempo'"
      style="margin-left: -12px; margin-right: -12px"
    />
    <!-- sezioni contenenti le categorie scontate -->
    <div class="row justify-content-between">
      <div
        v-for="category in saleCategories"
        class="my-card rounded-3 p-3 py-4 mb-5 shadowed col-4 col-md-3 col-lg-12"
      >
        <h4>{{ category.name }}</h4>
        <div class="text-center p-4 image-container">
          <div class="discount rounded-circle">50%</div>
          <img
            :src="store.imagePath + category.image"
            alt="nomecategoria"
            class="w-75"
          />
        </div>
        <router-link class="btn fw-bold rounded-pill d-none d-sm-block" to="/"
          >Vai alla categoria</router-link
        >
      </div>
      <!-- timer -->
      <div
        class="timer rounded-3 p-3 py-5 mt-2 shadowed col-6 col-md-4 col-lg-12"
      >
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
  </div>
</template>

<script>
import RestaurantsTitle from "../partials/RestaurantsTitle.vue";
import { store } from "../../data/store";

export default {
  name: "CategoriesSales",
  components: {
    RestaurantsTitle,
  },
  data() {
    return {
      store,
      saleCategories: [],
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
      this.getRandomCategories();
      this.countdown();
    },
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomCategories() {
      this.saleCategories = [];
      let i = 0;
      console.log(store.categories);
      while (i < 2) {
        const newEl =
          store.categories[this.getRndInteger(0, store.categories.length - 1)];
        if (this.saleCategories.length === 0) {
          this.saleCategories.push(newEl);
          i++;
        } else {
          for (let j = 0; j < this.saleCategories.length; j++) {
            if (newEl.name !== this.saleCategories[j].name) {
              this.saleCategories.push(newEl);
              i++;
            }
          }
        }
      }
    },
  },
  mounted() {
    //this.countdown();
    this.getRandomCategories();
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

@media screen and (max-width: 992px) {
  .my-card {
    margin: 0 !important;
  }
}
@media screen and (max-width: 768px) {
  .row {
    justify-content: center !important;
    gap: 1em;

    .discount {
      width: 2.5em !important;
      height: 2.5em !important;
    }

    .timer {
      padding: 1em !important;
    }
  }
}
</style>
