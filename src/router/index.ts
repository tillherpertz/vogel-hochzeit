import { createRouter, createWebHashHistory } from 'vue-router'
// import { useStore } from '../utils/store'
import Start from '../views/Start.vue'
import Overview from '../views/Overview.vue'
import Pictures from '../views/Pictures.vue'
import PictureCollection from '@/views/PictureCollection.vue'
import api from '../api/api'

const pictureCollections = await api.getPictureCollections();

const routes = [
    {
        path: '',
        name: 'start',
        component: Start,
    },
    {
        path: '/infos',
        name: 'Infos',
        component: Overview,
        meta: {
            showInMenu: true,
        }
    },
    {
        path: '/fotos',
        name: 'Fotos',
        component: Pictures,
        meta: {
            showInMenu: true,
        }
    }
]

for (const collection of pictureCollections) {
    routes.push({
        path: `/fotos/${collection.name}`,
        name: collection.name,
        //@ts-ignore
        component: PictureCollection,
        props: {
            collection: collection,
        },
    });
}

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
