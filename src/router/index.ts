import splitting from './splitting'
import { RouteProperty } from '@/router/router-view'

const Home = splitting(() => import('@/view/home'))
const Intro = splitting(() => import('@/view/intro'))
const About = splitting(() => import('@/view/intro/about'))

export const routes: RouteProperty[] = [
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
    childRoutes: [
      {
        path: '/about',
        component: About,
        name: 'About',
      },
    ],
  },
]
