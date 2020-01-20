import React from 'react'
import css from './index.module.scss'

interface Props {
  children?: React.ReactNode;
}
interface State {
  errorStatus: number;
}

class LoadableErrorBoundary extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      errorStatus: 0
    }
  }

  public reload = (): void => {
    this.setState({
      errorStatus: 0
    })
  }

  public static getDerivedStateFromError (error: any): State {
    let errorStatus = 1
    if (error && error.request) {
      errorStatus = 2
    }
    return { errorStatus }
  }

  public componentDidCatch (error: any, errorInfo: any): void {
    console.log(error, errorInfo)
  }

  public render (): React.ReactNode {
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
