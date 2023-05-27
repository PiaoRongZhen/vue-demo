import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/login/index.vue'
import Home from './views/home/index.vue'
import Table from './views/home/table/index.vue'

export const routerHistory = createWebHistory()
export const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'table',
                    component: Table,
                }
            ]
        },
    ],
})
