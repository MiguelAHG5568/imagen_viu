import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import HelpView from '@/views/HelpView.vue'
import ConsulServe from '@/views/ConsulServe.vue'


const routes = [
  {
    path: '/Home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },
  {
    path: '/Consul',
    name: 'Consul',
    component: ConsulServe
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
