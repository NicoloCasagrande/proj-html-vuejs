<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      items: [
        {
          title: "Food Corner: Top Japanese Restaurants for Sushi",
          date: "March 25th, 2019",
          image: "../assets/sfondo.jpg",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
        },
        {
          title: "Roundup, My New Favourite Recipes for Healthy Living",
          date: "March 25th, 2019",
          image: "../assets/fi-roundup.jpg.jpg",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
        },
        {
          title: "Why These Toast with Tea are My New Favourite",
          date: "March 25th, 2019",
          image: "../assets/fi-organic-breakfast.jpg",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="text-center white-bg">
    <h3 class="py-3">FOODIE JOURNAL</h3>
    <div class="row">
      <div class="col-4" v-for="item in items">
        <img :src="item.image" :alt="item.title" />
        <h4>{{ item.title }}</h4>
        <span>By admin | {{ item.date }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
