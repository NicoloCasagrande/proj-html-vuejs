<script>
import { store } from "../store";
import AppSocialComp from "../components/AppSocialComp.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppSocialComp,
  },
};
</script>

<template>
  <div id="top-footer">
    <div class="row">
      <div class="col-3 px-0">
        <img src="../assets/sfondo.jpg" alt="" />
      </div>
      <div class="col-3 px-0">
        <img src="../assets/sfondo.jpg" alt="" />
      </div>
      <div class="col-3 px-0">
        <img src="../assets/sfondo.jpg" alt="" />
      </div>
      <div class="col-3 px-0">
        <img src="../assets/sfondo.jpg" alt="" />
      </div>
    </div>
  </div>
  <div id="bottom-footer" class="container pt-4">
    <div class="row">
      <div class="col-3">
        <img class="footer-logo" src="../assets/logo-mobile.png" alt="" />
        <AppSocialComp class="mt-3" />
      </div>
      <div class="col-3">
        <nav>
          <ul>
            <li v-for="option in store.menuOption">{{ option }}</li>
          </ul>
        </nav>
      </div>
      <div class="col-3">
        <h6>CONTACT</h6>
      </div>
      <div class="col-3">
        <h6>GET OUR APP!</h6>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  object-fit: cover;
}
ul {
  list-style: none;
}
#bottom-footer .footer-logo {
  width: 70%;
}
h6 {
  color: var(--secondary-color);
}
</style>
