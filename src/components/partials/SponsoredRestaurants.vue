<template>
  <div>
    <!-- titolo riutilizzabile -->
    <RestaurantsTitle :title="'Ristoranti Sponsorizzati'" />
    <div class="row">
      <div class="col-12 col-md-6 px-3" v-for="i in 2">
        <!-- card riutilizzabile -->
        <RestaurantCard :restaurant="null" />
      </div>
    </div>
  </div>
</template>

<script>
import RestaurantsTitle from "../partials/RestaurantsTitle.vue";
import RestaurantCard from "../partials/RestaurantCard.vue";
export default {
  name: "SponsoredRestaurants",
  components: {
    RestaurantsTitle,
    RestaurantCard,
  },
};
</script>

<style lang="scss" scoped></style>
