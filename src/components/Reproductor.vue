<template>
  <b-container fluid class="p-4">
    <div v-if="usuario != null">
      <Titulo texto=" Reproductor de Musica" />
      Cancion: {{ reproduciendo.cancion.name }}<br />

      <br />

      <b-progress
        :value="timePassed"
        :max="max"
        show-progress
        animated
      ></b-progress>
      <b-button @click="stopTimer()" variant="primary"
        >detener cancion</b-button
      >
      Puntaje obtenido: {{ reproduciendo.puntaje }}
    </div>
    <div v-else class="text-danger">DEBE LOGUEARSE PRIMERO</div>
  </b-container>
</template>

<script>
import Titulo from "../components/Titulo";
import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
  props: {
    id: String,
  },
  data() {
    return {
      cancion: {},
      timerInterval: 0,
      timePassed: 0,
      max: 100,
      reproduciendo: null,
    };
  },
  name: "Reproductor",
  components: {
    Titulo,
  },
  computed: {
    ...mapState(["favoritas", "reproducidas", "usuario"]),
  },
  methods: {
    async consumirApi() {
      try {
        const res = await axios.get(
          "https://60c654e819aa1e001769f232.mockapi.io/optimus/canciones/" +
            this.id
        );
        this.cancion = await res.data;
        this.accionAgregar(
          (this.reproduciendo = {
            cancion: this.cancion,
            puntaje: 0,
          })
        );
      } catch (error) {
        console.log(error);
      }
    },
    async actualizarFavoritas() {
      try {
        // guarda las favoritas en la base de datos de mockapi
        const newObj = [];
        this.favoritas.map((e) => newObj.add(e));
        await axios.post(
          "https://60eb2e32e9647b0017cddcfa.mockapi.io/usuarios/favoritas",
          newObj
        );
        console.log(newObj);
      } catch (error) {
        console.log(error);
      }
    },
    async actualizarUsuario() {
      try {
        // guarda el usuario en la base de datos de mockapi
        await axios.put(
          "https://60eb2e32e9647b0017cddcfa.mockapi.io/usuarios/optimus/" +
            this.usuario.id,
          this.usuario
        );
      } catch (error) {
        console.log(error);
      }
    },
    calcularFavoritas() {
      let cant = 0;
      let c;
      // cuenta la cantidad de reproducciones de una cancion
      for (c of this.reproducidas) {
        if (c.cancion.id == this.reproduciendo.cancion.id) cant++;
      }
      if (cant >= 3) {
        // verifica que no este registrada
        let existe = this.favoritas.filter(
          (f) => f.cancion.id == this.reproduciendo.cancion.id
        );
        // si no esta la agrega
        if (existe.length == 0) this.accionAgregarFavoritas(this.reproduciendo);
      }
    },
    finalizaReproduccion() {
      // graba puntaje
      this.reproduciendo.puntaje = ((this.timePassed * 10) / this.max).toFixed(0);
      this.calcularFavoritas();
      // actualiza puntaje en el usuario
      this.accionActualizarPuntos(this.reproduciendo.puntaje);
      this.actualizarUsuario();
      //this.actualizarFavoritas();
    },
    stopTimer() {
      clearInterval(this.timerInterval);
      this.finalizaReproduccion();
    },
    startTimer() {
      this.timerInterval = setInterval(() => {
        if (this.timePassed >= this.max) clearInterval(this.timerInterval);
        else this.timePassed += 1;
      }, 100);
    },
    ...mapActions([
      "accionAgregar",
      "accionAgregarFavoritas",
      "accionActualizarPuntos",
    ]),
  },
  created() {
    this.consumirApi();
    this.startTimer();
  },
};
</script>
<style></style>
