import React from 'react'
import styles from './style.module.scss'

export default function UtiltyBar() {
  return (
    <div className={styles.utiltyBar}>
      <div className={styles.search}>
        <input />
        <button>Search</button>
      </div>
    </div>
  )
}
