import { createApp } from 'vue'
import Navbar from './Navbar.vue'
import router from './router'
import store from './store'

createApp(Navbar).use(store).use(router).mount('#app')
