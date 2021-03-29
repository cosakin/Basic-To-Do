import React from 'react'
import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>To Do App</h1>
      </div>
    </header>
  )
}
