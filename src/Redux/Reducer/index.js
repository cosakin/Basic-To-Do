import * as types from '../Types'
import { initialState } from '../Store/initState'

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BEGIN:
      return {
        ...state,
        isLoading: true,
        fetchMessage: '',
      }

    case types.FETCH_SUCCESS:
      const data = Object.assign([], action.payload)
      return {
        ...state,
        ToDoItem: data,
        isLoading: false,
        fetchMessage: '',
      }
    case types.FETCH_ERROR:
      return {
        ...state,
        ToDoItem: [],
        filteredPosts: [],
        isLoading: false,
        fetchMessage: action.payload,
      }

    case types.FILTER_SET:
      return {
        ...state,
        filteredPosts: state.ToDoItem,
      }
    case types.FILTER:
      let value = action.payload.value.toLowerCase()
      let filteredValues = state.ToDoItem.filter((item) => {
        return item.title.toLowerCase().includes(value)
      })
      return {
        ...state,
        filteredPosts: filteredValues,
      }
    default:
      return {
        ...state,
        filteredPosts: state.ToDoItem,
      }
  }
}

export default Reducer
