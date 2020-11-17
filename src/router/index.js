import { createRouter, createWebHistory } from 'vue-router'


const Home = () => import('@/view/home')
const Intro = () => import('@/view/intro')

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'Home',
  },
  {
    path: '/intro',
    component: Intro,
    name: 'Intro',
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
