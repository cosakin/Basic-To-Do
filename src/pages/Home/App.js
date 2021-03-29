import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import List from '../../components/List'
import UtiltyBar from '../../components/Utility'
import Card from '../../components/Card'
import { connect, useDispatch } from 'react-redux'
import { getData } from '../../Redux/Action'

const App = (props) => {
  const dispatch = useDispatch()
  const item = props.filteredPosts
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])
  return (
    <>
      <Layout>
        {props.isLoading ? null : <UtiltyBar />}
        <List>
          {props.isLoading ? (
            <h3 style={{ textAlign: 'center' }}>Loading</h3>
          ) : props.fetchMessage ? (
            <p>{props.fetchMessage}</p>
          ) : (
            [
              item &&
                item.map((item) => (
                  <Card
                    key={item.title}
                    title={item.title}
                    cDate={item.creatingDate}
                    mDate={item.modifiedDate}
                    priority={item.priority}
                    message={item.message}
                  />
                )),
            ]
          )}
        </List>
      </Layout>
    </>
  )
}

const mapState = (state) => {
  return {
    filteredPosts: state.filteredPosts,
    isLoading: state.isLoading,
    errorMessage: state.fetchMessage,
  }
}

export default connect(mapState, { getData })(App)
