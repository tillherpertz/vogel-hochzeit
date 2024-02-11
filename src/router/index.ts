import { createRouter, createWebHistory } from 'vue-router'
// import { useStore } from '../utils/store'
import Start from '../views/Start.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'start',
            component: Start,
        },
    ]
})

export default router
