import vue-braintree from "vue-braintree";
import "./assets/styles/main.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/router.js";

createApp(App).use(router).use(vue-braintree).mount("#app");
