<template>
  <b-container fluid class="p-4">
        <h1>
          Bienvenidos al Menu de usuario, aqui se encuenta las estadisticas
          personales
        </h1>
        <div class="row">
          <div class="col-6">
            <label>Nombre de usuario: {{ usuario.nombreUsuario }}</label>
          </div>
          <div class="col-6">
            <label>Puntos totales: {{ usuario.puntaje }}</label>
          </div>
        </div>
        <h2>Canciones reproducida por el usuario</h2>

        <div v-for="(item, index) in this.usuario.canciones" :key="index" class="col">
          {{ item.cancion.name }}
          <b-button :to="'/Reproductor/' + `${item.cancion.id}`" variant="primary"
            >ir</b-button
          >
        </div>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["usuario"]),
  },
  methods: {
  },
};
</script>
<style></style>
