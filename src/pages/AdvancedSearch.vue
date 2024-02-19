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
      <div class="row justify-content-around align-items-center mb-4">
        <h2 class="text-white text-center col-12 col-sm-6">
          Seleziona le Categorie
        </h2>
        <div class="d-md-none col-12 col-sm-6 text-center py-2">
          <button
            @click="collapsed = !collapsed"
            class="btn btn-light w-75 mx-auto"
          >
            <span v-if="collapsed"
              >Mostra Categorie <i class="fa-solid fa-chevron-up"></i></span
            ><span v-else
              >Nascondi Categorie <i class="fa-solid fa-chevron-down"></i
            ></span>
          </button>
        </div>
      </div>
      <div
        class="d-flex flex-wrap justify-content-center categories-wrapper"
        :class="{ closed: collapsed }"
      >
        <div class="card-container" v-for="item in store.categories">
          <CategoriesCard :category="item" />
        </div>
      </div>

      <div class="d-md-none col-12 col-sm-6 text-center py-2 mx-auto">
        <button
          v-if="!collapsed"
          @click="collapsed = !collapsed"
          class="btn btn-light w-75 mx-auto"
        >
          <span v-if="collapsed"
            >Mostra Categorie <i class="fa-solid fa-chevron-up"></i></span
          ><span v-else
            >Nascondi Categorie <i class="fa-solid fa-chevron-down"></i
          ></span>
        </button>
      </div>

      <h2 class="text-white text-center my-4">Risultati</h2>
      <div class="d-flex justify-content-center align-items-center flex-wrap">
        <div
          v-if="store.filteredRestaurants.length > 0"
          class="restaurant-container col-12 col-md-6"
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
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default {
  name: "AdvancedSearch",
  modules: [Autoplay, Pagination, Navigation],
  components: {
    SearchBar,
    CategoriesCard,
    RestaurantCard,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      store,
      collapsed: false,
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

.categories-wrapper {
  transition: all 0.3s ease;
  max-height: 300vh;
  &.closed {
    max-height: 0vh;
    overflow: hidden;
  }
}

.restaurant-container {
  color: white;
  padding: 20px 20px;
  // margin: 0 20px;
  // margin-bottom: 20px;
}

@media screen and (max-width: 1100px) {
  .card-container {
    width: calc(100vw / 10);

    height: calc(100vw / 10);
  }
}
@media screen and (max-width: 768px) {
  .card-container {
    width: calc(100vw / 6);

    height: calc(100vw / 6);
  }
}
@media screen and (max-width: 576px) {
  .card-container {
    width: calc(100vw / 4);

    height: calc(100vw / 4);
  }
}
</style>
