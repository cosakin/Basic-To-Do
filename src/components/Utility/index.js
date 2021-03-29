import React from 'react'
import Button from '../Button'
import Add from '../Icons/Add'
import Search from '../Icons/Search'
import styles from './style.module.scss'

export default function UtiltyBar() {
  return (
    <div className={styles.utiltyBar}>
      <div className={styles.search}>
        <input className={styles.inputArea} placeholder={'Search...'} />
        <Button>
          <Search />
        </Button>
      </div>
      <div>
        <Button>
          <Add />
        </Button>
      </div>
    </div>
  )
}
