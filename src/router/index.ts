import splitting from './splitting'

const Home = splitting(() => import('@/view/home'))
const Intro = splitting(() => import('@/view/intro'))
const Demo1 = splitting(() => import('@/view/demo1'))
const Demo2 = splitting(() => import('@/view/demo2'))

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
  },
  {
    path: '/demo1',
    component: Demo1,
    name: 'demo1'
  },
  {
    path: '/demo2',
    component: Demo2,
    name: 'demo2'
  }
]