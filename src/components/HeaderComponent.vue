<template>
  <!-- <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div
          class="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <ul class="d-flex list-unstyled justify-content-center align-items-center">
                <li class="nav-item">
                    <router-link class="nav-link text-white fs-5" to="/">
                      <img src="/images/logo-booliveroo.png" alt=""/>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white fs-5" to="/" :class="{ active: currentRoute === '/' }">
                        <span>Home</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white fs-5" to="/search" :class="{ active: currentRoute === '/search' }">
                      <span>Cerca</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white fs-5" to="/" :class="{ active: currentRoute === '/prova4' }">
                      <span>prova</span>
                    </router-link>
                </li>
            </ul>
          </div>

          <div class="d-flex">
            <ul
              class="d-flex list-unstyled justify-content-center align-items-center"
            >
              <li class="nav-item text-white me-3">
                <router-link class="nav-link text-white fs-5" to="/"
                  ><i class="fa-solid fa-magnifying-glass"></i
                ></router-link>
              </li>
              <li class="nav-item text-white me-3">
                <router-link class="nav-link text-white fs-5" to="/"
                  ><i class="fa-solid fa-cart-shopping"></i
                ></router-link>
              </li>
              <li class="nav-item text-white me-3">
                <router-link class="nav-link text-white" to="/"
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
        <router-link
          :to="{ name: 'home' }"
          class="logo col-6 row justify-content-start align-items-center text-decoration-none"
        >
          <div style="width: 100px">
            <img src="/images/logo-booliveroo.png" alt="logo" class="w-100" />
          </div>
          <h1 class="mb-0 col d-none d-sm-block" style="margin-left: -1em">
            ooliveroo
          </h1>
        </router-link>
        <div
          class="col text-end text-white d-flex justify-content-end position-relative"
        >
          <div
            class="d-block d-sm-none bars"
            style="cursor: pointer"
            @click="hamburger = !hamburger"
            :class="{ change: hamburger }"
          >
            <i class="fa-bars fa-solid fa-2x"></i>
          </div>
          <div
            class="text-center back-link py-2"
            :class="{ appeard: hamburger }"
          >
            <h5>Vuoi aggiungere un ristorante a Booliveroo?</h5>
            <a
              href="http://localhost:8000"
              class="btn my-button rounded-pill text-white"
              >Clicca qui!</a
            >
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      currentRoute: this.$route.path,
      hamburger: false,
    };
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

header {
  background-color: $bg-primary;

  .my-button {
    background: radial-gradient(
      ellipse at center,
      $primary 0%,
      $bg-primary 100%
    );
    transition: all 0.5s ease;

    &:hover {
      background: radial-gradient(
        ellipse at center,
        $primary 0%,
        $bg-secondary 100%
      );
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
    z-index: 99;
    font-size: 1.5em;
    background-color: $bg-secondary;
    padding: 1em;
    border-radius: 5px;
    width: 200px;
    box-shadow: 0 0.125rem 0.25rem rgba(white, 0.075);
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
</style>
