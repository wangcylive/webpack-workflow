import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import useStores from '@/store/use-stores'
import { useObserver } from 'mobx-react'

const Intro: React.FC<{}> = (props) => {
  const {userStore} = useStores()
  const [ name, setName ] = useState<string>('react')

  const onChangeName = () => {
    setName('React.js')
  }

  console.log('render', performance.now())

  useEffect(() => {
    userStore.updateUser({
      nickName: 'react',
      auth: true,
      role: 2,
      token: '5'
    })
  }, [])

  return useObserver(() =>
    <div>
      <div onClick={onChangeName}>Intro {name}</div>
      <div>Redux name: {userStore.user.nickName}</div>
    </div>
  )
}

export default hot(Intro)