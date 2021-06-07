import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../components/Login.vue";
import MisPracticas from "../components/MisPracticas.vue";
import LasMasPracticadas from "../components/LasMasPracticadas.vue";


import Reproductor from "../components/Reproductor.vue";
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },

    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
    },
    {
        path: "/MisPracticas",
        name: "MisPracticas",
        component: MisPracticas,
    },
    {
        path: "/lasMasPracticadas",
        name: "LasMasPracticadas",
        component: LasMasPracticadas,
    },

    {
        path: "/Reproductor/:id",
        name: "Reproductor",
        component: Reproductor,
        props: true,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;