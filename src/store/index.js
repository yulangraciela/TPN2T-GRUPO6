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
            state.usuario.canciones.unshift(cancion);
        },
        agregarFavoritas(state, cancion) {
            state.favoritas.push(cancion);
            //state.usuario.favoritas = state.favoritas;
        },
        registrarUsuario(state, usuario) {
            state.usuario = usuario;
            //state.reproducidas = [];
            //state.favoritas = [];
        },
        actualizarPuntos(state, puntaje) {
            //if (typeof state.usuario.puntaje != 'number')
            //    state.usuario.puntaje = puntaje;
            //else
            state.usuario.puntaje = parseInt(state.usuario.puntaje) + parseInt(puntaje);

            const cancion = state.usuario.canciones[state.usuario.canciones.length - 1];
            cancion.puntaje = puntaje;

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
        accionActualizarPuntos({ commit }, puntaje) {
            commit("actualizarPuntos", puntaje);
        },
    },
    modules: {},
});