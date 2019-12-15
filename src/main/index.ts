import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import { hot } from 'react-hot-loader/root'
import ReactDOM from 'react-dom'
import View from '@/view'
import store from '@/store'
import { Provider } from 'mobx-react'
const el = document.getElementById('app')

const render = () => {
  ReactDOM.render(
    React.createElement(hot(Provider), {...store}, React.createElement(View)),
    el
  )
}

render()

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('@/store', () => {
    ReactDOM.unmountComponentAtNode(el)

    render()
  })
}