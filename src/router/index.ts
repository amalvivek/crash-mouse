import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { viteEnv } from 'vite-plugin-single-spa/ex'

const basePath = viteEnv.serving
  ? import.meta.env.BASE_URL
  : new URL(import.meta.env.BASE_URL).pathname
const router = (base: string) =>
  createRouter({
    history: createWebHistory(basePath + base),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      }
    ]
  })

export default router
