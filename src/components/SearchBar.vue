<template>
  <div class="rounded-4 shadowed" id="searchbar" :class="store.darkMode ? 'dark-secondary' : 'light-secondary'">
    <h1 class="fw-bold text-center">Il cibo che vuoi, quando vuoi</h1>
    <h5 class="py-2 text-center" :class="store.darkMode ? 'text-light' : 'text-dark'">
      Ordina online dai tuoi ristoranti preferiti
    </h5>
    <input autocomplete="off" id="search" v-model="searchInput" type="text" placeholder="Cerca un ristorante..."
      @click.stop="store.search = true" @keydown="getRestaurants()" />
    <div id="search-button" @click.stop="(searchInput = ''), getRestaurants(), (store.search = true)">
      <i v-if="searchInput === ''.trim()" class="fa-solid fs-5 fa-magnifying-glass"></i>
      <i v-else class="fa-solid fa-xmark fs-5"></i>
    </div>
    <div class="my-dropdown">
      <div v-if="store.search">
        <router-link v-if="!loading" class="item" :class="store.darkMode ? 'hover-dark' : 'hover-light'"
          v-for="item in store.searchedRestaurants" :to="{ name: 'restaurantShow', params: { slug: item.slug } }">
          <h5 class="ps-4">{{ item.name }}</h5>
          <div class="d-flex justify-content-around align-items-center">
            <p class="px-2">
              {{ item.categories[0].name }}
            </p>
          </div>
        </router-link>
        <LoadingComponent class="my-5" v-else />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../data/store";
import LoadingComponent from "./LoadingComponent.vue";
export default {
  name: "SearchBar",
  data() {
    return {
      store,
      searchInput: "",
      loading: false,
    };
  },
  methods: {
    getRestaurants() {
      this.loading = true;
      setTimeout(() => {
        axios
          .get(store.apiUrl + "restaurants", {
            params: { name: this.searchInput.toLowerCase() },
          })
          .then((res) => {
            store.searchedRestaurants = res.data.data;
            this.loading = false;
          });
      }, 0);
    },
  },
  components: { LoadingComponent },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#searchbar {
  width: 60%;
  padding: 40px 30px;
  position: relative;
  margin-top: -53px;
  margin-bottom: 80px;

  h1 {
    color: $primary;
  }

  #search {
    padding: 0 20px;
    width: 100%;
    height: 50px;
    border-radius: 3em;
  }

  .hover-dark {
    background-color: $bg-secondary-darkmode;
    color: $text-color-darkmode;
  }

  .hover-light {
    background-color: $bg-secondary;
    color: $text-color;
  }

  .my-dropdown {
    position: absolute;
    z-index: 11;
    top: 83%;
    left: 5%;
    background-color: white;
    color: black;
    width: 90%;
    border-radius: 1em;
    overflow: hidden;

    .item {
      height: 3em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      color: black;

    }
  }

  #search-button {
    position: absolute;
    right: 3.5%;
    top: 61.5%;
    width: 51px;
    height: 51px;
    border-radius: 50%;
    background-color: $primary;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 12;
    -webkit-box-shadow: -18px 0 31px -8px #000000;
    -moz-box-shadow: -18px 0 31px -8px #000000;
    box-shadow: -18px 0 31px -8px #000000;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: darken($primary, 8%);
    }
  }
}

@media screen and (max-width: 1200px) {
  #searchbar {
    margin-top: 0;
    margin-bottom: 20px;
    width: 100%;

    #search-button {
      display: none;
    }

    .my-dropdown {
      width: 90%;
      left: 50%;
      transform: translateX(-50%);

      .item {
        padding: 30px 0;
        font-size: 0.7em;

        h5 {
          font-size: 1.3em;
        }
      }
    }
  }
}
</style>
