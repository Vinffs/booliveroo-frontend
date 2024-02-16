<template>
  <div class="wrapper py-5">
    <div class="container">
      <div>
        <!-- <div
          class="d-flex justify-content-center align-items-center"
          style="padding-top: 100px"
        >
          <SearchBar />
        </div> -->
      </div>
      <h2 class="text-white text-center mb-4">Seleziona le Categorie</h2>
      <div class="d-flex flex-wrap justify-content-center">
        <div class="card-container" v-for="item in store.categories">
          <CategoriesCard :category="item" />
        </div>
      </div>
      <h2 class="text-white text-center my-4">Risultati</h2>
      <div class="d-flex justify-content-center align-items-center flex-wrap">
        <div
          v-if="store.filteredRestaurants.length > 0"
          class="restaurant-container col-6"
          v-for="item in store.filteredRestaurants"
        >
          <RestaurantCard class="shadowed" :restaurant="item" :position="0" />
        </div>
        <h3 v-else class="text-white text-center col-12 py-5 display-4 fw-bold">
          Non ci sono risultati con queste categorie
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import CategoriesCard from "@/components/partials/CategoriesCard.vue";
import RestaurantCard from "@/components/partials/RestaurantCard.vue";
import { store } from "../data/store";
import axios from "axios";
export default {
  name: "AdvancedSearch",
  components: {
    SearchBar,
    CategoriesCard,
    RestaurantCard,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    axios
      .get(store.apiUrl + "restaurants", {
        params: { category: store.filterCategories },
      })
      .then((res) => {
        store.filteredRestaurants = res.data.data;
      });
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.wrapper {
  background-color: $bg-primary;
}

.card-container {
  width: calc(100vw / 14);
  height: calc(100vw / 14);
  margin: 10px 10px;
}

.restaurant-container {
  color: white;
  padding: 20px 20px;
  // margin: 0 20px;
  // margin-bottom: 20px;
}
</style>
