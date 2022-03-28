<template>
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
</template>

<script lang="ts" setup>
import { toggleDark } from "~/composables";

const { availableLocales, locale } = useI18n();
const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
</script>
