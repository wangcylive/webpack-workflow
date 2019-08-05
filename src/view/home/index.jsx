import React, { Component } from 'react'
import css from './index.scss?module'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div>Home</div>
        <div className={css.module}>React</div>
      </div>
    )
  }
}

export default App