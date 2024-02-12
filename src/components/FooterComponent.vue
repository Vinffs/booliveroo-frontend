<template>
<div class="my-footer">
    <div class="container d-flex justify-content-between">
        <ul class="list-unstyled text-white ">
            <li class="fw-semibold fs-5 mb-2"><a href="#">Scopri Booliveroo</a></li>
            <li class="mb-1"><a href="#">Investitori</a></li>
            <li class="mb-1"><a href="#">Chi siamo</a></li>
            <li class="mb-1"><a href="#">Ristoranti</a></li>
            <li class="mb-1"><a href="#">Altro</a></li>
        </ul>
        <ul class="list-unstyled text-white">
            <li class="fw-semibold fs-5 mb-2"><a href="#">Note legali</a></li>
            <li class="mb-1"><a href="#">Termini & condizioni</a></li>
            <li class="mb-1"><a href="#">Informativa sulla privacy</a></li>
            <li class="mb-1"><a href="#">Cookies</a></li>
            <li class="mb-1"><a href="#">Richieste Autorità Pubbliche</a></li>
        </ul>
        <ul class="list-unstyled text-white">
            <li class="fw-semibold fs-5 mb-1"><a href="#">Aiuto</a></li>
            <li class="mb-1"><a href="#">Contatti</a></li>
            <li class="mb-1"><a href="#">FAQ</a></li>
            <li class="mb-1"><a href="#">Tipi di cucina</a></li>
        </ul>
        <ul class="list-unstyled text-white">
            <li class="fw-semibold fs-5 mb-1"><a href="#">Porta Booliveroo con te</a></li>
            <li><img src="../../public/images/logo-download-appstore-bgerased .png" alt="logo-apple-store"></li>
            <li><img src="../../public/images/logo-download-playstore.png" alt="logo-play-store"></li>
        </ul>
    </div>
    <div class="container icons d-flex mt-2">
            <ul class="list-unstyled text-white">
                <li class="d-inline-block me-3"><i class="fa-brands fa-twitter fa-lg"></i></li>
                <li class="d-inline-block me-3"><i class="fa-brands fa-facebook fa-lg"></i></li>
                <li class="d-inline-block me-3"><i class="fa-brands fa-instagram fa-xl"></i></li>
            </ul>
    </div>
</div>
</template>

<script>
import BlogHome from './BlogHome.vue';
    export default {
        components: {BlogHome},
        name: 'FooterComponent',
        
    }
</script>

<style lang="scss" scoped>
@use ".././assets/styles/partials/variables" as *;
.my-footer{
 background-color: $bg-secondary;
}
a{
    text-decoration: none;
    color: white;
}
li{
    img{
        width: 135px;
        height: 45px;
    }
}

.fa-twitter:hover {
        color: #1DA1F2;
    }

    .fa-facebook:hover {
        color: #316FF6; 
    }

    .fa-instagram:hover {
        color: #d62976;
    }

</style>