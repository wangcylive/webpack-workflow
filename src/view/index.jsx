import React from 'react'
import { setConfig } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom'
import ErrorBoundary from '@/view/error-boundary'
import { routes } from '@/router'
import store from '@/store'
import './layout.scss'

setConfig({
  reloadHooks: false
})

function View (props) {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <div className="page">
            <h1 className="page-title">React + React-Redux + React-Router</h1>
            <nav className="page-nav">
              {
                routes.map((route) => <NavLink activeClassName="active" exact={route.exact} to={route.path} key={route.path}>{route.name}</NavLink>)
              }
            </nav>
          </div>
          <div>
            <Switch>
              {
                routes.map((route) => <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>)
              }
            </Switch>
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  )
}

export default hot(View)
