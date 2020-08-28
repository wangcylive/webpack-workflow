import React from 'react'
import { Route, RouteProps, Switch, useRouteMatch } from 'react-router-dom'
import path from 'path'
import LoadableErrorBoundary from '@/router/splitting/loadable-error-boundary'
import useForceUpdate from '@/use-state/use-force-update'

export interface RouteProperty extends RouteProps {
  path: string
  component: any
  name?: string
  childRoutes?: RouteProperty[]
}

interface RouterViewProps {
  routes: RouteProperty[]
  noMatch?: any
  [property: string]: any
}

const RouterView: React.FC<RouterViewProps> = (props) => {
  const match = useRouteMatch()
  const forceUpdate = useForceUpdate()
  const { routes, noMatch, ...rest } = props

  const formatRoutes = routes.map((route) => {
    return {
      ...route,
      path: path.join(match.path ?? '', route.path),
    }
  })

  return (
    <Switch>
      {formatRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            exact={!!route.exact}
            key={route.path}
            render={(routeProps) => (
              <LoadableErrorBoundary onReload={forceUpdate}>
                <route.component {...routeProps} {...rest} route={route} />
              </LoadableErrorBoundary>
            )}
          />
        )
      })}
      {noMatch && <Route component={noMatch} />}
    </Switch>
  )
}

export default RouterView
