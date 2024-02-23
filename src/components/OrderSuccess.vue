<template>
  <div class="my-wrapper">
    <h1>Ordine effettuato con successo!</h1>
    <div class="list-unstyled" v-html="formatOrderAsHtml"></div>   
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
  computed: {
    formatOrderAsHtml() {
      if (this.responseData && this.responseData.order) {
        const order = this.responseData.order;
        return `
          <ul>
            <li><strong>Nome:</strong> ${order.customer_name} ${order.customer_lastname}</li>
            <li><strong>Email:</strong> ${order.customer_email}</li>
            <li><strong>Telefono:</strong> ${order.customer_phone}</li>
            <li><strong>Indirizzo di spedizione:</strong> ${order.shipping_address}</li>
            <li><strong>Prezzo totale:</strong> ${order.total_price}</li>
            <li><strong>Data ordine:</strong> ${order.created_at}</li>
          </ul>
        `;
      } else {
        return '<p>Dati non disponibili</p>';
      }
    },
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

li{
  list-style: none;
}
</style>
