<template>
  <div class="wrapper py-5" v-if="restaurant !== null">
    <div class="container">
      <div>
        <RestaurantCart :info="restaurant" :checkout="true" />
        <CheckoutForm :restaurant="restaurant" :token="token" />
        <!-- <PaymentForm /> -->
        <!-- <v-braintree :client-token="token" @payment-method-received="handlePaymentMethodReceived" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
import axios from "axios";
// import { VBraintree } from 'vue-braintree';
import RestaurantCart from "../components/RestaurantCart.vue";
import CheckoutForm from "../components/CheckoutForm.vue";
export default {
  name: "CheckoutPage",
  data() {
    return {
      store,
      restaurant: null,
      slug: this.$route.params.slug,
      token: null,
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
    onSuccess(payload) {
      let nonce = payload.nonce;
    },
    onError(error) {
      let message = error.message;
    },
    getToken() {
      axios.get(store.apiUrl + "orders/generate").then((res) => {
        this.token = res.data.token;
        console.log(this.token);
      });
    },
  },
  mounted() {
    this.getRestaurant();
    if (localStorage.getItem(this.slug)) {
      store.cart = JSON.parse(localStorage.getItem(this.slug));
    }
    this.getToken();
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.wrapper {
  color: $text-color;
  min-height: 70vh;
  margin-top: 100px;
  position: relative;
  z-index: 10;
}
</style>
