import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AdvancedSearch from "@/pages/AdvancedSearch.vue";
import RestaurantShow from "../pages/RestaurantShow.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/search",
      name: "advancedSearch",
      component: AdvancedSearch,
    },
    {
      path: "/restaurants/:slug",
      name: "restaurantShow",
      component: RestaurantShow,
    },
  ],
});

export default router;
