<template>
  <header>
    <HeaderComponent />
  </header>
  <div>
    <router-view />
  </div>
  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import { store } from './data/store';
export default {
  name: 'App',
  data() {
    return {};
  },
  components: { HeaderComponent, FooterComponent }
}
</script>

<style lang="scss" scoped></style>