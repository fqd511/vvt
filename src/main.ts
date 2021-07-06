import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import routes from "./route/index";
import "normalize.css";

createApp(App)
  .use(createRouter({ routes, history: createWebHistory() }))
  .mount("#app");
