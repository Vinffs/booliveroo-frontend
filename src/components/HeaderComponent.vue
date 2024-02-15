<template>
  <div>
    <nav class="navbar navbar-expand-lg">
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
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white fs-5" to="/search" :class="{ active: currentRoute === '/search' }">
                      Cerca
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white fs-5" to="/" :class="{ active: currentRoute === '/prova4' }">
                      Prova 4
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
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      currentRoute: this.$route.path,
    };
  },
  watch: {
    $route(to, from){
      this.currentRoute = to.path;
    },
  },
};
</script>

<style lang="scss" scoped>
@use ".././assets/styles/partials/variables" as *;

.navbar-nav .nav-link.active {
  padding-bottom: 5px;
  border-bottom: 2px solid $primary;
}

nav {
  background-color: $bg-secondary;
}

i {
  min-width: 22.5px;
  min-height: 22.5px;
  text-align: center;
}

li {
  img {
    max-width: 50px;
    max-height: 50px;
  }
}
</style>
