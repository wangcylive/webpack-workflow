import React from 'react'
import styles from './index.scss?module'

export default function (props) {
  if (props.error) {
    return <div className={styles.loadFail}>加载失败，点击重新加载 <button onClick={props.retry}>重新加载</button></div>
  } else if (props.timedOut) {
    return <div className={styles.loadFail}>记载超时，点击重新加载 <button onClick={props.retry}>重新加载</button></div>
  } else {
    return <div className={styles.loading}>加载中...</div>
  }
}
