import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './style.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <section className={styles.container}>{children}</section>
      </main>
      <Footer />
    </>
  )
}
