import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/view/home')
const Intro = () => import('@/view/intro')

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'Home'
  },
  {
    path: '/intro',
    component: Intro,
    name: 'Intro'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router