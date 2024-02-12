<template>
  <div>
    <!-- titolo riutilizzabile -->
    <RestaurantsTitle :title="'I più votati'" />
    <div class="row gy-3">
      <div
        class="col-12 col-sm-6 col-lg-4 px-3"
        v-for="(restaurant, i) in topRated"
      >
        <!-- card riutilizzabile -->
        <RestaurantCard
          :restaurant="restaurant"
          :position="i + 1"
          class="shadowed"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RestaurantsTitle from "../partials/RestaurantsTitle.vue";
import RestaurantCard from "../partials/RestaurantCard.vue";
import { store } from "../../data/store";
export default {
  name: "TopRated",
  components: {
    RestaurantsTitle,
    RestaurantCard,
  },
  data() {
    return {
      topRated: [],
      store,
    };
  },
  methods: {
    getRestaurants() {
      for (let i = 0; i < 6; i++) {
        this.topRated.push(store.restaurants[i]);
      }
    },
  },
  mounted() {
    this.getRestaurants();
  },
};
</script>

<style lang="scss" scoped></style>
