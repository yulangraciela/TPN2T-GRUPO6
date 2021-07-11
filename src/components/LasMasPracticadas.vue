<template>
  <div>
    <Titulo texto="Favoritas"></Titulo>
    <div v-for="(item, index) in favoritas" :key="index">
      <p>{{ item.cancion.name }}<br />puntaje:{{ item.puntaje }}</p>
    </div>
  </div>
</template>

<script>
import Titulo from "../components/Titulo.vue";
import { mapState } from "vuex";
export default {
  name: "LasMasPracticadas",
  components: {
    Titulo,
  },
  computed: {
    ...mapState(["favoritas"]),
  },
};
</script>

<style></style>
