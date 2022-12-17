<script>
import AppHero from "./AppHero.vue";
import SectionFoodieJournal from "./SectionFoodieJournal.vue";
import SectionPopularRecipes from "./SectionPopularRecipes.vue";
import SectionCulinaryCollection from "./SectionCulinaryCollection.vue";
import SectionSubscribe from "./SectionSubscribe.vue";
import SectionFarmToTable from "./SectionFarmToTable.vue";
export default {
  name: "AppMain",
  components: {
    AppHero,
    SectionFoodieJournal,
    SectionPopularRecipes,
    SectionCulinaryCollection,
    SectionSubscribe,
    SectionFarmToTable,
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
      <div class="container text-center my-4">
        <SectionCulinaryCollection />
      </div>
      <div class="container my-4">
        <SectionFarmToTable />
      </div>
      <div class="text-center py-4 subscribe">
        <div class="container">
          <SectionSubscribe />
        </div>
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
.subscribe {
  background-image: url("../assets/subscribe-sec-bg.png");
  background-size: cover;
}
</style>
