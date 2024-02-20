<template>
  <div class="mb-5 wrapper">
    <h2 class="text-center my-5">Categorie</h2>

    <swiper
      :slidesPerView="6"
      :spaceBetween="60"
      :loop="true"
      :centerInsufficientSlides="true"
      :autoplay="{
        pauseOnMouseEnter: true,
        delay: 2000,
        disableOnInteraction: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        style="width: 170px; height: 170px"
        v-for="item in store.categories"
      >
        <router-link
          class="text-decoration-none"
          :to="{ name: 'advancedSearch' }"
          ><CategoriesCard :category="item"
        /></router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import CategoriesCard from "./partials/CategoriesCard.vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { store } from "../data/store";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default {
  name: "CategoriesHome",
  data() {
    return {
      store,
      // categorie: {
      //     pasticceria: {
      //         name: 'Pasticceria',
      //         image: '/images/iconscategories/bakery.png'
      //     },
      //     pizza: {
      //         name: 'Pizza',
      //         image: '/images/iconscategories/pizza.png'
      //     },
      //     forneria: {
      //         name: 'Forneria',
      //         image: '/images/iconscategories/bread.png'
      //     },
      //     colazione: {
      //         name: 'Colazione',
      //         image: '/images/iconscategories/breakfast.png'
      //     },
      //     cinese: {
      //         name: 'Cinese',
      //         image: '/images/iconscategories/chinese.png'
      //     },
      //     fastfood: {
      //         name: 'Fastfood',
      //         image: '/images/iconscategories/fast-food.png'
      //     },
      //     pesce: {
      //         name: 'Pesce',
      //         image: '/images/iconscategories/fish.png'
      //     },
      //     francese: {
      //         name: 'Francese',
      //         image: '/images/iconscategories/french.png'
      //     },
      //     pollofritto: {
      //         name: 'Pollo Fritto',
      //         image: '/images/iconscategories/fried-chicken.png'
      //     },
      //     iberico: {
      //         name: 'Iberico',
      //         image: '/images/iconscategories/iberic.png'
      //     },
      //     gelato: {
      //         name: 'Gelato',
      //         image: '/images/iconscategories/ice-cream.png'
      //     },
      //     indiano: {
      //         name: 'Indiano',
      //         image: '/images/iconscategories/indian.png'
      //     },
      //     italiano: {
      //         name: 'Italiano',
      //         image: '/images/iconscategories/italian.png'
      //     },
      //     messicano: {
      //         name: 'Messicano',
      //         image: '/images/iconscategories/mexican.png'
      //     },
      //     steakhouse: {
      //         name: 'Steak House',
      //         image: '/images/iconscategories/steakhouse.png'
      //     },
      //     sushi: {
      //         name: 'Sushi',
      //         image: '/images/iconscategories/sushi.png'
      //     },
      //     vegano: {
      //         name: 'Vegano',
      //         image: '/images/iconscategories/vegan.png'
      //     },
      //     birreria: {
      //         name: 'Birreria',
      //         image: '/images/iconscategories/beer.png'
      //     }

      // },
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  components: {
    CategoriesCard,
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  user-select: none;
}
</style>
