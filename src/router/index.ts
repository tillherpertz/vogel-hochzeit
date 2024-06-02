import { createRouter, createWebHashHistory } from 'vue-router'
// import { useStore } from '../utils/store'
import Start from '../views/Start.vue'
import Overview from '../views/Overview.vue'
import Pictures from '../views/Pictures.vue'

const routes = [
    {
        path: '',
        name: 'start',
        component: Start,
    },
    {
        path: '/overview',
        name: 'overview',
        component: Overview,
    },
    {
        path: '/fotos',
        name: 'fotos',
        component: Pictures,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
