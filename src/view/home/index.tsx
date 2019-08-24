import React from 'react'
// @ts-ignore
import * as css from './index.module.scss'

function Home (props: any) {
  return (
    <div>
      <div>Home</div>
      <div className={css.module}>React</div>
    </div>
  )
}

export default Home