<template>
  <h5 class="wrapper rounded-pill p-2 ps-4 mb-4">
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
}
</style>
