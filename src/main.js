import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/app.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./axios";
AOS.init();
const app = createApp(App);

app.use(router).mount("#app");
