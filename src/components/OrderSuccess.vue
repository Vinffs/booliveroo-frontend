<template>
  <div
    class="my-wrapper mb-5"
    :class="
      store.darkMode ? 'dark-secondary text-light' : 'light-secondary text-dark'
    "
  >
    <div class="d-flex justify-content-center align-items-center w-50 mx-auto">
      <img class="w-25" src="/images/check.gif" alt="check" />
    </div>
    <h1>
      Ciao {{ store.checkout.order.customer_name }}! Il tuo ordine presso
      {{ store.checkout.restaurant.name }} è andato a buon fine!
    </h1>

    <h4>Riepilogo Ordine:</h4>
    <p>
      Ti è stata inviata un e-mail di conferma all'indirizzo:
      <span>{{ store.checkout.order.customer_email }}</span>
    </p>
    <p>
      Il tuo numero di ordine è: <span> #{{ store.checkout.order.id }}</span>
    </p>
    <p>
      Il tuo ordine verrà consegnato presso
      <span>{{ store.checkout.order.shipping_address }}</span>
    </p>
    <p>
      In caso il rider abbia difficoltà a trovare la tua ubicazione, ti
      contatteremo al numero:
      <span>{{ store.checkout.order.customer_phone }}</span>
    </p>
    <h5>Piatti ordinati:</h5>
    <ul>
      <li v-for="item in store.cart">{{ item.name }} - €{{ item.price }}</li>
    </ul>
    <p>
      Il totale del tuo ordine è:
      <span>€ {{ store.checkout.order.total_price }}</span>
    </p>
    <h2>Grazie per aver scelto Booliveroo!</h2>
    <div id="home">
      <router-link
        to="/"
        class="btn btn-primary rounded-pill fw-bold"
        :class="store.darkMode ? 'text-light' : 'text-dark'"
        >Torna alla Home</router-link
      >
    </div>
  </div>
</template>

<script>
import { store } from "../data/store.js";
export default {
  name: "OrderCompleted",
  data() {
    return {
      store,
      cart: null,
    };
  },
  mounted() {
    this.cart = store.cart;
    localStorage.removeItem(store.checkout.restaurant.slug);
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.my-wrapper {
  padding: 50px;
  border-radius: 3em;

  p {
    font-size: 1.2em;
  }

  span {
    font-weight: bold;
  }

  h1 {
    margin-bottom: 40px;
  }

  h1,
  h2,
  span {
    color: $primary;
  }

  #home {
    text-align: center;
  }
}
</style>
