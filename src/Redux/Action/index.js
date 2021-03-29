import axios from 'axios'
import * as types from '../Types/index'

export const getData = () => (dispatch) => {
  dispatch({ type: types.FETCH_BEGIN })
  axios
    .get('/data.json')
    .then((response) =>
      dispatch(
        { type: types.FETCH_SUCCESS, payload: response.data },
        console.log(response.data)
      )
    )
    .catch((error) =>
      dispatch({ type: types.FETCH_ERROR, payload: error.message })
    )
}

export const filterByTitle = (payload) => (dispatch) => {
  if (payload.value.length === 0) {
    dispatch({ type: types.FILTER_SET, payload })
  } else if (payload.value.length >= 3) {
    dispatch({ type: types.FILTER, payload })
  }
}
