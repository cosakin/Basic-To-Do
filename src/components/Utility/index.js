import React, { useEffect } from 'react'
import Button from '../Button'
import Add from '../Icons/Add'
import Search from '../Icons/Search'
import styles from './style.module.scss'
import { useDispatch } from 'react-redux'
import { filterByTitle } from '../../Redux/Action'

function UtiltyBar() {
  const dispatch = useDispatch()
  var input = ''
  const filter = (e) => {
    input = e.target.value
    dispatch(filterByTitle({ value: input }))
  }
  useEffect(() => {
    dispatch(filterByTitle({ value: input }))
    // eslint-disable-next-line
  }, [])
  return (
    <div className={styles.utiltyBar}>
      <div className={styles.search}>
        <input
          className={styles.inputArea}
          placeholder={'Search...'}
          onChange={(e) => {
            filter(e)
          }}
        />
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

export default UtiltyBar
