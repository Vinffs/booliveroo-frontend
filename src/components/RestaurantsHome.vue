<template>
  <div class="row justify-content-between text-light pb-5">
    <div class="col-12 col-md-3">
      <!-- sezione delle categorie scontate a tempo -->
      <CategoriesSales />
    </div>
    <div class="col-12 col-md-9">
      <!-- sezione dei ristoranti con la valitazione più alta -->
      <TopRated />
      <!-- sezione dei ristoranti sponsorizzati -->
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
