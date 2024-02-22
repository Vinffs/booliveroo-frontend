<template>
  <div class="darksoul-toggle-container" id="container" ref="container">
    <div class="darksoul-toggle-border" id="border" ref="border">
      <div
        class="darksoul-toggle"
        ref="toggle"
        id="toggle"
        @click="roll()"
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
      toggle: null,
      border: null,
      container: null,
    };
  },
  methods: {
    togglel() {
      this.toggle = this.$refs.toggle;
      this.toggle.style.boxShadow =
        "5px 5px 500px rgb(255, 255, 0) inset, 0.5px 0.5px 50px yellow";
      this.toggle.style.border = "1px solid rgb(255, 255, 255)";
      this.toggle.style.backgroundColor = "orange";
    },
    toggled() {
      this.toggle = this.$refs.toggle;
      this.toggle.style.boxShadow =
        "10px 10px 15px rgba(0, 0, 0, 0.312), -10px -10px 10px rgba(30, 30, 30, 0.696), 40px -5px 1px rgb(255, 255, 255) inset,  -2px 5px 10px rgba(23, 23, 23, 0.986) inset";
      this.toggle.style.border = "1px solid rgba(28, 28, 28, 0)";
      this.toggle.style.backgroundColor = "rgb(23, 23, 23)";
    },
    roll() {
      this.toggle = this.$refs.toggle;
      this.container = this.$refs.container;
      this.border = this.$refs.border;

      if (this.store.darkMode) {
        console.log(this.store.darkMode);
        this.toggle.classList.add("rolling-forward");
        setTimeout(this.toggle.classList.remove("rolling-forward"), 700);
        this.container.style.boxShadow =
          "10px 10px 10px rgb(242, 241, 241), -4px -7px 15px rgb(242, 241, 241), 2px -5px 10px rgb(255, 255, 255) inset, -10px -1px 5px yellow inset";
        this.border.style.backgroundColor = " rgb(255, 255, 255)";
        this.border.style.boxShadow =
          "2px 5px 10px rgb(236, 235, 235) inset, -2px 0px 2px rgb(254, 254, 1) inset";
        setTimeout(this.togglel, 250);
        this.store.darkMode = false;
      } else {
        console.log(this.store.darkMode);
        this.toggle.classList.add("rolling-back");
        setTimeout(this.toggle.classList.remove("rolling-back"), 700);
        this.container.style.boxShadow =
          "10px 10px 10px rgba(16, 16, 16, 0.667), 0px -8px 10px rgba(32, 32, 32, 0.453), -5px -5px 15px rgb(17, 17, 17) inset, 15px 15px 50px rgb(26, 26, 26) inset";
        this.border.style.backgroundColor = "rgb(23, 23, 23)";
        this.border.style.boxShadow =
          "5px 5px 10px rgb(23, 23, 23) inset, -4px -10px 10px rgb(25, 25, 25) inset";
        setTimeout(this.toggled, 250);
        this.store.darkMode = true;
      }
    },
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

.rolling-forward {
  animation-name: roll;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}

.rolling-back {
  animation-name: rollback;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
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
