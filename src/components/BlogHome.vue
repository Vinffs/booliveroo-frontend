<template>
    <div class="blog">
        <h2 class="text-center text-white fw-semibold m-0 pt-5">Read Our Blog</h2>
        <div class="pt-5 pb-5 container d-flex justify-content-between align-items-center">
            <div class="card rounded my-card">
                <img class="card-img-top rounded mx-auto d-block" src="../../public/images/piatto-1.webp" alt="piatto-1">
                <div class="card-body">
                    <h5 class="card-title fw-semibold text-white">Questa è una prova</h5>
                    <p class="card-text text-white">Questa è un'altra prova</p>
                    <span class="user d-flex">
                        <img class="me-1" src="../../public/images/among_us.jpg" alt="user-profile">
                        <p class="text-white">salam piccant</p>
                    </span>
                </div>
            </div>
            <div class="card rounded my-card mx-2">
                <img class="card-img-top rounded mx-auto d-block" src="../../public/images/piatto-2.jpg" alt="piatto-2">
                <div class="card-body">
                    <h5 class="card-title fw-semibold text-white">Questa è una prova</h5>
                    <p class="card-text text-white">Questa è un'altra prova</p>
                    <span class="user d-flex">
                        <img class="me-1" src="../../public/images/among_us.jpg" alt="user-profile">
                        <p class="text-white">salam piccant</p>
                    </span>
                </div>
            </div>
            <div class="card rounded my-card">
                <img class="card-img-top rounded mx-auto d-block" src="../../public/images/piatto-3.webp" alt="piatto-3">
                <div class="card-body">
                    <h5 class="card-title fw-semibold text-white">Questa è una prova</h5>
                    <p class="card-text text-white">Questa è un'altra prova</p>
                    <span class="user d-flex">
                        <img class="me-1" src="../../public/images/among_us.jpg" alt="user-profile">
                        <p class="text-white">salam piccant</p>
                    </span>
                </div>
            </div>
        </div>


        <!-- <div class="pt-5 pb-5 container d-flex justify-content-between align-items-center">
            <div class="rounded">
                <img class="rounded mx-auto d-block" src="../../public/images/piatto-1.webp" alt="piatto-1">
                <h5 class="fw-semibold text-white">Questa è una prova</h5>
                <span>questa è un'altra prova</span>
            </div>
            <div class="rounded">
                <img class="rounded mx-auto d-block" src="../../public/images/piatto-2.jpg" alt="piatto-2">
                <h5 class="fw-semibold text-white">Questa è una prova</h5>
                <span>questa è un'altra prova</span>
            </div>
            <div class="rounded">
                <img class="rounded mx-auto d-block" src="../../public/images/piatto-3.webp" alt="piatto-3">
                <h5 class="fw-semibold text-white">Questa è una prova</h5>
                <span>questa è un'altra prova</span>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'BlogHome',
}
</script>

<style lang="scss" scoped>
@use ".././assets/styles/partials/variables" as *;
.blog{
    background-color: $bg-secondary;
}
img{
    width: 100%;
    height: 300px;
}
.my-card{
    background-color: $bg-primary;
}
.user{
    img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
}
</style>