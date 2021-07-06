import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteComponents from "vite-plugin-components";
import path from "path";
const root = path.resolve(__dirname, "./src");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteComponents()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "${root}/style/mixin";
        @import "${root}/style/variable";
        @import "${root}/style/common";`,
      },
    },
  },
});
