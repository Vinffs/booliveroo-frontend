<template>
<<<<<<< HEAD
  <div class="">
    <h2 class="text-center pt-5 pb-4">Inserisci i tuoi dati</h2>
    <form action="" class="rounded-3 p-4 shipping-data" ref="form" @submit.prevent>
=======
  <div>
    <h2 class="text-center pt-5 pb-4" :class="store.darkMode ? 'text-light' : 'text-dark'">Inserisci i tuoi dati</h2>
    <form :class="store.darkMode ? 'dark-secondary text-light' : 'light-secondary'" action=""
      class="rounded-3 p-4 shipping-data" ref="form" @submit.prevent="sendData()">
>>>>>>> 491813b24bf7d448a0c213b9acb18ba29a064dd4
      <div class="d-flex justify-content-between align-items-center">
        <h2 :class="store.darkMode ? 'text-light' : 'text-dark'">Dati di consegna</h2>
        <span><span class="text-danger">*</span> campi obbligatori</span>
      </div>
      <div class="d-flex align-items-center justify-content-between gx-2">
        <div class="mb-3" style="width: 49.5%">
          <label :class="store.darkMode ? 'text-light' : 'text-dark'" for="name" class="form-label">Nome <span
              class="text-danger">*</span></label>
          <input required placeholder="Mario" type="text" v-model="name" class="form-control" id="name" />
        </div>
        <div class="mb-3" style="width: 49.5%">
          <label :class="store.darkMode ? 'text-light' : 'text-dark'" for="surname" class="form-label">Cognome <span
              class="text-danger">*</span></label>
          <input required placeholder="Rossi" v-model="surname" type="text" class="form-control" id="surname" />
        </div>
      </div>
      <div class="mb-3 w-100">
        <label :class="store.darkMode ? 'text-light' : 'text-dark'" for="address" class="form-label">Indirizzo di consegna
          <span class="text-danger">*</span></label>
        <input required placeholder="Via Roma 25, 00100 Roma" v-model="address" type="text" class="form-control"
          id="address" />
      </div>
      <div class="mb-3 w-100">
        <label :class="store.darkMode ? 'text-light' : 'text-dark'" for="email" class="form-label">Indirizzo email <span
            class="text-danger">*</span></label>
        <input required placeholder="indirizzo@email.it" v-model="email" type="email" class="form-control" id="email" />
      </div>
      <div class="mb-3 w-100">
        <label :class="store.darkMode ? 'text-light' : 'text-dark'" for="phone" class="form-label">Numero di telefono
          <span class="text-danger">*</span></label>
        <input required placeholder="111 111 1111" v-model="phone" type="tel" class="form-control" id="phone"
          maxlength="10" />
      </div>

      <div v-if="loading">
        <header>
          <h2 class="payment-title" :class="store.darkMode ? 'text-light' : 'text-dark'">Metodo di pagamento</h2>
        </header>
        <div id="my-sample-form" class="scale-down w-100 mt-3" ref="paymentForm">
          <div class="cardinfo-card-number">
            <label class="cardinfo-label" for="card-number">Numero Carta <span class="text-danger">*</span></label>
            <div class="input-wrapper" id="card-number"></div>
            <div id="card-image" ref="cardImage"></div>
          </div>

          <div class="cardinfo-wrapper">
            <div class="cardinfo-exp-date">
              <label class="cardinfo-label" for="expiration-date">Scadenza <span class="text-danger">*</span></label>
              <div class="input-wrapper" placeholder="mm/yyyy" id="expiration-date"></div>
            </div>

            <div class="cardinfo-cvv">
              <label class="cardinfo-label" for="cvv">CVV <span class="text-danger">*</span></label>
              <div class="input-wrapper" id="cvv"></div>
            </div>
          </div>
        </div>
      </div>
      <LoadingComponent class="my-5" v-else />

      <input id="button-pay" type="submit" value="Continue" :class="{ 'show-button': isShowButton }"
        @click="sendData()" />
      <input type="hidden" id="nonce" name="payment_method_nonce" ref="nonce" />
    </form>
  </div>
</template>

