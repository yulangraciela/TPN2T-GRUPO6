import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
    state: {
        reproducidas: [], 
        favoritas:[]
    },
    mutations: {
    agregarCancion(state, cancion) {
        state.reproducidas.push (cancion);
    }   
    },
    actions: {
        accionAgregar({commit}, cancion){
            commit('agregarCancion', cancion)
        }
    },
    modules: {},
});