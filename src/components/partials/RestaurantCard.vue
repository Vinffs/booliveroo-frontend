<template>
  <div class="my-card rounded-3 my-3">
    <div class="image-cotainer">
      <div class="overlay">
        <router-link to="/" class="btn btn-light rounded-pill"
          >Vai al ristorante</router-link
        >
      </div>
      <img class="w-100" src="https://picsum.photos/400/200" alt="" />
    </div>
    <div class="card-body">
      <h5 class="card-title">Ristorante</h5>
      <div class="d-flex justify-content-between">
        <p>Luogo in cui si trova</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestaurantCard",
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
.my-card {
  overflow: hidden;
  &:hover .image-cotainer {
    .overlay {
      opacity: 1;

      .btn {
        transform: translateY(0);
      }
    }
  }
  .image-cotainer {
    position: relative;
    overflow: hidden;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba($primary, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: all 0.3s ease;

      .btn {
        transition: all 0.3s ease;
        transform: translateY(-500px);
      }
    }
  }
}
</style>
