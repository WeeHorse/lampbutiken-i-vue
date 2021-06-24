import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/pages/Home.vue'
import Produkt from '/src/pages/Produkt.vue'
import Bestall from '/src/pages/Bestall.vue'
import Kategori from '/src/pages/Kategori.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/produkt/:id',
        name: 'Produkt',
        component: Produkt,
    },
    {
        path: '/bestall',
        alias: '/tack',
        name: 'Bestall',
        component: Bestall,
    },
    {
        path: '/kategori/:namn',
        name: 'Kategori',
        component: Kategori,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router