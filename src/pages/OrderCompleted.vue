<template>
    <div>
        <OrderSuccess v-if="$route.params.success" />
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
        }
    },
    components: {
        OrderFailed,
        OrderSuccess

    }
}
</script>

<style lang="scss" scoped></style>