<template>
  <b-container fluid="sm">
    <div :style="myStyle" class="Home">
      <img alt="Vue logo" src="../assets/logo1.svg" />

      <router-link :to="{ name: 'MisPracticas' }"
        >ir a mis Practicas</router-link
      >
      <carousel />
      <MisPracticas />
      <Titulo texto="La academia de música en casa"/>
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import carousel from "../components/carousel.vue";
import MisPracticas from "../components/MisPracticas.vue";
import Titulo from "../components/Titulo.vue";
export default {
  name: "Home",

  data() {
    return {
      myStyle: {
        backgroundColor: "#16a085",
      },
    };
  },
  components: {
    carousel,
    MisPracticas,
    Titulo,
  },
};
</script>
