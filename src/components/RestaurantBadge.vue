<template>
  <div class="wrapper p-3 rounded-3 d-flex">
    <div class="badge-image">
      <img :src="store.imagePath + info.image" :alt="info.name" />
    </div>
    <div
      class="badge-text p-4 d-flex align-items-center justify-content-center flex-column"
    >
      <h3 class="fw-bold pt-2">{{ info.name }}</h3>
      <div class="d-flex gap-3 pt-2">
        <p class="fs-6 dash" v-for="category in info.categories">
          {{ category.name }}
        </p>
      </div>
      <p class="fs-6">{{ info.address }}</p>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
export default {
  name: "RestaurantBadge",
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

  .badge-image {
    width: 25%;
    height: 100%;

    img {
      width: 100%;
      object-fit: contain;
      object-position: center center;
      border-radius: 0.8em;
    }
  }

  .badge-text {
    width: 75%;
    height: 100%;

    .dash {
      &::after {
        content: " • ";
        padding-left: 10px;
      }

      &:last-child {
        &::after {
          content: "";
        }
      }
    }
  }
}
</style>
