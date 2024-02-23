<template>
  <!-- <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div
          class="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <ul class="d-flex list-unstyled justify-content-center align-items-center">
                <li class="nav-item">
                    <router-link class="nav-link  fs-5" to="/">
                      <img src="/images/logo-booliveroo.png" alt=""/>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link  fs-5" to="/" :class="{ active: currentRoute === '/' }">
                        <span>Home</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link  fs-5" to="/search" :class="{ active: currentRoute === '/search' }">
                      <span>Cerca</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link  fs-5" to="/" :class="{ active: currentRoute === '/prova4' }">
                      <span>prova</span>
                    </router-link>
                </li>
            </ul>
          </div>

          <div class="d-flex">
            <ul
              class="d-flex list-unstyled justify-content-center align-items-center"
            >
              <li class="nav-item  me-3">
                <router-link class="nav-link  fs-5" to="/"
                  ><i class="fa-solid fa-magnifying-glass"></i
                ></router-link>
              </li>
              <li class="nav-item  me-3">
                <router-link class="nav-link  fs-5" to="/"
                  ><i class="fa-solid fa-cart-shopping"></i
                ></router-link>
              </li>
              <li class="nav-item  me-3">
                <router-link class="nav-link " to="/"
                  ><i class="fa-solid fa-user"></i
                ></router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav> -->
  <header>
    <div class="container-fluid">
      <nav class="row justify-content-between align-items-center">
        <div class="logo col-5">
          <router-link :to="{ name: 'home' }" class="row justify-content-start align-items-center text-decoration-none">
            <div style="width: 100px">
              <img src="/images/logo-booliveroo-2.png" alt="logo" class="w-100 logo" />
            </div>
            <h1 class="mb-0 col d-none d-sm-block" style="margin-left: -1em">
              ooliveroo
            </h1>
          </router-link>
        </div>
        <div class="col-7 text-end d-flex justify-content-end position-relative">
          <div class="d-block d-sm-none bars" style="cursor: pointer" @click="hamburger = !hamburger"
            :class="{ change: hamburger }">
            <i class="fa-bars fa-solid fa-2x"></i>
          </div>
          <!-- <ThemeSwitch /> -->

          <!-- <div
            class="d-flex align-items-center darkmode"
            @click="store.darkMode = !store.darkMode"
          >
            <i class="fa-solid fa-moon fs-3"></i>
          </div> -->
          <div class="text-center back-link py-2 d-block d-sm-flex" :class="{ appeard: hamburger }">
            <DarkModeToggle />
            <div>
              <h5>Sei un Ristoratore?</h5>
              <a href="http://localhost:8000" class="btn btn-dark rounded-pill">Clicca qui!</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#fe4a49" fill-opacity="1"
        d="M0,96L30,90.7C60,85,120,75,180,85.3C240,96,300,128,360,122.7C420,117,480,75,540,74.7C600,75,660,117,720,133.3C780,149,840,139,900,144C960,149,1020,171,1080,197.3C1140,224,1200,256,1260,245.3C1320,235,1380,181,1410,154.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
      </path>
    </svg>
  </header>
</template>

<script>
import ThemeSwitch from "./partials/ThemeSwitch.vue";
import { store } from "../data/store";
import DarkModeToggle from "./partials/DarkModeToggle.vue";
export default {
  name: "HeaderComponent",
  data() {
    return {
      store,
      currentRoute: this.$route.path,
      hamburger: false,
    };
  },
  components: {
    ThemeSwitch,
    DarkModeToggle,
  },
  watch: {
    $route(to, from) {
      this.currentRoute = to.path;
    },
  },
};
</script>

<style lang="scss" scoped>
@use ".././assets/styles/partials/variables" as *;

.darkmode {
  cursor: pointer;
}

header {
  background-color: $bg-primary;
  position: relative;
  background-color: $primary;
  //z-index: 6;

  h1 {
    color: $text-color;
  }

  svg {
    position: absolute;
    top: 99%;
    left: 0;
    right: 0;
    rotate: 180deg;
    // z-index: 6;
  }

  .my-button {
    background: radial-gradient(ellipse at center, $primary 0%, black 100%);
    transition: all 0.5s ease;

    &:hover {
      background: radial-gradient(ellipse at center, $primary 0%, #ccc 100%);
    }
  }
}

@media screen and (max-width: 576px) {
  .back-link {
    position: absolute;
    right: 0;
    scale: 0.5;
    opacity: 0;
    top: 130%;
    z-index: 1000;
    font-size: 1.5em;
    background-color: $bg-secondary;
    padding: 1em;
    border-radius: 5px;
    width: 200px;
    //box-shadow: 0 0.125rem 0.25rem rgba(white, 0.075);
    transition: all 0.5s ease;
  }

  .bars {
    transition: all 0.5s ease;
    cursor: pointer;
    rotate: 0deg;
  }

  .appeard {
    scale: 1;
    opacity: 1;
  }

  .change {
    rotate: 180deg;

    i::before {
      content: "\f00d";
    }
  }
}

@media screen and (max-width: 976px) {
  .back-link {
    width: 100%;
  }
}

@media screen and (min-width: 976px) {
  .back-link {
    width: 50%;
  }
}
</style>
