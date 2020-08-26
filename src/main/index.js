import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import View from '@/view'

const app = new Vue({
  el: document.getElementById('app'),
  store,
  router,
  render: (h) => h(View),
})
