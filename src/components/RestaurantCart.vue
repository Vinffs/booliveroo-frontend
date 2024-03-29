<template>
  <div
    class="cart rounded-3"
    :class="
      store.darkMode ? 'text-light dark-secondary' : 'text-dark light-secondary'
    "
  >
    <h2
      v-if="!checkout"
      class="p-3 d-flex justify-content-between align-items-center"
    >
      <div v-if="!checkout">
        <span
          class="me-3 d-inline-block d-lg-none"
          @click="$emit('toggleCart')"
        >
          <i class="fa-solid fa-arrow-left"></i
        ></span>
        <i
          v-if="!checkout"
          class="fa-solid fa-cart-shopping d-none d-lg-inline"
        ></i>

        <span v-if="!checkout">Carrello</span>
        <span v-else>Conferma il tuo ordine</span>
      </div>

      <div v-if="store.cart.length > 0">
        <button
          v-if="!checkout"
          class="btn checkout py-2 px-4 fs-5 rounded-pill"
          @click="
            $router.push('/checkout/' + info.slug, {
              params: { restaurant: info },
            })
          "
        >
          Pagamento
        </button>
      </div>
    </h2>
    <h1 v-if="checkout" class="p-3">
      Ricontrolla il tuo ordine presso {{ info.name }}
    </h1>
    <h3
      v-if="store.cart.length > 0"
      class="p-3 py-4 d-flex justify-content-between align-items-center"
    >
      <span :class="{ 'fs-1': checkout }">I tuoi prodotti</span
      ><span :class="{ 'fs-1': checkout }"
        >Totale: € {{ totalPrice().toFixed(2) }}</span
      >
    </h3>

    <div v-if="store.cart.length > 0" class="container-fluid elements">
      <div v-for="item in cartNotRepeated()" class="py-2 element px-3">
        <div>
          <div class="row justify-content-between">
            <div class="col-sm-4 col-lg-3 col-10">
              <img
                :src="store.imagePath + item.image"
                class="w-100"
                :alt="item.name"
              />
            </div>
            <div class="buttons col-2 rounded-4">
              <div @click="updateCart(item, 'clear')">
                <i class="fa-solid fs-3 fa-trash"></i>
              </div>
              <div @click="updateCart(item, 'remove')">
                <i class="fa-solid fs-2 fa-square-minus"></i>
              </div>
              <div @click="updateCart(item, 'add')">
                <i class="fa-solid fs-2 fa-square-plus"></i>
              </div>
            </div>
            <div
              v-if="!checkout"
              class="col-6 col-sm-3 col-lg-5 text-start d-flex flex-column justify-content-around mt-3 mt-sm-0"
            >
              <h5>{{ item.name }}</h5>
              <h5>€ {{ item.price }}</h5>
            </div>
            <div
              v-else
              class="col-5 text-start d-flex flex-column justify-content-around"
            >
              <h2>{{ item.name }}</h2>
              <h2>€ {{ item.price }}</h2>
            </div>

            <div
              v-if="!checkout"
              class="col-6 col-sm-3 col-lg-4 text-end d-flex flex-column justify-content-around mt-3 mt-sm-0"
            >
              <h4>x {{ quantity(item) }}</h4>
              <h5>€ {{ (item.price * quantity(item)).toFixed(2) }}</h5>
            </div>
            <div
              v-else
              class="col-4 text-end d-flex flex-column justify-content-around"
            >
              <h2>x {{ quantity(item) }}</h2>
              <h2>€ {{ (item.price * quantity(item)).toFixed(2) }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="d-flex justify-content-center align-items-center pb-5 pt-4"
    >
      <h3 class="text-center fw-bold">
        Che aspetti? <br />
        Scegli i tuoi piatti preferiti!
      </h3>
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
  props: {
    info: Object,
    checkout: Boolean,
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
        total += parseFloat(element.price);
      });
      return total;
    },
    cartNotRepeated() {
      return this.removeDuplicates(store.cart, "name");
    },
    removeDuplicates(array, propertyName) {
      return array.filter(
        (obj, index, self) =>
          index === self.findIndex((o) => o[propertyName] === obj[propertyName])
      );
    },
    updateCart(item, method) {
      if (method === "add") {
        store.cart.push(item);
        this.localStorageSetCart();
      } else if (method === "clear") {
        // store.cart.forEach((element, index) => {
        //   if (element.name === item.name) {
        //     store.cart.splice(index, 1);
        //   }
        // })

        for (let i = 0; i < store.cart.length; i++) {
          if (store.cart[i].name === item.name) {
            store.cart.splice(i, 1);
            i--;
          }
        }

        if (store.cart.length === 0) {
          localStorage.removeItem(this.info.slug);
        } else {
          this.localStorageSetCart();
        }
      } else if (method === "remove") {
        // store.cart.forEach((element, index) => {
        //   if (element.name === item.name) {
        //     store.cart.splice(index, 1);
        //   }
        // })

        for (let i = 0; i < store.cart.length; i++) {
          if (store.cart[i].name === item.name) {
            store.cart.splice(i, 1);
            break;
          }
        }

        if (store.cart.length === 0) {
          localStorage.removeItem(this.info.slug);
        } else {
          this.localStorageSetCart();
        }
      }
    },
    localStorageSetCart() {
      localStorage.setItem(this.info.slug, JSON.stringify(store.cart));
    },
  },
  mounted() {
    // this.cartNotRepeated();
    if (localStorage.getItem(this.info.slug)) {
      store.cart = JSON.parse(localStorage.getItem(this.info.slug));
    }
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.cart {
  //width: 100%;
  // background-color: $bg-secondary;
  // color: $text-color;
  //overflow-y: auto;

  .checkout {
    background-color: $primary;
    color: $text-color;
    border: none;
    transition: all 0.3s ease;

    &:hover {
      background-color: darken($color: $primary, $amount: 10);
    }
  }

  .elements {
    max-height: 60vh;
    overflow-y: auto;

    .element {
      border-bottom: 3px solid $bg-primary;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: $primary;
        border-radius: 1em;

        .buttons {
          bottom: 0;
        }
      }

      .buttons {
        position: absolute;
        bottom: -50%;

        right: 0;
        transition: all 0.3s ease;
        display: flex;
        background-color: $primary;
        height: 45%;
        align-items: center;
        z-index: 100;

        div {
          cursor: pointer;
          color: $bg-primary-darkmode;
          transition: all 0.3s ease;
          margin: 0 0.5em;

          &:hover {
            // color: darken($color: $primary, $amount: 10);
            scale: 1.1;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .cart {
    max-height: 90vh;
    .elements {
      max-height: 65vh;
      .element {
        .buttons {
          width: auto !important;
        }
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .cart {
    .elements {
      max-height: 65vh;
      .element {
        .buttons {
          position: static;
          flex-direction: column;
          background-color: transparent;
          justify-content: space-evenly;
          height: auto;
          i {
            font-size: 2em !important;
          }
        }
      }
    }
  }
}
</style>
