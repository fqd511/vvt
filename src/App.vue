<template>
  <Catalog v-if="$route.path !== '/'" :isPin="true" />
  <router-view class="root"></router-view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>
