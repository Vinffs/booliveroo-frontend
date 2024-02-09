<template>
    <div class="mb-5 wrapper">
        <h2 class="text-center text-white my-5">Categorie</h2>

        <swiper :slidesPerView="6" :spaceBetween="30" :navigation="true" :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
        }" :modules="modules" class="mySwiper">
            <swiper-slide style="width: 150px; height: 150px;" v-for="item in categorie">
                <CategoriesCard :category="item" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import CategoriesCard from './partials/CategoriesCard.vue';
import 'swiper/css';
import 'swiper/css/pagination';
// import './style.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default {
    name: 'CategoriesHome',
    data() {
        return {
            categorie: {
                pasticceria: {
                    name: 'Pasticceria',
                    image: '/images/iconscategories/bakery.png'
                },
                pizza: {
                    name: 'Pizza',
                    image: '/images/iconscategories/pizza.png'
                },
                forneria: {
                    name: 'Forneria',
                    image: '/images/iconscategories/bread.png'
                },
                colazione: {
                    name: 'Colazione',
                    image: '/images/iconscategories/breakfast.png'
                },
                cinese: {
                    name: 'Cinese',
                    image: '/images/iconscategories/chinese.png'
                },
                fastfood: {
                    name: 'Fastfood',
                    image: '/images/iconscategories/fast-food.png'
                },
                pesce: {
                    name: 'Pesce',
                    image: '/images/iconscategories/fish.png'
                },
                francese: {
                    name: 'Francese',
                    image: '/images/iconscategories/french.png'
                },
                pollofritto: {
                    name: 'Pollo Fritto',
                    image: '/images/iconscategories/fried-chicken.png'
                },
                iberico: {
                    name: 'Iberico',
                    image: '/images/iconscategories/iberic.png'
                },
                gelato: {
                    name: 'Gelato',
                    image: '/images/iconscategories/ice-cream.png'
                },
                indiano: {
                    name: 'Indiano',
                    image: '/images/iconscategories/indian.png'
                },
                italiano: {
                    name: 'Italiano',
                    image: '/images/iconscategories/italian.png'
                },
                messicano: {
                    name: 'Messicano',
                    image: '/images/iconscategories/mexican.png'
                },
                steakhouse: {
                    name: 'Steak House',
                    image: '/images/iconscategories/steakhouse.png'
                },
                sushi: {
                    name: 'Sushi',
                    image: '/images/iconscategories/sushi.png'
                },
                vegano: {
                    name: 'Vegano',
                    image: '/images/iconscategories/vegan.png'
                }

            }
        }
    },
    components: {
        CategoriesCard,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    user-select: none;
}
</style>