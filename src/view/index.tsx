import React from 'react'
import { setConfig } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
import ErrorBoundary from './error-boundary'
import { Provider } from 'react-redux'
import { BrowserRouter, NavLink } from 'react-router-dom'
import RouterView from '@/router/router-view'
import { routes } from '@/router'
import store from '../store'
import './layout.scss'

setConfig({
  reloadHooks: false,
})

const View: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <div className="page">
            <h1 className="page-title">Typescript + React + React-Redux + React-Router</h1>
            <nav className="page-nav">
              {routes.map((route) => (
                <NavLink activeClassName="active" exact={route.exact} to={route.path} key={route.path}>
                  {route.name}
                </NavLink>
              ))}
            </nav>
          </div>
          <div>
            <RouterView routes={routes} />
          </div>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

export default hot(View)
