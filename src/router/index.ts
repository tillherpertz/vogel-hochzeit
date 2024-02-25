import { createRouter, createWebHashHistory } from 'vue-router'
// import { useStore } from '../utils/store'
import Start from '../views/Start.vue'
import Overview from '../views/Overview.vue'

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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
