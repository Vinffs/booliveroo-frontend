<template>
  <div class="wrapper py-5" v-if="restaurant !== null">
    <div class="container">
      <h1 class="mb-4">
        Ricontrolla il tuo ordine presso {{ restaurant.name }}
      </h1>
      <div>
        <RestaurantCart :info="restaurant" :checkout="true" />
        <CheckoutForm />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
import axios from "axios";
import RestaurantCart from "../components/RestaurantCart.vue";
import CheckoutForm from "../components/CheckoutForm.vue";
export default {
  name: "CheckoutPage",
  data() {
    return {
      store,
      restaurant: null,
      slug: this.$route.params.slug,
    };
  },
  components: {
    RestaurantCart,
    CheckoutForm,
  },
  methods: {
    getRestaurant() {
      axios.get(store.apiUrl + "restaurants/" + this.slug).then((res) => {
        this.restaurant = res.data.data;
        console.log(this.restaurant);
      });
    },
  },
  mounted() {
    this.getRestaurant();
    if (localStorage.getItem(this.slug)) {
      store.cart = JSON.parse(localStorage.getItem(this.slug));
    }
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.wrapper {
  background-color: $bg-primary;
  color: white;
  min-height: 70vh;
}
</style>
