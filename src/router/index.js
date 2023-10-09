import { createRouter, createWebHistory } from 'vue-router'
import HomePageVue from '../components/HomePage.vue'
import LoginPageVue from '../components/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'login',
      component: LoginPageVue
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/alugar',
      name: 'alugar',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/alugado',
      name: 'alugado',
      component: () => import('../views/AlugadoView.vue')
    }
  ]
})

export default router
