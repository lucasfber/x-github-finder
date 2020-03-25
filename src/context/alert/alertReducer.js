import { SET_ALERT, REMOVE_ALERT } from "../types"

export default (state, action) => {
  switch (action.type) {
    default:
      return state

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
