<template>
  <div class="">
    <h2 class="text-center pt-5 pb-4">Inserisci i tuoi dati</h2>
    <form action="" class="rounded-3 p-4">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Dati di consegna</h2>
        <span><span class="text-danger">*</span> campi obbligatori</span>
      </div>
      <div class="mb-3 w-100">
        <label for="address" class="form-label"
          >Indirizzo di consegna <span class="text-danger">*</span></label
        >
        <input type="text" class="form-control w-75" id="address" />
      </div>
      <div class="mb-3 w-100">
        <label for="email" class="form-label"
          >Indirizzo email <span class="text-danger">*</span></label
        >
        <input type="email" class="form-control w-75" id="email" />
      </div>
      <div class="mb-3 w-100">
        <label for="name" class="form-label"
          >Nome sul citofono <span class="text-danger">*</span></label
        >
        <input type="text" class="form-control w-75" id="name" />
      </div>
      <h2>Dati di pagamento</h2>
      <h3>Coming soon with BrainTree...</h3>
    </form>
  </div>
</template>

<script>
export default {
  name: "CheckoutForm",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

form {
  background-color: $bg-secondary;
  width: 60%;
  margin: 0 auto;
}
</style>
