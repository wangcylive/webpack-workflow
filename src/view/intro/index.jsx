import React, { useState } from 'react'

function Intro (props) {
  const [name, setName] = useState('react')
  const onChangeName = () => {
    setName('React.js')
  }
  return (
    <div onClick={onChangeName}>Intro {name}</div>
  )
}

export default Intro