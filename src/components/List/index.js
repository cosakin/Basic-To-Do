import React from 'react'
import styles from './style.module.scss'

export default function List({ children }) {
  return <div className={styles.list}>{children}</div>
}
