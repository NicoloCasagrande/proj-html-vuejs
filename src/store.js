import { reactive } from "vue";

export const store = reactive({
  menuOption: ["Home", "Recipes", "Places", "Blog", "About", "Contact"],
  activeMenu: 0,
  items: [
    {
      title: "Food Corner: Top Japanese Restaurants for Sushi",
      date: "March 25th, 2019",
      image: "src/assets/sfondo.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
    },
    {
      title: "Roundup, My New Favourite Recipes for Healthy Living",
      date: "March 25th, 2019",
      image: "src/assets/fi-roundup.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
    },
    {
      title: "Why These Toast with Tea are My New Favourite",
      date: "March 25th, 2019",
      image: "src/assets/fi-organic-breakfast.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
    },
    {
      title: "Why These Toast with Tea are My New Favourite",
      date: "March 25th, 2019",
      image: "src/assets/fi-organic-breakfast.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
    },
    {
      title: "Why These Toast with Tea are My New Favourite",
      date: "March 25th, 2019",
      image: "src/assets/fi-organic-breakfast.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
    },
    {
      title: "Why These Toast with Tea are My New Favourite",
      date: "March 25th, 2019",
      image: "src/assets/fi-organic-breakfast.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
    },
    {
      title: "Why These Toast with Tea are My New Favourite",
      date: "March 25th, 2019",
      image: "src/assets/fi-organic-breakfast.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
    },
  ],
  recipes: [
    {
      title: "Food Corner: Top Japanese Restaurants for Sushi",
      date: "March 25th, 2019",
      image: "src/assets/sfondo.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
    },
    {
      title: "Roundup, My New Favourite Recipes for Healthy Living",
      date: "March 25th, 2019",
      image: "src/assets/sfondo.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
    },
    {
      title: "Why These Toast with Tea are My New Favourite",
      date: "March 25th, 2019",
      image: "src/assets/fi-organic-breakfast.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
    },
    {
      title: "Why These Toast with Tea are My New Favourite",
      date: "March 25th, 2019",
      image: "src/assets/fi-organic-breakfast.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
    },
    {
      title: "Why These Toast with Tea are My New Favourite",
      date: "March 25th, 2019",
      image: "src/assets/fi-organic-breakfast.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
    },
    {
      title: "Why These Toast with Tea are My New Favourite",
      date: "March 25th, 2019",
      image: "src/assets/fi-organic-breakfast.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id Facilis asperiores totam repellendus ducimus autem numquam consequuntur quasi dolorum dignissimos. Explicabo laborum accusantium voluptatibus tempore? Assumenda, aliquid cumque? Excepturi!",
    },
  ],
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
});
