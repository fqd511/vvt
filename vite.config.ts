import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from 'unplugin-vue-components/vite'
import path from "path";

const root = path.resolve(__dirname, "./src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components()],
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
