<template>
  <b-container fluid class="p-4 bg-light">
    <div class="bg-dark">
      <img src="../assets/logo1.svg" id="icon" alt="User Icon" />
    </div>
  
    <h1>Ingresa tu usuario y clave</h1>
    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="lg"
      label="Usuario"
      label-for="NombreUsuario"
    >
      <b-form-input
        id="NombreUsuario"
        size="lg"
        v-model="NombreUsuario"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="lg"
      label="Clave"
      label-for="clave"
    >
      <b-form-input id="clave" size="lg" v-model="clave"></b-form-input>
    </b-form-group>
    <b-button v-if="!conectado" class="btn btn-active" v-on:click="login()"> Ingresar </b-button>
  
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ error_msg }}
    </div>
    <div class="alert alert-success" role="alert" v-if="conectado">
      {{ error_msg }}
    </div>
    <div v-if="conectado">
      <b-button class="btn btn-success">
        <router-link to="/MenuUsuario"> Presiona aqui para ir a mis practicas </router-link>
      </b-button>
    </div>
  </b-container>
</template>

<script>
import axios from "axios";

import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      NombreUsuario: "",
      clave: "",
      error: false,
      conectado: false,
      error_msg: "",
    };
  },
  methods: {
    async login() {
      let usuarios = [];
      try {
        let response = await axios.get(
          "https://60eb2e32e9647b0017cddcfa.mockapi.io/usuarios/optimus"
        );
        usuarios = response.data;

        const usuario = usuarios.find(
          (u) =>
            u.nombreUsuario.toUpperCase() == this.NombreUsuario.toUpperCase()
        );
        if (usuario && usuario.contrasenia == this.clave) {
          this.error_msg = "Acceso concedido";
          this.error = false;
          this.conectado = true;
          this.accionRegistrarUsuario (usuario);
        } else {
          this.error_msg = "Usuario o clave incorrecta";
          this.error = true;
        }
      } catch (error) {
        this.error_msg = error;
        console.log(error);
      }
    },
    ...mapActions(["accionRegistrarUsuario"]),
  },
};
</script>

<style></style>
