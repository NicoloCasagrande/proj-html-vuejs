<script>
import { store } from "../store";
import AppSocialComp from "./AppSocialComp.vue";
export default {
  name: "SectionFarmToTable",
  data() {
    return {
      store,
    };
  },
  components: {
    AppSocialComp,
  },
};
</script>

<template>
  <div class="mb-4">
    <div class="d-flex justify-content-between">
      <h3 class="p-0 m-0">FARM TO TABLE</h3>
      <button>READ OUR BLOG</button>
    </div>
    <p id="title-farm" class="p-0 m-0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
      veniam optio vitae voluptate. Labore dolores, voluptas eveniet
    </p>
  </div>
  <div class="row">
    <div class="col-8 row">
      <div class="col-12 bg-white p-0 mb-3">
        <div>
          <img src="../assets/sfondo.jpg" alt="" class="anteprima" />
          <h4 class="p-4">Food Corner: Top Japanese Restaurant for Sushi</h4>
          <span></span>
          <hr />
          <p class="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            veniam optio vitae voluptate. Labore dolores, voluptas eveniet
            recusandae officiis ullam, magnam aliquam quod eos nisi placeat
            voluptatum obcaecati distinctio similique.
          </p>
          <a href="" class="p-4">Read More ></a>
        </div>
      </div>
      <div class="col-6 my-3 ms-card" v-for="(item, index) in store.items">
        <div v-if="index <= 5" class="d-flex flex-column bg-white">
          <img :src="item.image" :alt="item.title" />
          <h4 class="width-60 text-center mt-2">{{item.title}}</h4>
          <span class="width-60 text-center my-2">By Admin | {{ item.date }}</span>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="col-12 position-relative" id="latest-recipes">
        <img src="../assets/ad-bg.jpg" alt="" />
        <h4 class="position-absolute">VIEW OUR LATEST RECIPES</h4>
      </div>
      <div class="col-12 position-relative my-3" id="city">
        <img src="../assets/singapore-featured-image.jpg" alt="" />
        <h5 class="position-absolute">City Guide: Singapore</h5>
        <button>
          <i class="fa-solid fa-earth-europe"></i> VIEW ALL CITY GUIDES
        </button>
      </div>
      <hr class="my-4" />
      <input class="mb-3" type="text" placeholder="Search.." />
      <h6>Follow us</h6>
      <AppSocialComp />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.anteprima {
  width: 100%;
}
#latest-recipes {
  text-align: center;
  img {
    width: 100%;
  }
  h4 {
    top: 47%;
    left: 25%;
    width: 50%;
  }
}

#city {
  img {
    width: 100%;
  }
  h5 {
    background-color: rgba($color: #000000, $alpha: 0.7);
    top: 60%;
    color: white;
    padding: 0.625rem;
  }
  button {
    width: 100%;
  }
}

h6 {
  color: var(--secondary-color);
}

.ms-card {
  img {
    width: 100%;
  }
}

#title-farm{
  width: 50%;
}

.width-60{
  width: 90%;
  align-self: center;
}
</style>
