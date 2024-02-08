<template>
    <div class="wrapper">
        <div class="container">
            <HeroHome />
            <CategoriesHome />
            <SaleHome />
            <RestaurantsHome />
        </div>
        <BlogHome />
    </div>
</template>

<script>
import HeroHome from '../components/HeroHome.vue';
import CategoriesHome from '@/components/CategoriesHome.vue';
import { store } from '../data/store';
import RestaurantsHome from '@/components/RestaurantsHome.vue';
import SaleHome from '@/components/SaleHome.vue';
import BlogHome from '@/components/BlogHome.vue';
export default {
    name: 'HomePage',
    components: {
        HeroHome,
        CategoriesHome,
        RestaurantsHome,
        SaleHome,
        BlogHome,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.wrapper {
    background-color: $bg-primary;
    height: 100vh;
}
</style>