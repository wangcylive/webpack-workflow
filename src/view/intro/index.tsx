import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { useSelector, useDispatch } from 'react-redux'
import { Store } from '@/store'
import { updateUser } from '@/store/user/actions'

const Intro: React.FC<{}> = (props) => {
  const [name, setName] = useState('react')
  const storeName = useSelector((state: Store) => state.user.nickName)
  const dispatch = useDispatch()
  const onChangeName = (): void => {
    setName('React.js')
  }

  useEffect(() => {
    dispatch(updateUser({
      nickName: 'react',
      auth: true,
      role: 2,
      token: '5'
    }))
  }, [])

  return (
    <div>
      <div onClick={onChangeName}>Intro {name}</div>
      <div>Redux name: {storeName}</div>
    </div>
  )
}

export default hot(Intro)
