<template>
  <div class="row justify-content-between text-light">
    <div class="col-12 col-md-3">
      <CategoriesSales />
    </div>
    <div class="col-12 col-md-9">
      <TopRated />
      <SponsoredRestaurants />
    </div>
  </div>
</template>

<script>
import TopRated from "./partials/TopRated.vue";
import CategoriesSales from "./partials/CategoriesSales.vue";
import SponsoredRestaurants from "./partials/SponsoredRestaurants.vue";
export default {
  name: "RestaurantsHome",
  components: {
    TopRated,
    CategoriesSales,
    SponsoredRestaurants,
  },
};
</script>

<style lang="scss" scoped></style>
