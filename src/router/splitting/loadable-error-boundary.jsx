import React from 'react'
import css from './index.scss?module'

class LoadableErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errorStatus: 0
    }
  }

  reload = () => {
    this.setState({
      errorStatus: 0
    })
  }

  static getDerivedStateFromError (error) {
    let errorStatus = 1
    if (error && error.request) {
      errorStatus = 2
    }
    return { errorStatus }
  }

  componentDidCatch (error, errorInfo) {
    // TODO 错误统计
    console.log(error, errorInfo)
  }

  render () {
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
