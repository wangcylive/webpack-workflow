import React from 'react'
// @ts-ignore
import styles from './index.module.scss'

const LoadableLoading: React.FC<{}> = (props) => {
  return <div className={styles.loading}>加载中...</div>
}

export default LoadableLoading