<script>
import braintree from "braintree-web";
import axios from "axios";
import { store } from "../data/store";
import LoadingComponent from "./LoadingComponent.vue";
export default {
  name: "CheckoutForm",

  data() {
    return {
      isHeaderSlide: false,
      isShowButton: false,
      cardNumber: "",
      expirationDate: "",
      cvv: "",
      name: "",
      surname: "",
      address: "",
      email: "",
      phone: "",
      serverToken: "",
      store,
      cartId: [],
      loading: false,
      hostedFieldsInstance: null,
    };
  },
  props: {
    token: String,
  },
  components: {
    PaymentForm: this,
    LoadingComponent,
  },
  mounted() {
    this.loading = false;
    this.serverToken = "";
    setTimeout(() => {
      braintree.client.create(
        {
          authorization: this.token,
        },
        (err, clientInstance) => {
          if (err) {
            console.error(err);
            return;
          }

          braintree.hostedFields.create(
            {
              client: clientInstance,
              styles: {
                // Stili degli input
              },
              fields: {
                number: {
                  selector: "#card-number",
                  placeholder: "1111 1111 1111 1111",
                },
                cvv: {
                  selector: "#cvv",
                  placeholder: "123",
                },
                expirationDate: {
                  selector: "#expiration-date",
                  placeholder: "MM / YYYY",
                },
              },
            },
            (err, hostedFieldsInstance) => {
              if (err) {
                console.error(err);
                return;
              }

              hostedFieldsInstance.on("validityChange", (event) => {
                const formValid = Object.keys(event.fields).every(
                  (key) => event.fields[key].isValid
                );
                this.isShowButton = formValid;
              });

              hostedFieldsInstance.on("empty", function (event) {
                $("header").removeClass("header-slide");
                $("#card-image").removeClass();
                //$(form).removeClass();
              });

              hostedFieldsInstance.on("cardTypeChange", (event) => {
                if (event.cards[0].code.size === 4) {
                  hostedFieldsInstance.setAttribute({
                    field: "cvv",
                    attribute: "placeholder",
                    value: "1234",
                  });
                } else {
                  hostedFieldsInstance.setAttribute({
                    field: "cvv",
                    attribute: "placeholder",
                    value: "123",
                  });
                }
                // hostedFieldsInstance.tokenize((err, payload) => {
                //   if (err) {
                //     console.error(err);
                //     return;
                //   }
                //   console.log(payload);
                //   this.serverToken = payload.nonce;
                // });

                // Change card bg depending on card type
                if (event.cards.length === 1) {
                  this.isHeaderSlide = true;
                  this.$refs.paymentForm.classList.remove(
                    "visa",
                    "master-card",
                    "maestro",
                    "american-express",
                    "discover",
                    "unionpay",
                    "jcb",
                    "diners-club"
                  );
                  this.$refs.paymentForm.classList.add(event.cards[0].type);
                  $("#card-image").removeClass().addClass(event.cards[0].type);
                } else {
                  this.isHeaderSlide = false;
                  this.$refs.paymentForm.classList.remove(
                    "visa",
                    "master-card",
                    "maestro",
                    "american-express",
                    "discover",
                    "unionpay",
                    "jcb",
                    "diners-club"
                  );
                  this.$refs.cardImage.classList.remove(
                    "visa",
                    "master-card",
                    "maestro",
                    "american-express",
                    "discover",
                    "unionpay",
                    "jcb",
                    "diners-club"
                  );
                }
              });
            }
          );
        }
      );
      this.loading = true;
    }, 1000); // Adjust the delay as needed
  },
  methods: {

    sendData() {
      // this control that phone is all numbers
      let notNum = true;
      const allNumns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      for (let i = 0; i < this.phone.length; i++) {
        if (!allNumns.includes(parseInt(this.phone[i]))) {
          notNum = false;
        }
      }
      if (
        this.name !== "" &&
        this.surname !== "" &&
        this.address !== "" &&
        this.email !== "" &&
        this.phone !== "" &&
        notNum
      ) {
        store.cart.forEach((value) => {
          this.cartId.push(value.id);
        });
        const paymentData = {
          token: "fake-valid-nonce",
          amount: this.cartId,
          customer_email: this.email,
          shipping_address: this.address,
          customer_name: this.name,
          customer_lastname: this.surname,
          customer_phone: this.phone,
        };

        axios
          .post(store.apiUrl + "orders/make-payment", paymentData)
          .then((res) => {
            store.status = res.data.success;
            this.$router.push('/order-status');
          }).catch((err) => {
            //   this.$router.push('/order-status', { params: { success: false } });
            // });
          });
      } else if (!notNum) {
        alert("Il numero di telefono contiene dei caratteri non numerici");
      } else {
        alert("Alcuni campi obbligatori non sono stati compilati");
      }
    },

  },

};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.shipping-data {
  background-color: $bg-secondary;
  width: 60%;
  margin: 0 auto;
}

