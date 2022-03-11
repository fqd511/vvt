import App from "./App.vue";
import "normalize.css";
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const head = createHead()
const routes = setupLayouts(generatedRoutes)

createApp(App)
  .use(head)
  .use(createRouter({ routes, history: createWebHistory() }))
  .mount("#app");
