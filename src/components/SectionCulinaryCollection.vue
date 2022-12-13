<script>
export default {
  name: "SectionCulinaryCollection",
  data() {
    return {
      collection: [
        {
          name: "DRINK",
          image: "src/assets/drinks-recipes.png",
        },
        {
          name: "SOUPS",
          image: "src/assets/soups-recipes.png",
        },
        {
          name: "BAKERY",
          image: "src/assets/baking-recipes.png",
        },
        {
          name: "DINNER",
          image: "src/assets/dinner-recipes.png",
        },
        {
          name: "HEALTHY",
          image: "src/assets/healthy-recipes.png",
        },
        {
          name: "STAFF PICKS",
          image: "src/assets/staff-picks.png",
        },
        {
          name: "APPETISERS",
          image: "src/assets/premium-recipes.png",
        },
        {
          name: "QUICK & EASY",
          image: "src/assets/quick-easy-recipes.png",
        },
      ],
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
    <div class="row">
      <div class="col-3" v-for="collect in collection">
        <div class="bg-white text-center py-5 mb-4">
          <img :src="collect.image" :alt="collect.name" />
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
