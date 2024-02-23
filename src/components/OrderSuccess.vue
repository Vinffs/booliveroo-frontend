<template>
  <div class="my-wrapper">
    <h1>Ordine effettuato con successo!</h1>
  </div>
</template>

<script>
export default {
  name: "OrderSuccess",
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
