<template>
  <div class="row justify-content-between text-light pb-5">
    <div class="col-12 col-lg-3">
      <!-- sezione delle categorie scontate a tempo -->
      <CategoriesSales />
    </div>
    <div class="col-12 col-lg-9">
      <!-- sezione dei ristoranti con la valitazione più alta -->
      <TopRated />
      <!-- sezione dei ristoranti sponsorizzati -->
      <SponsoredRestaurants class="sponsored" />
    </div>
  </div>
</template>

<script>
import TopRated from "./partials/TopRated.vue";
import CategoriesSales from "./partials/CategoriesSales.vue";
import SponsoredRestaurants from "./partials/SponsoredRestaurants.vue";
import { store } from "../data/store";
export default {
  name: "RestaurantsHome",
  components: {
    TopRated,
    CategoriesSales,
    SponsoredRestaurants,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1200px) {
  .sponsored {
    margin-top: 65px;
  }
}
</style>
