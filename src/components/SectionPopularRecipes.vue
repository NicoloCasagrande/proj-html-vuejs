<script>
import { store } from "../store";
export default {
  name: "SectionPopularRecipes",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section>
    <h3 class="mt-5">POPULAR RECIPES</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
      laudantium voluptate voluptas
    </p>
    <div class="row">
      <div class="col-6 bg-white p-0">
        <img src="../assets/sfondo.jpg" alt="" />
        <h5 class="p-4">Lunch Favourite with Salad, Naan And Beans</h5>
        <span class="p-4">Bakery. Featured, Healty, Latest Recipes, Staff Picks</span>
        <hr>
        <p class="p-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime culpa
          earum distinctio ea dolor, quisquam laborum quo itaque. Perspiciatis
          molestias possimus similique omnis deleniti sapiente repudiandae
          magnam sequi mollitia enim?
        </p>
        <button class="m-4">LEARN MORE</button>
      </div>
      <div class="col-6 d-flex flex-wrap justify-content-between">
        <div class="ms-col-6 mb-3" v-for="(recipe, index) in store.recipes">
          <img :src="recipe.image" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}
.ms-col-6 {
  width: calc(50% - 10px);
}
section .row {
  text-align: left;
}
</style>
