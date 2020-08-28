import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Store } from '@/store'
import { updateUser } from '@/store/user/actions'
import RouterView, { RouteProperty } from '@/router/router-view'

interface Props {
  route: RouteProperty
}

const Intro: React.FC<Props> = (props) => {
  const [name, setName] = useState('react')
  const storeName = useSelector((state: Store) => state.user.nickName)
  const dispatch = useDispatch()
  const onChangeName = (): void => {
    setName('React.js')
  }

  useEffect(() => {
    dispatch(
      updateUser({
        nickName: 'react',
        auth: true,
        role: 2,
        token: '5',
      })
    )
  }, [dispatch])

  return (
    <div>
      <div onClick={onChangeName}>Intro {name}</div>
      <div>Redux name: {storeName}</div>

      <div>
        <p>子路由</p>
        <Link to={'/intro/about'}>About</Link>
        <RouterView routes={props.route.childRoutes} />
      </div>
    </div>
  )
}

export default hot(Intro)
