<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="text-center white-bg">
    <h3 class="py-3">FOODIE JOURNAL</h3>
    <div class="row px-4">
      <div class="col-4 px-3" v-for="(item, index) in store.items">
        <div v-if="index <= 2">
          <img :src="item.image" :alt="item.title" />
          <h4>{{ item.title }}</h4>
          <span>By admin | {{ item.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
