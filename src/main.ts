import './styles/all.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router'

import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(VueViewer)

app.mount('#app')
