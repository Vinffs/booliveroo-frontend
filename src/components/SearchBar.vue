<template>
    <div class="rounded-4 text-white shadowed" id="searchbar">
        <h1 class="fw-bold text-center">Il cibo che vuoi, quando vuoi</h1>
        <h5 class="py-2 text-center">
            Ordina online dai tuoi ristoranti preferiti
        </h5>
        <input id="search" type="text" placeholder="Cerca un ristorante..." />
        <div id="search-button">
            <i class="fa-solid fs-5 fa-magnifying-glass text-white"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar'
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#searchbar {
    background-color: $bg-secondary;
    width: 60%;
    padding: 40px 30px;
    position: relative;
    margin-top: -53px;
    margin-bottom: 80px;

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
</style>