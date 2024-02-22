<template>
  <div class="darksoul-toggle-container" id="container">
    <div class="darksoul-toggle-border" id="border">
      <div
        class="darksoul-toggle"
        ref="toggle"
        id="toggle"
        onclick="{roll()}"
      ></div>
    </div>
  </div>
</template>

<script>
import { store } from "../../data/store";
export default {
  name: "ThemeSwitch",
  data() {
    return {
      store,
      toggle: this.$refs.toggle,
    };
  },
};
</script>

<style lang="scss" scoped>
.darksoul-toggle-container {
  width: 70px;
  height: 30px;
  margin: auto;
  display: flex;
  border-radius: 35px;
  padding: 1px;
  box-shadow: 2px 2px 2px rgba(16, 16, 16, 0.667),
    0 -3px 2px rgba(32, 32, 32, 0.453), -1px -1px 3px rgb(17, 17, 17) inset,
    3px 3px 10px rgb(26, 26, 26) inset;
  transition: background-color 0.5s, box-shadow 0.5s;
}

.darksoul-toggle-border {
  width: 70px;
  height: 30px;
  background-color: rgb(23, 23, 23);
  box-shadow: 1px 1px 2px rgb(23, 23, 23) inset,
    -1px -3px 2px rgb(25, 25, 25) inset;
  border-radius: 35px;
  margin: auto;
  display: flex;
  transition: background-color 0.5s, box-shadow 0.5s;
}

.darksoul-toggle {
  margin: auto;
  margin-left: 4px;
  width: 20px;
  height: 20px;
  background-color: rgb(23, 23, 23);
  border: 1px solid rgba(28, 28, 28, 0);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.312),
    -2px -2px 2px rgba(30, 30, 30, 0.696), 7px -1px 1px rgb(255, 255, 255) inset,
    -1px 1px 2px rgba(23, 23, 23, 0.986) inset;
  border-radius: 50%;
  transition: box-shadow 1s;
}

.darksoul-toggle:hover {
  cursor: pointer;
}

@keyframes roll {
  100% {
    transform: translateX(49px) rotate(360deg);
  }
}

@keyframes rollback {
  0% {
    transform: translateX(49px) rotate(360deg);
  }
  100% {
    transform: translateX(0px) rotate(0deg);
  }
}
</style>
