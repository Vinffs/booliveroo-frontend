<template>
  <div>
    <RestaurantsTitle :title="'I più votati'" />
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 p-3" v-for="i in 6">
        <RestaurantCard />
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
