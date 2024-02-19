import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
// import AdvancedSearch from "@/pages/AdvancedSearch.vue";
import RestaurantShow from "../pages/RestaurantShow.vue";
import CheckoutPage from "../pages/CheckoutPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    // {
    //   path: "/search",
    //   name: "advancedSearch",
    //   component: AdvancedSearch,
    // },
    {
      path: "/restaurants/:slug",
      name: "restaurantShow",
      component: RestaurantShow,
    },
    {
      path: "/checkout/:slug",
      name: "checkout",
      component: CheckoutPage,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "home" },
    },
  ],
});

export default router;
