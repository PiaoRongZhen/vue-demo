import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './views/login/index.vue'
import Home from './views/home/index.vue'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login', component: Login
        },
        {
            path: '/home', component: Home
        },
    ],
})
