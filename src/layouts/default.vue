<template>
  <main class="outside-container">
    <div class="container m-x-auto p-y-4">
      <TopBar />
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
import TopBar from "~/components/TopBar.vue";

const { t } = useI18n();
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
