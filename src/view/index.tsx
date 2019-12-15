import React from 'react'
import { hot } from 'react-hot-loader/root'
import ErrorBoundary from './error-boundary'
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom'
import { routes } from '@/router'
import { useObserver } from 'mobx-react'
import './layout.scss'

const View: React.FC<{}> = (props) => {
  return <ErrorBoundary>
    <BrowserRouter>
      <div className="page">
        <h1 className="page-title">Typescript + React + Mobx + React-Router</h1>
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
  </ErrorBoundary>
}

export default hot(View)
