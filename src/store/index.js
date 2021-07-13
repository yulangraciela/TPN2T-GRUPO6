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
        registrarTodasLasFavoritas(state, favoritas) {
            state.favoritas = favoritas;
        },
        agregarCancion(state, cancion) {
            state.reproducidas.push(cancion);
            state.usuario.canciones.unshift(cancion);
        },
        async agregarFavoritas(state, cancion) {
            state.favoritas.push(cancion);
            /*state.favoritas.push(JSON.parse(JSON.stringify(cancion)));
      try {
        await axios.post(
          "https://60eb2e32e9647b0017cddcfa.mockapi.io/usuarios/favoritas",
          JSON.parse(JSON.stringify(state.favoritas))
        );
      } catch (error) {
        console.log(error);
      }*/

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
            state.usuario.puntaje =
                parseInt(state.usuario.puntaje) + parseInt(puntaje);

            const cancion =
                state.usuario.canciones[state.usuario.canciones.length - 1];
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
        accionRegistrarTodasLasFavoritas({ commit }, favoritas) {
            commit("registrarTodasLasFavoritas", favoritas);
        },
    },
    modules: {},
});