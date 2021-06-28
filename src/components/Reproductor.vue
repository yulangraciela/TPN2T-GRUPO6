<template>
  <div>
    <Titulo texto=" Reproductor de Musica" />
    Cancion: {{ reproduciendo.cancion.name }}<br/>
    
  <br/>

    <b-progress
      :value="timePassed"
      :max="max"
      show-progress
      animated
    ></b-progress>
    <b-button @click="stopTimer()" variant="primary">detener cancion</b-button>
    Puntaje obtenido: {{ reproduciendo.puntaje }}
  </div>
</template>

<script>
import Titulo from "../components/Titulo";
import axios from "axios";
import {mapState, mapActions} from 'vuex';
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
      reproduciendo: null
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
        this.accionAgregar (this.reproduciendo = {
          cancion: this.cancion,
          puntaje: 0,
          usuario: null
        });
        this.calcularFavoritas ();
      } catch (error) {
        console.log(error);
      }
    },
    calcularFavoritas (){
      let cant=0;
      let c ;
      for(c of this.reproducidas){ 
        if (c.cancion.id==this.reproduciendo.cancion.id)cant++;
      }
          if(cant>=3){ 
            let existe = this.favoritas.filter(f=> f.cancion.id==this.reproduciendo.cancion.id);
          if(existe.length==0)
         this.accionAgregarFavoritas (this.reproduciendo);
      }
    },
    stopTimer() {
      clearInterval(this.timerInterval);
       
        this.reproduciendo.puntaje = (Math.random () * 100000).toFixed (0); 
        
      
    },
    startTimer() {
      this.timerInterval = setInterval(() => {
        if (this.timePassed >= this.max) clearInterval(this.timerInterval);
        else this.timePassed += 1;
      }, 100);
    },
    ...mapActions(['accionAgregar','accionAgregarFavoritas']),
  },
  created() {
    this.consumirApi();
    this.startTimer();
  },
  
};
</script>
<style></style>