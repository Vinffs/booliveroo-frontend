<template>
  <div :class="store.darkMode ? 'dark' : 'light'">
    <header>
      <HeaderComponent />
    </header>
    <main @click="store.search = false">
      <router-view />
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import { store } from "./data/store";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  components: { HeaderComponent, FooterComponent },
  methods: {
    getApiData() {
      // axios.get(store.apiUrl + "restaurants").then((res) => {
      //   console.log(res.data.data);
      //   store.restaurants = res.data.data;
      //   store.filteredRestaurants = store.restaurants;
      // });

      axios.get(store.apiUrl + "dishes").then((res) => {
        console.log(res.data.data);
        store.dishes = res.data.data;
      });

      axios.get(store.apiUrl + "categories").then((res) => {
        console.log(res.data.data);
        store.categories = res.data.data;
      });
    },
  },
  mounted() {
    this.getApiData();
  },
};
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/variables" as *;
// .light{
//   @use "./assets/styles/partials/variables" with ($bg-secondary: #efedea,
//   $bg-primary: #fff,
//   $primary: #fe4a49,
//   $text-color: #000);
// }

// main {
//   position: relative;
//   z-index: 5;
// }

@media screen and (max-width: 576px) {
  main {
    position: static;
  }
}
</style>
