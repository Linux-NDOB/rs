import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pie from '@/components/Pie.vue'
import Dulces from '@/components/Dulces.vue'
import Registro from '@/components/Registro.vue'
import Carrito from '@/components/Carrito.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pie',
    name: 'pie',
    component: Pie
  },
  {
    path: '/dulces',
    name: 'dulces',
    component: Dulces
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: Carrito
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
