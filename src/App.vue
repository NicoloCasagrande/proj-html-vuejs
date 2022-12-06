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
  <header class="container">
    <AppHeader />
  </header>
  <div>
    <AppMain />
  </div>
  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
