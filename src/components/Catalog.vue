<template>
  <div :class="['container', isPin ? 'pin' : '']">
    <p v-if="!isPin">List of Subject for Three.js</p>
    <div class="subject-entrance-list">
      <router-link v-for="item in subjects" :key="item.path" :to="item.path">{{
        item.title
      }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import * as Vue from "vue";
import routes from "../route/index";

interface Output {
  subjects: any[];
  [attr: string]: any;
}

export default Vue.defineComponent({
  name: "Catalog",
  props: {
    isPin: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props): Output {
    const subjects = routes;

    return { isPin: props.isPin, subjects };
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  max-width: 600px;
  margin: auto;
  p {
    flex: 0 0 40px;
    text-align: center;
  }
  .subject-entrance-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    a {
      margin: 1em;
      text-decoration: none;
      padding: 8px 16px;
      background-color: whitesmoke;
      border-radius: 4px;
    }
  }
  &.pin {
    width: fit-content;
    position: absolute;
    left: 2em;
    bottom: calc(100vh - 5px);
    top: unset;
    border-bottom: 5px #0000004a solid;
    border-radius: 5px;
    transition: bottom 1s ease-in, top 1s ease-in, border-color 1s ease-in;
    background-color: #00000023;
    height: fit-content;
    padding: 8px 16px;
    .subject-entrance-list {
      display: flex;
      align-items: center;
      flex-flow: column nowrap;
      a {
        font-size: 12px;
        margin: 0;
        padding: 4px 8px;
      }
      a:not(:nth-last-child(1)) {
        margin-bottom: 4px;
      }
    }
    &:hover {
      bottom: unset;
      top: 4px;
      border-color: transparent;
      transition: bottom 1s ease-out, top 1s ease-out, border-color 1s ease-out;
    }
  }
}
</style>
