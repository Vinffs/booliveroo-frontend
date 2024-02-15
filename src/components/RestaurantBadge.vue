<template>
    <div class="wrapper p-3 rounded-3 text-white">
        <div class="badge-image">
            <img :src="store.imagePath + info.image" :alt="info.name">
        </div>
        <div class="badge-text"></div>
    </div>
</template>

<script>
import { store } from "../data/store";
export default {
    name: "RestaurantBadge",
    props: {
        info: Object,
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
    width: 100%;
    height: 100%;

    .badge-image {
        width: 20%;
        height: 100%;
    }
}
</style>