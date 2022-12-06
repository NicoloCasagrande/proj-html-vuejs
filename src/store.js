import { reactive } from "vue";

export const store = reactive({
  menuOption: ["Home", "Recipes", "Places", "Blog", "About", "Contact"],
  activeMenu: 0,
});
