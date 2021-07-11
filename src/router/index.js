import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue";
import MisPracticas from "../components/MisPracticas.vue";
import LasMasPracticadas from "../components/LasMasPracticadas.vue";
import MenuUsuario from "../components/MenuUsuario.vue";
import Reproductor from "../components/Reproductor.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },

    {
        path: "/MenuUsuario",
        name: "MenuUsuario",
        component: MenuUsuario,
    },
    {
        path: "/MenuUsuario/:nombreUsuario",
        name: "MenuUsuario",
        component: MenuUsuario,
        props: true,
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