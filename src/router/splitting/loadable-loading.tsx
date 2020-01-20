import React from 'react'
import styles from './index.module.scss'

const LoadableLoading: React.FC<{}> = () => {
  return <div className={styles.loading}>加载中...</div>
}

export default LoadableLoading
