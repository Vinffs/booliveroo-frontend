<template>
    <div class="wrapper">
        <div class="hero"></div>
        <div class="container">
            <div class="row">
                <div class="col-8 main">
                    <!-- componente informazioni ristorante -->

                    <!-- pulsante -->

                    <!-- componente menu/info -->
                </div>
                <div class="col-4 cart"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../data/store";
import axios from "axios";
export default {
    name: "RestaurantShow",
    data() {
        return {
            store,
            restaurantSlug: this.$route.params.slug,
            restaruant: null,
        };
    },
    methods: {
        getRestaurant() {
            axios.get(store.apiUrl + "restaurants/", { params: { slug: this.restaurantSlug } }).then((res) => {
                this.restaruant = res.data.data;
                console.log(this.restaruant);
            })
        }
    },
    mounted() {
        this.getRestaurant();
    }
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.wrapper {
    background-color: $bg-primary;

    .hero {
        height: 40vh;
        width: 100%;
        background: radial-gradient(circle at center,
                $primary 0%,
                $bg-primary 100%);
    }

    .container {
        position: relative;
        z-index: 2;
        top: -70px;
        left: 0;
    }
}
</style>
