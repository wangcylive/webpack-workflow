import React from 'react'
import loadable from '@loadable/component'
import LoadableLoading from './loadable-loading'
import LoadableErrorBoundary from './loadable-error-boundary'

const { createElement } = React

function loadableHoc (loader: any) {
  return (props: any) => {
    return createElement(LoadableErrorBoundary,
      props,
      createElement(loadable(loader, {
        fallback: createElement(LoadableLoading)
      }), props)
    )
  }
}

export default loadableHoc