$small-screen: 476px;
$grey: #111;
$blue: #5db6e8;
$darkBlue: #282c37;
$red: #e53a40;
$green: #8cd790;
$white: #fff;
$radius: 4px;
$bouncy: cubic-bezier(0.2, 1.3, 0.7, 1);

// Stili generali

label {
  color: black;
}

.cardinfo-wrapper {
  display: flex;
  justify-content: space-around;
}

.bg-illustration {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;

  svg {
    width: 100%;
  }
}

.card-shape {
  border-radius: 6px;
  padding: 2em 2em 1em;

  @media (max-width: $small-screen) {
    padding: 2em 1.5em 1em;
  }
}

#my-sample-form {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  padding: 3em;
  width: 20em;
  margin-bottom: 2em;
  transition: all 600ms $bouncy;
  animation: cardIntro 500ms $bouncy;
  z-index: 1;
  position: relative;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  }

  // Cambia il background in base al tipo di carta
  &.visa {
    @extend .card-shape;
    color: $white;
    background-color: #0d4aa2;
  }

  &.master-card {
    @extend .card-shape;
    color: $white;
    background-color: #363636;
    background: linear-gradient(115deg,
        #d82332,
        #d82332 50%,
        #f1ad3d 50%,
        #f1ad3d);
  }

  &.maestro {
    @extend .card-shape;
    color: $white;
    background-color: #363636;
    background: linear-gradient(115deg,
        #009ddd,
        #009ddd 50%,
        #ed1c2e 50%,
        #ed1c2e);
  }

  &.american-express {
    @extend .card-shape;
    color: $white;
    background-color: #007cc3;
  }

  &.discover {
    @extend .card-shape;
    color: $white;
    background-color: #ff6000;
    background: linear-gradient(#d14310, #f7961e);
  }

  &.unionpay,
  &.jcb,
  &.diners-club {
    @extend .card-shape;
    color: $white;
    background-color: #363636;
  }

  // Aggiungi altri stili per i diversi tipi di carta
}

.cardinfo-label {
  display: block;
  font-size: 11px;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

#button-pay {
  cursor: pointer;
  width: 16em;
  font-size: 15px;
  border: 0;
  padding: 1.2em 1em;
  color: #fff;
  background: #282c37;
  border-radius: $radius;
  z-index: 0;
  transform: translateY(-100px);
  position: relative;
  transition: all 500ms $bouncy;
  opacity: 0;
  //-webkit-appearance: none;

  &:hover {
    background: lighten(#282c37, 20%);
  }

  &:active {
    animation: cardIntro 200ms $bouncy;
  }

  &.show-button {
    transform: translateY(0);
    opacity: 1;
  }
}

.cardinfo-card-number {
  position: relative;
}

#card-image {
  position: absolute;
  top: 2em;
  right: 1em;
  width: 44px;
  height: 28px;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/346994/card_sprite.png);
  background-size: 86px 458px;
  border-radius: $radius;
  background-position: -100px 0;
  background-repeat: no-repeat;
  margin-bottom: 1em;

  &.visa {
    background-position: 0 -398px;
  }

  &.master-card {
    background-position: 0 -281px;
  }

  &.american-express {
    background-position: 0 -370px;
  }

  &.discover {
    background-position: 0 -163px;
  }

  &.maestro {
    background-position: 0 -251px;
  }

  &.jcb {
    background-position: 0 -221px;
  }

  &.diners-club {
    background-position: 0 -133px;
  }
}

.input-wrapper {
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.86);
  height: 2.75em;
  border: 1px solid #eee;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);
  padding: 5px 10px;
  margin-bottom: 1em;
}

.braintree-hosted-fields-focused {
  border-color: $blue;
}

// Styles the wrapper of the invalid input
.braintree-hosted-fields-invalid {
  border-color: $red;
  animation: shake 500ms $bouncy both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/*--------------------
Animations
--------------------*/

@keyframes cardIntro {
  0% {
    transform: scale(0.8) translate(0, 0);
    opacity: 0;
  }

  100% {
    transform: scale(1) translate(0, 0);
    opacity: 1;
  }
}

@keyframes shake {

  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(1px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-3px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(3px, 0, 0);
  }
}</style>
