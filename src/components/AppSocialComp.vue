<script>
export default {
  name: "AppSocialComp",
};
</script>

<template>
  <div class="d-flex">
    <i class="fa-brands fa-facebook-f me-2"></i>
    <i class="fa-brands fa-instagram mx-2"></i>
    <i class="fa-brands fa-twitter mx-2"></i>
    <i class="fa-brands fa-youtube ms-2"></i>
  </div>
</template>

<style lang="scss" scoped>
i {
  font-size: 0.8125rem;
  color: gray;
  &:hover {
    color: #ffb90f;
    cursor: pointer;
  }
}
</style>
