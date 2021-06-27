<template>
  <div>
    <Titulo texto=" Reproductor de Musica" />
    Cancion: {{ cancion.name }}<br/>
  reproducidas:{{this.reproducidas}}
    <b-progress
      :value="timePassed"
      :max="max"
      show-progress
      animated
    ></b-progress>
    <b-button @click="stopTimer()" variant="primary">detener cancion</b-button>
    Puntaje obtenido: {{ puntaje }}
  </div>
</template>

<script>
import Titulo from "../components/Titulo";
import axios from "axios";
import {mapState,  mapActions} from 'vuex';
export default {
  props: {
    id: String,
  },
  data() {
    return {
      cancion: {},
      timerInterval: 0,
      timePassed: 0,
      max: 200,
      puntaje: 0
    };
  },
  name: "Reproductor",
  components: {
    Titulo,
  },
  computed:{
    ...mapState(['favoritas', 'reproducidas']),
  },
  methods: {
    async consumirApi() {
      try {
        const res = await axios.get(
          "https://60c654e819aa1e001769f232.mockapi.io/optimus/canciones/" +
            this.id
        );
        this.cancion = await res.data;
        this.accionAgregar (this.cancion);
        //calcularFavoritas ();
      } catch (error) {
        console.log(error);
      }
    },
    stopTimer() {
      clearInterval(this.timerInterval);
      if (this.timePassed >= this.max) {
        this.puntaje = (Math.random () * 100000).toFixed (0); 
        this.puntaje = this.timePassed;
      }
    },
    startTimer() {
      this.timerInterval = setInterval(() => {
        if (this.timePassed >= this.max) clearInterval(this.timerInterval);
        else this.timePassed += 1;
      }, 100);
    },
  },
  created() {
    this.consumirApi();
    this.startTimer();
  },
  ...mapActions(['accionAgregar']),
};
</script>
<style></style>
