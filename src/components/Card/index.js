import React, { useState } from 'react'
import Button from '../Button'
import Delete from '../Icons/Delete'
import Edit from '../Icons/Edit'
import styles from './style.module.scss'

export default function Card() {
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
          Title
        </h1>
        <Button>
          <Delete />
        </Button>
      </header>
      <div className={styles.info}>
        <div className={styles.infoArea}>
          <div>
            <h2>Created</h2>
            <p>29.03.21</p>
          </div>
          <div>
            <h2>Last Modify</h2>
            <p>29.03.21</p>
          </div>
          <div>
            <h2>Priority</h2>
            <p>High</p>
          </div>
        </div>
      </div>
      <div className={styles.message}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          scelerisque elit leo, eget rutrum nunc dignissim non. Quisque sit amet
          imperdiet arcu. Nulla id tellus dictum mauris facilisis pulvinar. Ut
          sit amet magna dapibus, vehicula enim et, hendrerit nisl. Donec a orci
          pretium, placerat ante ac, malesuada ante. Fusce condimentum iaculis
          ex ut tincidunt. Quisque lobortis, libero ut bibendum feugiat, tellus
          sapien hendrerit dui, sit amet ultricies orci risus eget dui.
          Curabitur interdum scelerisque fringilla. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Mauris nunc
          ex, iaculis eu justo laoreet, ornare sagittis diam. Quisque volutpat
          eget justo vel consectetur.
        </p>
      </div>
      <div className={styles.action}>
        <Button>
          <Edit />
        </Button>
      </div>
    </div>
  )
}
