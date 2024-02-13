<template>
  <div class="wrapper pb-5">
    <div class="container">
      <HeroHome />
      <SaleHome />
      <CategoriesHome v-if="store.categories.length > 0" />
      <RestaurantsHome
        v-if="store.categories.length > 0 && store.restaurants.length > 0"
      />
    </div>
  </div>
  <BlogHome />
</template>

<script>
import HeroHome from "../components/HeroHome.vue";
import CategoriesHome from "@/components/CategoriesHome.vue";
import { store } from "../data/store";
import RestaurantsHome from "@/components/RestaurantsHome.vue";
import SaleHome from "@/components/SaleHome.vue";
import BlogHome from "@/components/BlogHome.vue";
export default {
  name: "HomePage",
  components: {
    HeroHome,
    CategoriesHome,
    RestaurantsHome,
    SaleHome,
    BlogHome,
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

.wrapper {
  background-color: $bg-primary;
}
</style>
