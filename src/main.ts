import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
axios.defaults.baseURL = "http://localhost:8000";

createApp(App).use(store).use(router).use(Toast).mount("#app");
