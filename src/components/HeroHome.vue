<template>
    <div>
        <div id="hero">
            <div id="burger">
                <img class="w-75" src="/images/burger.png" alt="">
                <!-- <div>Il Cibo</div>
            <div>Che vuoi</div>
            <div>Quando vuoi!</div> -->

            </div>
            <div class="d-flex justify-content-center align-items-center shadow">
                <div id="shadow"></div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "HeroHome",
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#hero {
    position: relative;
    width: 100%;
    height: 1000px;

    #burger {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
        font-size: 150px;
        font-weight: bold;
        color: transparent;
        background-image: url(./images/food.avif);
        background-size: contain;
        background-position: center;
        background-clip: text;
        animation: bounce 1.7s infinite linear;
    }

    .shadow {
        width: 100px;
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translateX(-35%);

        #shadow {

            width: 80%;
            height: 25px;
            background-color: white;
            filter: blur(25px);
            animation: shadow 1.7s infinite linear;
        }
    }


}



@keyframes bounce {
    from {
        top: 50%;
    }

    50% {
        top: 52%;
    }

    to {
        top: 50%;
    }
}

@keyframes shadow {
    from {
        width: 80%;
    }

    50% {
        width: 100%;
    }

    to {
        width: 80%;
    }
}
</style>