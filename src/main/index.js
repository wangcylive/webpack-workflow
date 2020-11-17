import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import View from '@/view'

const app = createApp(View).use(router).use(store).mount('#app')
