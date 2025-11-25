import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import gsap from './plugins/gsap'

const app = createApp(App)
app.config.globalProperties.$gsap = gsap
app.use(router)

app.mount('#app')
