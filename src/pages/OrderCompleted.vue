<template>
  <div class="wrapper-tot d-flex justify-content-center align-items-center">
    <OrderSuccess v-if="store.checkout.success" />
    <OrderFailed v-else />
  </div>
</template>

<script>
import { store } from "../data/store";
import OrderSuccess from "../components/OrderSuccess.vue";
import OrderFailed from "../components/OrderFailed.vue";
export default {
  name: "OrderCompleted",
  data() {
    return {
      store,
    };
  },
  components: {
    OrderFailed,
    OrderSuccess,
  },
  mounted() {
    console.log(store.checkout.success);
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.wrapper-tot {
  position: relative;
  z-index: 10;
  min-height: 70vh;
}
</style>
