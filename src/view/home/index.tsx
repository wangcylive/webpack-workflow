import React from 'react'
import { hot } from 'react-hot-loader/root'
// @ts-ignore
import * as css from './index.module.scss'

function Home (props: any) {
  return (
    <div>
      <div>Home Page</div>
      <div className={css.module}>React</div>
    </div>
  )
}

export default hot(Home)