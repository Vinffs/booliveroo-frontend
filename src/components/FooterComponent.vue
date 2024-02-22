<template>
  <div class="my-footer" :class="(store.darkMode ? 'dark-secondary' : 'light-secondary')">
    <div class="container pt-5">
      <div class="row justify-content-between">
        <ul class="list-unstyled col-12 col-sm-6 text-center text-sm-start col-md-3"
          :class="(store.darkMode ? 'text-light' : 'text-dark')">
          <li class="fw-semibold fs-5 mb-2">Scopri Booliveroo</li>
          <li class="mb-1"><a :class="(store.darkMode ? 'text-light' : 'text-dark')" href="#">Investitori</a></li>
          <li class="mb-1"><a :class="(store.darkMode ? 'text-light' : 'text-dark')" href="#">Chi siamo</a></li>
          <li class="mb-1"><a :class="(store.darkMode ? 'text-light' : 'text-dark')" href="#">Ristoranti</a></li>
          <li class="mb-1"><a :class="(store.darkMode ? 'text-light' : 'text-dark')" href="#">Altro</a></li>
        </ul>
        <ul class="list-unstyled col-12 col-sm-6 text-center text-sm-start col-md-3"
          :class="(store.darkMode ? 'text-light' : 'text-dark')">
          <li class="fw-semibold fs-5 mb-2">Note legali</li>
          <li class="mb-1"><a :class="(store.darkMode ? 'text-light' : 'text-dark')" href="#">Termini & condizioni</a>
          </li>
          <li class="mb-1"><a :class="(store.darkMode ? 'text-light' : 'text-dark')" href="#">Informativa sulla
              privacy</a></li>
          <li class="mb-1"><a :class="(store.darkMode ? 'text-light' : 'text-dark')" href="#">Cookies</a></li>
          <li class="mb-1"><a :class="(store.darkMode ? 'text-light' : 'text-dark')" href="#">Richieste Autorità
              Pubbliche</a></li>
        </ul>
        <ul class="list-unstyled col-12 col-sm-6 text-center text-sm-start col-md-3"
          :class="(store.darkMode ? 'text-light' : 'text-dark')">
          <li class="fw-semibold fs-5 mb-1">Aiuto</li>
          <li class="mb-1"><a :class="(store.darkMode ? 'text-light' : 'text-dark')" href="#">Contatti</a></li>
          <li class="mb-1"><a :class="(store.darkMode ? 'text-light' : 'text-dark')" href="#">FAQ</a></li>
          <li class="mb-1"><a :class="(store.darkMode ? 'text-light' : 'text-dark')" href="#">Tipi di cucina</a></li>
        </ul>
        <ul class="list-unstyled col-12 col-sm-6 text-center text-sm-start col-md-3"
          :class="(store.darkMode ? 'text-light' : 'text-dark')">
          <li class="fw-semibold fs-5 mb-1">Porta Booliveroo con te</li>
          <li>
            <a href="#"><img src="/images/logo-download-appstore-bgerased .png" alt="logo-apple-store" /></a>
          </li>
          <li>
            <a href="#"><img src="/images/logo-download-playstore.png" alt="logo-play-store" /></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container icons d-flex mt-2">
      <ul class="list-unstyled">
        <li class="d-inline-block me-3">
          <a href="#"><i class="fa-brands fa-twitter fa-lg"></i></a>
        </li>
        <li class="d-inline-block me-3">
          <a href="#"><i class="fa-brands fa-facebook fa-lg"></i></a>
        </li>
        <li class="d-inline-block me-3">
          <a href="#"><i class="fa-brands fa-instagram fa-xl"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
import BlogHome from "./BlogHome.vue";
export default {
  components: { BlogHome },
  name: "FooterComponent",
  data() {
    return {
      store
    }
  }
};
</script>

<style lang="scss" scoped>
@use ".././assets/styles/partials/variables" as *;

a {
  text-decoration: none;
  transition: all 0.3s ease;
  color: $text-color;

  &:hover {
    color: $primary;
    display: inline-block;
    scale: 1.03;

    i {
      scale: 1.1;
    }
  }

  i {
    transition: all 0.3s ease;
  }
}

li {
  img {
    width: 135px;
    height: 45px;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.fa-twitter:hover {
  color: #1da1f2;
}

.fa-facebook:hover {
  color: #316ff6;
}

.fa-instagram:hover {
  color: #d62976;
}
</style>
