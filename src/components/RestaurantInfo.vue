<template>
  <div>
    <div ref="mapRef" id="map"></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { store } from "../data/store";

export default {
  name: "RestaurantInfo",
  props: ["info"],
  setup(props) {
    const mapRef = ref(null);
    const info = props.info;

    onMounted(() => {
      const tt = window.tt;

      // Ottieni le coordinate geografiche dall'indirizzo utilizzando Nominatim
      axios
        .get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            info.address
          )}`
        )
        .then((response) => {
          const [result] = response.data;
          const focus = [parseFloat(result.lat), parseFloat(result.lon)];

          // Inizializza la mappa
          let map = tt.map({
            key: store.tomTomKey,
            container: mapRef.value,
            center: focus,
            zoom: 15,
          });

          map.addControl(new tt.FullscreenControl());
          map.addControl(new tt.NavigationControl());

          // Inserisci il marker sulla mappa
          new tt.Marker({
            color: "red",
          })
            .setLngLat(focus)
            .addTo(map);
        })
        .catch((error) => {
          console.error("Errore durante il recupero delle coordinate:", error);
        });
    });

    return {
      mapRef,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#map {
  height: 300px;
  width: 100%;
}
</style>
