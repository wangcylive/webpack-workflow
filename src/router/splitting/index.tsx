import React from 'react'
import loadable, {
  DefaultComponent,
  LoadableComponent,
} from '@loadable/component'
import LoadableLoading from './loadable-loading'

const { createElement } = React

function loadableHoc(
  loader: () => Promise<DefaultComponent<React.ReactNode>>
): LoadableComponent<React.ReactNode> {
  return loadable(loader, {
    fallback: createElement(LoadableLoading),
  })
}

export default loadableHoc
