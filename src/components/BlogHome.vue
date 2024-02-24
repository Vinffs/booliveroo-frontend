<template>
  <div class="blog">
    <h2 class="text-center fw-semibold m-0 pt-5" :class="(store.darkMode ? 'text-light' : 'text-dark')">Read Our Blog</h2>
    <div class="pt-5 pb-5 container">
      <div class="row justify-content-center align-items-center">
        <div class="card rounded my-card col-12 col-md-6 col-lg-4"
          :class="(store.darkMode ? 'dark-secondary' : 'light-secondary')">
          <a class="card-content text-decoration-none"
            href="https://ricette.giallozafferano.it/Spaghetti-alla-Carbonara.html" target=”_blank”>
            <div class="card-image spaghetti" :class="(store.darkMode ? 'image-dark' : 'image-light')">
              <!-- <img class="card-img-top rounded mx-auto d-block" src="/images/piatto-1.webp" alt="piatto-1" /> -->
            </div>
            <div class="card-body"
              :class="(store.darkMode ? 'dark' : 'light'), (store.darkMode ? 'text-light' : 'text-dark')">
              <h5 class="card-title fw-semibold">Spaghetti alla Carbonara</h5>
              <p class="card-text"><span class="fw-semibold">Da: </span>Giallo Zafferano</p>
              <span class="user d-flex">
                <img class="me-1" src="/images/blog/mirko.png" alt="user-profile" />
                <p class="">Mirko Marasco</p>
              </span>
            </div>
          </a>
        </div>
        <div class="card rounded my-card col-12 col-md-6 col-lg-4"
          :class="(store.darkMode ? 'dark-secondary' : 'light-secondary')">
          <a class="card-content text-decoration-none"
            href="https://ricette.giallozafferano.it/Risotto-ai-mirtilli-di-bosco-e-erba-cipollina.html" target=”_blank”>
            <div class="card-image risotto" :class="(store.darkMode ? 'image-dark' : 'image-light')">
              <!-- <img class="card-img-top rounded mx-auto d-block" src="/images/piatto-2.jpg" alt="piatto-2" /> -->
            </div>
            <div class="card-body"
              :class="(store.darkMode ? 'dark' : 'light'), (store.darkMode ? 'text-light' : 'text-dark')">
              <h5 class="card-title fw-semibold">Risotto ai mirtilli di bosco</h5>
              <p class="card-text"><span class="fw-semibold">Da: </span>Giallo Zafferano</p>
              <span class="user d-flex">
                <img class="me-1" src="/images/blog/oder.png" alt="user-profile" />
                <p class="">Oder Risi</p>
              </span>
            </div>
          </a>
        </div>
        <div class="card rounded my-card col-12 col-md-6 col-lg-4"
          :class="(store.darkMode ? 'dark-secondary' : 'light-secondary')">
          <a class="card-content text-decoration-none" href="https://ricette.giallozafferano.it/Tortellini-in-brodo.html"
            target=”_blank”>
            <div class="card-image tortellini" :class="(store.darkMode ? 'image-dark' : 'image-light')">
              <!-- <img class="card-img-top rounded mx-auto d-block" src="/images/piatto-3.webp" alt="piatto-3" /> -->
            </div>
            <div class="card-body"
              :class="(store.darkMode ? 'dark' : 'light'), (store.darkMode ? 'text-light' : 'text-dark')">
              <h5 class="card-title fw-semibold">Tortellini in Brodo</h5>
              <p class="card-text"><span class="fw-semibold">Da:</span> Giallo Zafferano</p>
              <span class="user d-flex">
                <img class="me-1" src="/images/blog/max.png" alt="user-profile" />
                <p class="">Massimiliano Gilli</p>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- <div class="pt-5 pb-5 container d-flex justify-content-between align-items-center">
            <div class="rounded">
                <img class="rounded mx-auto d-block" src="../../public/images/piatto-1.webp" alt="piatto-1">
                <h5 class="fw-semibold ">Questa è una prova</h5>
                <span>questa è un'altra prova</span>
            </div>
            <div class="rounded">
                <img class="rounded mx-auto d-block" src="../../public/images/piatto-2.jpg" alt="piatto-2">
                <h5 class="fw-semibold ">Questa è una prova</h5>
                <span>questa è un'altra prova</span>
            </div>
            <div class="rounded">
                <img class="rounded mx-auto d-block" src="../../public/images/piatto-3.webp" alt="piatto-3">
                <h5 class="fw-semibold ">Questa è una prova</h5>
                <span>questa è un'altra prova</span>
            </div>
        </div> -->
  </div>
</template>

<script>
import { store } from "../data/store";
export default {
  name: "BlogHome",
  data() {
    return {
      store
    }
  }
};
</script>

<style lang="scss" scoped>
@use ".././assets/styles/partials/variables" as *;

.blog {
  background-color: $bg-secondary;
}

.spaghetti {
  background-image: url('https://ptps.stbm.it/t/n8qn8v_mid.jpg');
  height: 300px;
  background-position: center;
  background-size: cover;
}

.risotto {
  background-image: url('https://www.giallozafferano.it/images/2-284/Risotto-ai-mirtilli-di-bosco-e-erba-cipollina_780x520_wm.jpg');
  height: 300px;
  background-position: center;
  background-size: cover;
}

.tortellini {
  background-image: url('https://ptps.stbm.it/t/715w9w_mid.jpg');
  height: 300px;
  background-position: center;
  background-size: cover;
}

.card-image {
  // background: radial-gradient(ellipse at bottom, $primary 0%, #ccc 100%);

  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
    object-position: center center;
  }
}

.card-body {
  background-color: $bg-primary;
}

.user {
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}

.card {
  padding: 25px;
  background-color: $bg-secondary;
  border: none;

  .card-content {
    border-radius: 1.8em;
    overflow: hidden;
  }
}
</style>
