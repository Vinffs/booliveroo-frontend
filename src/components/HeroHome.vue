<template>
    <div class="d-flex justify-content-center align-items-center flex-column">
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
        <div class="rounded-4 text-white shadowed" id="searchbar">
            <h1 class="fw-bold text-center">Il cibo che vuoi, Quando vuoi</h1>
            <h5 class="py-2 text-center">Ordina online dai tuoi ristoranti preferiti</h5>
            <input id="search" type="text" placeholder="Cerca il tuo ristorante...">
            <div id="search-button">
                <i class="fa-solid fs-5 fa-magnifying-glass text-white"></i>
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
    margin-top: 50px;
    position: relative;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    #burger {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
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
        animation: bounce 2s infinite linear;
    }

    .shadow {
        width: 100px;
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translateX(-35%);

        #shadow {

            width: 80%;
            height: 25px;
            border-radius: 40%;
            background-color: rgb(120, 120, 120);
            filter: blur(25px);
            animation: shadow 2s infinite linear;
        }
    }
}

#searchbar {
    background-color: $bg-secondary;
    width: 60%;
    padding: 40px 30px;
    position: relative;
    margin-bottom: 100px;

    h1 {
        color: $primary;
    }

    #search {
        padding: 0 20px;
        width: 100%;
        height: 50px;
        border-radius: 3em;
    }

    #search-button {
        position: absolute;
        right: 3.5%;
        top: 61.5%;
        width: 51px;
        height: 51px;
        border-radius: 50%;
        background-color: $primary;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        -webkit-box-shadow: -18px 0 31px -8px #000000;
        -moz-box-shadow: -18px 0 31px -8px #000000;
        box-shadow: -18px 0 31px -8px #000000;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            background-color: darken($primary, 8%);
        }
    }
}


@keyframes bounce {
    from {
        top: 50%;
    }

    50% {
        top: 55%;
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