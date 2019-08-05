import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Intro (props) {
  const [name, setName] = useState('react')
  const storeName = useSelector()
  const onChangeName = () => {
    setName('React.js')
  }
  return (
    <div onClick={onChangeName}>Intro {name}</div>
  )
}

export default Intro