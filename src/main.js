import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/layouts/index.scss'
import store from './store'
import FlagIcon from 'vue-flag-icon'
import {i18n} from "@/plugins/i18n"
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCwO0p3jukUAMnjtZChP4CRHgr-s_ozFyo',
    },
})
    app.use(FlagIcon)
    app.use(store)
    app.use(router)
    app.use(i18n)
    app.mount('#app')

