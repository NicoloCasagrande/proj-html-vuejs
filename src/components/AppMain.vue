<script>
import AppHero from "./AppHero.vue";
import SectionFoodieJournal from "./SectionFoodieJournal.vue";
export default {
  name: "AppMain",
  components: {
    AppHero,
    SectionFoodieJournal,
  },
};
</script>

<template>
  <div>
    <AppHero />
    <div class="container relevant">
      <SectionFoodieJournal class="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.relevant {
  margin-top: -6.25rem;
}
</style>
