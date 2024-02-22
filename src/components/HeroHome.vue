<template>
  <div class="d-flex justify-content-center align-items-center flex-column">
    <div id="hero">
      <!-- <svg viewBox="0 0 500 500">
        <path id="curve" d="M35,226 c141,-76 289,-76 425,0" />
        <text width="500">
          <textPath xlink:href="#curve" class="text-uppercase fw-bold">
            Il cibo che vuoi, quando vuoi, dove vuoi
          </textPath>
        </text>
      </svg> -->

      <div id="burger">
        <!-- <h2 class="text-uppercase">quando vuoi</h2> -->
        <img class="w-75 burger" src="/images/burger.png" alt="" />
        <img class="water left" src="/images/water.png" alt="water" />
        <img class="water right" src="/images/water.png" alt="water" />
        <!-- <h2 class="text-uppercase">dove vuoi</h2> -->
        <!-- <div>Il Cibo</div>
            <div>Che vuoi</div>
            <div>Quando vuoi!</div> -->
      </div>
    </div>
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import { store } from "../data/store";
export default {
  name: "HeroHome",
  data() {
    return {
      store,
    }
  },
  components: {
    SearchBar,
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

// svg {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   rotate: 180deg;
// }

#hero {
  margin-top: 70px;
  position: relative;
  width: 100%;
  height: 500px;
  text-align: center;
  color: $primary;
  z-index: 10;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  h2 {
    font-size: 3em;
    text-align: center;
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

    .burger {
      animation-name: bounce;
      animation-iteration-count: infinite;
      animation-duration: 4s;
      animation-timing-function: ease-in-out;
      transform: translateY(-20px);
    }

    h2 {
      position: absolute;
      text-align: center;
      font-size: 3em;
      font-weight: bold;
      font-family: "ABC Ginto Nord Unlicensed Trial", sans-serif;
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
      filter: hue-rotate(150deg);

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

@keyframes bounce {
  from {
    transform: translateY(20px);
  }

  50% {
    transform: translateY(-20px);
  }

  to {
    transform: translateY(20px);
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

@media screen and (max-width: 1200px) {
  #hero {
    position: static;
    margin-top: 20px;
    height: auto;

    #burger {
      display: none;
    }
  }
}
</style>
