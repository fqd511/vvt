<template>
  <Default>
    <router-view />
  </Default>
</template>
<script setup lang="ts">
import Default from "~/layouts/default.vue";

useHead({
  title: "vvt",
  meta: [{ name: "description", content: "Van's Vue-Vite-TypeScript Project" }],
});
</script>
