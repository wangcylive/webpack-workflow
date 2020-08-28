import React, { ErrorInfo } from 'react'

interface Props {
  children?: React.ReactNode
}
interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo)
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return <div>Render Error.</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary
