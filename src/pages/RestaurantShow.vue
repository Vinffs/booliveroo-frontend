<template>
  <div class="wrapper-tot">
    <!-- <div class="hero"></div> -->
    <div v-if="!loading" class="container">
      <div v-if="restaruant" class="row">
        <div class="col-12 col-lg-7 main">
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
          <RestaurantCart
            @toggle-cart="cartToggle = !cartToggle"
            :info="restaruant"
            :checkout="false"
            class="cart"
            :class="{ active: cartToggle }"
          />
          <div
            @click="cartToggle = !cartToggle"
            class="shadowed d-block d-lg-none rounded-circle d-flex justify-content-center align-items-center cart-button"
          >
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    </div>
    <LoadingComponent v-else />
  </div>
</template>

<script>
import { store } from "../data/store";
import axios from "axios";
import RestaurantBadge from "@/components/RestaurantBadge.vue";
import RestaurantCart from "@/components/RestaurantCart.vue";
import RestaurantInfo from "@/components/RestaurantInfo.vue";
import RestaurantMenu from "@/components/RestaurantMenu.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
export default {
  name: "RestaurantShow",
  components: {
    RestaurantBadge,
    RestaurantCart,
    RestaurantInfo,
    RestaurantMenu,
    LoadingComponent,
  },
  data() {
    return {
      store,
      restaurantSlug: this.$route.params.slug,
      restaruant: null,
      active: false,
      loading: false,
      cartToggle: false,
    };
  },
  methods: {
    getRestaurant() {
      this.loading = true;
      axios
        .get(store.apiUrl + "restaurants/" + this.restaurantSlug)
        .then((res) => {
          this.restaruant = res.data.data;
          console.log(this.restaruant);
          this.loading = false;
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

.wrapper-tot {
  // background-color: $bg-primary;
  padding: 50px 0;
  padding-top: 150px;
  position: relative;
  min-height: 70vh;
  z-index: 10;

  .hero {
    height: 30vh;
    width: 100%;
    background: radial-gradient(
      circle at center,
      $primary 0%,
      $bg-primary 100%
    );
  }

  .container {
    // position: relative;
    // z-index: 2;
    // top: -70px;
    // left: 0;

    #pulsante {
      margin: 20px 0;
      height: 50px;
      width: 100%;
      background-color: $bg-secondary;
      display: flex;
      // justify-content: space-around;
      align-items: center;
      cursor: pointer;
      color: $text-color;
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

@media screen and (min-width: 992px) {
  .cart {
    position: sticky;
    top: 0;
    right: 0;
  }
}

@media screen and (max-width: 992px) {
  .cart-button {
    position: fixed;
    bottom: 3%;
    right: 7%;
    background-color: $primary;
    color: $text-color;
    width: 2.5em;
    height: 2.5em;
    font-size: 1.3em;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: lighten($primary, 10%);
    }
  }

  .cart {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    scale: 0;
    opacity: 0;
    transition: all 0.3s ease;

    &.active {
      scale: 1;
      opacity: 1;
    }
  }
}
</style>
