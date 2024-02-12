<template>
    <div @mouseenter="animation = true" @mouseleave="animation = false"
        class="wrapper rounded-2 shadowed d-flex flex-column justify-content-center align-items-center text-white">
        <h5>{{ category.name }}</h5>
        <img :class="{ 'bounce-7': animation }" class="w-50" :src="category.image" :alt="category.name">
    </div>
</template>

<script>
export default {
    name: 'CategoriesCard',
    data() {
        return {
            animation: false,
        }
    },
    props: {
        category: Object,
    }
}
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

.wrapper {
    background-color: $bg-secondary;
    width: 100%;
    height: 100%;
    cursor: pointer;

    h5 {
        position: relative;
        z-index: 2;
    }

    img {
        animation-duration: 1.8s;
        animation-iteration-count: infinite;
    }
}

.bounce-7 {
    animation-name: bounce-7;
    animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
}


@keyframes bounce-7 {
    0% {
        transform: scale(1, 1) translateY(0);
    }

    10% {
        transform: scale(1.1, .9) translateY(0);
    }

    30% {
        transform: scale(.9, 1.1) translateY(-45px);
    }

    50% {
        transform: scale(1.05, .95) translateY(0);
    }

    57% {
        transform: scale(1, 1) translateY(-7px);
    }

    64% {
        transform: scale(1, 1) translateY(0);
    }

    100% {
        transform: scale(1, 1) translateY(0);
    }
}
</style>