<template>
    <div class="my-footer d-flex justify-content-between">
        <ul class="list-unstyled text-white ms-3">
            <li class="fw-semibold mb-1">prova</li>
        </ul>
        <ul class="list-unstyled text-white">
            <li class="fw-semibold mb-1">prova</li>
            <li>prova</li>
            <li>prova</li>
        </ul>
        <ul class="list-unstyled text-white">
            <li class="fw-semibold mb-1">prova</li>
            <li>prova</li>
            <li>prova</li>
        </ul>
        <ul class="list-unstyled text-white">
            <li class="fw-semibold mb-1">prova</li>
            <li>prova</li>
            <li>prova</li>
        </ul>
        <ul class="list-unstyled text-white me-3">
            <li class="fw-semibold mb-1">prova</li>
            <li class="d-inline-block me-1"><i class="fa-brands fa-twitter"></i></li>
            <li class="d-inline-block ms-1"><i class="fa-brands fa-x-twitter"></i></li>
        </ul>
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
</style>