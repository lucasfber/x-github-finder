import {
  GET_USER,
  SET_LOADING,
  SEARCH_USERS,
  CLEAR_USERS,
  GET_REPOS
} from "../types.js"

export default (state, action) => {
  switch (action.type) {
    default:
      return state

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      }

    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      }

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }

    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
  }
}
