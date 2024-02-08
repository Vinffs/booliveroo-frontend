<template>
    <div>
        <HeroHome />
        <CategoriesHome />
        <SaleHome />
        <RestaurantsHome />
    </div>
</template>

<script>
import HeroHome from '../components/HeroHome.vue';
import CategoriesHome from '@/components/CategoriesHome.vue';
import { store } from '../data/store';
import RestaurantsHome from '@/components/RestaurantsHome.vue';
import SaleHome from '@/components/SaleHome.vue';
export default {
    name: 'HomePage',
    components: {
        HeroHome,
        CategoriesHome,
        RestaurantsHome,
        SaleHome,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped></style>