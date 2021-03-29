import React, { useState } from 'react'
import Button from '../Button'
import Delete from '../Icons/Delete'
import Edit from '../Icons/Edit'
import styles from './style.module.scss'

export default function Card({ title, cDate, mDate, priority, message }) {
  const [isSelected, setSelect] = useState(false)

  function handleClick(e) {
    e.preventDefault()
    setSelect(!isSelected)
  }

  return (
    <div className={styles.item} onClick={handleClick}>
      <header
        className={
          isSelected === false ? styles.itemHeader : styles.itemHeaderfocus
        }
      >
        <h1 className={isSelected === false ? styles.title : styles.titlefocus}>
          {title}
        </h1>
        <Button>
          <Delete />
        </Button>
      </header>
      <div className={styles.info}>
        <div className={styles.infoArea}>
          <div>
            <h2>Created</h2>
            <p>{cDate}</p>
          </div>
          <div>
            <h2>Last Modify</h2>
            <p>{mDate}</p>
          </div>
          <div>
            <h2>Priority</h2>
            <p>{priority}</p>
          </div>
        </div>
      </div>
      <div className={styles.message}>
        <p>{message}</p>
      </div>
      <div className={styles.action}>
        <Button>
          <Edit />
        </Button>
      </div>
    </div>
  )
}
