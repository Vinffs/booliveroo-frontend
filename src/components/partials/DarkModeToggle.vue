<template>
    <div class="wrapper">
        <input type="checkbox" id="darkmode-checkbox" @click="store.darkMode = !store.darkMode">
        <div class="body">
            <label for="darkmode-checkbox" class="darkmode-switch">
                <div class="toggle"></div>
                <div class="names">
                    <p class="light-name">Light</p>
                    <p class="dark-name">Dark</p>
                </div>
            </label>
        </div>
    </div>
</template>

<script>
import { store } from "../../data/store";
export default {
    name: "DarkModeToggle",
    data() {
        return {
            store
        }
    },
    methods: {
        toggle() {
            const darkMode = this.$refs.darkMode;
        }
    }
}
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

.wrapper {
    padding-top: 25px;
}

.body {
    // background-color: rgba(0, 0, 0, .15);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: background-color .1s;
    border-radius: 100px;
}

.darkmode-switch,
.toggle {
    height: 2.8rem;
    border-radius: 100px;
}

.darkmode-switch {
    position: relative;
    display: flex;
    width: 20em;
    background-color: rgba(0, 0, 0, .1);
    border-radius: 100px;
    cursor: pointer;
}

.toggle {
    position: absolute;
    width: 50%;
    background-color: #fff;
    box-shadow: 0 2px 15px rgba(0, 0, 0, .15);
    transition: transform .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.names {
    font-size: 90%;
    font-weight: bolder;
    width: 65%;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;

    p {
        padding-top: 10px;
    }
}

.dark-name {
    opacity: .5;
}

/* -------- Switch Styles ------------*/
#darkmode-checkbox {
    display: none;
}

input[id="darkmode-checkbox"]:checked+.body {
    background-color: $bg-primary-darkmode;
    color: white;
}

/* Toggle */
[id="darkmode-checkbox"]:checked+.body .toggle {
    transform: translateX(100%);
    background-color: $bg-secondary-darkmode;
}

[id="darkmode-checkbox"]:checked+.body .dark-name {
    opacity: 1;
}

[id="darkmode-checkbox"]:checked+.body .light {
    opacity: .5;
}
</style>