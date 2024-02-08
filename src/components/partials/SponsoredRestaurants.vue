<template>
  <div>
    <RestaurantsTitle :title="'Ristoranti Sponsorizzati'" />
  </div>
</template>

<script>
import RestaurantsTitle from "../partials/RestaurantsTitle.vue";
export default {
  name: "SponsoredRestaurants",
  components: {
    RestaurantsTitle,
  },
};
</script>

<style lang="scss" scoped></style>
