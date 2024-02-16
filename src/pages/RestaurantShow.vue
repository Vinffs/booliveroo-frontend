<template>
  <div class="wrapper">
    <div class="hero"></div>
    <div class="container">
      <div v-if="restaruant" class="row">
        <div class="col-7 main">
          <!-- componente informazioni ristorante -->
          <RestaurantBadge :info="restaruant" />
          <!-- pulsante -->
          <div id="pulsante" class="rounded-5 p-1">
            <div
              id="menu"
              :class="active ? 'my-bg-primary' : 'primary'"
              @click="active = false"
            >
              Menu
            </div>
            <div
              id="info"
              :class="active ? 'primary' : 'my-bg-primary'"
              @click="active = true"
            >
              Info
            </div>
          </div>
          <!-- componente menu/info -->
          <RestaurantInfo
            v-if="restaurant !== null"
            v-show="active"
            :info="restaruant"
          />
          <RestaurantMenu :info="restaruant" v-show="!active" />
        </div>
        <div class="col-5">
          <RestaurantCart :info="restaruant" class="cart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
import axios from "axios";
import RestaurantBadge from "@/components/RestaurantBadge.vue";
import RestaurantCart from "@/components/RestaurantCart.vue";
import RestaurantInfo from "@/components/RestaurantInfo.vue";
import RestaurantMenu from "@/components/RestaurantMenu.vue";
export default {
  name: "RestaurantShow",
  components: {
    RestaurantBadge,
    RestaurantCart,
    RestaurantInfo,
    RestaurantMenu,
  },
  data() {
    return {
      store,
      restaurantSlug: this.$route.params.slug,
      restaruant: null,
      active: false,
    };
  },
  methods: {
    getRestaurant() {
      axios
        .get(store.apiUrl + "restaurants/" + this.restaurantSlug)
        .then((res) => {
          this.restaruant = res.data.data;
          console.log(this.restaruant);
        });
    },
  },
  mounted() {
    store.cart = [];
    this.getRestaurant();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.wrapper {
  background-color: $bg-primary;

  .hero {
    height: 40vh;
    width: 100%;
    background: radial-gradient(
      circle at center,
      $primary 0%,
      $bg-primary 100%
    );
  }

  .container {
    position: relative;
    z-index: 2;
    top: -70px;
    left: 0;

    #pulsante {
      margin: 20px 0;
      height: 50px;
      width: 100%;
      background-color: $bg-secondary;
      display: flex;
      // justify-content: space-around;
      align-items: center;
      cursor: pointer;
      color: white;
      font-size: 2em;
      text-align: center;

      #info {
        width: 50%;
        height: 100%;
        border-radius: 0 2em 2em 0;
      }

      #menu {
        width: 50%;
        height: 100%;
        border-radius: 2em 0 0 2em;
      }
    }

    .cart {
      position: sticky;
      top: 0;
      right: 0;
    }
  }
}

.primary {
  background-color: $primary;
  -webkit-box-shadow: 0 -0.5px 17.5px 5.5px $primary;
  -moz-box-shadow: 0 -0.5px 17.5px 5.5px $primary;
  box-shadow: 0 -0.5px 17.5px 5.5px $primary;
}

.my-bg-primary {
  background-color: $bg-primary;
  -webkit-box-shadow: 0 -0.5px 17.5px 5.5px $bg-primary;
  -moz-box-shadow: 0 -0.5px 17.5px 5.5px $bg-primary;
  box-shadow: 0 -0.5px 17.5px 5.5px $bg-primary;
  // filter: blur(2px);
}
</style>
