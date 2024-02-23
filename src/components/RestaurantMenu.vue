<template>
  <div
    class="wrapper rounded-3"
    :class="
      store.darkMode ? 'text-light dark-secondary' : 'text-dark light-secondary'
    "
  >
    <div
      v-for="item in info.dishes"
      class="dish p-4 d-flex align-items-center justify-content-evenly"
    >
      <div class="d-flex flex-column align-items-center gap-3 mt-3 mt-sm-0">
        <h4>{{ item.name }}</h4>
        <p>{{ item.ingredients }}</p>
        <div
          class="d-flex text-sm-center d-sm-block align-items-center justify-content-around w-100"
        >
          <p
            class="text-sm-center text-start mb-sm-3"
            :class="{ 'text-decoration-line-through': !item.visible }"
          >
            € {{ item.price }}
          </p>
          <div class="btn btn-primary rounded-pill" @click="addToCart(item)">
            <span v-if="item.visible">
              <span class="d-none d-sm-inline">Aggiungi al Carrello</span>
              <span class="d-inline d-sm-none"
                ><i class="fa-solid fa-cart-plus"></i
              ></span>
            </span>
            <span v-else>
              <span class="d-none d-sm-inline">Aggiungi al Carrello</span>
              <span class="d-inline d-sm-none"
                ><i class="fa-solid fa-ban"></i
              ></span>
            </span>
          </div>
        </div>
      </div>
      <div class="w-50 image-container rounded-2">
        <img
          class="dish-image"
          :src="store.imagePath + item.image"
          :alt="item.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
export default {
  name: "RestaurantMenu",
  props: {
    info: Object,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    addToCart(item) {
      store.cart.push(item);
      localStorage.setItem(this.info.slug, JSON.stringify(store.cart));
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.wrapper {
  width: 100%;

  .dish:last-child {
    border-bottom: 0;
  }

  .dish {
    border-bottom: 2px solid $bg-primary;
    width: 100%;
    max-height: 270px;
    // background-color: $bg-secondary !important;

    .image-container {
      overflow: hidden;
      max-height: 238px;

      .dish-image {
        width: 100%;
        object-fit: contain;
        object-position: center center;
      }
    }

    h4,
    p {
      margin: 0;
    }
  }
}

@media screen and (max-width: 576px) {
  .dish {
    flex-direction: column-reverse;

    max-height: fit-content !important;
    .image-container {
      img {
        object-fit: contain;
      }
    }
  }
}
</style>
