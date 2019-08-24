// @ts-ignore
import Loadable from 'react-loadable'
import Loading from './loading'

export default (loader: any) => Loadable({
  loader,
  loading: Loading,
  timeout: 10000,
  delay: 200
})
