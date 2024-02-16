<template>
  <div class="wrapper rounded-3 p-3">
    <div
      v-for="item in info.dishes"
      class="dish p-3 d-flex align-items-center justify-content-evenly"
    >
      <div class="text-white d-flex flex-column align-items-center gap-3">
        <h4>{{ item.name }}</h4>
        <p>{{ item.ingredients }}</p>
        <p>€ {{ item.price }}</p>
      </div>
      <img class="w-50" :src="store.imagePath + item.image" alt="" />
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
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.wrapper {
  width: 100%;
  background-color: $bg-secondary !important;

  .dish {
    width: 100%;

    h4,
    p {
      margin: 0;
    }
  }
}
</style>
