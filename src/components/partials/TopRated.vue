<template>
  <div>
    <!-- titolo riutilizzabile -->
    <RestaurantsTitle :title="'I più votati'" />
    <div class="row">
      <div class="col-12 col-sm-6 col-lg-4 px-3" v-for="i in 6">
        <!-- card riutilizzabile -->
        <RestaurantCard :restaurant="i" class="shadowed" />
      </div>
    </div>
  </div>
</template>

<script>
import RestaurantsTitle from "../partials/RestaurantsTitle.vue";
import RestaurantCard from "../partials/RestaurantCard.vue";
export default {
  name: "TopRated",
  components: {
    RestaurantsTitle,
    RestaurantCard,
  },
};
</script>

<style lang="scss" scoped></style>
