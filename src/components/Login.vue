<template>
<b-container fluid class="p-4 bg-dark">
<div>
  <form>
    <div>
    <b-row>
      <b-col md="6">
       <b-form-input type="text" placeholder="Ingrese su nombre" v-model="nombre" :state="comprobar"></b-form-input>
        <small>Minimo 3 carateres</small>
      </b-col>
    </b-row>
    </div>
    <div>
     <b-row>
      <b-col md="6">
       <b-form-input type="text" placeholder="Ingrese su apellido" v-model="apellido" :state="comprobar"></b-form-input>
        <small>Minimo 3 carateres</small>
      </b-col>
    </b-row>
    </div>
  </form>
    <p>texto: {{ texto }}</p>
</div>
</b-container>
</template>
  
<script>

export default {
  name: "Login",
  data(){
      return {
        nombre: '',
        apellido:''
      }
    },
    computed:{
      comprobar(){
        return this.nombre.length>2 && this.apellido.length>2 ? true : false
      }
    }
  
};
</script>

<style></style>
