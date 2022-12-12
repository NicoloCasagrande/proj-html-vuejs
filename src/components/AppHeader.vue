<script>
import AppLogo from "./AppLogo.vue";
import AppSocialComp from "./AppSocialComp.vue";
import { store } from "../store";
export default {
  name: "AppHeader",
  components: {
    AppLogo,
    AppSocialComp,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div id="top-header" class="d-flex justify-content-between my-2">
    <div class="d-flex">
      <span class="me-3"
        >Download App <span class="primary-color">iOS</span></span
      >
      <span>Advertise with us</span>
    </div>
    <AppSocialComp />
  </div>
  <div class="logo d-flex justify-content-center">
    <AppLogo />
  </div>
  <div class="mt-3">
    <nav>
      <ul class="d-flex justify-content-center">
        <li v-for="option in store.menuOption" class="mx-3">
          <a href="">{{ option }}</a>
        </li>
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
.primary-color {
  background-color: var(--secondary-color);
  color: white;
  font-size: 0.75rem;
  padding: 3px;
}
#top-header {
  span {
    &:hover {
      color: #ffb90f;
      cursor: pointer;
    }
  }
}
</style>
