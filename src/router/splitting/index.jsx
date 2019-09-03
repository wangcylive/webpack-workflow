import React from 'react'
import loadable from '@loadable/component'
import LoadableErrorBoundary from './loadable-error-boundary'
import LoadableLoading from './loadable-loading'

const { createElement } = React

function loadableHoc (loader) {
  return (props) => {
    return createElement(LoadableErrorBoundary,
      props,
      createElement(loadable(loader, {
        fallback: createElement(LoadableLoading)
      }), props)
    )
  }
}

export default loadableHoc
