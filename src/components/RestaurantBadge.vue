<template>
  <div class="wrapper p-3 rounded-3" :class="store.darkMode ? 'dark-secondary' : 'light-secondary'">
    <div class="d-flex flex-wrap">
      <div class="badge-image">
        <img :src="store.imagePath + info.image" :alt="info.name" />
      </div>
      <div class="badge-text p-4 d-flex align-items-center justify-content-center flex-column"
        :class="store.darkMode ? 'text-light' : 'text-dark'">
        <h3 class="fw-bold pt-2">{{ info.name }}</h3>
        <p class="fs-6">{{ info.address }}</p>
      </div>
    </div>
    <div class="d-flex flex-wrap gap-3 pt-2 justify-content-center">
      <p class="fs-6 dash" :class="store.darkMode ? 'text-light' : 'text-dark'" v-for="category in info.categories">
        {{ category.name }}
      </p>
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
  // background-color: $bg-secondary !important;

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
  }

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

@media screen and (max-width: 576px) {
  .wrapper {
    .badge-image {
      width: 100%;
    }

    .badge-text {
      width: 100%;
    }
  }
}
</style>
