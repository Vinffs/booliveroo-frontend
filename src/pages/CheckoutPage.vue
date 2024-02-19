<template>
    <div class="container" v-if="restaurant !== null">
        <h1>{{ restaurant.name }}</h1>
        <div>
            <RestaurantCart :info="restaurant" />
        </div>
    </div>
</template>

<script>
import { store } from "../data/store";
import axios from "axios";
import RestaurantCart from "../components/RestaurantCart.vue";
export default {
    name: "CheckoutPage",
    data() {
        return {
            store,
            restaurant: null,
            slug: this.$route.params.slug
        }
    },
    components: {
        RestaurantCart,
    },
    methods: {
        getRestaurant() {
            axios
                .get(store.apiUrl + "restaurants/" + this.slug)
                .then((res) => {
                    this.restaurant = res.data.data;
                    console.log(this.restaurant);
                });
        },
    },
    mounted() {
        this.getRestaurant()
        if (localStorage.getItem(this.slug)) {
            store.cart = JSON.parse(localStorage.getItem(this.slug))
        }
    }
}
</script>

<style lang="scss" scoped></style>