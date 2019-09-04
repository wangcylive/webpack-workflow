import React from 'react'
import loadable from '@loadable/component'
import LoadableLoading from './loadable-loading'

const { createElement } = React

function loadableHoc (loader: any) {
  return loadable(loader, {
    fallback: createElement(LoadableLoading)
  })
}

export default loadableHoc
