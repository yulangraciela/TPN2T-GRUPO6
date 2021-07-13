<template>
  <b-container fluid="sm">
    <div :style="myStyle" class="Home">
      <p class="bg-dark text-center">
        <img alt="Vue logo" style="width: 50%" src="../assets/logo1.svg" />
      </p>
      <p class="bg-light">
        <router-link :to="{ name: 'Login' }">Ingresar usuario</router-link>
      </p>
      <carousel />
      <Titulo texto="La academia de música en casa" />
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import carousel from "../components/carousel.vue";
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
    Titulo,
  },
};
</script>
