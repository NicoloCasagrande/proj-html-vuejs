<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <div class="container">
    <AppHeader />
  </div>
  <div>
    <AppMain />
  </div>
  <div>
    <AppFooter />
  </div>
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
