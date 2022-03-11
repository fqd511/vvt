import App from "./App.vue";
import "normalize.css";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import messages from "@intlify/vite-plugin-vue-i18n/messages";
import { createI18n } from "vue-i18n";

const head = createHead();
const routes = setupLayouts(generatedRoutes);
const i18n = createI18n({
  locale: "en",
  messages,
});

createApp(App)
  .use(head)
  .use(i18n)
  .use(createRouter({ routes, history: createWebHistory() }))
  .mount("#app");
