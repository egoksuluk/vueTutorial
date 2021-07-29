import { createApp } from 'vue'
import App from './App.vue'
import appHeader from '@/components/appShared/appHeader'
import router from './router'
import store from './store'
import axios from 'axios'

const app = createApp(App)

app.use(router)
app.use(store)
app.config.globalProperties.$axios = axios
app.component("appHeader",appHeader)
app.mount('#app')
