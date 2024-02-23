<template>
  <div class="my-wrapper">
    <h1>Qualcosa è andato storto :C</h1>
  </div>
</template>

<script>
export default {
  name: "OrderFailed",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.my-wrapper {
  padding: 50px;
  background-color: $bg-secondary;
  border-radius: 3em;
}
</style>
