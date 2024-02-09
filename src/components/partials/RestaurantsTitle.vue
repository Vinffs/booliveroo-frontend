<template>
  <h5 class="wrapper rounded-pill p-3 ps-4 shadowed">
    {{ title }}
  </h5>
</template>

<script>
export default {
  name: "RestaurantsTitle",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets//styles/partials/variables" as *;

.wrapper {
  background-color: $bg-secondary;
  margin-bottom: 17px;
  margin-top: 15px;
}
</style>
