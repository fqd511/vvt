<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <div class="container m-x-auto p-y-4">
      <div class="container flex justify-end">
        <button
          class="i-ic-baseline-translate m-2 !outline-none text-current"
          @click="toggleLocales"
        ></button>
        <button
          class="m-2 !outline-none i-ic-baseline-wb-sunny dark:i-ic-baseline-dark-mode text-current"
          @click="toggleDark()"
        ></button>
      </div>
    </div>
    <div
      class="flex items-center justify-center p-2 text-gray-900 dark:text-gray-200"
    >
      <router-link to="/">{{ t("home") }}</router-link>
      <router-link to="/demo">{{ t("demo") }}</router-link>
      <router-link to="/detail">{{ t("detail") }}</router-link>
    </div>
    <slot>Content is empty</slot>
  </main>
</template>

<script setup lang="ts">
import { toggleDark } from "~/composables";

const { t } = useI18n();
const { availableLocales, locale } = useI18n();
const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  margin: auto 0.5rem;
  font-size: medium;
  opacity: 0.8;
  transition: all 0.2s ease-in-out;
  color: inherit;
}
.router-link-exact-active {
  font-weight: bold;
  font-size: larger;
  opacity: 100;
}
</style>
