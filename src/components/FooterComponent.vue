<template>
  <div class="my-footer">
    <div class="container pt-5">
      <div class="row justify-content-between">
        <ul
          class="list-unstyled col-12 col-sm-6 text-center text-sm-start col-md-3"
        >
          <li class="fw-semibold fs-5 mb-2">Scopri Booliveroo</li>
          <li class="mb-1"><a href="#">Investitori</a></li>
          <li class="mb-1"><a href="#">Chi siamo</a></li>
          <li class="mb-1"><a href="#">Ristoranti</a></li>
          <li class="mb-1"><a href="#">Altro</a></li>
        </ul>
        <ul
          class="list-unstyled col-12 col-sm-6 text-center text-sm-start col-md-3"
        >
          <li class="fw-semibold fs-5 mb-2">Note legali</li>
          <li class="mb-1"><a href="#">Termini & condizioni</a></li>
          <li class="mb-1"><a href="#">Informativa sulla privacy</a></li>
          <li class="mb-1"><a href="#">Cookies</a></li>
          <li class="mb-1"><a href="#">Richieste Autorità Pubbliche</a></li>
        </ul>
        <ul
          class="list-unstyled col-12 col-sm-6 text-center text-sm-start col-md-3"
        >
          <li class="fw-semibold fs-5 mb-1">Aiuto</li>
          <li class="mb-1"><a href="#">Contatti</a></li>
          <li class="mb-1"><a href="#">FAQ</a></li>
          <li class="mb-1"><a href="#">Tipi di cucina</a></li>
        </ul>
        <ul
          class="list-unstyled col-12 col-sm-6 text-center text-sm-start col-md-3"
        >
          <li class="fw-semibold fs-5 mb-1">Porta Booliveroo con te</li>
          <li>
            <a href="#"
              ><img
                src="/images/logo-download-appstore-bgerased .png"
                alt="logo-apple-store"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                src="/images/logo-download-playstore.png"
                alt="logo-play-store"
            /></a>
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
import BlogHome from "./BlogHome.vue";
export default {
  components: { BlogHome },
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
@use ".././assets/styles/partials/variables" as *;

.my-footer {
  background-color: $bg-secondary;
}
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
