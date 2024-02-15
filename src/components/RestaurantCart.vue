<template>
  <div class="cart rounded-3">
    <h2 class="p-3 d-flex justify-content-between align-items-center">
      <span>Carrello</span> <i class="fa-solid fa-cart-shopping"></i>
    </h2>
    <h3 class="p-3 py-4 d-flex justify-content-between align-items-center">
      <span>I tuoi prodotti</span><span>Totale: € {{ totalPrice() }}</span>
    </h3>

    <div v-if="store.cart.length > 0" class="container-fluid elements">
      <div v-for="item in store.cart" class="py-2 element px-3">
        <div class="buttons">
          <div><i class="fa-solid fs-2 fa-square-minus"></i></div>
          <div><i class="fa-solid fs-2 fa-square-plus"></i></div>
        </div>
        <div class="row justify-content-between">
          <div class="col-3">
            <img src="https://picsum.photos/200" class="w-100" alt="" />
          </div>
          <div
            class="col-5 text-start d-flex flex-column justify-content-around"
          >
            <h4>{{ item.name }}</h4>
            <h5>€ {{ item.price.toFixed(2) }}</h5>
          </div>
          <div class="col-4 text-end d-flex flex-column justify-content-around">
            <h4>x {{ quantity(item) }}</h4>
            <h5>€ {{ (item.price * quantity(item)).toFixed(2) }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
export default {
  name: "RestaurantCart",
  data() {
    return {
      store,
    };
  },
  methods: {
    quantity(item) {
      let quantity = 0;
      store.cart.forEach((element) => {
        if (element.name === item.name) {
          quantity++;
        }
      });
      return quantity;
    },
    totalPrice() {
      let total = 0;
      store.cart.forEach((element) => {
        total += element.price;
      });
      return total.toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.cart {
  width: 100%;
  background-color: $bg-secondary;
  color: white;
  overflow-y: auto;
  max-height: 90vh;

  .elements {
    max-height: 60vh;
    overflow-y: auto;
    .element {
      border-bottom: 3px solid $bg-primary;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      &:hover {
        background-color: lighten($color: $bg-secondary, $amount: 8);

        .buttons {
          top: 50%;
        }
      }
      .buttons {
        position: absolute;
        top: -50%;
        transform: translateY(-50%) translateX(50%);
        right: calc(100% / 3);
        transition: all 0.3s ease;
        display: flex;
        background-color: lighten($color: $bg-secondary, $amount: 8);
        height: 100%;
        align-items: center;
        z-index: 100;
        div {
          cursor: pointer;
          color: $primary;
          transition: all 0.3s ease;
          margin: 0 0.5em;
          &:hover {
            color: darken($color: $primary, $amount: 10);
          }
        }
      }
    }
  }
}
</style>
