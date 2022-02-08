import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Navbar from '@/Navbar.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Navbar
  },
  {
    path: '/about',
    name: 'About',
    component: Navbar
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
