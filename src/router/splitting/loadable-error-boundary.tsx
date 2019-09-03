import React from 'react'
// @ts-ignore
import css from './index.module.scss'

interface State {
  errorStatus: number
}

class LoadableErrorBoundary extends React.Component<any, State> {
  constructor (props: any) {
    super(props)
    this.state = {
      errorStatus: 0
    }
  }

  public reload = () => {
    this.setState({
      errorStatus: 0
    })
  }

  public static getDerivedStateFromError (error: any) {
    let errorStatus = 1
    if (error && error.request) {
      errorStatus = 2
    }
    return { errorStatus }
  }

  public componentDidCatch (error: any, errorInfo: any) {
    console.log(error, errorInfo)
  }

  public render () {
    const errorStatus = this.state.errorStatus
    if (errorStatus === 2) {
      return <div className={css.loadFail}>页面加载错误
        <button className={css.btnReload} onClick={this.reload}>点击重新加载</button>
      </div>
    }
    if (errorStatus === 1) {
      return <div className={css.loadFail}>Render Error.</div>
    }
    return this.props.children
  }
}

export default LoadableErrorBoundary
