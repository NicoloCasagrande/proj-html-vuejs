<script>
export default {
  name: "SectionCulinaryCollection",
  data() {
    return {
      collection: [
        {
          name: "DRINK",
          image: "../assets/sfondo.jpg",
        },
        {
          name: "SOUPS",
          image: "../assets/sfondo.jpg",
        },
        {
          name: "BAKERY",
          image: "../assets/sfondo.jpg",
        },
        {
          name: "DINNER",
          image: "../assets/sfondo.jpg",
        },
        {
          name: "HEALTHY",
          image: "../assets/sfondo.jpg",
        },
        {
          name: "STAFF PICKS",
          image: "../assets/sfondo.jpg",
        },
        {
          name: "APPETISERS",
          image: "../assets/sfondo.jpg",
        },
        {
          name: "QUICK & EASY",
          image: "../assets/sfondo.jpg",
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
        <div class="bg-white text-center">
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
