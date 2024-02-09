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
    <div class="card-body p-3">
      <h5 class="card-title">Ristorante</h5>
      <div class="d-flex justify-content-between pt-3">
        <p>Luogo in cui si trova</p>
        <div style="width: 10%">
          <img
            v-if="restaurant <= 3 && restaurant !== null"
            :src="
              'https://www.onlygfx.com/wp-content/uploads/2023/07/medal-badge-gold-silver-bronze-place-' +
              position +
              '.png'
            "
            alt=" sad"
            class="w-100"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestaurantCard",
  props: ["restaurant"],
  data() {
    return {
      position: this.restaurant,
    };
  },
  methods: {},
  mounted() {
    if (this.position === 3) {
      this.position = 6;
    }
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
.my-card {
  background-color: $bg-secondary;
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
        transform: translateY(-150px);
      }
    }
  }
}
</style>
