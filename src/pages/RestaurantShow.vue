<template>
    <div class="wrapper">
        <div class="hero"></div>
        <div class="container">
            <div class="row">
                <div class="col-8 main">
                    <!-- componente informazioni ristorante -->
                    <RestaurantBadge :info="restaruant" />
                    <!-- pulsante -->

                    <!-- componente menu/info -->
                    <RestaurantInfo />
                    <RestaurantMenu />
                </div>
                <div class="col-4 cart"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../data/store";
import axios from "axios";
import RestaurantBadge from "@/components/RestaurantBadge.vue";
import RestaurantCartVue from "@/components/RestaurantCart.vue";
import RestaurantInfoVue from "@/components/RestaurantInfo.vue";
import RestaurantMenuVue from "@/components/RestaurantMenu.vue";
export default {
    name: "RestaurantShow",
    components: {
        RestaurantBadge,
        RestaurantCartVue,
        RestaurantInfoVue,
        RestaurantMenuVue,
    },
    data() {
        return {
            store,
            restaurantSlug: this.$route.params.slug,
            restaruant: null,
        };
    },
    methods: {
        getRestaurant() {
            axios.get(store.apiUrl + "restaurants/" + this.restaurantSlug).then((res) => {
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
