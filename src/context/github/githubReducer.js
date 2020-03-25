import {
  GET_USER,
  SET_LOADING,
  SEARCH_USERS,
  CLEAR_USERS,
  GET_REPOS,
  SET_ALERT,
  REMOVE_ALERT
} from "../types.js"

export default (state, action) => {
  switch (action.type) {
    default:
      return state

    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }

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

    case SET_ALERT:
      return {
        ...state,
        alert: {
          type: action.payload.type,
          message: action.payload.message
        }
      }

    case REMOVE_ALERT:
      return {
        ...state,
        alert: null
      }
  }
}
