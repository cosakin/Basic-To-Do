import React from 'react'
import styles from './style.module.scss'

export default function Button({ children, ...props }) {
  return (
    <>
      <button {...props} className={styles.btn} type="button">
        {children}
      </button>
    </>
  )
}
