import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root'
import css from './index.scss?module'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div className={css.module}>Home Page</div>
      </div>
    )
  }
}

export default hot(App)
