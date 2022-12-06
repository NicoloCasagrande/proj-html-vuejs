<script>
import AppHero from "./AppHero.vue";
import SectionFoodieJournal from "./SectionFoodieJournal.vue";
import SectionPopularRecipes from "./SectionPopularRecipes.vue";
export default {
  name: "AppMain",
  components: {
    AppHero,
    SectionFoodieJournal,
    SectionPopularRecipes,
  },
};
</script>

<template>
  <main>
    <div>
      <AppHero />
      <div class="container relevant">
        <SectionFoodieJournal class="" />
      </div>
      <div class="container text-center">
        <SectionPopularRecipes />
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
main {
  background-color: var(--bg-background);
}
.relevant {
  margin-top: -4.375rem;
}
</style>
