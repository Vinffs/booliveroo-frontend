<template>
  <div>
    <!-- titolo riutilizzabile -->
    <RestaurantsTitle :title="'Ristoranti Sponsorizzati'" />
    <div class="row">
      <div class="col-12 col-md-6 px-3" v-for="restaurant in sponsored">
        <!-- card riutilizzabile -->
        <RestaurantCard
          :restaurant="restaurant"
          :position="0"
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
  name: "SponsoredRestaurants",
  components: {
    RestaurantsTitle,
    RestaurantCard,
  },
  data() {
    return {
      store,
      sponsored: [],
    };
  },
  methods: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getSponsored() {
      let i = 0;
      while (i < 2) {
        const newEl =
          store.restaurants[
            this.getRndInteger(0, store.restaurants.length - 1)
          ];
        if (this.sponsored.length === 0) {
          this.sponsored.push(newEl);
          i++;
        } else {
          for (let j = 0; j < this.sponsored.length; j++) {
            if (newEl.name !== this.sponsored[j].name) {
              this.sponsored.push(newEl);
              i++;
            }
          }
        }
      }
    },
  },
  mounted() {
    this.getSponsored();
  },
};
</script>

<style lang="scss" scoped></style>
