<template>
  <div class="my-wrapper">
    <h1>
      Ordine effettuato con successo presso {{ store.checkout.restaurant.name }}
    </h1>
    <ul class="list-unstyled">
      <li>
        <strong>Nome:</strong> {{ store.checkout.order.customer_name }}
        {{ store.checkout.order.customer_lastname }}
      </li>
      <li><strong>Email:</strong> {{ store.checkout.order.customer_email }}</li>
      <li>
        <strong>Telefono:</strong> {{ store.checkout.order.customer_phone }}
      </li>
      <li>
        <strong>Indirizzo di spedizione:</strong>
        {{ store.checkout.order.shipping_address }}
      </li>
      <li>
        <strong>Prezzo totale:</strong> {{ store.checkout.order.total_price }}
      </li>
      <li>
        <strong>Data ordine:</strong> {{ store.checkout.order.created_at }}
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from "../data/store.js";
export default {
  name: "OrderCompleted",
  data() {
    return {
      store,
    };
  },
  mounted() {
    localStorage.removeItem(store.checkout.restaurant.slug);
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.my-wrapper {
  padding: 50px;
  background-color: $bg-secondary;
  border-radius: 3em;
}
</style>
