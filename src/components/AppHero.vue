<script>
export default {
  name: "AppHero",
};
</script>

<template>
  <section class="d-flex align-items-center justify-content-center">
    <div class="title text-center py-3">
      <h1>Food Corner: Top Japanese Restaurants for Sushi</h1>
      <span>March 25, 2019</span>
      <div>
        <span class="phrase p-1">TODAY'S PICK</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: url(../assets/sfondo.jpg);
  background-position: center;
  background-size: cover;
  height: 28.125rem;
  .title {
    width: 60%;
    background-color: white;
    border-radius: 0.9375rem;
    position: relative;
  }
  .phrase {
    background-color: #fc7525;
    border-radius: 0.625rem;
    position: absolute;
    top: -1.25rem;
    left: calc(50% - 60px);
    font-weight: 600;
    color: white;
    font-family: "Roboto", sans-serif;
  }
}
</style>
