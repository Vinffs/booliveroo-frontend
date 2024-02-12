<template>
  <div id="stars-container" class="rounded-4 shadowed">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div
      class="content text-light d-flex justify-content-center align-items-center w-100 h-100"
    >
      <div class="rounded-4 text-white">
        <h2 class="fw-bold fs-1 text-center">
          Vuoi ricevere un codice sconto?
        </h2>
        <h3 class="py-4 fw-bold fs-2 text-center d-none d-sm-block">
          Inserisci il tuo indirizzo email e lo ritroverai direttamente nella
          tua casella di posta!
        </h3>
        <div id="searchbar" class="mx-auto">
          <input
            id="search"
            type="email"
            placeholder="Inserisci la tua email..."
          />
          <div id="search-button">
            <i class="fa-solid fa-paper-plane fs-5"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SaleHome",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
// n is number of stars required
@function multiple-box-shadow($n) {
  $value: "#{random(2000)}px #{random(2000)}px #FFF";
  @for $i from 2 through $n {
    $value: "#{$value} , #{random(2000)}px #{random(2000)}px #FFF";
  }

  @return unquote($value);
}
$shadows-small: multiple-box-shadow(700);
$shadows-medium: multiple-box-shadow(200);
$shadows-big: multiple-box-shadow(100);

#stars-container {
  background: radial-gradient(ellipse at bottom, $primary 0%, $bg-primary 100%);
  overflow: hidden;

  .content {
    padding: 100px;

    #searchbar {
      position: relative;

      #search {
        padding: 0 20px;
        width: 100%;
        height: 50px;
        border-radius: 3em;
      }

      #search-button {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 51px;
        height: 51px;
        border-radius: 0 50%;
        background-color: $bg-secondary;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        -webkit-box-shadow: -18px 0 31px -8px #000000;
        -moz-box-shadow: -18px 0 31px -8px #000000;
        box-shadow: -18px 0 31px -8px #000000;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: darken($bg-secondary, 8%);
        }
      }
    }
  }
}
#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: $shadows-small;
  animation: animStar 50s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: $shadows-small;
  }
}
#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: $shadows-medium;
  animation: animStar 100s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: $shadows-medium;
  }
}
#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: $shadows-big;
  animation: animStar 150s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $shadows-big;
  }
}
@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}

@media screen and (max-width: 576px) {
  #stars-container {
    .content {
      padding: 50px;
      padding-bottom: 80px;
    }
    #search-button {
      right: 50% !important;
      transform: translateX(50%);
      bottom: -120% !important;
      width: 30% !important;
      border-radius: 3em !important;
    }
  }
}
@media screen and (min-width: 576px) {
  #searchbar {
    width: 100%;
  }
}
@media screen and (min-width: 768px) {
  #searchbar {
    width: 80%;
  }
}
@media screen and (min-width: 1200px) {
  #searchbar {
    width: 70%;
  }
}
@media screen and (min-width: 1400px) {
  #searchbar {
    width: 60%;
  }
}
</style>
