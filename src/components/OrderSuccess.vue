<template>
  <div class="my-wrapper">
    <h1>Ordine effettuato con successo!</h1>
    <ul class="list-unstyled">
            <li><strong>Nome:</strong> {{responseData['order'].customer_name}} {{responseData['order'].customer_lastname}}</li>
            <li><strong>Email:</strong> {{responseData['order'].customer_email}}</li>
            <li><strong>Telefono:</strong> {{responseData['order'].customer_phone}}</li>
            <li><strong>Indirizzo di spedizione:</strong> {{responseData['order'].shipping_address}}</li>
            <li><strong>Prezzo totale:</strong> {{responseData['order'].total_price}}</li>
            <li><strong>Data ordine:</strong> {{responseData['order'].created_at}}</li>
          </ul>
    </div>
</template>

<script>
export default {
  
  name: "OrderCompleted",
  data() {
    return {
      responseData: null,
    };
  },
  created() {
    
    if (this.$route.query.data) {
      try {
        this.responseData = JSON.parse(this.$route.query.data);
      } catch (error) {
        console.error('Errore nel parsing JSON:', error);
      }
    }
  },
  
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
