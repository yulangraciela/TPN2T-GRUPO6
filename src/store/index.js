import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    reproducidas: [],
    favoritas: [],
    usuario: null,
  },
  mutations: {
    agregarCancion(state, cancion) {
      state.reproducidas.push(cancion);
    },
    agregarFavoritas(state, cancion) {
      state.favoritas.push(cancion);
    },
    registrarUsuario(state, usuario) {
      state.usuario = usuario;
    },
  },
  actions: {
    accionAgregar({ commit }, cancion) {
      commit("agregarCancion", cancion);
    },

    accionAgregarFavoritas({ commit }, cancion) {
      commit("agregarFavoritas", cancion);
    },
    accionRegistrarUsuario({ commit }, usuario) {
      commit("registrarUsuario", usuario);
    },
  },
  modules: {},
});
