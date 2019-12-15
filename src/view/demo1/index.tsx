import React, { useEffect, useRef, useState } from 'react'
import { hot } from 'react-hot-loader/root'

const Demo: React.FC<{}> = (props) => {
  const [time, setTime] = useState<number>(1)
  const refId = useRef<number>(null)

  const timer = () => {
    refId.current = window.setTimeout(() => {
      setTime((val) => val + 1)

      timer()
    }, 1000)
  }

  const onStart = () => {
    onStop()
    timer()
  }

  const onStop = () => {
    window.clearTimeout(refId.current)
  }

  useEffect(() => {
    timer()

    return () => {
      window.clearTimeout(refId.current)
    }
  }, [])

  return <div>
    <h2>次数：{time}</h2>
    <button onClick={onStart} className="btn">开始</button>
    <button onClick={onStop} className="btn">暂停</button>
  </div>
}

export default hot(Demo)