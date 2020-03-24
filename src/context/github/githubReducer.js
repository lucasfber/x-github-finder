import { SET_LOADING, SEARCH_USERS } from "../types.js"

export default (state, action) => {
  switch (action.type) {
    default:
      return state

    case SET_LOADING:
      return {
        loading: true
      }

    case SEARCH_USERS:
      return {
        users: action.payload,
        loading: false
      }
  }
}
