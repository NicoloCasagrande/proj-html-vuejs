<script>
import AppLogo from "./AppLogo.vue";
import { store } from "../store";
export default {
  name: "AppHeader",
  components: {
    AppLogo,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="logo d-flex justify-content-center">
    <AppLogo />
  </div>
  <div class="mt-3">
    <nav>
      <ul class="d-flex justify-content-center">
        <li v-for="option in store.menuOption" class="mx-3">{{ option }}</li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  width: 100%;
}
ul {
  list-style: none;
}
</style>
