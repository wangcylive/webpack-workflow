import React from 'react'

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<any, State> {
  constructor (props: any) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  public static getDerivedStateFromError (error: any) {
    return { hasError: true }
  }

  public componentDidCatch (error: any, errorInfo: any) {
    console.log(error, errorInfo)
  }

  public render () {
    if (this.state.hasError) {
      return <div>Render Error.</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary