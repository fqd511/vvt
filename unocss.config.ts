import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
  shortcuts: [
    [
      "outside-container",
      "container m-auto text-sm font-mono max-w-full text-gray-900 dark:text-gray-300 h-full overflow-hidden",
    ],
  ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
});
