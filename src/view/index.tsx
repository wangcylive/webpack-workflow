import React from 'react'
import { hot } from 'react-hot-loader/root'
import ErrorBoundary from './error-boundary'
import { Provider } from 'react-redux'
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom'
import { routes } from '@/router'
import store from '../store'
import './layout.scss'

const View: React.FC<{}> = (props) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <div className="page">
            <h1 className="page-title">Typescript + React + React-Redux + React-Router</h1>
            <nav className="page-nav">
              {
                routes.map((route) => <NavLink activeClassName="active" exact={route.exact} to={route.path}
                                               key={route.path}>{route.name}</NavLink>)
              }
            </nav>
          </div>
          <div>
            <Switch>
              {
                routes.map((route) => <Route key={route.path} path={route.path} exact={route.exact}
                                             component={route.component}/>)
              }
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

export default hot(View)
