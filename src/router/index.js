import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import MiPerfil from '../views/MiPerfil.vue'
import MiPerfiles from '../views/MiPerfiles.vue'
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/MiPerfil',
        name: 'MiPerfil',
        component: MiPerfil
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },

    {
        path: '/MiPerfiles',
        name: 'MiPerfiles',
        component: MiPerfiles
    }




]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router