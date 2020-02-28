import React from 'react'
import { hot } from 'react-hot-loader/root'
import css from './index.module.scss'

export interface Props {
  name: string
  size: number
}

const Home: React.FC<Props> = props => {
  const name = 'sss'

  return (
    <div>
      <div>Home Page</div>
      <div
        className={css.module}
        onChange={() => console.log(33)}
        onClick={() => '33'}
        onMouseLeave={() => 'event'}
      >
        React
      </div>
    </div>
  )
}

export default hot(Home)
