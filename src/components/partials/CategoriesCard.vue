<template>
  <div
    @click="addFilter()"
    @mouseenter="animation = true"
    @mouseleave="animation = false"
    class="wrapper rounded-2 shadowed d-flex flex-column justify-content-center align-items-center text-white"
    :class="{ 'background-magenta': isActive() }"
  >
    <h5>{{ category.name }}</h5>
    <img
      :class="{ 'bounce-7': animation }"
      class="w-50"
      :src="store.imagePath + category.image"
      :alt="category.name"
    />
  </div>
</template>

<script>
import { store } from "../../data/store";
import axios from "axios";
export default {
  name: "CategoriesCard",
  data() {
    return {
      store,
      animation: false,
      magenta: false,
    };
  },
  props: {
    category: Object,
  },
  methods: {
    addFilter() {
      //this.isActive();
      store.filteredRestaurants = [];
      let alreadyExists = false;
      store.filterCategories.forEach((item, index) => {
        if (item === this.category.id) {
          alreadyExists = true;
          store.filterCategories.splice(index, 1);
        }
      });
      if (!alreadyExists) {
        store.filterCategories.push(this.category.id);
      }

      axios
        .get(store.apiUrl + "restaurants", {
          params: { category: store.filterCategories },
        })
        .then((res) => {
          console.log(res.data.data);
          store.filteredRestaurants = res.data.data;
        });
    },
    isActive() {
      let ritorno;
      store.filterCategories.forEach((item) => {
        if (item === this.category.id) {
          ritorno = true;
        }
      });
      return ritorno ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

.wrapper {
  // background-color: $bg-secondary;
  width: 100%;
  height: 100%;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.5s ease;

  h5 {
    position: relative;
    z-index: 2;
  }

  img {
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
  }
}

.background-magenta {
  background-color: $primary !important;
}

.bounce-7 {
  animation-name: bounce-7;
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
}

@keyframes bounce-7 {
  0% {
    transform: scale(1, 1) translateY(0);
  }

  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }

  30% {
    transform: scale(0.9, 1.1) translateY(-45px);
  }

  50% {
    transform: scale(1.05, 0.95) translateY(0);
  }

  57% {
    transform: scale(1, 1) translateY(-7px);
  }

  64% {
    transform: scale(1, 1) translateY(0);
  }

  100% {
    transform: scale(1, 1) translateY(0);
  }
}
</style>
