<template>
  <router-link :to="{ name: 'restaurantShow', params: { slug: restaurant.slug } }"
    class="my-card h-100 rounded-3 text-decoration-none d-block">
    <div class="image-cotainer" :class="(store.darkMode ? 'image-dark' : 'image-light')">
      <div class="overlay">
        <router-link :to="{ name: 'restaurantShow', params: { slug: restaurant.slug } }"
          class="btn btn-light rounded-pill">Vai al ristorante</router-link>
      </div>
      <img v-if="restaurant.image === null" :class="(store.darkMode ? 'dark' : 'light')" class="w-100 restaurant-image"
        src="https://picsum.photos/400/200" alt="" />
      <img v-else :src="store.imagePath + restaurant.image" class="w-100 restaurant-image" alt="" />
    </div>
    <div class="card-body" :class="(store.darkMode ? 'dark-secondary' : 'light-secondary')">
      <h5 class="card-title" :class="(store.darkMode ? 'text-light' : 'text-dark')">{{ restaurant.name }}</h5>
      <div class="d-flex justify-content-between pt-3">
        <p class="pe-4" :class="(store.darkMode ? 'text-light' : 'text-dark')" style="font-size: 0.9em">{{
          restaurant.address }}</p>
        <div style="width: 10%">
          <img v-if="position <= 2 && position > 0" :src="'https://www.onlygfx.com/wp-content/uploads/2023/07/medal-badge-gold-silver-bronze-place-' +
            position +
            '.png'
            " alt=" sad" class="w-100" />
          <img v-else-if="position === 3"
            :src="'https://www.onlygfx.com/wp-content/uploads/2023/07/medal-badge-gold-silver-bronze-place-6.png'"
            alt=" sad" class="w-100" />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { store } from "../../data/store";

export default {
  name: "RestaurantCard",
  props: {
    restaurant: Object,
    position: Number,
  },
  data() {
    return {
      store,
    };
  },
  methods: {},
  // mounted() {
  //   if (this.position === 3) {
  //     this.position = 6;
  //   }
  // },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

.my-card {
  // background-color: $bg-secondary;
  overflow: hidden;
  color: $text-color;

  &:hover .image-cotainer {
    .overlay {
      opacity: 1;

      .btn {
        transform: translateY(0);
      }
    }
  }

  .image-cotainer {
    position: relative;
    overflow: hidden;
    // background: radial-gradient(ellipse at center, $primary 0%, #ccc 100%);

    .restaurant-image {
      height: 200px;
      object-fit: contain;
      object-position: center center;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba($primary, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: all 0.3s ease;

      .btn {
        transition: all 0.3s ease;
        transform: translateY(-150px);
      }
    }
  }

  .card-body {
    padding: 0.7em 1em !important;
  }
}
</style>
