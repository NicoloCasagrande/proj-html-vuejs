<script>
export default {};
</script>

<template>
  <section>
    <h3 class="mt-5">POPULAR RECIPES</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
      laudantium voluptate voluptas
    </p>
    <div class="row">
      <div class="col-6 bg-white">
        <img src="../assets/sfondo.jpg" alt="" />
        <h5>Lunch Favourite with Salad, Naan And Beans</h5>
        <span>Bakery. Featured, Healty, Latest Recipes, Staff Picks</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime culpa
          earum distinctio ea dolor, quisquam laborum quo itaque. Perspiciatis
          molestias possimus similique omnis deleniti sapiente repudiandae
          magnam sequi mollitia enim?
        </p>
        <button>LEARN MORE</button>
      </div>
      <div class="col-6 d-flex flex-wrap justify-content-between">
        <div class="ms-col-6">
          <img src="../assets/sfondo.jpg" alt="" />
        </div>
        <div class="ms-col-6">
          <img src="../assets/sfondo.jpg" alt="" />
        </div>
        <div class="ms-col-6">
          <img src="../assets/sfondo.jpg" alt="" />
        </div>
        <div class="ms-col-6">
          <img src="../assets/sfondo.jpg" alt="" />
        </div>
        <div class="ms-col-6">
          <img src="../assets/sfondo.jpg" alt="" />
        </div>
        <div class="ms-col-6">
          <img src="../assets/sfondo.jpg" alt="" />
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
  width: calc(50% - 15px);
}
section .row {
  text-align: left;
}
</style>
