<script>
import { store } from "../store";
export default {
  name: "SectionCulinaryCollection",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div>
    <h3>CULINARY COLLECTION</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor harum
      animi, laborum error dicta dolores similique tenetur repellendus dolorum
      sunt
    </p>
    <div class="row mt-4">
      <div class="col-3" v-for="collect in store.collection">
        <div class="bg-white text-center py-5 mb-4">
          <img :src="collect.image" :alt="collect.name" class="mb-4" />
          <h6>{{ collect.name }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 3.125rem;
}
</style>
