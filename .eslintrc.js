module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 开启setup语法糖环境
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "./.eslintrc-auto-import.json",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  // 解析vue文件
  parser: "vue-eslint-parser",
  // 支持ts的最新语法
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    quotes: ["error", "double"],
    "no-alert": "off",
    "no-console": "off",
    "vue/no-deprecated-v-on-native-modifier": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "vue/multi-word-component-names": "off",
  },
  ignorePatterns: [
    ".gitignore",
    "**/mock/*.ts",
    "dist",
    ".eslintrc.js",
    "**/*.d.ts",
  ],
};
