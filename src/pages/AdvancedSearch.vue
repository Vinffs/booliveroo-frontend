<template>
    <div class="wrapper">
        <div class="container">
            <div>
                <div class="d-flex justify-content-center align-items-center" style=" padding-top: 100px;">
                    <SearchBar />
                </div>
            </div>
            <h2 class="text-white text-center mb-4">Seleziona una Categoria</h2>
            <div class="d-flex flex-wrap justify-content-center">
                <div class="card-container" v-for="item in store.categories">
                    <CategoriesCard :category="item" />
                </div>
            </div>
            <h2 class="text-white text-center my-4">Risultati</h2>
            <div class="d-flex justify-content-center align-items-center">
                <div class="restaurant-container" v-for="item in store.restaurants">
                    <RestaurantCard />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import CategoriesCard from '@/components/partials/CategoriesCard.vue';
import RestaurantCard from '@/components/partials/RestaurantCard.vue';
import { store } from '../data/store'
export default {
    name: "AdvancedSearch",
    components: {
        SearchBar,
        CategoriesCard,
        RestaurantCard,
    },
    data() {
        return {
            store,
        }
    }
}
</script>


<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.wrapper {
    background-color: $bg-primary;
}

.card-container {
    width: calc(100vw / 12);
    height: calc(100vw / 12);
    margin: 10px 10px;
}

.restaurant-container {
    width: calc(100vw / 12);
    height: calc(100vw / 12);
    margin: 10px 10px;
}
</style>