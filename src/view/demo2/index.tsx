import React, { useEffect, useRef, useState } from 'react'
import { hot } from 'react-hot-loader/root'

const Demo: React.FC<{}> = (props) => {
  const [time, setTime] = useState<number>(1)
  const refTime = useRef<number>(1)
  const refShowText = useRef<HTMLDivElement>(null)
  const refBtn = useRef<HTMLButtonElement>(null)

  const syncTime = (num: number) => {
    refTime.current = num
    setTime(num)
  }

  const onAdd = () => {
    setTime((val) => val + 1)
    // syncTime(refTime.current + 1)
  }

  const onShowTime = () => {
    const text = refShowText.current.innerText
    refShowText.current.innerText = text + `\nReact获取次数 ${time}`
  }

  useEffect(() => {
    const handler = () => {
      const text = refShowText.current.innerText
      refShowText.current.innerText = text + `\nNative获取次数 ${time}`
    }
    refBtn.current.addEventListener('click', handler, false)

    return () => {
      refBtn.current.removeEventListener('click', handler, false)
    }
  }, [])

  return <div>
    <h2>次数：{time}</h2>
    <button onClick={onAdd} className="btn">增加</button>
    <button onClick={onShowTime} className="btn">React获取次数</button>
    <button ref={refBtn} className="btn">Native获取次数</button>
    <div ref={refShowText}/>
  </div>
}

export default hot(Demo)