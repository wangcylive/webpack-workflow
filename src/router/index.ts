import splitting from './splitting'

const Home = splitting(() => import('@/view/home'))
const Intro = splitting(() => import('@/view/intro'))

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
