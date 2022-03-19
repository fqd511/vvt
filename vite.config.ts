import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import path from "path";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import Markdown from "vite-plugin-md";
import AutoImport from "unplugin-auto-import/vite";
import Prism from "markdown-it-prism";
import LinkAttributes from "markdown-it-link-attributes";
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import Unocss from "unocss/vite";

const root = path.resolve(__dirname, "./src");

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Components({
      dirs: ["src/**/components"],
      deep: true,
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
      dts: "src/components.d.ts",
    }),
    Pages({
      extensions: ["vue", "md"],
      exclude: ["**/components/*.vue"],
    }),
    Layouts(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/,
      ],
      imports: [
        "vue",
        "vue-i18n",
        {
          "@vueuse/head": ["useHead", "createHead"],
        },
        "@vueuse/core",
        {
          "vue-router": [
            "useRouter",
            "useRoute",
            "createRouter",
            "createWebHistory",
          ],
        },
      ],
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
      dts: "src/auto-imports.d.ts",
    }),

    Markdown({
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism);
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener",
          },
        });
      },
    }),
    Unocss(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, "locales/**")],
    }),
  ],
  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core", "@vueuse/head"],
  },
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "${root}/style/mixin";
        @import "${root}/style/variable";`,
      },
    },
  },
});
