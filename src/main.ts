import App from "./App.vue";
import routes from "./route/index";
import "normalize.css";
import { createRouter, createWebHistory } from "vue-router";

// TODO:(fanqidi:2022/3/9) use auto import to avoid vue-router

createApp(App)
  .use(createRouter({ routes, history: createWebHistory() }))
  .mount("#app");
