<template>
    <div class="d-flex justify-content-center align-items-center flex-column">
        <div id="hero">
            <h2 class="text-uppercase">Quello che vuoi</h2>
            <div id="burger">
                <h2 class="text-uppercase">quando vuoi</h2>
                <img class="w-75" src="/images/burger.png" alt="">
                <img class="water left" src="/images/water.png" alt="water">
                <img class="water right" src="/images/water.png" alt="water">
                <h2 class="text-uppercase">dove vuoi</h2>
                <!-- <div>Il Cibo</div>
            <div>Che vuoi</div>
            <div>Quando vuoi!</div> -->

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
    text-align: center;
    color: $primary;
    // display: flex;
    // justify-content: center;
    // align-items: center;

    h2 {
        font-size: 3em;
        text-align: center;
        font-weight: bold;
        font-family: 'ABC Ginto Nord Unlicensed Trial', sans-serif;
    }

    #burger {
        width: 100%;
        margin: 0 auto;
        color: transparent;
        display: flex;
        position: relative;
        z-index: 10;
        justify-content: center;
        align-items: center;
        color: $primary;

        h2 {
            position: absolute;
            text-align: center;
            font-size: 3em;
            font-weight: bold;
            font-family: 'ABC Ginto Nord Unlicensed Trial', sans-serif;
        }

        h2:first-child {
            rotate: -35deg;
            left: -10%;
            top: 10%;
        }

        h2:last-child {
            rotate: 35deg;
            right: -10%;
            top: 10%;
        }

        .water {
            position: absolute;
            z-index: 9;
            top: 0;
            filter: hue-rotate(-260deg);

            &.left {
                left: 0;
            }

            &.right {
                right: 0;
                transform: rotateY(180deg);
            }
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