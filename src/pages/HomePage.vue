<template>
  <div class="wrapper pb-5" :class="store.darkMode ? 'dark' : 'light'">
    <div class="container position-relative my-z">
      <HeroHome />
      <SaleHome />
      <!-- <CategoriesHome v-if="store.categories.length > 0" />
      <RestaurantsHome
        v-if="store.categories.length > 0 && store.restaurants.length > 0"
      /> -->
      <AdvancedSearch v-if="store.categories.length > 0" />
    </div>
  </div>
  <BlogHome :class="store.darkMode ? 'dark-secondary' : 'light-secondary'" />
</template>

<script>
import HeroHome from "../components/HeroHome.vue";
import CategoriesHome from "@/components/CategoriesHome.vue";
import { store } from "../data/store";
import RestaurantsHome from "@/components/RestaurantsHome.vue";
import SaleHome from "@/components/SaleHome.vue";
import BlogHome from "@/components/BlogHome.vue";
import AdvancedSearch from "./AdvancedSearch.vue";
export default {
  name: "HomePage",
  components: {
    HeroHome,
    CategoriesHome,
    RestaurantsHome,
    SaleHome,
    BlogHome,
    AdvancedSearch,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
</style>
